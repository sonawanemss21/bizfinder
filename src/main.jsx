import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { BusinessProvider } from "./store/BusinessContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BusinessProvider>
        <App />
      </BusinessProvider>
    </BrowserRouter>
  </StrictMode>
);
