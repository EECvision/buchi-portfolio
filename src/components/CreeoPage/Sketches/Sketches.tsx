import classes from "./Sketches.module.css";
import sketchImage from "../../../assets/sketches.png";
import sketch1 from "../../../assets/sketch1.png";
import sketch2 from "../../../assets/sketch2.png";
import sketch3 from "../../../assets/sketch3.png";

const Sketches = () => {
  return (
    <div className={classes.container}>
      <img className={classes.heading} src={sketchImage} alt="" />
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>
              <span>Sketches</span>{" "}
            </div>
          </div>
          <div className={classes.text}>
            Entering the design phase, I kept in mind all the information I
            gathered, including personas, their challenges, and the proposed
            user flows. I started visualizing ideas by making rough{" "}
            <span>sketches</span>. I sought feedback from my peers to evaluate
            the usability of the concepts before starting high-fidelity design.
          </div>
        </div>
        <div className={classes.sketches}>
          <img src={sketch1} alt="" />
          <img src={sketch2} alt="" />
          <img src={sketch3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sketches;
