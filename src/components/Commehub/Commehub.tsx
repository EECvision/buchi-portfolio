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
import vid from "../../assets/videos/Commehub/All videos sweet.webm";
import expandIcon from "../../assets/commehub/icon-expand.svg";

const Commehub = () => {
  function openFullscreen() {
    const videoElement = document.getElementById("myVideo");

    if (!videoElement) return;

    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    }
  }

  return (
    <div id="commehub-container" className={classes.container}>
      <div className={classes.bannerImgContainer}>
        <img className={classes.image} src={banner} alt="" />
        <div onClick={openFullscreen} className={classes.videoContainer}>
          <video id="myVideo" autoPlay muted loop src={vid}></video>
          <img className={classes.expandIcon} src={expandIcon} alt="" />
        </div>
      </div>
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
