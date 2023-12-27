import classes from "./Notification.module.css";
import NotificationIcon from "../../../assets/bleuwater/icon-notification.svg";

const Notification = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src={NotificationIcon} alt="" />
        <div className={classes.text}>
          This case study was published with the consent of the exceptional team
          building Bleu Water. All content and design rights are exclusively
          owned by them. Despite their consent, certain limitations and
          restrictions still apply regarding what I can reveal about the
          product. However, I was able to put out a useful amount in this case
          study. Enjoy!
        </div>
      </div>
    </div>
  );
};

export default Notification;
