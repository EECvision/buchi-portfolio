import classes from "./Bleuwater.module.css";
import banner from "../../assets/bleuwater/banner.png";
import HappyToWork from "../HappyToWork/HappyToWork";
import AboutProject from "./AboutProject/AboutProject";
import Notification from "./Notification/Notification";
import DesignHighlights from "./DesignHighlights/DesignHighlights";
import TheChallenge from "./TheChallenge/TheChallenge";
import ValueLost from "./ValueLost/ValueLost";
import Community from "./Community/Community";
import TheGaol from "./TheGoal/TheGoal";
import TheProcess from "./TheProcess/TheProcess";
import FeedbackLoop from "./FeedbackLoop/FeedbackLoop";
import DigitalCollection from "./DigitalCollection/DigitalCollection";
import Wallet from "./Wallet/Wallet";
import Ecosystem from "./Ecosystem/Ecosystem";
import Splits from "./Splits/Splits";
import UsabilityTest from "./UsabilityTest/UsabilityTest";
import ProductImpact from "./ProductImpact/ProductImpact";
import Experience from "./Experience/Experience";
import FutureStep from "./FutureStep/FutureStep";

const Bleuwater = () => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={banner} alt="" />
      <Notification />
      <AboutProject />
      <DesignHighlights />
      <TheChallenge />
      <ValueLost />
      <Community />
      <TheGaol />
      <TheProcess />
      <FeedbackLoop />
      <DigitalCollection />
      <Wallet />
      <Ecosystem />
      <Splits />
      <UsabilityTest />
      <ProductImpact />
      <Experience />
      <FutureStep />
      <HappyToWork />
    </div>
  );
};

export default Bleuwater;
