import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RoleSelector from './RoleSelector';
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
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function UserDetails() {
    const classes = useStyles();

    return (

        <Container component="main" maxWidth="xs">

            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    User Details
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"

                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField

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

                                required
                                fullWidth
                                id="dob"
                                label="Date of birth"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField

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

                                required
                                fullWidth
                                id="bloodGroop"
                                label="Membership Number"
                                name="blood_group"
                                autoComplete="bgroup"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="membership"
                                name="membershipNumber"

                                required
                                fullWidth
                                id="membershipNumber"
                                label="Membership Number"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <RoleSelector />
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
                        update
                    </Button>
                </form>
            </div>
        </Container>
    );
}