import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PeopleIcon from '@material-ui/icons/People';
import FlagIcon from '@material-ui/icons/Flag';
import AddCommentIcon from '@material-ui/icons/AddComment';
import EventIcon from '@material-ui/icons/Event';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link } from 'react-router-dom';

export const mainListItemsIms = (
    <div>
        <ListItem button component={Link} to="/ims-dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" href="Dashboard"/>
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

export const secondaryListItemsIms = (
    <div>
        {/* <ListSubheader inset>Saved reports</ListSubheader> */}
        <ListItem button component={Link} to="/inventory">
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Content Management" />
        </ListItem>
    </div>
);