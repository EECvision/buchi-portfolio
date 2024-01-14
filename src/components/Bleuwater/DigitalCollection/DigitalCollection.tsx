import classes from "./DigitalCollection.module.css";
import animation1 from "../../../assets/bleuwater/animation-1.webp";
import animation2 from "../../../assets/bleuwater/animation-2.webp";
import animation3 from "../../../assets/bleuwater/animation-3.webp";
import animation4 from "../../../assets/bleuwater/animation-4.webp";
import animation5 from "../../../assets/bleuwater/animation-5.webp";

const DigitalCollection = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>
          We made creating digital collection a breeze
        </div>
        <div className={classes.description}>
          Here, we ensured our user's creative journey was as streamlined as
          possible, empowering them to mint their unique of one of a kind and
          multiple collection to any blockchain of choice without any
          bottlenecks or having to write a single line of code. We also provided
          a user-friendly marketplace that transform how community transact
          digital assets both within Bleuwater ecosystem and in project owners
          ecosystem.
        </div>
        <div className={classes.animationContainer}>
          <div className={classes.animationA}>
            <img src={animation1} alt="" />
          </div>
          <div className={classes.animationB}>
            <div className={classes.animation2}>
              <img src={animation2} alt="" />
            </div>
            <div className={classes.animation3}>
              <img src={animation3} alt="" />
            </div>
          </div>
          <div className={classes.animationC}>
            <div className={classes.animation4}>
              <img src={animation4} alt="" />
            </div>
            <div className={classes.animation5}>
              <img src={animation5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalCollection;
