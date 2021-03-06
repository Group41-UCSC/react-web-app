import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StatusSelector from './StatusSelector';

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

export default function EditItemForm() {
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
                        autoFocus
                        margin="dense"
                        id="itemID"
                        label="Item ID"
                        name="itemID"
                        fullWidth
                        required
                    />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="storageID"
                        label="Storage ID"
                        name="storageID"
                        fullWidth
                        required
                    />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="itenName"
                        label="Item Name"
                        name="itemName"
                        fullWidth
                        required
                    />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="quantity"
                        label="Quantity"
                        name="quantity"
                        fullWidth
                        required
                    />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StatusSelector />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        name="description"
                        fullWidth
                        required
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