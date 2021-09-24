import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1000,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ViewBadge() {
    const classes = useStyles();

    const [BadgeList,setBadgeList]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:17152/view-badges").then((response)=>{
      setBadgeList(response.data)
    })
  },[])

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
            {BadgeList.map((val, key) => {
                return(
                <Grid container direction="row" spacing={2}>
                    {/* <div> */}
                    
                    <Grid item xs={12} sm container>
                        <Grid container spacing={3}>
                            <Grid item>
                                <Typography gutterBottom variant="subtitle1">
                                    Batch Name : {val.badge_name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Description : {val.badge_description}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Badge Image :  <img style={{height:'100px' , width:'100px'}} src={`../../../${val.badge_media}`} />
                                </Typography>
                               
                               <div align='right'>
                                <Button m={1}
                                    size="small"
                                    style={{ backgroundColor: green[500], color: '#FFFFFF' }}
                                    variant="contained"
                                    className={classes.button}
                                >
                                    Request Badge
                                </Button>
                                </div>
                                <br></br><br></br>
                            </Grid>
                        </Grid>
                        {/* <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid> */}
                    </Grid>
                    {/* </div> */}
                </Grid>
                    )
                })}
            </Paper>
        </div >
    );
}
