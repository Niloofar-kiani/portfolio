//import { createTheme } from "@mui/material/styles";
import {amber, grey} from '@mui/material/colors';
//grey :"#9c9c9c"
//green :"#d3f513"
//black: "#111"
//white: "#dcd7d7"



export const themeColors = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          common: {
            black: "#111",
            white: "#fff"
          },
          primary: {
           light:amber[400],
            main: "#fff",
            dark: amber[400],
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
          text: {
            primary: "#111",
            secondary: grey[900],
            main: '#fff',
          },
          grey: {
            50: "#fafafa",
            900: "#212121"
          },
          background:{
            default: "#111",
            paper: "#fff",
            main: "#fff"
          },
        }
      : {
          // palette values for dark mode
          common: {
            black: "#fff",
            white: "#111",
          },
          primary: {
            light: "#9c9c9c",
            main: "#111",
            dark: "#d3f513",
          },
          background: {
            default: "#fff",
            paper: "#111",
            main: "#111"
          },
          grey: {
            50: "#fafafa",
            900: "#212121"
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
            main: '#111',
          },
        }),
  },
});












// const lightTheme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: "#111",
//     },
//     secondary: {
//       main: "#dcd7d7",
//     },
//     background: {
//       default: "#111",
//       paper: "white",
//     },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#fff",
//     },
//     secondary: {
//       main: "#fff",
//     },
//     background: {
//       default: "#9c9c9c",
//       paper: "black",
//     },
//   },
// });

// export { lightTheme, darkTheme };

