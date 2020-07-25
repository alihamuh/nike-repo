import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "emotion-theming";
import theme from "./Theme";
import MainPage from "./MainPage";
import Components from "./Components";
function App() {
  const [mainPage, setMainPage] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      {mainPage ? (
        <MainPage />
      ) : (
        <Components.SignUp
          loggedIn={(e) => {
            setMainPage(e);
          }}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
