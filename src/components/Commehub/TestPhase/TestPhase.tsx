import classes from "./TestPhase.module.css";
import testPhaseLabel from "../../../assets/commehub/test-phase-label.webp";
import phaseArrow from "../../../assets/commehub/phase-arrow.svg"
import before from "../../../assets/videos/Commehub/Before.webm";
import after from "../../../assets/videos/Commehub/After.webm";

const TestPhase = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label1} src={testPhaseLabel} alt="" />
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
        <div className={classes.testPhase}>
          <img src={phaseArrow} alt="" />
          <div className={classes.before}>
            <video autoPlay muted loop src={before} />
            <div className={classes.label}>Before</div>
          </div>
          <div className={classes.after}>
            <video autoPlay muted loop src={after} />
            <div className={classes.label}>After</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPhase;
