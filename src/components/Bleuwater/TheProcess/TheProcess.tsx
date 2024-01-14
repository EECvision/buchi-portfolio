import theProcessLabel from "../../../assets/bleuwater/the-process-label.webp";
import theProcessImage from "../../../assets/bleuwater/the-process-image.webp";
import classes from "./TheProcess.module.css";

const TheProcess = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img className={classes.label} src={theProcessLabel} alt="" />
        <div className={classes.title}>The Process</div>
        <img className={classes.image} src={theProcessImage} alt="" />
      </div>
    </div>
  );
};

export default TheProcess;
