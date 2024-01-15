import classes from "./UserFlow.module.css";
import userflow from "../../../assets/userflow.webp";

const UserFlow = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>
              <span>Proposed</span>
              <span>user flow</span>
            </div>
          </div>
          <div className={classes.text}>
            Based on research, I analyzed and optimized the user flow to enhance
            the overall user experience, streamline interactions, and ensure
            users can <span>accomplish their goals</span> efficiently and with
            minimal effort.
          </div>
        </div>
        <img src={userflow} alt="" />
      </div>
    </div>
  );
};

export default UserFlow;
