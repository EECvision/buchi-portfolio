import classes from "./OtherScreens.module.css";
import otherscreensImage from "../../../assets/commehub/other.png";
import otherscreenLabel from "../../../assets/commehub/otherscreen-label.png";

const OtherScreens = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={otherscreenLabel} alt="" />
      <div className={classes.title}>Other App Screens</div>
      <img src={otherscreensImage} alt="" />
    </div>
  );
};

export default OtherScreens;
