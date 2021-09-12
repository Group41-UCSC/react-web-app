import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingInventory() {
    const classes = useStyles();

    return (
        <center>
        <div className={classes.root}>
            <Button color="primary" variant="contained" size="small" aria-label="add" href="add-item">
                <AddIcon />
                Add Item
            </Button>
            <Button color="primary" variant="contained" size="small" aria-label="add" href="item-list">
               
                Item List
            </Button>
            <Button color="primary" variant="contained" size="small" aria-label="add" href="item-request">
              
                Requested Item
            </Button>
            <Button color="primary" variant="contained" size="small" aria-label="add" href="item-reserved">
            
                Reserved Item
            </Button>
            <Button color="primary" variant="contained" size="small" aria-label="add" href="item-issued">
              
                Issued Item
            </Button>
            
        </div>
        </center>
    );
}
