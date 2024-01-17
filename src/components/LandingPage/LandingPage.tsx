import CustomCursor from "../CustomCursor/CustomCursor";
import Footer from "../Footer/Footer";
import AboutMe from "./AboutMe/AboutMe";
import Clients from "./Clients/Clients";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import classes from "./LandingPage.module.css";
import Navbar from "./Navbar/Navbar";
import Testimonial from "./Testimonial/Testimonial";
import { Work } from "./Work/Work";
import overlayImage from "../../assets/overlay-4.webp";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LandingPage = () => {
  const [addOverlay, setAddOverlay] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".landing-page-section3",
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        setAddOverlay(true);
        console.log("enter");
      },
      onLeaveBack: () => {
        setAddOverlay(false);
        console.log("leave back");
      },
    });
  }, []);

  return (
    <div className={`${classes.container} landing-page`}>
      {/* <div id="overlay-all" className={classes.overlayAll}></div> */}
      <CustomCursor />
      <div className={classes.grayArea}>
        <img className={classes.overlayImage} src={overlayImage} alt="" />
        <div
          id="nav-wrapper"
          className={`${classes.navWrapper} header-container`}
        >
          <Navbar />
          <Header />
        </div>
        <div id="overlay" className={classes.overlay}></div>
        <Work />
      </div>
      <div className={`${classes.darkArea}`}>
        <AboutMe />
        <div className={classes.wrapper}>
          <Testimonial />
        </div>
        <Clients />
      </div>
      <div
        className={`${classes.grayArea} ${classes.section3} landing-page-section3`}
      >
        <img
          className={`${classes.overlayImage} ${addOverlay && classes.show}`}
          src={overlayImage}
          alt=""
        />
        <div data-scroll data-scroll-speed="-0.1" className={classes.wrapper}>
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
