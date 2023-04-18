import {Typography} from "@mui/material";
import useStyles from "../Styles";
import React from "react";
import lampOff from "../assets/lamp-off.png";


const Home = () => {
  const {classes} = useStyles();
  return (
    <div>
      <img src={lampOff} className={classes.lamp} />
    
      <div className={classes.heroTxt}>
        <Typography variant="h5">
         Hello! I'm 
         <br/>
         Niloofar Kiani
        </Typography>
        <Typography className={classes.heroTxtSub}>
        I am a Front end developer and UI designer
        <br/>
        And an ambitious creative geek,
        Based on Armenia.
        <br/>
        Web Design and Front end development is my forte.
        </Typography>
      </div>
    </div>
  );
};

export default Home;
