import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ColorList from "./components/ColorList";
// Ahora:
import { createRoot } from "react-dom/client";


const App = () => (
  <div className="container">
    <ColorList lista={[]} />
    <ColorList lista={["#0fcc7a", "#c90fcc"]} />
  </div>
);
// Usar createRoot en lugar de ReactDOM.render
const container = document.getElementById("app");

if (!container) {
  throw new Error("No se encontró el elemento con id 'app'");
}

const root = createRoot(container);
root.render(<App />);
