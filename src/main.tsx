import React from "react";
import ReactDOM from "react-dom/client";
import Framework7 from "framework7/lite/bundle";
import Framework7React from "framework7-react";
import "framework7/css/bundle";
import "./index.css";
import App from "./components/App.tsx";

Framework7.use(Framework7React);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
