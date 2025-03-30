import { useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./theme/theme";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StartPage from "./components/start/StartPage";
import HomePage from "./components/home/HomePage";
import BusinessDetailPage from "./components/business/BusinessDetailPage";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Navigate to="/business-directory" />} />
        <Route path="/business-directory" element={<StartPage />} />
        <Route path="/business-directory/home" element={<HomePage />} />
        <Route path="/business/:id" element={<BusinessDetailPage />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={4000} />
    </ThemeProvider>
  );
}

export default App;
