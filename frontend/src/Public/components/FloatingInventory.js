import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import BackButton from '../components/BackButton';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    
}));

export default function FloatingInventory() {
    const classes = useStyles();

    return (
        <center>
        <div className={classes.root}>
        <ButtonGroup
                align="center"
                variant="contained"
                color="primary"
                aria-label="contained primary button group"
            >
              <BackButton />
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
        </center>
    );
}
