import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import Colors from "./styles/themes.js";
import { Home } from "./Pages/Home/index.jsx";
import GlobalStyle from "./styles/globalStyle.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Colors}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
