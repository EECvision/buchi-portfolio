import classes from "./FeedbackLoop.module.css";
import feedbackLoopImage from "../../../assets/bleuwater/feedback-loop-image.webp";

const FeedbackLoop = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>The feedback loop</div>
        <div className={classes.description}>
          Inspired by Sam Walton wisdom that "The best way to find out what your
          customers want is to ask them" we fully embraced the feedback loop
          design principle. We thoroughly explored user pain points, validated
          them, and carefully incorporated their feedback into our design
          choices. This iterative method enabled a continuous dialogue with our
          users, resulting in a solution that truly aligns with their needs and
          preferences.
        </div>
        <img src={feedbackLoopImage} alt="" />
      </div>
    </div>
  );
};

export default FeedbackLoop;
