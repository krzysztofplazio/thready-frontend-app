import { IconContext } from "react-icons";
import { GrProjects } from "react-icons/gr";

function ProjectIconWhite() {
  return (
    <IconContext.Provider
      value={{ color: '#fff', size: '16px' }}
    >
      <div>
        <GrProjects />
      </div>
    </IconContext.Provider>
  );
}

export default ProjectIconWhite
