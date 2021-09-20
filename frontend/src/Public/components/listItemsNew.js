import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import PeopleIcon from '@material-ui/icons/People';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ChromeReaderModeIcon from '@material-ui/icons//ChromeReaderMode';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import { Link } from 'react-router-dom';

export const ListItems = (
    <div>
        <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" href="/dashboard"/>
        </ListItem>
        <ListItem button component={Link} to="/view-event">
            <ListItemIcon>
                <AssistantPhotoIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/view-inventory">
            <ListItemIcon>
                <AspectRatioIcon />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
        </ListItem>
        <ListItem button component={Link} to="viewcontent">
            <ListItemIcon>
                <ChromeReaderModeIcon/>
            </ListItemIcon>
            <ListItemText primary="Content" />
        </ListItem>
        <ListItem button component={Link} to="/available-badge">
            <ListItemIcon>
                <BrightnessAutoIcon />
            </ListItemIcon>
            <ListItemText primary="Badge Work" />
        </ListItem>
       
    </div>
);

export const secondaryListItems = (
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