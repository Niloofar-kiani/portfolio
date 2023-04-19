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



const App = () => {
  const {classes} = useStyles();
  return (
      <div className={classes.body}>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
  );
};

export default App;
