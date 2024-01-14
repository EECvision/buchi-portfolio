import classes from "./Experience.module.css";
import experienceLabel from "../../../assets/bleuwater/experience-label.webp";

const Experience = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img className={classes.label} src={experienceLabel} alt="" />
        <div className={classes.title}>Retrospect</div>
        <div className={classes.description}>
          <div>
            One of the key takeaways has been the significance of collaboration.
            Working closely with users allowed us to identify and address issues
            we might not have otherwise recognized. Their perspectives, needs,
            and suggestions have been instrumental in shaping the product,
            making it more user-centric and efficient.
          </div>
          <br />
          <div>
            Furthermore, I've come to appreciate the importance of balancing
            simplicity with robustness. Creating a solution that's user-friendly
            while also offering the necessary security features was a unique
            challenge. It taught me the importance of finding that sweet spot
            where usability meets protection.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
