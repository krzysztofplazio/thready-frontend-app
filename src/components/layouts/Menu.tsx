import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import TopicIcon from '@mui/icons-material/Topic';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import './Menu.scss';

export default function Menu() {
    return(
        <nav className="menu-box">
            <Box className="logo">
                <h3>Thready</h3>
                <p>Easy ALM system</p>
            </Box>
            <Divider className="divider" />
            <Box className="main-menu">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton selected={window.location.pathname === "/"}
                                        href="/"
                                        component='a'>
                            <DashboardRoundedIcon fontSize="large" />
                            <ListItemText primary="Pulpit" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={window.location.pathname === "/projects"}
                                        href="/projects"
                                        component='a'>
                            <TopicIcon fontSize="large" />
                            <ListItemText primary="Projekty" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={window.location.pathname === "/my-threads"}
                                        href="my-threads"
                                        component='a'>
                            <FormatListBulletedOutlinedIcon fontSize="large" />
                            <ListItemText primary="Wątki" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={window.location.pathname === "/users"}
                                        href="/users"
                                        component='a'>
                            <PeopleAltOutlinedIcon fontSize="large" />
                            <ListItemText primary="Użytkownicy" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={window.location.pathname === "/settings"}
                                        href="/settings"
                                        component='a'>
                            <SettingsIcon fontSize="large" />
                            <ListItemText primary="Ustawienia" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton selected={window.location.pathname === "/logout"}
                                        href="/logout"
                                        component='a'>
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