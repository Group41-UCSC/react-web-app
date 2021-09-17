import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Grid xs>
                            <Typography gutterBottom variant="subtitle1">
                                Batch Name
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Task Name
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Description
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button m={1}
                                style={{ backgroundColor: green[500], color: '#FFFFFF' }}
                                variant="contained"
                                className={classes.button}
                            >
                                Request Badge
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
