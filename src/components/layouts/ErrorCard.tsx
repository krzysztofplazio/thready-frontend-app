import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import './ErrorCard.scss';

export default function ErrorCard({error, isEnabled}: {error: string, isEnabled: boolean}) {
    return (
        <React.Fragment>
            <Card sx={{
                display: isEnabled ? 'block' : 'none',
            }}>
                <CardContent>
                    <Typography variant="body1">
                        {error}
                    </Typography>
                </CardContent>
            </Card>   
        </React.Fragment>
    )
}