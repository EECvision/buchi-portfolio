import classes from "./Creeo.module.css";
import banner from "../../assets/creeo.png";
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
import { useContext, useEffect } from "react";
import { ScrollContext } from "../../context/LocomotiveScroll/scrollContext";

const Creeo = () => {
  const { locomotiveScroll } = useContext(ScrollContext);

  useEffect(() => {
    if (locomotiveScroll) {
      locomotiveScroll.scrollTo("#creeo-container");
    }
  }, [locomotiveScroll]);

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
      <HappyToWork />
    </div>
  );
};

export default Creeo;
