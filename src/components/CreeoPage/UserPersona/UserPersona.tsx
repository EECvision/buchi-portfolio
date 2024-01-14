import classes from "./UserPersona.module.css";
import componentImage from "../../../assets/component.webp";
import userPersonaImage from "../../../assets/user-persona.png";
import persona1 from "../../../assets/persona-1.webp";
import persona2 from "../../../assets/persona-2.webp";

const UserPersona = () => {
  return (
    <div className={classes.container}>
      <img className={classes.heading} src={componentImage} alt="" />
      <div className={classes.stages}>
        <div className={classes.wrapper}>
          <div className={classes.stage}>
            <div className={classes.left}>
              <div className={classes.topic}>
                <span>User</span>
                <span>UserPersona</span>
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.text}>
                The target user groups identified are artists who are interested
                in <span>creating and selling NFTs</span>. This target users
                includes both novice creators who are new to the NFT space and
                experienced artists looking to build their community faster on
                the space via <span>NFT drops</span>.
              </div>
              <img src={persona1} alt="" />
              <img src={persona2} alt="" />
            </div>
          </div>
          <img className={classes.userPersona} src={userPersonaImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserPersona;
