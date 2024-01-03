import { useNavigate } from "react-router-dom";
import { Project } from "../Work/data";
import classes from "./Project.module.css";

interface ProjectProps {
  data: Project;
}

const ProjectPage = ({ data }: ProjectProps) => {
  const navigate = useNavigate();
  const { name, description, image, projectType, link, label } = data;

  const handleNavigate = (id: string) => {
    navigate(id);
  };

  return (
    <div className={`${classes.container} work-card`}>
      <div
        onClick={() => handleNavigate(link)}
        className={classes.imageContainer}
      >
        <img src={image} alt="" />
      </div>
      <div className={classes.details}>
        <div className={classes.nameAndDescription}>
          <div className={classes.name}>{name}</div>
          <div className={classes.label}>{label}</div>
        </div>
        <div className={classes.description}>{description}</div>
        <div className={classes.link}>{projectType}</div>
      </div>
    </div>
  );
};

export default ProjectPage;
