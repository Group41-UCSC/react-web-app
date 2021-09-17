import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import DateRangeIcon from '@material-ui/icons/DateRange';
import GroupIcon from '@material-ui/icons/Group';
import StoreIcon from '@material-ui/icons/Store';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SdStorageIcon from '@material-ui/icons/SdStorage';
import { Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <LinkContainer to="#">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
            <b>
            <ListItemText primary="Home" />
          </b>
            </ListItem>
          </LinkContainer>

          <LinkContainer to="#">
            <ListItem button>
              <ListItemIcon>
                <EventIcon />
              </ListItemIcon>
            <b>
            <ListItemText primary="Events" />
          </b>
            </ListItem>
          </LinkContainer>

          <LinkContainer to="#">
            <ListItem button>
              <ListItemIcon>
                <DateRangeIcon />
              </ListItemIcon>
            <b>
            <ListItemText primary="Calendar" />
          </b>
            </ListItem>
          </LinkContainer>

          <LinkContainer to="#">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
            <b>
            <ListItemText primary="Groups" />
          </b>
            </ListItem>
          </LinkContainer>

          <LinkContainer to="#">
            <ListItem button>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
            <b>
            <ListItemText primary="Inventory" />
          </b>
            </ListItem>
          </LinkContainer>

          <LinkContainer to="#">
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
            <b>
            <ListItemText primary="Profile" />
          </b>
            </ListItem>
          </LinkContainer>

          
          <Typography  variant="h6" style={{textAlign: "center"}}> 
        {"\n"}Others{"\n"}{"\n"}
          </Typography>

          <LinkContainer to="#">
            <ListItem button>
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
            <b>
            <ListItemText primary="Content Management" />
          </b>
            </ListItem>
          </LinkContainer>

          <LinkContainer to="#">
            <ListItem button>
              <ListItemIcon>
                <SdStorageIcon />
              </ListItemIcon>
            <b>
            <ListItemText primary="Inventory Management" />
          </b>
            </ListItem>
          </LinkContainer>

        </List>
      </Drawer>
    </div>
  );
}

export default Sidebar;