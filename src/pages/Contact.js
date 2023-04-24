import React, {useState, useEffect} from "react";
import useForm from "../utils/useForm";
import useStyles from "../assets/styles/styles";
import {Button, TextField, Typography} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const Contact = () => {
  const [values, handleChange] = useForm();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);

  const {classes} = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setFormErrors(validate(values));
    setIsSubmited(true);
  };

  useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmited) {
        console.log(values);
      }
    },
    [formErrors, isSubmited]);

  const validate = (values) => {
    const errors = {};
    const namePattern = /^[A-Za-z0-9]{3,16}$/;
    const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      errors.name = "Full Name is Requierd";
    }else if(!namePattern.test(values.name)){
      errors.name = "Name must have at least 3 character";
    }
    if (!values.email) {
      errors.email = "Email is Requierd";
    }else if(!emailPattern.test(values.email)){
      errors.email = "Please enter a valid email";
    }
    return errors;
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={classes.formContainer}>
      <div className={classes.inputContainer}>
        <div>
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
      <Typography className={classes.subTxt}>{formErrors.name}</Typography>
        </div>
        <div>
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
      <Typography className={classes.subTxt}>{formErrors.email}</Typography>
        </div>
      </div>
      <TextareaAutosize
        name="textArea"
        value={values.textArea || ""}
        onChange={handleChange}
        aria-label="textarea"
        className={classes.textArea}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
    
  );
};

export default Contact;
