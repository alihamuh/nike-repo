import React from "react";
import "./App.css";
import { ThemeProvider } from "emotion-theming";
import theme from "./Theme";
import MainPage from "./MainPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
