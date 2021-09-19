import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { useHistory } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Gold Troop
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = () => {
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
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={(e) => setfName(e.target.value)}
                                helperText={errors["fname"]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={(e) => setlName(e.target.value)}
                                helperText={errors["lname"]}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                helperText={errors["email"]}
                            />
                        </Grid>
                      <Grid> 
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
                          </Grid>  
                        <Grid> 
                          <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="contact"
                                label="Contact Number"
                                name="contact"
                                color="secondary"
                                onChange={(e) => setAddress(e.target.value)}
                                helperText={errors["address"]}
                                // value={this.state.contact}
                                // onChange={this.handleChange}
                        />
                          </Grid>  
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                 onChange={(e) => setPassword(e.target.value)}
                                helperText={errors["password"]}
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                            />
                        </Grid>
                    </Grid>
                    <Button
                        style={{ background: '#2E3B55', color: '#ffffff' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        // color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default SignUp