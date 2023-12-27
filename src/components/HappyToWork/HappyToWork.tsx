import classes from "./HappyToWork.module.css";
import Envelop from "../../assets/envelop.svg";

const HappyToWork = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>Happy to work with you</div>
        <div className={`${classes.title} ${classes.mobile}`}>
          Let&apos;s work together!
        </div>
        <div className={classes.description}>
          I'm one email away. so, go ahead, click and drop me a message. Let's
          build that awesome project together!
        </div>
        <div className={`${classes.description} ${classes.mobile}`}>
          I'm one email away. so, go ahead, click and drop me a message.
        </div>
        <div className={classes.pointer}>👇</div>

        <div className={classes.emailContainer}>
          <div className={classes.envelopIcon}>
            <img src={Envelop} alt="" />
          </div>
          <div className={classes.textContainer}>
            <div>Buchi@design.me</div>
            {/* <div>Copy e-mail</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyToWork;
