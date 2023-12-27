import classes from "./StyleGuide.module.css";
import styleGuideImage from "../../../assets/style-guide.png";
import styleGuideDesign from "../../../assets/style-guide-design.png";

const StyleGuide = () => {
  return (
    <div className={classes.container}>
      <img className={classes.heading} src={styleGuideImage} alt="" />
      <img src={styleGuideDesign} alt="" />
    </div>
  );
};

export default StyleGuide;
