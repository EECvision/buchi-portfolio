import classes from "./Community.module.css";
import communityImage1 from "../../../assets/bleuwater/community-1.png";
import communityImage2 from "../../../assets/bleuwater/community-2.png";

const Community = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>Message from the community </div>
        <div className={classes.messages}>
          <div className={classes.imageContainer}>
            <img src={communityImage1} alt="" />
          </div>
          <div className={classes.imageContainer}>
            <img src={communityImage2} alt="" />
          </div>
        </div>
        <div className={classes.footer}>And more....</div>
      </div>
    </div>
  );
};

export default Community;
