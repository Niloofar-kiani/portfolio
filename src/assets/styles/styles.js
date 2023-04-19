import {makeStyles} from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    body: {
      backgroundColor: "#111",
      height: "85vh",
      fontFamily: "hind",
      margin: 50,
      borderRadius: 12,
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
    home: {
      position: "relative",
      height: "100%",
      marginTop: -120,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lamp: {
      width: 150,
      "@media (max-width: 1170px)": {
        width: 80,
      },
    },
    heroSection: {
      marginTop: "20px",
      maxHeight: 300,
      display: "flex",
      justifyContent: "center",
      width:500,
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
    },
    girlDiv: {
      position: "absolute",
      bottom: 0,
      left: 0,
    },
    girl: {
      width: "100%",
      maxHeight: "360px",
      "@media (max-width: 400px)": {
        width: "80%",
      },
    },
    themeIcons: {
      margin: theme.spacing(1),
      "@media (min-width: 1170px)": {
        color: "black",
      },
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
      width: 18,
      height: 18,
      backgroundColor: "#d3f513",
      borderRadious: "50%",
    },
    phoneNum: {
      textDecoration: "none",
      color: "inherit",
    },
  };
});

export default useStyles;
