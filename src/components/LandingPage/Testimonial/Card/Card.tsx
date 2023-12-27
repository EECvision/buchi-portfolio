import classes from "./Card.module.css";
import QuoteFilled from "../../../../assets/landing-page/quote-filled.svg";
import QuoteOutlined from "../../../../assets/landing-page/quote-outlined.svg";

interface CardProps {
  name: string;
  review: string;
  project: string;
}

const Card = ({ name, review, project }: CardProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.icons}>
        <img className={classes.quote} src={QuoteOutlined} alt="" />
        <img className={classes.quote} src={QuoteFilled} alt="" />
      </div>

      <div className={classes.review}>{review}</div>

      <div className={classes.name}>{name}</div>
      <div className={classes.project}>{project}</div>
      <div className={classes.underline}></div>
    </div>
  );
};

export default Card;
