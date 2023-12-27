import classes from "./Wireframe.module.css";
import wireframeImage1 from "../../../assets/commehub/wireframe-1.png";
import wireframeImage2 from "../../../assets/commehub/wireframe-2.png";
import wireframeLabel from "../../../assets/commehub/wireframe-label.png";

const Wireframe = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={wireframeLabel} alt="" />
      <div className={classes.title}>Sketches and wireframes</div>
      <div className={classes.description}>
        Entering the design phase, I kept in mind all the information I
        gathered, including personas, their challenges, and the proposed user
        flows. I started <span>visualizing</span> ideas by making{" "}
        <span>rough sketches.</span> I sought feedback from my peers to evaluate
        the usability of the concepts before starting high-fidelity design.
      </div>
      <img className={classes.wireframe} src={wireframeImage1} alt="" />
      <img className={classes.wireframe} src={wireframeImage2} alt="" />
    </div>
  );
};

export default Wireframe;
