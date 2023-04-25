import React, {useMemo} from "react";
import {useSelector} from 'react-redux';
import {Routes, Route, Outlet} from "react-router-dom";

//component imports
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

//assets
import useStyles from "./assets/styles/styles";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import {themeColors} from "./assets/styles/theme";

const App = () => {
  const {mode} = useSelector(state => state.mode)
  const theme = useMemo(()=>createTheme(themeColors(mode)),[mode])
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const handleThemeChange = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  const {classes} = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.divMain}>
        <Header/>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home/>} />
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
