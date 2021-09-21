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

export default function FloatingBadge() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup
                align="center"
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
            >
                 {/* <Button  href="add-item">
                <AddIcon />
                Add Item</Button> */}

                <Button href="badge-request">Requested List</Button>
                <Button href="badge-progress-list">Progress List Item</Button>
                <Button href="badge-completed">Completed List List</Button>
                <Button href="item-pending">Pending List</Button>
                <Button style={{ backgroundColor: red[500], color: '#FFFFFF' }} href="badge-log">Badge Log</Button>
            </ButtonGroup>
        </div>
    );
}
