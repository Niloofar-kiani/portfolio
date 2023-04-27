import React from "react";
import useStyles from "../assets/styles/styles";
import {
  Button,
  TextField,
  Typography,
  Grid,
  ListItem,
  List
} from "@mui/material";
import girlOff from "../assets/images/skills-bg-off.png";
import girlOn from "../assets/images/skills-bg-on.png";
import {useTheme} from "@mui/material/styles";

const Skills = () => {
  const theme = useTheme();
  const {classes} = useStyles();
  return     <div className={`${classes.formWrapper} ${classes.home}`}>
  <Typography
    className={`${classes.headTxt} ${classes.headerTxt}`}
    variant="h5"
  >
    Skills & Expertise
  </Typography>
  <Typography className={classes.headTxt} variant="text">
    I WAS CREATED TO CREATE ...
  </Typography>
  <Grid
    container
    item
    xs={8}
    md={8}
    lg={6}
    xl={6}
    maxHeight={"120px"}
    direction="row"
    wrap="wrap"
    justifyContent="center"
    alignItems="flex-start"
    margin={2}
  >
    <Grid item xs={12} md={6}>
    <div className={classes.skillsGroup}>
        <Typography variant="h6" className={`${classes.headTxt} ${classes.skillsTitle}`}>
          Graphic Design
        </Typography>
        <List className={classes.headTxt} aria-label="graphic design skills">
          <ListItem className={classes.skillItem}>
            Logo Design
          </ListItem>
          <ListItem className={classes.skillItem}>
            Brand Identity
          </ListItem>
          <ListItem className={classes.skillItem}>
            Poster Design
          </ListItem>
          <ListItem className={classes.skillItem}>
            UX/UI Design
          </ListItem>
        </List>
      </div>
    </Grid>
    <Grid item xs={12} md={6}>
      <div className={classes.skillsGroup}>
        <Typography variant="h6" className={`${classes.headTxt} ${classes.skillsTitle}`}>
          Expertise
        </Typography>
        <List className={classes.headTxt} aria-label="graphic design skills">
        <ListItem className={classes.skillItem}>
            HTML, CSS, SASS
          </ListItem>
          <ListItem className={classes.skillItem}>
            JavaScript, Jquery
          </ListItem>
          <ListItem className={classes.skillItem}>
            React, Redux
          </ListItem>
          <ListItem className={classes.skillItem}>
            TypeScript
          </ListItem>
          <ListItem className={classes.skillItem}>
            SMM
          </ListItem>
          <ListItem className={classes.skillItem}>
            Content Marketing
          </ListItem>
        </List>
      </div>
    </Grid>
  </Grid>
  <div className={`${classes.girlDiv} ${classes.otherGirls}`}>
          <img src={theme.palette.mode === "light"? girlOn : girlOff} className={classes.girl} alt="girl" />
  </div>
</div>
};

export default Skills;