import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Announcemnt Topic
                </Typography>
                <Typography style={{ fontSize: "12px" }} color="textSecondary" gutterBottom>
                    Date
                </Typography>
                <Typography style={{ fontSize: "12px" }} color="textSecondary" gutterBottom>
                    Time
                </Typography>
                <Typography variant="body2" component="p">
                    Announcemnt Body
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">See More</Button>
            </CardActions>
        </Card>
    );
}
