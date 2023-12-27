import classes from "./Goal.module.css";
import goalImage1 from "../../../assets/commehub/goal-1.png";
import goalImage2 from "../../../assets/commehub/goal-2.png";
import goalLabel from "../../../assets/commehub/goal-label.png";

const starIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="12"
    viewBox="0 0 11 12"
    fill="none"
  >
    <path
      d="M0 6.24676C1.46027 6.17719 2.70034 5.6091 3.72021 4.54248C4.74008 3.47586 5.25002 2.21215 5.25002 0.739746C5.25002 2.21215 5.75995 3.47586 6.77983 4.54248C7.7997 5.6091 9.03977 6.1656 10.5116 6.24676C9.5497 6.29313 8.6689 6.55979 7.85764 7.06991C7.05797 7.56844 6.42055 8.24087 5.94539 9.07562C5.48181 9.91037 5.25002 10.8031 5.25002 11.777C5.25002 10.3046 4.74008 9.02925 3.72021 7.96263C2.70034 6.88441 1.46027 6.31632 0 6.24676Z"
      fill="#00D1FF"
    />
  </svg>
);

const Goal = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={goalLabel} alt="" />
      <div className={classes.section}>
        <div className={classes.title}>The Goal</div>
        <div className={classes.description}>
          The paramount goal was to design a user-centric app for{" "}
          <span>retailers, and consumers</span> to engage in group purchases. At
          this point my goal was not to jump into ideation concepts based on
          assumptions. Instead, I wanted to understand as much of group
          purchasing experience as I could in this limited amount of time to
          make sure my concept was effective and valuable to users, after which
          I designed on
        </div>
        <ul className={classes.listItems}>
          <li className={classes.description}>
            App using E-commerce conventions that users are conversant with.
          </li>
          <li className={classes.description}>
            Designed UI components to suit social engagements
          </li>
          <li className={classes.description}>
            Designed seamless experience focused on intuitive functionality
            through consistent design system.
          </li>
        </ul>
      </div>

      <div className={classes.section}>
        <div className={classes.title}>Design process & Timeline</div>
        <img src={goalImage1} alt="" />
      </div>

      <div className={classes.section}>
        <div className={classes.title}>User Research</div>
        <div className={classes.subTitle}>Problem Scope & Target Audience</div>
        <div className={classes.description}>
          According to my research I identified two target audience(Primary &
          Secondary). <span>PRIMARY</span> consists of retailers, while
          <span>SECONDARY</span> consists of final consumer. So, to better
          understand the needs and motivations of users I’m designing for I
          conducted <span>quantitative</span> and <span>qualitative</span>{" "}
          research starting with{" "}
          <span className={classes.accent}>user interviews</span> and{" "}
          <span className={classes.accent}>survey</span>. I decided to first
          talk to 5 small business owners/trades in my network in an interview.
          I then moved to expanding that number to 25 persons in an online
          survey. I ensure that diversity was taken into considerations by
          recruiting people of different age and trades for better
          generalizability. Below are some of the results of my survey.
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.title}>Some survey Results</div>
        <div className={classes.description}>
          The audience turned out to be mostly middle-aged people from 20 - 40
          years, and most of the users already had experience ordering products
          online. Some key charts are presetned below
        </div>
        <img className={classes.image2} src={goalImage2} alt="" />
      </div>

      <div className={classes.section}>
        <div className={classes.title}>Interview insights</div>
        <div className={classes.listItems}>
          <div className={classes.description}>
            {starIcon}
            More local traders engage in group purchases due to insufficient
            trading capital
          </div>
          <div className={classes.description}>
            {starIcon}
            Traders are often scared of loosing money paid to some purchasing
            group organizers.
          </div>
          <div className={classes.description}>
            {starIcon}
            Participants complianed about buying process not being transparent
          </div>
          <div className={classes.description}>
            {starIcon}
            Participants find Logistics aspect like delivery to this endeavor
            quite difficult.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
