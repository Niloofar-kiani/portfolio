import React, {useState} from "react";
import {Routes, Route, Outlet} from "react-router-dom";

//component imports
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

//assets
import useStyles from "./assets/styles/styles";
import {ThemeProvider} from "@mui/material/styles";
import {lightTheme, darkTheme} from "./assets/styles/theme";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const {classes} = useStyles();
  return (
    <ThemeProvider theme= {isDarkMode ? darkTheme : lightTheme}>
      <div className={classes.divMain}>
        <Header  handleThemeChange={handleThemeChange} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home isDarkMode={isDarkMode}/>} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
