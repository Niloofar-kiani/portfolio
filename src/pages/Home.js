import React from "react";

//Material UI
import {Typography, Grid, ListItemButton} from "@mui/material";

//assets
import useStyles from "../assets/styles/styles";
import lampOff from "../assets/images/lamp-off.png";
import lampOn from "../assets/images/lamp-on.png";
import girlOff from "../assets/images/girl-off.png";
import girlOn from "../assets/images/girl-on.png";
import arrowOff from "../assets/images/arrowOff.svg";
import arrowOn from "../assets/images/arrowOn.svg";
import {useTheme} from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const {classes} = useStyles();

  const onButtonclick = () => {
    fetch("resume.pdf").then((res) =>
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.classList.add(`${classes.resume}`);
        alink.download = "Niloofar-kiani.pdf";
        alink.click();
      }),
    );
  };
  return (
    <>
      <div className={classes.home}>
        <img
          src={theme.palette.mode === "light" ? lampOn : lampOff}
          className={classes.lamp}
          alt="lamp"
        />
        <Grid container className={classes.heroSection}>
          <Grid item xs={12} md={12} className={classes.heroTxt}>
            <Typography variant="h5" color={theme.palette.text.primary}>
              Hello! I'm
              <br />
              Niloofar Kiani
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              className={classes.heroTxtSub}
              color={theme.palette.text.secondary}
            >
              I'm a front-end developer and UI/UX designer,
              <br />
              based in Armenia with a passion for graphic design.
              <br />
              With several years of experience in the industry,
              <br />
              Web Design and Front-end development is my forte.
            </Typography>
          </Grid>
          <ListItemButton onClick={onButtonclick} className={classes.resume}>
            Download my resume
            <img
              src={theme.palette.mode === "light" ? arrowOn : arrowOff}
              className={classes.arrow}
              alt="arrow icon"
            />
          </ListItemButton>
        </Grid>
        <div className={classes.girlDiv}>
          <img
            src={theme.palette.mode === "light" ? girlOn : girlOff}
            className={classes.girl}
            alt="girl"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
