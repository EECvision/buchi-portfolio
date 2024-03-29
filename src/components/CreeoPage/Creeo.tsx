import classes from "./Creeo.module.css";
import banner from "../../assets/creeo-banner.webp";
import AboutProject from "./AboutProject/AboutProject";
import Visualization from "./Visualization/Visualization";
import UserPersona from "./UserPersona/UserPersona";
import UserJourney from "./UserJourney/UserJourney";
import CompetitiveAnalysis from "./CompetitiveAnalysis/CompetitiveAnalysis";
import UserFlow from "./UserFlow/UserFlow";
import Sketches from "./Sketches/Sketches";
import DigitalWireframe from "./DigitalWireframe/DigitalWireframe";
import StyleGuide from "./StyleGuide/StyleGuide";
import Brand from "./Brand/Brand";
import HiFidelity from "./HiFidelity/HiFidelity";
import OtherScreens from "./OtherScreens/OtherScreens";
import Prototype from "./Prototype/Prototype";
import Evaluations from "./Evaluations/Evaluations";
import FutureSteps from "./FutureSteps/FutureSteps";
import Reflection from "./Reflection/Reflection";
import HappyToWork from "../HappyToWork/HappyToWork";
import NextProject from "../NextProject/NextProject";

const Creeo = () => {
  return (
    <div id="creeo-container" className={classes.container}>
      <img className={classes.image} src={banner} alt="" />
      <AboutProject />
      <Visualization />
      <UserPersona />
      <UserJourney />
      <CompetitiveAnalysis />
      <UserFlow />
      <Sketches />
      <DigitalWireframe />
      <StyleGuide />
      <Brand />
      <HiFidelity />
      <OtherScreens />
      <Prototype />
      <Evaluations />
      <FutureSteps />
      <Reflection />
      <NextProject link="/work/commehub" />
      <HappyToWork />
    </div>
  );
};

export default Creeo;
