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
    <div className={`${classes.container} testimonial-inner-card`}>
      <div className={`${classes.icons} testimonial-card-icons`}>
        <img
          className={`${classes.quote} testimonial-card-quote`}
          src={QuoteOutlined}
          alt=""
        />
        <img
          className={`${classes.quote} testimonial-card-quote`}
          src={QuoteFilled}
          alt=""
        />
      </div>

      <div className={classes.review}>{review}</div>

      <div className={classes.name}>{name}</div>
      <div className={classes.project}>{project}</div>
      <div className={`${classes.underline} testimonial-card-underline`}></div>
    </div>
  );
};

export default Card;
