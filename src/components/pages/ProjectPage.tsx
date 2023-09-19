import { useParams } from "react-router-dom";

function ProjectPage() {
    const { id } = useParams<{ id: string }>();
    return(
        <span>Twoja stara nr {id}</span>
    )
}

export default ProjectPage;