import classes from "./Prototype.module.css";
import prototypeImage from "../../../assets/commehub/prototype.png";
import prototypeLabel from "../../../assets/commehub/prototype-label.png";

const Prototype = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={prototypeLabel} alt="" />
      <div className={classes.title}>The Prototype</div>
      <div className={classes.prototype}></div>
      <img src={prototypeImage} alt="" />
    </div>
  );
};

export default Prototype;
