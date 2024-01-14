import classes from "./UserJourney.module.css";
import journeyImage from "../../../assets/commehub/journey.webp";
import journeyLabel from "../../../assets/commehub/journey-label.webp";

const UserJourney = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={journeyLabel} alt="" />
      <div className={classes.title}>User Journey Map</div>
      <div className={classes.description}>
        User journey map based on customer looking to engage in{" "}
        <span>group buying...</span>
      </div>
      <img src={journeyImage} alt="" />
    </div>
  );
};

export default UserJourney;
