import React from "react";
// import {Link} from "react-router-dom";

//Material UI
import {Typography, Grid, ListItemButton} from "@mui/material";

//assets
import useStyles from "../assets/styles/styles";
import lampOff from "../assets/images/lamp-off.png";
import lampOn from "../assets/images/lamp-on.png";
import girlOff from "../assets/images/girl-off.png";
import girlOn from "../assets/images/girl-on.png";
import arrow from "../assets/images/arrow.svg";


const Home = ({isDarkMode}) => {

  const {classes} = useStyles();

  const onButtonclick = () =>{
    fetch('resume.pdf').then(res => res.blob().then(blob =>{
      const fileURL = window.URL.createObjectURL(blob)
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.classList.add(`${classes.resume}`);
      alink.download = 'Niloofar-kiani.pdf';
      alink.click();
    }))
  }
  return (
    <>
      <div className={classes.home}>
        <img src={isDarkMode? lampOff : lampOn} className={classes.lamp} alt="lamp" />
        <Grid container className={classes.heroSection}>
          <Grid item xs={12} md={12} className={classes.heroTxt}>
            <Typography variant="h5">
              Hello! I'm
              <br />
              Niloofar Kiani
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography className={classes.heroTxtSub}>
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
            <img src={arrow} className={classes.arrow} alt="arrow icon"/>
          </ListItemButton>
        </Grid>
        <div className={classes.girlDiv}>
          <img src={isDarkMode? girlOff : girlOn} className={classes.girl} alt="girl" />
        </div>
      </div>
    </>
  );
};

export default Home;
