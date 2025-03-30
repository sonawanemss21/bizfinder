import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Paper,
  TextField,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../ui/CustomButton";
import { useTheme } from "@mui/material/styles";

export default function ChatWindow({ open, onClose }) {
  const theme = useTheme();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm your AI assistant. How can I help you today? Try 'Help me find highest rated business in IT and provide me details'",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);
    setUserInput("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.log("err : ", error);

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "⚠️ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <Paper
      elevation={12}
      sx={{
        position: "fixed",
        bottom: 90,
        right: 40,
        width: 450,
        height: 600,
        borderRadius: 3,
        background: theme.palette.secondary.main,
        backdropFilter: "blur(12px)",
        color: theme.palette.primary.main,
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          backgroundColor: theme.palette.secondary.main,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      >
        <Typography fontWeight="bold">AI Chatbot</Typography>
        <IconButton
          onClick={onClose}
          sx={{ color: theme.palette.primary.main }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Chat Body */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: "auto",
          fontSize: "0.9rem",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          // Scrollbar styling
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#1662aa", // Dark Blue
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#FAF0CA", // Light background to contrast
          },
        }}
      >
        {messages.map((msg, idx) => (
          <Typography
            key={idx}
            align={msg.role === "user" ? "right" : "left"}
            sx={{
              backgroundColor:
                msg.role === "user"
                  ? theme.palette.primary.default
                  : `${theme.palette.primary.main}33`,
              color:
                msg.role === "user"
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main,
              borderRadius: 2,
              px: 2,
              py: 1,
              maxWidth: "80%",
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            {msg.content}
          </Typography>
        ))}
        {loading && (
          <CircularProgress size={24} sx={{ alignSelf: "center", mt: 1 }} />
        )}
      </Box>

      {/* Chat Input */}
      <Box
        sx={{
          p: 2,
          borderTop: `1px solid ${theme.palette.background.light}33`,
          display: "flex",
          gap: 1,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1,
            input: { color: theme.palette.secondary.main },
          }}
        />
        <CustomButton onClick={handleSend} disabled={loading}>
          Send
        </CustomButton>
      </Box>
    </Paper>
  );
}
