import classes from "./FutureStep.module.css";
import whatNextLabel from "../../../assets/bleuwater/what-next-label.png";

const FutureStep = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img className={classes.label} src={whatNextLabel} alt="" />
        <div className={classes.title}>Future Step</div>
        <div className={classes.description}>
          Looking ahead, the journey doesn't end here. In fact, it's just the
          beginning. We have a commitment to continuously improve and refine our
          solution. The feedback we've received from users will be the compass
          guiding our future development efforts. We'll focus on enhancing
          usability, scalability, and security to ensure that our product
          remains at the forefront of the digital asset landscape. Ultimately,
          I'm excited about the future of this solution. It has been a
          remarkable learning experience, and I'm looking forward to seeing how
          it evolves to meet the ever-changing needs of digital asset creators
          and the broader community
        </div>
      </div>
    </div>
  );
};

export default FutureStep;
