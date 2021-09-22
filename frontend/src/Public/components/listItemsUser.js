import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';

import AddCommentIcon from '@material-ui/icons/AddComment';
import FlagIcon from '@material-ui/icons/Flag';
import { Link } from 'react-router-dom';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import EmojiEventsIcon  from '@material-ui/icons/EmojiEvents';


export const mainListItemsUser = (
    <div>
        <ListItem button component={Link} to="/user-dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        {/* <ListItem button component={Link} to="/view-users">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItem> */}
        <ListItem button component={Link} to="/available-badge">
            <ListItemIcon>
                <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary="BadgeWork" />
        </ListItem>
        <ListItem button component={Link} to="/request-inventory">
            <ListItemIcon>
                <AddCommentIcon />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
        </ListItem>
        <ListItem button component={Link} to="event-user-view">
            <ListItemIcon>
                <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
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

export const secondaryListItemsUser = (
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