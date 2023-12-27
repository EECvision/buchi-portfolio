import classes from "./TheGoal.module.css";
import theGoalLabel from "../../../assets/bleuwater/the-goal-label.png";

const TheGaol = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img className={classes.label} src={theGoalLabel} alt="" />
        <div className={classes.content}>
          <div className={classes.title}>The Goal</div>
          <div className={classes.description}>
            How might we provide project owners with a secure and user-friendly
            platform that allows them to create NFT collections, automate
            royalty payments for each sale, and protect their digital assets
            from unauthorized transactions, thereby restoring control, security,
            and profitability to their digital asset ecosystem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheGaol;
