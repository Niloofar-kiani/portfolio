import {makeStyles} from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    divMain: {
     // backgroundColor: theme.palette.background.default,
      height: "80vh",
      fontFamily: "hind",
      margin: 70,
      color: "#fff",
      "@media (max-width: 1170px)": {
        height: "100vh",
        margin: 0,
        borderRadius: 0,
        background: theme.palette.background.paper,
      },
    },
    toolbar: {
      color: "#111",
      "@media (max-width: 11700px)": {
        color: "#dcd7d7",
      },
    },
    portAppBar: {
      background: "none",
      alignItems: "flex-end",
      boxShadow: "none",
    },
    iconBtn: {
      color: "#111",
      backgroundColor: theme.palette.primary.dark,
      width: 30,
      height: 30,
      margin: 3,
    },
    menuIconBtn: {
      backgroundColor: theme.palette.primary.dark,
      "&:hover": {
        backgroundColor: theme.palette.grey[50],
      },
      "@media (max-width: 1170px)": {
        "&:hover": {
          backgroundColor: theme.palette.grey[50],
        },
      },
    },
    menuIcon: {
      height: 12,
      width: 20,
    },

    home: {
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      height: "100%",
      marginTop: -120,
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "@media (max-width: 730px)": {
        marginTop: -104,
        borderRadius: 0,
      },
      "@media (max-width: 1170px)": {
        borderRadius: 0,
      },
    },
    lamp: {
      width: 100,
      //marginTop: 10,
      "@media (max-width: 1170px)": {
        //marginTop: 75,
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
      color: theme.palette.text.primary,
      marginTop: 10,
      marginLeft: 50,
      fontWeight: 500,
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
      color: theme.palette.text.primary,
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
        color: theme.palette.primary.light,
      },
      "@media (max-width: 1170px)": {
        color: theme.palette.primary.light,
      },
    },
    listItem: {
      textDecoration: "none",
      color: theme.palette.text.primary,
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
    formWrapper: {
      height:"100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding:"20px",
      paddingTop: "30px",
      "@media (max-width: 1170px) && (min-width: 600px)": {
        margin: "0 auto",
        width: "100%",
        height: "100vh",
        background: theme.palette.background.paper,
        
      },
      "@media (max-width: 1170px)":{
        paddingTop: "70px"
      }
    },
    formContainer: {
      width: "100%",
      color: theme.palette.text.primary,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center",
      margin: 20,
      "& #standard-basic-label": {
        color: theme.palette.text.primary,
      },
      "& #standard-basic": {
        color: theme.palette.text.primary,
        width: "280px",
      },
    },
    inputWraper: {
      height: 70,
    },
    inputField: {
      maxWidth: 220,
      marginRight: 30,
      borderBottom: "0.5px solid",
      "&:focus": {
        borderBottom: "1px solid",
      },
    },
    textArea: {
      width: "500px",
      minHeight: 200,
      margin: 10,
      padding: 20,
      fontFamily: "inherit",
      fontSize: 14,
      borderRadius: 4,
      "&:focus :focus-visible": {
        borderColor: "yellow",
      },
      "@media (max-width: 600px)": {
        width: "280px",
      },
    },
    subTxt: {
      color: "red",
      fontSize: 12,
    },
    headTxt: {
      color: theme.palette.text.primary,
      marginBottom: "10px",
      padding: "4px",
    },
    headerTxt: {
      borderBottom: "1px solid",
      borderBottomColor: theme.palette.primary.dark,
      width: "fit-content",
      textTransform: "upperCase"
    },
    iconContact: {
      border:"1px solid",
      borderColor: theme.palette.primary.dark,
      borderRadius: "50%",
      width: 30,
      height: 30,
      padding:4,
      fill: theme.palette.text.primary,
    },
    skillsHead:{
      color: theme.palette.text.primary,
    },
    skillsGroup:{
      paddingLeft:"10px",
      marginBottom:"10px",
      position:"relative",
      "&:before" : {
        content:`""`,
        position:"absolute",
        top:10,
        left:-15,
        height:"calc(100% - 33px)",
        width:"1px",
        backgroundColor: theme.palette.primary.dark,
      },
    },
    skillsTitle:{
      position:"relative",
      padding:"0px",
      "&:before" : {
        content:`""`,
        position:"absolute",
        top:10,
        left:-35,
        height:"20px",
        width:"20px",
        borderRadius:"50%",
        backgroundColor: theme.palette.primary.dark,
      },
    },
    skillItem :{
      position:"relative",
      "&:before" : {
        content:`""`,
        position:"absolute",
        top:20,
        left:-29,
        height:"1px",
        width:"29px",
        backgroundColor: theme.palette.primary.dark,
      },
    },
    otherGirls :{
      "@media (max-width: 900px)": {
        display: "none",
      },
    }

  };
});

export default useStyles;