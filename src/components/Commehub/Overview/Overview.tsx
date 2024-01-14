import classes from "./Overview.module.css";
import overviewImage1 from "../../../assets/commehub/overview-1.webp";
import overviewImage2 from "../../../assets/commehub/overview-2.webp";
import overviewImage3 from "../../../assets/commehub/overview-3.webp";
import overviewLabel from "../../../assets/commehub/overview-label.webp";
import Logo from "../../../assets/commehub/logo.svg";
import AppleIcon from "../../../assets/commehub/icon-apple.svg";
import XIcon from "../../../assets/commehub/icon-x.svg";

const leftQoute = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M4.83997 6.95657H2.03467C2.08252 4.16323 2.63281 3.70266 4.34949 2.68581C4.54688 2.56618 4.61268 2.31496 4.49305 2.11159C4.3794 1.9142 4.1222 1.84841 3.92481 1.96804C1.90308 3.16433 1.19727 3.89406 1.19727 7.36929V10.5933C1.19727 11.6161 2.02869 12.4416 3.04553 12.4416H4.83997C5.89271 12.4416 6.68824 11.646 6.68824 10.5933V8.79885C6.68824 7.7521 5.89271 6.95657 4.83997 6.95657Z"
      fill="#01BFFE"
    />
    <path
      d="M11.3108 6.95657H8.50549C8.55335 4.16323 9.10364 3.70266 10.8203 2.68581C11.0177 2.56618 11.0835 2.31496 10.9639 2.11159C10.8442 1.9142 10.593 1.84841 10.3897 1.96804C8.36792 3.16433 7.66211 3.89406 7.66211 7.37527V10.5993C7.66211 11.6221 8.49353 12.4475 9.51038 12.4475H11.3048C12.3575 12.4475 13.1531 11.652 13.1531 10.5993V8.80484C13.1591 7.7521 12.3635 6.95657 11.3108 6.95657Z"
      fill="#01BFFE"
    />
  </svg>
);

const rightQuote = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
  >
    <path
      d="M9.5155 6.95657H12.3208C12.2729 4.16323 11.7227 3.70266 10.006 2.68581C9.80859 2.56618 9.74279 2.31496 9.86242 2.11159C9.97607 1.9142 10.2333 1.84841 10.4307 1.96804C12.4524 3.16433 13.1582 3.89406 13.1582 7.36929V10.5933C13.1582 11.6161 12.3268 12.4416 11.3099 12.4416H9.5155C8.46276 12.4416 7.66723 11.646 7.66723 10.5933V8.79885C7.66723 7.7521 8.46276 6.95657 9.5155 6.95657Z"
      fill="#01BFFE"
    />
    <path
      d="M3.04467 6.95657H5.84997C5.80212 4.16323 5.25183 3.70266 3.53515 2.68581C3.33776 2.56618 3.27197 2.31496 3.3916 2.11159C3.51123 1.9142 3.76245 1.84841 3.96582 1.96804C5.98755 3.16433 6.69336 3.89406 6.69336 7.37527V10.5993C6.69336 11.6221 5.86194 12.4475 4.84509 12.4475H3.05066C1.99792 12.4475 1.20239 11.652 1.20239 10.5993V8.80484C1.1964 7.7521 1.99194 6.95657 3.04467 6.95657Z"
      fill="#01BFFE"
    />
  </svg>
);

const Overview = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.lhs}>
          <img src={Logo} className={classes.logo} />
          <span>Commehub</span>
        </div>
        <div className={classes.rhs}>
          <img className={classes.label} src={overviewLabel} alt="" />
          <div className={classes.title}>
            {leftQoute}
            <div>Buying shouldn’t break the bank</div>
            {rightQuote}
          </div>
          <div className={classes.description}>
            Commehub provides an easy way for retailers, and even consumers to
            engage in group purchases. The app aims to streamline the
            group-buying experience through a seamless process of creating or
            joining product groups, inviting other buyers, and paying for
            products on the app.
          </div>
          <div className={classes.iconWrapper}>
            <div className={classes.iconContainer}>
              <img src={AppleIcon} alt="" />
            </div>
            <div className={classes.iconContainer}>
              <img src={XIcon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.title}>Here are some screens in motion!</div>

        <div className={classes.sections}>
          <div className={classes.section}>
            <img className={classes.image} src={overviewImage1} alt="" />
            <div className={classes.details}>
              <div className={classes.title}>01.</div>
              <div className={classes.title}>Meaningful interaction</div>
              <div className={classes.description}>
                Commehub featured smooth micro interactions that helps users
                perform multiple actions, while keeping the interface
                uncluttered{" "}
              </div>
            </div>
          </div>

          <div className={`${classes.section} ${classes.alternate}`}>
            <div className={classes.details}>
              <div className={classes.title}>02.</div>
              <div className={classes.title}>Discover products</div>
              <div className={classes.description}>
                Discover thousands of trending products, and join active groups
                with few easy clicks.
              </div>
            </div>
            <img className={classes.image} src={overviewImage2} alt="" />
          </div>

          <div className={classes.section}>
            <img className={classes.image} src={overviewImage3} alt="" />
            <div className={classes.details}>
              <div className={classes.title}>03.</div>
              <div className={classes.title}>Start product groups</div>
              <div className={classes.description}>
                An intuitive and easy flow to create new product groups and
                invite other buyers to join.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
