import classes from "./OtherScreens.module.css";
import otherScreensImage from "../../../assets/other-screens.webp";
import otherScreens1 from "../../../assets/other-screens-1.webp";
import otherScreens2 from "../../../assets/other-screens-2.webp";

const OtherScreens = () => {
  return (
    <div className={classes.container}>
      <img src={otherScreensImage} alt="" />
      <img src={otherScreens1} alt="" />
      <img src={otherScreens2} alt="" />
    </div>
  );
};

export default OtherScreens;
