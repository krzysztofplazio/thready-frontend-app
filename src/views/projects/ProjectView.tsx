import { Button, Divider, Drawer, Grid, Icon, IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProjectList } from "../../api/axios";
import ProjectTile from "../../components/projects/ProjectTile";
import EmptySet from "../../components/informational/EmptySet";
import AddIcon from '@mui/icons-material/Add';
import NewProject from "../../components/forms/NewProject";

export default function ProjectView() {
    const [projects, setProjects] = useState<PagedItems<Project>>();
    const [isDrawerEnabled, setIsDrawerEnabled] = useState(false);

    useEffect(() => {
        const fetchProjectData = async () => {
            setProjects(await getProjectList());
        };

        fetchProjectData();
    }, [])
    return(
        <>
            <div style={{
                borderBottom: '1px #ddd solid',
                boxShadow: '-3px 49px 100px -63px rgba(0, 0, 0, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Drawer
                    anchor="right"
                    open={ isDrawerEnabled }
                    onClose={ () => setIsDrawerEnabled(false) }
                >
                    { <NewProject /> }
                </Drawer>
                <Typography 
                    variant="h2" 
                    sx={{ 
                        padding: '0.2em 0.6em', 
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                    }}>
                    Projekty
                </Typography>
                <div>
                    <Tooltip title="Add new project" placement="top">
                        <IconButton 
                            size="small"
                            sx={{
                                marginRight: 5,
                            }}
                            onClick={() => setIsDrawerEnabled(true)}>
                            <AddIcon sx={{ fontSize: 30 }} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <Grid container 
                  spacing={{ xs: 2, md: 3 }} 
                  columns={{ xs: 4, sm: 8, md: 16 }} 
                  sx={{
                    padding: 5
                  }}
            >
                { projects !== undefined 
                  ? projects.totalCount !== 0 
                    ? projects.items.map((project) => (
                        <Grid item xs={4}> 
                            <ProjectTile project={project} />
                        </Grid>
                    
                 )) : <EmptySet />
                 : <div>Loading</div> }
            </Grid>
        </>
    );
}