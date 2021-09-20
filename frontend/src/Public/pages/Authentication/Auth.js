import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import "../Components/CSS/Signup.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Goldtroop
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    height: "90vh",
    marginTop: theme.spacing(2),
  },
  image: {
    backgroundImage: "url(/signUp-image.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(3, 4),
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  sign: {
    height: "120vh",
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1),
  },
}));

const Auth = () => {
  const classes = useStyles();
  const [firstName, setfName] = useState("");
  const [lastName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErros] = useState([]);
  const browserHistory = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      contact: contact,
      address: address,
      nic: nic,
      password: password,
    });

    if (validateForm()) {
      await axios
        .post("api/v1/registration", data, {
          headers: { "Content-Type": "application/json", Authorization: "" },
        })
        .then((response) => {
          alert("Please use the confirmation link sent to your email");
          browserHistory.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log(errors);
    }
  };

  const validateForm = () => {
    let errors = [];
    let isValid = true;

    if (!firstName) {
      isValid = false;
      errors["fname"] = "Please enter your First Name.";
    }

    if (!lastName) {
      isValid = false;
      errors["lname"] = "Please enter your Last Name.";
    }

    if (!email) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (!contact) {
      isValid = false;
      errors["contact"] = "Please enter your Contact Details.";
    }

    if (!address) {
      isValid = false;
      errors["address"] = "Please enter your Address.";
    }

    if (!nic) {
      isValid = false;
      errors["nic"] = "Please enter your Date of Birth.";
    }

    if (typeof email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!confirmPassword) {
      isValid = false;
      errors["confirm_password"] = "Please enter your confirm password.";
    }

    if (
      typeof password !== "undefined" &&
      typeof confirmPassword !== "undefined"
    ) {
      if (password !== confirmPassword) {
        isValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }

    setErros(errors);

    return isValid;
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={3}
        md={4}
        component={Paper}
        elevation={6}
        square
        className={classes.sign}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <form className={classes.form} noValidate onSubmit={submit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="fname"
              label="First Name"
              name="firstName"
              autoFocus
              color="secondary"
              onChange={(e) => setfName(e.target.value)}
              helperText={errors["fname"]}
              // value={this.state.firstName}
              // onChange={this.handleChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lname"
              label="Last Name"
              name="lastName"
              color="secondary"
              onChange={(e) => setlName(e.target.value)}
              helperText={errors["lname"]}
              // value={this.state.lastName}
              // onChange={this.handleChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              color="secondary"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              helperText={errors["email"]}
              // value={this.state.email}
              // onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contact Number"
              name="contact"
              color="secondary"
              onChange={(e) => setContact(e.target.value)}
              helperText={errors["contact"]}
              // value={this.state.contact}
              // onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              color="secondary"
              onChange={(e) => setAddress(e.target.value)}
              helperText={errors["address"]}
              // value={this.state.address}
              // onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nic"
              label="National Identity Card Number"
              name="nic"
              color="secondary"
              onChange={(e) => setNic(e.target.value)}
              helperText={errors["nic"]}
              //   value={this.state.dob}
              //   onChange={this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              color="secondary"
              onChange={(e) => setPassword(e.target.value)}
              helperText={errors["password"]}
              // value={this.state.password}
              // onChange={this.handleChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              color="secondary"
              onChange={(e) => setConfirmPassword(e.target.value)}
              helperText={errors["confirm_password"]}
              // value={this.state.confirmPAssword}
              // onChange={this.handleChange}
            />
            {/*<FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid>
              <Copyright />
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Auth;
