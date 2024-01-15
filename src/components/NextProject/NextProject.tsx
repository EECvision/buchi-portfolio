import classes from "./NextProject.module.css";
import nextProjectImage from "../../assets/next-project.webp";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ScrollContext } from "../../context/LocomotiveScroll/scrollContext";

const NextProject = ({ link }: { link: string }) => {
  const { locomotiveScroll } = useContext(ScrollContext);

  const navigate = useNavigate();

  const handleNext = () => {
    locomotiveScroll.scrollTo("#nested-page-container");
    navigate(link);
  };

  return (
    <div onClick={handleNext} className={classes.container}>
      <div className={classes.mainText}>Thank you for reading</div>
      <div className={classes.line}></div>
      <img src={nextProjectImage} alt="" />
      <div className={classes.next}>Next</div>
    </div>
  );
};

export default NextProject;
