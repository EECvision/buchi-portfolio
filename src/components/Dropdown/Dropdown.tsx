import classes from "./Dropdown.module.css";
import { useContext, useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import TextSlide from "../TextSlide/TextSlide";
import TextFade from "../TextFade/TextFade";
import { useLocation, useNavigate } from "react-router-dom";
import { ScrollContext } from "../../context/LocomotiveScroll/scrollContext";
import CustomDragV2, {
  MousePosition,
  MouseTrack,
} from "../CustomDragV2/CustomDragV2";
import CustomButtonV2 from "../CustomButtonV2/CustomButtonV2";
import connectIcon from "../../assets/icon-connect-2.png";
import useWindowWidth from "../../hooks/useWindowWidth";
import homeIcon from "../../assets/landing-page/icon-home.svg";
import downloadIcon from "../../assets/download-icon.svg";

const Dropdown = () => {
  const btnRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const twitterRef = useRef(null);
  const dribbleRef = useRef(null);
  const linkedinRef = useRef(null);
  const downloadRef = useRef(null);
  const homeRef = useRef(null);
  const burgerRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<"enter" | "leave">("leave");
  const [toggleCross, setToggleCross] = useState(false);
  const [mouseTrack, setMouseTrack] = useState<Record<string, MouseTrack>>({});
  const [cursorPosition, setCursorPosition] = useState<MousePosition>();

  const { locomotiveScroll } = useContext(ScrollContext);

  const { width } = useWindowWidth();

  const navigate = useNavigate();

  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleScrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setToggleCross(false);
      locomotiveScroll.scrollTo(element);
    }
  };

  const handleConnect = () => {
    setToggleCross(false);
  };

  const handleHome = () => {
    navigate("/");
    setToggleCross(false);
  };

  const handleMouseTrack = (e: MouseTrack, key: string) => {
    setMouseTrack((track) => ({ ...track, [key]: e }));
  };

  useEffect(() => {
    console.log(mouseTrack["harmburger"]);
  }, [mouseTrack]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      setState("enter");
    });

    mm.add("(min-width: 769px)", () => {
      ScrollTrigger.create({
        trigger: ".work",
        start: "top 5%",
        end: "bottom top",
        onLeaveBack: () => {
          setState("leave");
        },
        onEnter: () => {
          setState("enter");
        },
      });
    });
  }, [location.pathname]);

  useEffect(() => {
    if (isHome && !toggleCross) {
      const work = gsap.utils.toArray(".work")[0] as HTMLDivElement;
      const top = work.getBoundingClientRect().top;

      setToggleCross(false);
      setTimeout(() => {
        if (width > 768) {
          if (top < 20) return;
          setState("leave");
        } else {
          setState("enter");
        }
        // document.documentElement.scrollTop = 0;
      }, 0);
    }
  }, [location, width, toggleCross]);

  useEffect(() => {
    if (burgerRef.current && cursorPosition) {
      burgerRef.current.style.transform = `translate(${
        cursorPosition.x * 0.2
      }px, ${cursorPosition.y * 0.3}px)`;
    }

    console.log(cursorPosition);
  }, [cursorPosition]);

  return (
    <div className={`${classes.wrapper} ${true && classes.show}`}>
      <div className={classes.fixed}>
        <div
          className={`${classes.burgerWrapper} ${
            toggleCross || !isHome ? classes["enter"] : classes[state]
          }`}
        >
          <CustomDragV2
            onMouseMove={setCursorPosition}
            onClick={() => setToggleCross(!toggleCross)}
            bouce
          >
            <div
              ref={burgerRef}
              className={`${classes.harmburger}  ${
                toggleCross ? classes.set : classes.unset
              }`}
            >
              <div className={classes.cross}></div>
              <div className={classes.cross}></div>
            </div>
          </CustomDragV2>
        </div>
      </div>
      <div
        className={`${classes.contentWrapper} ${
          toggleCross ? classes.open : classes.close
        }`}
      >
        <div className={classes.content}>
          <TextFade trigger={toggleCross} delay={1.8}>
            <div className={classes.menu}>
              <CustomDragV2
                onClick={handleHome}
                customRef={homeRef}
                onMouseTrack={(e) => handleMouseTrack(e, "home")}
              >
                <CustomButtonV2
                  layoutClass={classes.layout}
                  offsetContainer={{ x: 0.05, y: 0.2 }}
                  offsetContent={{ x: 0.05, y: 0.2 }}
                  ref={homeRef}
                >
                  <div
                    className={`${classes.menuItem} ${
                      classes[mouseTrack["home"]]
                    }`}
                  >
                    <img src={homeIcon} alt="" />
                    <div>Home</div>
                  </div>
                </CustomButtonV2>
              </CustomDragV2>
            </div>
          </TextFade>
          <div className={classes.center}>
            <div className={classes.nav}>
              <TextSlide delay={0.65} trigger={toggleCross}>
                <CustomDragV2
                  onClick={() => handleScrollIntoView("Work")}
                  customRef={workRef}
                  onMouseTrack={(e) => handleMouseTrack(e, "work")}
                >
                  <CustomButtonV2
                    layoutClass={classes.layout}
                    offsetContainer={{ x: 0.05, y: 0.1 }}
                    offsetContent={{ x: 0.05, y: 0.1 }}
                    ref={workRef}
                  >
                    <div
                      className={`${classes.navItem} ${
                        classes[mouseTrack["work"]]
                      }`}
                    >
                      Work
                    </div>
                  </CustomButtonV2>
                </CustomDragV2>
              </TextSlide>

              <TextSlide delay={0.67} trigger={toggleCross}>
                <CustomDragV2
                  onClick={() => handleScrollIntoView("About")}
                  customRef={aboutRef}
                  onMouseTrack={(e) => handleMouseTrack(e, "about")}
                >
                  <CustomButtonV2
                    layoutClass={classes.layout}
                    offsetContainer={{ x: 0.05, y: 0.1 }}
                    offsetContent={{ x: 0.05, y: 0.1 }}
                    ref={aboutRef}
                  >
                    <div
                      className={`${classes.navItem} ${
                        classes[mouseTrack["about"]]
                      }`}
                    >
                      About me
                    </div>
                  </CustomButtonV2>
                </CustomDragV2>
              </TextSlide>

              <TextSlide delay={0.68} trigger={toggleCross}>
                <CustomDragV2
                  onClick={() => handleScrollIntoView("Contact")}
                  customRef={contactRef}
                  onMouseTrack={(e) => handleMouseTrack(e, "contact")}
                >
                  <CustomButtonV2
                    layoutClass={classes.layout}
                    offsetContainer={{ x: 0.05, y: 0.1 }}
                    offsetContent={{ x: 0.05, y: 0.1 }}
                    ref={contactRef}
                  >
                    <div
                      className={`${classes.navItem} ${
                        classes[mouseTrack["contact"]]
                      }`}
                    >
                      Contact
                    </div>
                  </CustomButtonV2>
                </CustomDragV2>
              </TextSlide>
            </div>
            <div className={classes.right}>
              <div className={classes.connectText}>
                <TextSlide trigger={toggleCross} delay={1.5}>
                  <div className={`${classes.link} `}>Hey.. Let's connect</div>
                </TextSlide>
              </div>
              <div className={classes.socialLinks}>
                <TextFade trigger={toggleCross} delay={1.8}>
                  <CustomDragV2
                    // onClick={() => handleLink("Work")}
                    customRef={twitterRef}
                    onMouseTrack={(e) => handleMouseTrack(e, "twitter")}
                  >
                    <CustomButtonV2
                      layoutClass={classes.layout}
                      offsetContainer={{ x: 0.05, y: 0.2 }}
                      offsetContent={{ x: 0.05, y: 0.2 }}
                      ref={twitterRef}
                    >
                      <div
                        className={`${classes.link} ${
                          classes[mouseTrack["twitter"]]
                        }`}
                      >
                        Twitter-X
                      </div>
                    </CustomButtonV2>
                  </CustomDragV2>
                </TextFade>

                <TextFade trigger={toggleCross} delay={1.82}>
                  <CustomDragV2
                    // onClick={() => handleLink("Work")}
                    customRef={linkedinRef}
                    onMouseTrack={(e) => handleMouseTrack(e, "linkedin")}
                  >
                    <CustomButtonV2
                      layoutClass={classes.layout}
                      offsetContainer={{ x: 0.05, y: 0.2 }}
                      offsetContent={{ x: 0.05, y: 0.2 }}
                      ref={linkedinRef}
                    >
                      <div
                        className={`${classes.link} ${
                          classes[mouseTrack["linkedin"]]
                        }`}
                      >
                        LinkedIn
                      </div>
                    </CustomButtonV2>
                  </CustomDragV2>
                </TextFade>

                <TextFade trigger={toggleCross} delay={1.84}>
                  <CustomDragV2
                    // onClick={() => handleLink("Work")}
                    customRef={dribbleRef}
                    onMouseTrack={(e) => handleMouseTrack(e, "dribble")}
                  >
                    <CustomButtonV2
                      layoutClass={classes.layout}
                      offsetContainer={{ x: 0.05, y: 0.2 }}
                      offsetContent={{ x: 0.05, y: 0.2 }}
                      ref={dribbleRef}
                    >
                      <div
                        className={`${classes.link} ${
                          classes[mouseTrack["dribble"]]
                        }`}
                      >
                        Dribble
                      </div>
                    </CustomButtonV2>
                  </CustomDragV2>
                </TextFade>
              </div>
              <TextFade trigger={toggleCross} delay={1.86}>
                <CustomDragV2
                  // onClick={() => handleDownload}
                  customRef={downloadRef}
                  onMouseTrack={(e) => handleMouseTrack(e, "download")}
                >
                  <CustomButtonV2
                    layoutClass={classes.layout}
                    offsetContainer={{ x: 0.05, y: 0.2 }}
                    offsetContent={{ x: 0.05, y: 0.2 }}
                    ref={downloadRef}
                  >
                    <div
                      className={`${classes.resumeLink} ${
                        classes[mouseTrack["download"]]
                      }`}
                    >
                      Download Resume <img src={downloadIcon} alt="" />
                    </div>
                  </CustomButtonV2>
                </CustomDragV2>
              </TextFade>
            </div>
          </div>
          <div className={classes.btnContainer}>
            <CustomDragV2
              onClick={handleConnect}
              bouce
              customRef={btnRef}
              onMouseTrack={(e) => handleMouseTrack(e, "btn")}
            >
              <CustomButtonV2 layoutClass={classes.btn} ref={btnRef}>
                <div
                  className={`${classes.btnText} ${classes[mouseTrack["btn"]]}`}
                >
                  Get in touch <img src={connectIcon} alt="" />
                </div>
              </CustomButtonV2>
            </CustomDragV2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
