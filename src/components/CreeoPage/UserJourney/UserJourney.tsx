import classes from "./UserJourney.module.css";
import userJourneyImage from "../../../assets/user-journey.png";

const UserJourney = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={`${classes.stage} ${classes.stage3}`}>
          <div className={classes.left}>
            <div className={classes.topic}>
              <span>User</span>
              <span>Journey</span>
            </div>
          </div>
          <div className={classes.text}>
            A user journey through a more or less positive route for users
            generating NFT art collection
          </div>
        </div>
        <img src={userJourneyImage} alt="" />
        <div className={classes.link}>Click to expand image</div>
      </div>
    </div>
  );
};

export default UserJourney;
