import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PeopleIcon from '@material-ui/icons/People';
import FlagIcon from '@material-ui/icons/Flag';
import { Link } from 'react-router-dom';
import EventIcon from '@material-ui/icons/Event';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import AddCommentIcon  from '@material-ui/icons/AddComment';
export const mainListItemsSenior = (
    <div>
        <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" href="/dashboard"/>
        </ListItem>
        <ListItem button component={Link} to="/view-users">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItem>
        <ListItem button component={Link} to="/newevent">
            <ListItemIcon>
                <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/request-inventory">
            <ListItemIcon>
                <AddCommentIcon />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
        </ListItem>
        
        <ListItem button component={Link} to="/badge-view">
            <ListItemIcon>
                <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary="BatchWork" />
        </ListItem>
        <ListItem button component={Link} to="#">
            <ListItemIcon>
                <FlagIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button component={Link} to="#">
            <ListItemIcon>
                <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="Evaluation" />
        </ListItem>
    </div>
);

export const secondaryListItemsSenior = (
    <div>
        {/* <ListSubheader inset>Saved reports</ListSubheader> */}
        {/* <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="No Value" />
        </ListItem> */}
        {/* <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="No Value" />
        </ListItem> */}
        {/* <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="No Value" />
        </ListItem> */}
    </div>
);