import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';

import { red } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            margin: theme.spacing(1)
        }
    }
}));

export default function FloatingEvent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup
                align="center"
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
            >

                <Button href="event">Available Events</Button>
                <Button href="event-upcoming">Upcoming Event</Button>
                
            </ButtonGroup>
        </div>
    );
}
