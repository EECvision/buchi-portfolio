import classes from "./TestPhase.module.css";
import testPhaseImage from "../../../assets/commehub/test-phase.webp";
import testPhaseLabel from "../../../assets/commehub/test-phase-label.webp";

const TestPhase = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={testPhaseLabel} alt="" />
      <div className={classes.title}>Usability Tests</div>
      <div className={classes.description}>
        Following the completion of the prototype, Commehub underwent a series
        of usability tests. During these tests, I observed that 3 out of 5 users
        are very hesitant interacting with a UI component intended the for
        joining groups.
      </div>

      <div className={`${classes.description} ${classes.accent}`}>
        <span>Challenge:</span>
        “Click reluctance or click anxiety”
      </div>

      <div className={classes.wrapper}>
        <div className={classes.description}>
          Testers were uncertain about the outcome of clicking the ‘plus icon’
          because they are concerned about making a mistake.
        </div>
        <img src={testPhaseImage} alt="" />
      </div>
    </div>
  );
};

export default TestPhase;
