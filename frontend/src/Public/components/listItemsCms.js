import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddCommentIcon from '@material-ui/icons/AddComment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import FlagIcon from '@material-ui/icons/Flag';
import { Link } from 'react-router-dom';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

export const mainListItemsCms = (
    <div>
        <ListItem button component={Link} to="/cms-dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
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
                <AddCommentIcon/>
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
                <FlagIcon/>
            </ListItemIcon>
            <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button component={Link} to="#">
            <ListItemIcon>
                <AssignmentTurnedInIcon/>
            </ListItemIcon>
            <ListItemText primary="Evaluation" />
        </ListItem>
    </div>
);

export const secondaryListItemsCms = (
    <div>
        {/* <ListSubheader inset>Saved reports</ListSubheader> */}
        <ListItem button component={Link} to="/contenthome">
            <ListItemIcon>
                <ChromeReaderModeIcon />
            </ListItemIcon>
            <ListItemText primary="Content Management" />
        </ListItem>
    </div>
);