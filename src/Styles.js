import {makeStyles} from "tss-react/mui";
import {keyframes} from "@mui/material";

// const shine = keyframes`
//     0% {
//       background-position: -500%;
//     }
//     100% {
//       background-position: 500%;
//     }
// `;


const useStyles = makeStyles()((theme) => {
  return {
    body: {
      backgroundColor: "#111111",
      height: "100vh",
      fontFamily: "hind",
    },
    portAppBar: {
      backgroundColor: "transparent",
      alignItems: "flex-end",
      boxShadow: "none",
    },
     heroTxt: {
        color: "#dcd7d7",
        position: "relative",
        top: "200px",
        width: "50%",
        '@media (max-width: 780px)': {
          top: "150px",
          width: "80%",
          left: "10%",
          margin: "0",
        },
        '@media (max-width: 600px)': {
          top: "180px",
          left: "10%",
          width: "80%",
        },
        left: "30%",
        display: "flex",
        padding: "16px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        fontWeight: 500,
        // textAlign: "center",
        // textTransform: "uppercase",
        // letterSpacing: "5px",
        // WebkitTextFillColor: "transparent",
        // WebkitBackgroundClip: "text",
        // WebkitTextFillColor: "transparent",
        // color: "transparent",
        // backgroundClip: "text",
        // backgroundImage: '-webkit-linear-gradient(180deg, #000, #fff, #000)',
        // backgroundSize: "60%",
        // backgroundRepeat: "no-repeat",
        // animation: `${shine} 5s linear infinite alternate`,
      },
      heroTxtSub: {
        '@media (max-width: 780px)': {
          top: "180px",
          width: "30%",
        },
        '@media (max-width: 600px)': {
          top: "200px",
          width: "100%",
          left: "4px",
        },
        color: "#9c9c9c",
        position: 'relative',
        top: 100,
        left: "70px",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: 300,
      },
    lamp: {
      position: "absolute",
      top: 0,
      width: 150,
      left: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
    },
    themeIcons: {
      margin: theme.spacing(1),
    },
    listItem: {
      textDecoration: "none",
      color: "#111111",
      fontSize: "18px",
    },
    drawerItems: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    },
    drawerHeader: {
      padding: "16px",
    },
    behanceIcon: {
      width: "25px",
      height: "25px",
    },
    phoneNum: {
      textDecoration: "none",
      color: "inherit",
    },
  };
});

export default useStyles;
