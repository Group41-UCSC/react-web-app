import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

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
                <Button href="/available-badge">Available</Button>
                <Button href="/earned-badge">Earned</Button>
                <Button href="/badge-progress">Progress</Button>
            </ButtonGroup>
        </div>
    );
}
