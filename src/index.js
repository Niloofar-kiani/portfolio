import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";


//imports
import App from "./App";
import { ThemeProvider } from "react-jss";
import {themeX} from "./assets/styles/theme"


const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(
<BrowserRouter>
<ThemeProvider theme={themeX}>
  <App />
</ThemeProvider>
  </BrowserRouter>
 ); 

