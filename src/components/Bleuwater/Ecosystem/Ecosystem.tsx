import classes from "./Ecosystem.module.css";
import ecosystemImage from "../../../assets/bleuwater/ecosystem.webp";
import ecosytemVideo from "../../../assets/videos/Bleuwater/Display.webm";

const Ecosystem = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>Ecosystem for all Creators</div>
        <div className={classes.description}>
          After we gave creators a chance to own their ecosystem built on Bleu
          Water, making customization visually flexible was another important
          consideration. We crafted various ecosystem templates with
          customizable interfaces for creators to select from, all the while
          safeguarding their digital assets, granting control over their
          marketplace, and facilitating royalty payouts.
        </div>
        <div className={classes.imageContainer}>
          <img src={ecosystemImage} alt="" />
          <video
            muted
            autoPlay
            loop
            className={classes.animation}
            src={ecosytemVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
