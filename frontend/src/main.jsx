import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PcontextProvider from "../context/Pcontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PcontextProvider>
      <App />
    </PcontextProvider>
  </BrowserRouter>
);
