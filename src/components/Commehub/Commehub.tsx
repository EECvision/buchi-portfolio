import Brandina from "./Brandina/Brandina";
import Challenge from "./Challenge/Challenge";
import classes from "./Commehub.module.css";
import Competitors from "./Competitors/Competitors";
import Goal from "./Goal/Goal";
import OtherScreens from "./OtherScreens/OtherScreens";
import Overview from "./Overview/Overview";
import Persona from "./Persona/Persona";
import Prototype from "./Prototype/Prototype";
import TestPhase from "./TestPhase/TestPhase";
import UserFlow from "./UserFlow/UserFlow";
import UserJourney from "./UserJourney/UserJourney";
import VisualDesign from "./VisualDesign/VisualDesign";
import Wireframe from "./Wireframe/Wireframe";
import banner from "../../assets/commehub/banner.webp";
import Description from "./Description/Description";
import HappyToWork from "../HappyToWork/HappyToWork";
import NextProject from "../NextProject/NextProject";

const Commehub = () => {
  return (
    <div id="commehub-container" className={classes.container}>
      <img className={classes.image} src={banner} alt="" />
      <Description />
      <Overview />
      <Challenge />
      <Goal />
      <Persona />
      <UserJourney />
      <Competitors />
      <UserFlow />
      <Wireframe />
      <Brandina />
      <VisualDesign />
      <OtherScreens />
      <TestPhase />
      <Prototype />
      <NextProject link="/work/bleuwater" />
      <HappyToWork />
    </div>
  );
};

export default Commehub;
