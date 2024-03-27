import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ThemeModeButton from "./components/buttons/ThemeModeButton";
import CardPage from "./pages/CardPage";
import ListPage from "./pages/ListPage";
import Main from "./pages/Main";

import NotFound from "./pages/NotFound";
import { lightTheme, darkTheme } from "./style/darkStyle";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  const localThemeMode = localStorage.getItem("theme") || "lightTheme";
  const [themeMode, setThemeMode] = useState(localThemeMode);

  const toggleTheme = () => {
    const newThemeMode = themeMode === "lightTheme" ? "darkTheme" : "lightTheme";
    setThemeMode(newThemeMode);
    localStorage.setItem("theme", newThemeMode);
  };

  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/post">
              <Route path=":id" element={<CardPage />} />
              <Route path=":id/answer" element={<CardPage />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ThemeModeButton themeMode={themeMode} toggleTheme={toggleTheme}></ThemeModeButton>
      </ThemeProvider>
      <ReactQueryDevtools />
    </>
  );
}

export default App;
