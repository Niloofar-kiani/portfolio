import React from "react";

//Material UI
import {Typography, Grid} from "@mui/material";

//assets
import useStyles from "../assets/styles/styles";
import lampOff from "../assets/images/lamp-off.png";
import girlOff from "../assets/images/girl-off.png";

const Home = () => {
  const {classes} = useStyles();
  return (
    <>
      <div className={classes.home}>
        <img src={lampOff} className={classes.lamp} />
        <Grid container className={classes.heroSection}>
          <Grid item xs={12} md={12} className={classes.heroTxt}>
          <Typography
            variant="h5">
            Hello! I'm
            <br />
            Niloofar Kiani
          </Typography>
          </Grid>
          <Grid item xs={12} md={12} className={classes.heroTxtSub}>
          <Typography >
            I am a Front-end developer and UI/UX designer,
            <br />
            An ambitious creative geek, Based on Armenia.
            <br />
            Web Design and Front-end development is my forte.
          </Typography>
          </Grid>
        </Grid>
        <div className={classes.girlDiv}>
          <img src={girlOff} className={classes.girl} />
        </div>
      </div>
    </>
  );
};

export default Home;
