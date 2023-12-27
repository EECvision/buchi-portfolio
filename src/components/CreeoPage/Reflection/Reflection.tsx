import classes from "./Reflection.module.css";
import creeoLogo from "../../../assets/creeo-logo.png";
import NextProject from "../../../assets/next-project.png";

const Reflection = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={classes.topic}>
          <span>Reflection</span>
        </div>
        <div className={classes.text}>
          Designing Creeo has been both an exhilarating and challenging
          experience, I learned a lot because, I had to wear many hats as a
          designer, I did some fun illustrations, played with Blender 3D, did
          motion graphics. As I reflect on the processes that led to the final
          product, I am proud of the outcome and the impact it has on NFT
          creators.
        </div>
        <div className={classes.logoContainer}>
          <img className={classes.logo} alt="" src={creeoLogo} />
          <div className={classes.title}>Thank you for reading</div>
          <img className={classes.nextProject} src={NextProject} alt="" />
          <div className={classes.next}>Next</div>
        </div>
      </div>
    </div>
  );
};

export default Reflection;
