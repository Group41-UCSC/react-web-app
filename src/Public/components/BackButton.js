import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function BackButton() {
    const classes = useStyles();

    return (
        <div>

            <div>
                <IconButton aria-label="back" className={classes.margin} size="large">
                    <ArrowBackIcon />
                </IconButton>

            </div>
        </div>
    );
}
