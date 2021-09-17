import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function FloatingAddUser() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" href="/add-user" startIcon={<PersonAddIcon />}>
                New User
            </Button>
        </div>
    );
}
