const express = require("express");
const cors = require("cors");
const fs = require("fs");
const getLLMResponse = require("./llm");

const app = express();
app.use(cors());
app.use(express.json());

const businesses = JSON.parse(fs.readFileSync("./businesses.json", "utf-8"));

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("Incoming message:", message);

    const reply = await getLLMResponse(message, businesses);
    console.log("Reply:", reply);

    res.json({ reply });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => {
  console.log("AI backend running on http://localhost:5000");
});
