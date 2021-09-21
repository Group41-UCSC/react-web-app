import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
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
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

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

const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  nic: yup.string().max(10, "Must be 10 Characters.").min(10, "Must be 10 Characters."),
  phone: yup.string().required().min(8).max(15),
  cpassword: yup.string().when('password', (password, schema) => {
      if (password) return schema.required('Confirm Password is required');
  })
      .oneOf([yup.ref('password')], 'Passwords must match')
})
export default function Up() {
  const classes = useStyles();
  
  Axios.defaults.withCredentials=true;
  
  const { register , handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
    const otpinfo=async(data)=>{
      
      Axios.post('http://localhost:17152/Register',{
        first_name:data.first_name,
        last_name:data.last_name,
        email:data.email,
        phone:data.phone,
        address:data.address,
        password:data.password,
        cpassword:data.cpassword,
        nic:data.nic,
        
      
    }).then((response) => { 
      if(response.data.message){
        alert(response.data.message)
    
        window.location.href='/manageotp'
      }
    });
    
  }


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
                <form className={classes.form} onSubmit={handleSubmit(otpinfo)} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                autoComplete="first_name"
                name="fullname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
               
                {...register('first_name')}
                
              />
               {errors.first_name?.message && <p className={classes.errormessage} >{errors.first_name?.message}</p>} 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                autoComplete="last_name"
                name="fullname"
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                autoFocus
               
                {...register('last_name')}
                
              />
               {errors.last_name?.message && <p className={classes.errormessage} >{errors.last_name?.message}</p>} 
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                {...register('email')}
                                />
                                 {errors.email?.message && <p className={classes.errormessage} >{errors.email?.message}</p>} 
                        </Grid>
                        <Grid item xs={12} sm={6}> 
                          <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="contact"
                                label="Contact Number"
                                name="contact"
                                color="secondary"
                                autoComplete="phone"
                                {...register('phone')}
                                />
                                 {errors.phone?.message && <p className={classes.errormessage} >{errors.phone?.message}</p>}  
                          </Grid>  

                      <Grid item xs={12}> 
                          <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="address"
                                label="Address"
                                name="address"
                                color="secondary"
                                autoComplete="address"
                                {...register('address')}
                                />
                                 {errors.address?.message && <p className={classes.errormessage} >{errors.address?.message}</p>}  
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
              autoComplete="nic"
              {...register('nic')}
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
 
                                {...register('password')}
                
                                />
                               {errors.password?.message && <p className={classes.errormessage} >{errors.password?.message}</p>} 
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
              autoComplete="confirm-password"
              {...register('cpassword')}
              />
               {errors.cpassword?.message && <p className={classes.errormessage}>{errors.cpassword?.message}</p>}  
                            
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

