import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1000,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function InventoryUserForm() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
           
            <Paper className={classes.paper}>
                <Grid container direction="row" spacing={2}>
                    
                    <Grid item xs={12} sm container>
                        <Grid container spacing={2}>
                            <Grid item>
                            <Typography component="h1" variant="h5">
                    Request Item
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <TextField
                        autoFocus
                        margin="dense"
                        label="Inventory Name"
                        name="name"
                        fullWidth
                        required
                    />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        autoFocus
                        margin="dense"
                       
                        label="Quantity"
                        name="quantity"
                        // helperText={errors['name']}
                        fullWidth
                        required
                    />
                        </Grid>
                        
                        <Grid item xs={12}>
                            
                        <TextField
                        autoFocus
                        margin="dense"
                        type="date"
                        name="date"                        
                        fullWidth
                        required
                    />
                        </Grid>
                        
                        <Grid item xs={12}>
                        <TextField
                        autoFocus
                        margin="dense"
                        label="Description"
                        name="description"
                        // helperText={errors['description']}
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
                        
                        className={classes.submit}
                    >
                        Request
                    </Button>
                </form>
                            </Grid>
                            
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}
