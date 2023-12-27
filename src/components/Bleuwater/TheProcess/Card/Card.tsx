import { Process } from "../data";
import classes from "./Card.module.css";

const chevronRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
  >
    <path
      d="M4.75977 3.07227L8.72611 7.03861L4.75977 11.005"
      stroke="#49536E"
      stroke-width="0.846154"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Card = ({ title, description }: Process) => {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div className={classes.innerIconContainer}>{chevronRight}</div>
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
    </div>
  );
};

export default Card;
