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

const LandingPage = () => {
  return (
    <div className={`${classes.container} landing-page`}>
      {/* <div id="overlay-all" className={classes.overlayAll}></div> */}
      <CustomCursor />
      <div className={classes.grayArea}>
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
      <div className={`${classes.grayArea}`}>
        <div data-scroll data-scroll-speed="-0.1" className={classes.wrapper}>
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
