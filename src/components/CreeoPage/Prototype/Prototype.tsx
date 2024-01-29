import classes from "./Prototype.module.css";
import prototypeImage from "../../../assets/prototype.webp";
import prototype1 from "../../../assets/videos/Creeo/All.webm";

const Prototype = () => {
  return (
    <div className={classes.container}>
      <img className={classes.heading} src={prototypeImage} alt="" />
      <div className={classes.stages}>
        <div className={classes.prototype1}>
          <div className={classes.left}>
            <div className={classes.topic}>
              <span>A motion</span>
              <span>prototype</span>
            </div>
            <div className={classes.text}>
              Here, I used Adobe after effects to create micro animations for
              some illustrations I designed. This was intended to give the
              entire landing page more character and vibe.
            </div>
          </div>
          <video muted autoPlay loop src={prototype1} />
        </div>
        <div className={classes.prototype2}>
          <div className={classes.left}>
            <div className={classes.topic}>
              <span>Interactive</span>
              <span>prototype</span>
            </div>
            <div className={classes.text}>
              Here I completed the prototype for the core functionality and have
              users test and give feedback. I also made changes based on user
              insights and feedback.{" "}
            </div>
          </div>
          <div className={classes.image}></div>
        </div>
      </div>
    </div>
  );
};

export default Prototype;
