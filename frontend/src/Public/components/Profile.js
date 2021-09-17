import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { red } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
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
        margin: theme.spacing(3, 3, 2),
    },
}));

export default function Profile() {
    const classes = useStyles();

    return (

        <Container component="main" maxWidth="xs">

            <CssBaseline />
            <div className={classes.paper}>
                <Typography>
                    <h3 style={{ color: "#3f51b5" }}> Profile </h3>
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                // variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                // variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                // variant="outlined"
                                required
                                fullWidth
                                id="full_name"
                                label="Full Name"
                                name="full_name"
                                autoComplete="full_name"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="dob"
                                name="date_of_birth"
                                // variant="outlined"
                                required
                                fullWidth
                                id="dob"
                                label="Date of birth"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                // variant="outlined"
                                required
                                fullWidth
                                id="bloodGroop"
                                label="Blood Group"
                                name="blood_group"
                                autoComplete="bgroup"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                // variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                // variant="outlined"
                                required
                                fullWidth
                                id="bloodGroop"
                                label="Contact Number"
                                name="blood_group"
                                autoComplete="bgroup"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                // variant="outlined"
                                required
                                fullWidth
                                id="bloodGroop"
                                label="Emergency Contact"
                                name="blood_group"
                                autoComplete="bgroup"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                // variant="outlined"
                                required
                                fullWidth
                                id="bloodGroop"
                                label="Date of Join"
                                name="blood_group"
                                autoComplete="bgroup"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                // variant="outlined"
                                required
                                fullWidth
                                id="bloodGroop"
                                label="Membership Number"
                                name="blood_group"
                                autoComplete="bgroup"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="membership"
                                name="membershipNumber"
                                // variant="outlined"
                                required
                                fullWidth
                                id="membershipNumber"
                                label="Membership Number"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="membership"
                                name="role"
                                required
                                fullWidth
                                id="role"
                                label="Role"
                                autoFocus
                            />
                        </Grid>
                    </Grid>

                    <Button
                        style={{ background: '#2E3B55', color: '#ffffff' }}
                        type="submit"
                        variant="contained"
                        // color="primary"
                        className={classes.submit}
                    >
                        Update
                    </Button>

                    <Button
                        style={{ background: red[500], color: '#ffffff' }}
                        type="submit"
                        variant="contained"
                        color="danger"
                        className={classes.submit}
                    >
                        Change Password
                    </Button>
                </form>
            </div>
        </Container>
    );
}