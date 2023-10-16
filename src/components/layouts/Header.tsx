import { Box } from "@mui/material";
import './Header.scss';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import AccountMenu from "./AccountMenu";

export default function Header() {
    return(
        <header>
            <Box className='header-box'>
                <IconButton>
                    <SearchRoundedIcon fontSize="medium" />
                </IconButton>
                <div className="user-info">
                    <IconButton>
                        <NotificationsIcon fontSize="medium" />
                    </IconButton>
                    <AccountMenu />
                </div>
            </Box>
        </header>
    );
}