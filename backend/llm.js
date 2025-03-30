const axios = require("axios");
require("dotenv").config();

async function getLLMResponse(userMessage, businesses) {
  const businessData = JSON.stringify(businesses, null, 2);

  const systemPrompt = `
You are a business directory assistant. and provide a well structured reply

❗️Only use the business data provided below to answer.
❌ If the user asks ANYTHING unrelated, respond strictly with:
"I'm sorry, I can only answer questions related to the listed businesses."

Do not attempt to answer general knowledge questions or guess.
Do not say "but I can tell you..." or offer external information.

Only respond with actual data found in the list.
`;

  const userPrompt = `
Business Data:
${businessData}

User Question: ${userMessage}
`;

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0,
      max_tokens: 500,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  const reply = response.data.choices[0].message.content.trim();

  // Optional: catch common hallucination examples
  if (
    reply.toLowerCase().includes("capital of india") ||
    reply.toLowerCase().includes("new delhi")
  ) {
    return "I'm sorry, I can only answer questions related to the listed businesses.";
  }

  return reply;
}

module.exports = getLLMResponse;
