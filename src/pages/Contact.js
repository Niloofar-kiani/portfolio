import React, {useState, useEffect, useMemo} from "react";
import useForm from "../utils/useForm";
import useStyles from "../assets/styles/styles";
import {Button, TextField, Typography, Grid} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {Link} from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import {useTheme} from "@mui/material/styles";
import girlOff from "../assets/images/contact-bg-off.png";
import girlOn from "../assets/images/contact-bg-on.png";

const Contact = () => {
  const theme = useTheme();
  const [values, handleChange, resetForm] = useForm();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);

  const {classes} = useStyles();

  const memoizedFormErrors = useMemo(() => formErrors, [formErrors]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(values));
    setIsSubmited(true);
    resetForm();
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmited) {
      console.log(values);
    }
  }, [formErrors, isSubmited]);

  const validate = (values) => {
    const errors = {};
    const namePattern = /^[A-Za-z0-9]{3,16}$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) {
      errors.name = "Full Name is Requierd";
    } else if (!namePattern.test(values.name)) {
      errors.name = "Name must have at least 3 character";
    }
    if (!values.email) {
      errors.email = "Email is Requierd";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Please enter a valid email";
    }
    return errors;
  };

  return (
    <div className={`${classes.formWrapper} ${classes.home}`}>
      <Typography
        className={`${classes.headTxt} ${classes.headerTxt}`}
        variant="h5"
      >
        Get In Touch
      </Typography>
      <Typography className={classes.headTxt} variant="text">
        I am eagerly waiting for you to keep me in the loop and talk about your
        project.{" "}
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
        <Grid item xs={12} md={4}>
          <MailOutlineIcon className={classes.iconContact} margin={1} />
          <Typography className={classes.headTxt} marginRight={2}>
            info@niloofarkiani.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <SmartphoneIcon className={classes.iconContact} margin={1} />
          <Typography className={classes.headTxt}>
            <Link to="tel:+37441757071" className={classes.phoneNum}>
              +374-41757071
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={classes.formContainer}
      >
        <div className={classes.inputContainer}>
          <div className={classes.inputWraper}>
            <TextField
              className={classes.inputField}
              id="standard-basic"
              name="name"
              value={values.name || ""}
              onChange={handleChange}
              label="Full Name"
              variant="standard"
              type="text"
              required
            />
            <Typography className={classes.subTxt}>
              {memoizedFormErrors.name}
            </Typography>
          </div>
          <div className={classes.inputWraper}>
            <TextField
              className={classes.inputField}
              id="standard-basic"
              name="email"
              value={values.email || ""}
              onChange={handleChange}
              label="Email"
              type="email"
              variant="standard"
              required
            />
            <Typography className={classes.subTxt}>
              {memoizedFormErrors.email}
            </Typography>
          </div>
        </div>
        <TextareaAutosize
          name="textArea"
          value={values.textArea || ""}
          onChange={handleChange}
          aria-label="textarea"
          className={classes.textArea}
        />
        <Button variant="contained" type="submit" aria-label="submit button">
          Submit
        </Button>
      </form>
      <div className={`${classes.girlDiv} ${classes.otherGirls}`}>
        <img
          src={theme.palette.mode === "light" ? girlOn : girlOff}
          className={classes.girl}
          alt="girl"
        />
      </div>
    </div>
  );
};

export default Contact;
