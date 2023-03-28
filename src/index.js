import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FirebaseAnalytics } from "./Config/analytics.util";
import { ThemeContextProvider } from "./Contexts/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (!localStorage.getItem("isDark")) {
  localStorage.setItem("isDark", false);
}

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <FirebaseAnalytics />
        <ToastContainer />
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);
reportWebVitals();
