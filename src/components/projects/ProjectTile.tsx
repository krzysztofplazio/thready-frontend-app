import { Box, Typography } from "@mui/material";

export default function ProjectTile({ project } : { project: Project }) {
    return (
    <>
        <Box sx={{
            border: '1px solid rgba(122, 122, 122, 0.3)',
            borderRadius: '5px',
            '*': {
                padding: 1,
            },
            boxShadow: '-1px 0px 15px -1px rgba(171,171,171,0.8)',
            webkitBoxShadow: '-1px 0px 15px 1px rgba(171,171,171,0.8)',
            mozBoxShadow: '-1px 0px 15px -1px rgba(171,171,171,0.8)',
            textAlign: 'center',
            display: 'flex',
        }}>
            <Box sx={{
                width: 36,
                height: 36,
                backgroundColor: '#53b07a',
                border: '#53b57c 1px solid',
                borderTopLeftRadius: '2px',
                borderBottomRightRadius: '2px',
                color: 'white',
            }}>
                <p style={{ padding: 0, margin: 0 }}>
                    {project.id}
                </p>
            </Box>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '80%',
            }}>
                <div>
                    <Typography variant="h5" sx={{
                        fontWeight: 'bold'
                    }}>
                        {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#777' }}>
                        {project.description}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#003' }}>
                        Autor: {project.creator}
                    </Typography>
                </div>
            </div>
        </Box>
    </>);
}