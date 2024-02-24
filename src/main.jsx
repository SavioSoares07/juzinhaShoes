import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Colors from "./styles/themes.js";
import { Home } from "./Pages/Home/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Colors}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
