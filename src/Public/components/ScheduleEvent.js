import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RoleSelector from './RoleSelector';
import { TextareaAutosize } from '@material-ui/core';

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

export default function ScheduleEvent() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="title"
                                name="eventTitle"
                                variant="outlined"
                                required
                                fullWidth
                                id="eventTitle"
                                label="Event Title"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextareaAutosize
                                aria-label="minimum height"
                                name="eventDescription"
                                minRows={3}
                                placeholder="Please add a description regading the event"
                                style={{ width: "100%" }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        {/* <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/dd/yyyy"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            /> */}
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
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="membership"
                                name="membershipNumber"
                                variant="outlined"
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
                        Add User
                    </Button>
                </form>
            </div>
        </Container>
    );
}