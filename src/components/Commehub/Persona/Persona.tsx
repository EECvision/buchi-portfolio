import classes from "./Persona.module.css";
import personaImage1 from "../../../assets/commehub/persona-1.webp";
import personaImage2 from "../../../assets/commehub/persona-2.webp";
import personaLabel from "../../../assets/commehub/persona-label.png";

const Persona = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={personaLabel} alt="" />
      <div className={classes.title}>User Personas</div>
      <div className={classes.personas}>
        <div className={classes.imageContainer}>
          {" "}
          <img src={personaImage1} alt="" />
        </div>
        <div className={classes.imageContainer}>
          <img src={personaImage2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Persona;
