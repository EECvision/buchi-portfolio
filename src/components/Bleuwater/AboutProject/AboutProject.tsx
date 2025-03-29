import classes from "./AboutProject.module.css";
import ViewArrow from "../../../assets/arrow-view.svg";

const AboutProject = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>About the project </div>
      <div className={classes.divider}>
        <div className={classes.left}>
          <div className={classes.description}>
            Designing a website for on-chain asset protection, secure smart
            contract deployment, and fast royalty payouts.
          </div>
          <div className={classes.text}>
            Bleu Water is a one-stop-shop dedicated to safeguarding digital
            assets, facilitating secure blockchain contract deployment, and
            providing a secure ecosystem for project owners to transact their
            digital assets, get royalties paid, and authorize asset transactions
            on other platforms.
          </div>
          <div className={classes.viewBtn}>
            <div>Visit website</div>
            <img src={ViewArrow} alt="" />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.topic}>Role </div>
          <div>User Research</div>
          <div>Ui/UX Design</div>
          <div className={classes.topic}>Client </div>
          <div>Bleu Water.</div>
          <div className={classes.topic}>Timeline</div>
          <div>Jan - present {new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
