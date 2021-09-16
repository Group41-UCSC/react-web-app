import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    //     maxWidth: 752,
    // },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(2, 0, 1),
    },
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

export default function BadgeRequest() {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={9}>
                    <Typography variant="h6" className={classes.title}>
                        Badge Request
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="accept" style={{ color: green[500] }}>
                                            <CheckCircleIcon />
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete" style={{ color: red[500] }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>,
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}