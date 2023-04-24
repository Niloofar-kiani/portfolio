import {makeStyles} from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    divMain: {
      backgroundColor: "#111",
      height: "85vh",
      fontFamily: "hind",
      margin: 50,
      borderRadius: 12,
      color: "#fff",
      "@media (max-width: 1170px)": {
        height: "100vh",
        margin: 0,
        borderRadius: 0,
      },
    },
    toolbar: {
      color: "#111",
      "@media (max-width: 11700px)": {
        color: "#dcd7d7",
      },
    },
    portAppBar: {
      backgroundColor: "transparent",
      alignItems: "flex-end",
      boxShadow: "none",
    },
    iconBtn: {
      color: "#111",
      backgroundColor: "#d3f513",
      width: 30,
      height: 30,
      margin: 3,
    },
    menuIconBtn: {
      "@media (max-width: 1170px)": {
        "&:hover": {
          backgroundColor: "#9c9c9c",
        },
      },
    },
    menuIcon: {
      height: 12,
      width: 20,
    },

    home: {
      position: "relative",
      height: "100%",
      marginTop: -120,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lamp: {
      width: 100,
      marginTop: 10,
      "@media (max-width: 1170px)": {
        marginTop: 75,
        width: 80,
      },
    },
    heroSection: {
      marginTop: "20px",
      maxHeight: 300,
      display: "flex",
      justifyContent: "center",
      width: 500,
      "@media (max-width: 730px)": {
        width: 320,
      },
    },
    heroTxt: {
      color: "#dcd7d7",
    },
    heroTxtSub: {
      "@media (max-width: 1170px)": {
        marginLeft: 20,
        marginRight: 20,
      },
      color: "#9c9c9c",
      position: "relative",
      marginTop: 20,
      marginLeft: 70,
      marginRight: 0,
      fontWeight: 300,
      "@media (max-width: 400px)": {
        fontSize: "10px",
      },
    },
    resume: {
      textDecoration: "none",
      fontSize: 11,
      color: "#d3f513",
      marginTop: 10,
      marginLeft: 50,
      "@media (max-width: 1170px)": {
        marginLeft: 0,
      },
    },
    arrow: {
      position: "absolute",
      left: 130,
      top: 10,
      height: "26px",
      width: "20px",
      transform: "rotate(95deg)",
      "@media (max-width: 1170px)": {
        height: "19px",
        width: "15px",
      },
    },
    girlDiv: {
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    girl: {
      width: "90%",
      maxHeight: "360px",
      "@media (max-width: 400px)": {
        width: "70%",
      },
    },
    themeIcons: {
      margin: theme.spacing(1),
      "@media (min-width: 1170px)": {
        color: theme.palette.primary.main,
      },
      "@media (max-width: 1170px)": {
        color: theme.palette.secondary.main,
      },
    },
    listItem: {
      textDecoration: "none",
      color: theme.palette.primary.main,
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
      width: 18,
      height: 18,
    },
    phoneNum: {
      textDecoration: "none",
      color: "inherit",
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: 40,
      "& #standard-basic-label": {
        color: "white",
      },
    },
    inputField: {
      color: "white",
      width: 220,
      marginRight: 30,
      borderBottom: "1px solid #f1f1f1",
      "&:focus": {
        borderBottom: "2px solid white",
      },
    },
    textArea: {
      width: 480,
      minHeight: 200,
      margin: 40,
      padding: 20,
    },
    subTxt: {
      color: "red",
    },
  };
});

export default useStyles;
