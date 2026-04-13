import React from "react";
import ReactDOM from "react-dom/client";
import emailjs from "@emailjs/browser";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

emailjs.init({
  publicKey: emailJsPublicKey,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
