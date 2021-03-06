import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItemsCms, secondaryListItemsCms } from '../components/listItemsCms';
import Orders from '../components/Orders';
import ProfileDropDown from '../components/ProfileDropDown';
import NotificationDropDown from '../components/NotificationDropDown';
import BadgeRequest from '../components/BadgeRequest';
import SiteAnnouncementCreator from '../components/SiteAnnouncementCreator';
import { useState, useEffect } from 'react';
import axios from "axios";
import AnnouncemntSL from '../components/AnnouncementSL';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Gold Troop
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function CMSDashboard() {
    const classes = useStyles();
    
    // Troop Count
    const [troopCount,settroopCount]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:17152/troopCount").then((response)=>{
      settroopCount(response.data)
    })
  },[])

  const troop=troopCount.map(record=>record.troop);
  console.log(troop);

  // Junior Scout Count
  const [juniorCount,setjuniorCount]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:17152/juniorCount").then((response)=>{
      setjuniorCount(response.data)
    })
  },[])

  const junior=juniorCount.map(record=>record.junior);

  // Senior Scout Count
  const [seniorCount,setseniorCount]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:17152/seniorCount").then((response)=>{
      setseniorCount(response.data)
    })
  },[])

  const senior=seniorCount.map(record=>record.senior);

  // Senior Scout Count
  const [leaderCount,setleaderCount]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:17152/leaderCount").then((response)=>{
      setleaderCount(response.data)
    })
  },[])

  const leader=leaderCount.map(record=>record.leader);



    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" style={{ background: '#2E3B55' }} className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationDropDown />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <ProfileDropDown />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItemsCms}</List>
                <Divider />
                <List>{secondaryListItemsCms}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Heading */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography >
                                    <h1 style={{ color: "#3f51b5" }}> 42nd Colombo Royal College Scout Group - Gold Troop </h1>
                                </Typography>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={classes.paper}>
                                <h2 align="center">Troop Members</h2>
                                {/* {expensecount.map((record)=>{
                                return( */}
                                <h1 align="center">{troop}</h1>
                                {/* )
                                })} */}
                                
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={classes.paper}>
                                <h2 align="center">Scouts Leaders</h2>
                                <h1 align="center">{leader}</h1>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={classes.paper}>
                                <h2 align="center">Senior Scouts</h2>
                                <h1 align="center">{senior}</h1>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={classes.paper}>
                                <h2 align="center">Junior Scouts</h2>
                                <h1 align="center">{junior}</h1>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <AnnouncemntSL />
                            </Paper>
                        </Grid>

                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={classes.paper}>
                                <h2 align="center">Upcoming Events</h2>
                                <h5 align="center">Scout's Day</h5>
                                <h5 align="center">Royal Scout's Day</h5>
                            </Paper>
                        </Grid>

                        {/* Recent Deposits */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={classes.paper}>
                                <SiteAnnouncementCreator />
                            </Paper>
                        </Grid>


                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Orders />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}