import classes from "./UserFlow.module.css";
import userflowImage from "../../../assets/commehub/userflow.png";
import userflowLabel from "../../../assets/commehub/userflow-label.png";

const UserFlow = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={userflowLabel} alt="" />
      <div className={classes.title}>Proposed user flow</div>
      <div className={classes.description}>
        User flow for achieving the main goal of the app,{" "}
        <span>group buying...</span>
      </div>
      <img className={classes.flow} src={userflowImage} alt="" />
    </div>
  );
};

export default UserFlow;
