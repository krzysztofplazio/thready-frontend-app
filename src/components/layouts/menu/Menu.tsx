import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import TopicIcon from '@mui/icons-material/Topic';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import './Menu.scss';
import { NavLink } from "react-router-dom";

export default function Menu({ className } : { className?:string }) {
    return(
        <nav className={className}>
            <Box className="logo"
                 component={NavLink}
                 to="/">
                <h3>Thready</h3>
                <p>Easy ALM system</p>
            </Box>
            <Divider className="divider" />
            <Box className="main-menu">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink}  
                                        to="/">
                            <DashboardRoundedIcon fontSize="large" />
                            <ListItemText primary="Pulpit" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink}  
                                        to="/projects">
                            <TopicIcon fontSize="large" />
                            <ListItemText primary="Projekty" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink}  
                                        to="/my-threads">
                            <FormatListBulletedOutlinedIcon fontSize="large" />
                            <ListItemText primary="Wątki" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink}  
                                        to="/users">
                            <PeopleAltOutlinedIcon fontSize="large" />
                            <ListItemText primary="Użytkownicy" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink}  
                                        to="/settings">
                            <SettingsIcon fontSize="large" />
                            <ListItemText primary="Ustawienia" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink}  
                                        to="/logout">
                            <LogoutIcon fontSize="large" />
                            <ListItemText primary="Wyloguj się" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
            <Divider className="divider" />
            <Box className="version-box">
                <p>Thready © 2023</p>
            </Box>
        </nav>
    );
}