import { Icon, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CloudOffRoundedIcon from '@mui/icons-material/CloudOffRounded';

export default function EmptySet() {
    return(
        <>
            <div style={{
                minWidth: '80vw',
                height: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <CloudOffRoundedIcon sx={{
                    fontSize: 120
                }} />
                <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                    Brak danych
                </Typography>
            </div>
        </>
    );
}