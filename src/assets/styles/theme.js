import { createTheme } from "@mui/material/styles";

//grey :"#9c9c9c"
//green :"#d3f513"
//black: "#111"
//white: "#dcd7d7"


const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#111",
    },
    secondary: {
      main: "#dcd7d7",
    },
    background: {
      default: "#fff",
      mobile: "#9c9c9c",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#9c9c9c",
      mobile: "#9c9c9c",
    },
  },
});

export { lightTheme, darkTheme };

