import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
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
                        <ListItemButton>
                            <ListItemText primary="Trash" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemText primary="Spam" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </nav>
    );
}