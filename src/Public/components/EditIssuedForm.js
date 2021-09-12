import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

aaa

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

export default function EditIssuedForm() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Edit Item
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="Iid"
                                name="itemID"
                                variant="outlined"
                                required
                                fullWidth
                                id="itemID"
                                label="Item ID"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="storageID"
                                label="Storage ID"
                                name="storageID"
                                autoComplete="Sid"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="itemName"
                                label="Item Name"
                                name="itemName"
                                autoComplete="Iname"
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="quantity"
                                label="Quantity"
                               
                                id="quantity"
                                autoComplete="quantity"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="status"
                                name="status"
                                variant="outlined"
                                required
                                fullWidth
                                id="status"
                                label="Status"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="description"
                                name="description"
                                variant="outlined"
                                required
                                fullWidth
                                id="description"
                                label="Description"
                                autoFocus
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
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    );
}