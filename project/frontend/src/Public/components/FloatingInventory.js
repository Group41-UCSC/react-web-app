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

export default function BadgeButtonGroup() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup
                align="center"
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
            >
                 <Button  href="add-item">
                <AddIcon />
                Add Item</Button>

                <Button href="item-list">Item List</Button>
                <Button href="item-request">Requested Item</Button>
                <Button href="item-reserved">Reserved Item</Button>
                <Button href="item-issued">Issued Item</Button>
                <Button style={{ backgroundColor: red[500], color: '#FFFFFF' }} href="item-log">Log</Button>
            </ButtonGroup>
        </div>
    );
}
