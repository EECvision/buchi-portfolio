import classes from "./NextProject.module.css";
import nextProjectImage from "../../assets/next-project.png";

const NextProject = () => {
  return (
    <div className={classes.container}>
      <div className={classes.mainText}>Thank you for reading</div>
      <div className={classes.line}></div>
      <img src={nextProjectImage} alt="" />
      <div className={classes.next}>Next</div>
    </div>
  );
};

export default NextProject;
