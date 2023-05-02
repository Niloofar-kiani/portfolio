import React, {useState} from "react";
import useStyles from "../assets/styles/styles";

import {
  Button,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

import {useTheme} from "@mui/material/styles";


const Weather = () => {
  const theme = useTheme();



  const {classes} = useStyles();


  

  return (
    <div className={classes.home}>
   
    </div>
  );
};

export default Weather;