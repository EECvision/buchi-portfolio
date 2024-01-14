import classes from "./UsabilityTest.module.css";
import usabilityTestLabel from "../../../assets/bleuwater/usability-test-label.webp";

const UsabilityTest = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img className={classes.label} src={usabilityTestLabel} alt="" />
        <div className={classes.title}>User Testing</div>
        <div className={classes.description}>
          Prior to the mainnet launch, we first deployed the web application on
          both Ethereum and Polygon Testnet. We then engaged in thorough user
          testing, involving both the community and new users from external
          testing websites. The series of tests and feedback provided valuable
          insights to address any issues or uncertainties users encountered when
          creating digital collections. This feedback also served as a guide for
          our future development efforts.
        </div>
      </div>
    </div>
  );
};

export default UsabilityTest;
