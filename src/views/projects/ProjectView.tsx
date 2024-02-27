import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { getProjectList } from "../../api/axios";
import ProjectTile from "../../components/projects/ProjectTile";

export default function ProjectView() {
    const [projects, setProjects] = useState<PagedItems<Project>>();
    useEffect(() => {
        const fetchProjectData = async () => {
            setProjects(await getProjectList());
        };

        fetchProjectData();
    }, [])
    return(
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{
                padding: 5
            }}>
                {projects !== undefined 
                 ? projects.items.map((project) => (
                    <Grid item xs={4}> 
                        <ProjectTile project={project} />
                    </Grid>
                 ))
                 : <div>nigga</div> }
            </Grid>
        </>
    );
}