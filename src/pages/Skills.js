import React from "react";
import useStyles from "../assets/styles/styles";
import {
  Button,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
const Skills = () => {
  const {classes} = useStyles();
  return <div className={classes.home}>
    <Grid>
      <Grid>
    <Typography variant="h5" className={classes.skillsHead}>Skills</Typography>
      </Grid>
    </Grid>
  </div>;
};

export default Skills;
