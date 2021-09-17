import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

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

export default function ViewBadge() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={4}>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src="../../../public/images/Athletics.PNG" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid container spacing={3}>
                            <Grid item>
                                <Typography gutterBottom variant="subtitle1">
                                    Batch Name
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Task Name
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Button m={1}
                                    size="small"
                                    style={{ backgroundColor: green[500], color: '#FFFFFF' }}
                                    variant="contained"
                                    className={classes.button}
                                >
                                    Request Badge
                                </Button>
                            </Grid>
                        </Grid>
                        {/* <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}
