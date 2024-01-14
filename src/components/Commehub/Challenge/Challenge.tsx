import classes from "./Challenge.module.css";
import challengeLabel from "../../../assets/commehub/challenge-label.webp";

const Challenge = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={challengeLabel} alt="" />
      <div className={classes.title}>Understanding the challenge</div>
      <div className={classes.description}>
        Small business owners in Nigeria are confronted by numerous challenges,
        one of which is trading capital hence, only few have the financial
        capacity to buy goods at wholesale scale to obtain discounts. So
        leveraging on the Group Purchasing Concept (GPC) that gives
        participating members the buying power and perks of
        wholesalers(discounts). I designed Commehub.
      </div>
    </div>
  );
};

export default Challenge;
