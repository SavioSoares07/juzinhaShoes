import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "styled-components";
import Colors from "./styles/themes.js";
import { Home } from "./Pages/Home/index.jsx";
import { Buy } from "./Pages/Buy/index.jsx";
import GlobalStyle from "./styles/globalStyle.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Colors}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
