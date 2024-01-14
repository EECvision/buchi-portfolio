import classes from "./Description.module.css";
import descriptionImage from "../../../assets/commehub/landing.webp";

const Description = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.lhs}>
          <div className={classes.role}>
            <div className={classes.key}>Role </div>
            <div className={classes.value}>Product Designer</div>
          </div>
          <div className={classes.tool}>
            <div className={classes.key}>Tool</div>
            <div className={classes.values}>
              <div className={classes.value}>Pen & paper</div>
              <div className={classes.value}>Figma</div>
              <div className={classes.value}>photoshop</div>
              <div className={classes.value}>Adobe illustrator</div>
              <div className={classes.value}>Google form</div>
              <div className={classes.value}>Google docs</div>
            </div>
          </div>
          <div className={classes.timeline}>
            <div className={classes.key}>Timeline</div>
            <div className={classes.value}>07/2021 (personal project)</div>
          </div>
        </div>
        <div className={classes.responsibilites}>
          <div className={classes.key}>Responsibilities</div>
          <ul className={classes.listItems}>
            <li className={classes.value}>User Research</li>
            <li className={classes.value}>Personas</li>
            <li className={classes.value}>Competitive Analysis</li>
            <li className={classes.value}>User journey map</li>
            <li className={classes.value}>User flow</li>
            <li className={classes.value}>Visual brand identity</li>
            <li className={classes.value}>Prototyping</li>
            <li className={classes.value}>Documentation</li>
          </ul>
        </div>
      </div>
      <div className={classes.imageContainer}>
        <img src={descriptionImage} alt="" />
      </div>
    </div>
  );
};

export default Description;
