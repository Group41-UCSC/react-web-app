import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
    Box,
    Card,
    CardContent,
    Grid,
    Divider,
    Typography,
  } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

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
  body: {
    marginBottom: 12,
  },
});

export default function BadgeCard() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
    <Grid container className={classes.root} spacing={2}>

    <Grid item xs>
    <Box
    ml={2}
    mt={2}
    mr={100}
    >
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography variant="h6" component="h2">
          Badge Details
        </Typography> */}
        <Typography className={classes.body}>
          Badge Name : 
        </Typography>
        <Typography className={classes.body}>
          Task Name : 
        </Typography>
        <Typography className={classes.body}>
          Description : 
        </Typography>
        <Divider />
        <Typography className={classes.body}>
         Status :  <LinearProgressWithLabel value={progress} />
        </Typography>
      </CardContent>
    </Card>
    </Box>
    </Grid>

    {/* <Grid item xs={6} sm={3}>
    <Box
    ml={2}
    mt={2}
    mr={100}
    >
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
          Badge Details
        </Typography>
        <br />
        <Typography className={classes.body}>
          Badge Name : 
        </Typography>
        <br />
        <Typography className={classes.body}>
          Task Name : 
        </Typography>
        <br />
        <Typography className={classes.body}>
          Description : 
        </Typography>
        <br />
        <Divider />
        <Typography className={classes.body}>
         Status :  <LinearProgressWithLabel value={progress} />
        </Typography>
      </CardContent>
    </Card>
    </Box>
  </Grid> */}
    
    </Grid>
    </div>
  );
}









