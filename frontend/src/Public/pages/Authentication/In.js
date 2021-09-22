import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ForgotPassword from './ForgotPassword';
import axios from "axios";
import * as yup from "yup";
// import Alert from "@material-ui/lab/Alert";
// import { Redirect } from "react-router";

const schema = yup.object().shape({
    email:  yup.string().email().required('Enter the email'),
    password: yup.string().required("Enter the Password"),

})

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {/* <Link color="inherit" href="#">
                Gold Troop
            </Link>{' '} */}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(images/img.jfif)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function In() {
  const classes = useStyles();
//     const [email, setEmail] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordError, setPasswordError] = useState('');
  


//     const Login = () => {

//         console.log("login function");
    
//     axios.get('http://localhost:17152/login', {
//       params: {
//         email: email,
//         password: password,
//       }
//     }).then((response) => {
//          if (response.data.message2){
//           alert("Invalid Username Or Password!");
//         }
//       else if (response.data[0].userid) {
//         console.log(response.data[0]);
//         window.location.replace("/dashboard");
//         //  alert("Login Successful");
//       }

//     });

// }

  const[LoginStatus, setLoginStatus] = useState();
  

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

  const logininfo = (data) => {
  
    Axios.post("http://localhost:17152/login", {
      
     email: data.email,
     password: data.password,
     user_role:data.user_role,
      
    }).then((response) => {
      console.log(response)
      
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } 
      else if(response.data[0].user_role === 'USER'){
          window.location.href='/dashboard'
        } 
     
    }
    );
  };




    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit(logininfo)}>
                    
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email" 
                            {...register('email')} 
                            autoFocus
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email?.message && <p className=" errormessage" style={{color:'red',marginLeft:'20px'}}>{errors.email?.message}</p>}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            {...register('password')}
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password?.message && <p style={{color:'red',marginLeft:'20px'}}className=" errormessage" >{errors.password?.message}</p>}
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            style={{ background: '#2E3B55', color: '#ffffff' }}
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            // onClick={Login}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <ForgotPassword />
                            </Grid>
                            <Grid item xs>
                                <Button color="primary" href="/signup">
                                    Don't have an account?
                                </Button>
                                {/* <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link> */}
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                     <h1 style={{color:'red'}}>{LoginStatus}</h1>
                </div>
            </Grid>
        </Grid>
    );
}