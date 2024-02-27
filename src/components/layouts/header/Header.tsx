import { Box, Drawer, TextField } from "@mui/material";
import './Header.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useEffect, useState } from "react";
import AccountMenu from "../AccountMenu";
import Menu from "../menu/Menu";
import { getCurrentUser } from "../../../api/axios";


export default function Header() {
    const [isSearchEnabled, setIsSearchEnabled] = useState(false);
    const [isDrawerEnabled, setIsDrawerEnabled] = useState(false);
    const [user, setUser] = useState<IUser | undefined>();

    useEffect(() => {
        async function fetchCurrentUser() {
            try {
                setUser(await getCurrentUser());
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        }

        fetchCurrentUser();
    }, []);
    
    return(
        <header>
            <Drawer
                anchor="left"
                open={ isDrawerEnabled }
                onClose={ () => setIsDrawerEnabled(false) }
            >
                { <Menu className="menu-box" /> }
            </Drawer>
            <Box className='header-box'>
                <div className="search-and-menu">
                    <IconButton className="menu-icon-button" onClick={() => setIsDrawerEnabled(true)}>
                        <MenuRoundedIcon fontSize="medium"  />
                    </IconButton>
                    <IconButton onClick={ () => setIsSearchEnabled(!isSearchEnabled) }>
                        <SearchRoundedIcon fontSize="medium" />
                    </IconButton>
                    <TextField variant="outlined" className={ `search-bar ${ isSearchEnabled ? "search-bar-open" : "search-bar-closed" }` } />
                </div>
                <div className="user-info">
                    <IconButton>
                        <NotificationsIcon fontSize="medium" />
                    </IconButton>
                    <AccountMenu user={user} />
                </div>
            </Box>
        </header>
    );
}