import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PostAddIcon from '@material-ui/icons/PostAdd';
import PermMediaIcon from '@material-ui/icons/PermMedia';


const useStyles = makeStyles((theme) => ({
  paper: {
    height: 250,
    width: 250,
    textAlign: 'center',
    paddingTop:30,

  },
  paper1: {
    height: 75,
    width: 250,
    display: 'flex',
  },
  control: {
    padding: theme.spacing(5),
  },
  icon:{
      margin:8,
      width:50,
      height:50,

  }
}));
export default function ContentHome() {
  const classes = useStyles();
  return (
    <div>
        <div style={{marginTop:'40px'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={6}>
                        <Grid key={1} item>
                            <Paper  className={classes.paper} >
                                <span style={{fontSize:'35px'}}>Total Posts<br/></span>
                                <span style={{fontSize:'75px'}}>101</span>
                            </Paper>
                        </Grid>
                        <Grid key={2} item>
                            <Paper className={classes.paper}>
                                <span style={{fontSize:'35px'}}>Your Posts<br/></span>
                                <span style={{fontSize:'75px'}}>11</span>
                            </Paper>
                        </Grid>
                        <Grid key={3} item>
                            <Paper className={classes.paper}>
                                <span style={{fontSize:'35px'}}>Total Views<br/></span>
                                <span style={{fontSize:'75px'}}>34562</span>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        <div style={{ marginTop: '75px' }}>   
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={6}>
                        <Grid key={1} item>
                            <Paper className={classes.paper1}>
                                <Grid style={{flex:'3'}}> <PostAddIcon className={classes.icon}/></Grid>
                                <Grid style={{flex:'7', paddingTop:'20px',fontSize:'20px'}}> Add New Post</Grid>
                            </Paper>
                        </Grid>
                        <Grid key={2} item>
                            <Paper className={classes.paper1}>
                                <Grid style={{flex:'3'}}> <PermMediaIcon className={classes.icon}/></Grid>
                                <Grid style={{flex:'7', paddingTop:'20px',fontSize:'18px'}}> Add Image Gallery</Grid>
                            </Paper>
                        </Grid>
                        <Grid key={3} item>
                            <Paper className={classes.paper1}>
                                <Grid style={{flex:'3'}}> <PostAddIcon className={classes.icon}/></Grid>
                                <Grid style={{flex:'7', paddingTop:'20px',fontSize:'18px'}}> View Image Gallery</Grid>
                            </Paper>
                        </Grid>
                        <Grid key={4} item>
                            <Paper className={classes.paper1}>
                                <Grid style={{flex:'3'}}> <PostAddIcon className={classes.icon}/></Grid>
                                <Grid style={{flex:'7', paddingTop:'20px',fontSize:'20px'}}> View All Posts</Grid>
                            </Paper>
                        </Grid>
                        <Grid key={5} item>
                            <Paper className={classes.paper1}>
                                <Grid style={{flex:'3'}}> <PostAddIcon className={classes.icon}/></Grid>
                                <Grid style={{flex:'7', paddingTop:'20px',fontSize:'20px'}}> View Your Posts</Grid>
                            </Paper>
                        </Grid>
                        <Grid key={6} item>
                            <Paper className={classes.paper1}>
                                <Grid style={{flex:'3'}}> <PostAddIcon className={classes.icon}/></Grid>
                                <Grid style={{flex:'7', paddingTop:'20px',fontSize:'20px'}}> Compalins</Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}
