import React,{useState} from "react";
import Header from "./components/Header";
import {Routes, Route, Outlet} from "react-router-dom"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import useStyles from "./Styles";
import { createTheme, ThemeProvider } from "@mui/material";
// import { ThemeProvider } from "react-jss";

const App = () => {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }

  })
  const { classes } = useStyles();
  return( 
    <ThemeProvider theme={darkTheme}>
      <div className={classes.body}>
    <Header/>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </div>
    </ThemeProvider>
)};

export default App;
