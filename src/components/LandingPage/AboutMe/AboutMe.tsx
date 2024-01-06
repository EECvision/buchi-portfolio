/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from "./AboutMe.module.css";
import buchi from "../../../assets/landing-page/buchi-image2.png";
import { about } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import TextSlideV2 from "../../TextSlideV2/TextSlideV2";
import TextFade from "../../TextFade/TextFade";

const AboutMe = () => {
  const [state, setState] = useState<"enter" | "leave">("leave");
  const [intersectCount, setIntersectCount] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".about",
      start: "top 80%",
      end: "bottom top",
      onLeaveBack: () => {
        setState("leave");
      },
      onEnter: () => {
        setState("enter");
      },
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      ScrollTrigger.create({
        trigger: ".about-display-container",
        start: "top top",
        end: "bottom bottom",
        pin: ".about-image",
        pinSpacing: false,
      });

      ScrollTrigger.create({
        trigger: ".about-display-container",
        start: "top top",
        end: "bottom bottom",
        pin: ".about-tracker",
        pinSpacing: false,
      });

      gsap.from(".about-image-2", {
        scale: 0.55,
        opacity: 0.1,
        scrollTrigger: {
          trigger: ".about-display-container",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0.5],
    };

    const callback = (entries: any) => {
      entries.map((entry: any) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            duration: 1.65,
          });
          const count = entry.target.getAttribute("data-about-card");
          setIntersectCount(count);
        } else {
          gsap.to(entry.target, {
            opacity: 0,
            duration: 0.65,
          });
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const cards: HTMLDivElement[] = gsap.utils.toArray(".about-card");

    cards.forEach((card: any) => {
      observer.observe(card);
    });
  }, []);

  const desktopText = (
    <div className={classes.mainText}>
      <TextSlideV2 trigger={state === "enter"} delay={0.1}>
        I'm a multidisciplinary Product Designer with
      </TextSlideV2>
      <TextSlideV2 trigger={state === "enter"} delay={0.2}>
        4+ years of experience in designing clean
      </TextSlideV2>
      <TextSlideV2 trigger={state === "enter"} delay={0.3}>
        UIs & impactful user experiences
      </TextSlideV2>
    </div>
  );

  const mobileText = (
    <div className={`${classes.mainText} ${classes.mobile}`}>
      <TextSlideV2 trigger={state === "enter"} delay={0.1}>
        I'm a multidisciplinary Product
      </TextSlideV2>
      <TextSlideV2 trigger={state === "enter"} delay={0.2}>
        Designer with 4+ years of
      </TextSlideV2>
      <TextSlideV2 trigger={state === "enter"} delay={0.3}>
        experience in designing clean
      </TextSlideV2>
      <TextSlideV2 trigger={state === "enter"} delay={0.3}>
        UIs & impactful user experiences
      </TextSlideV2>
    </div>
  );

  return (
    <div id="About" className={`${classes.container} about`}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <TextSlideV2 trigger={state === "enter"} delay={0.3}>
            {"(ABOUT ME)"}
          </TextSlideV2>
        </div>
        <br />
        <br />
        <div className={classes.description}>
          {desktopText}
          {mobileText}
          <TextFade trigger={state === "enter"} delay={0.6}>
            <div className={classes.text}>Currently designing @Bleuwater</div>
          </TextFade>
        </div>
      </div>

      <div className={`${classes.displayContainer} about-display-container`}>
        <div className={`${classes.imageWrapper} about-image`}>
          <div className={`${classes.imageWrapper2} about-image-2`}>
            <img src={buchi} alt="" />
          </div>
        </div>
        <div className={classes.aboutContainer}>
          <div></div>
          {about.map((el, idx) => (
            <div key={idx} className={classes.aboutWrapper}>
              <div
                data-about-card={`${idx + 1}`}
                className={`${classes.content} about-card`}
              >
                <div className={classes.title}>{el.title}</div>
                {/* <div className={classes.accent}>{el.subTitle}</div> */}
                <div className={classes.text2}>{el.text1}</div>
                <br />
                <div className={classes.text2}>{el.text2}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${classes.tracker} about-tracker`}>
          {about.map((_, idx) => (
            <div
              className={`${classes.track} ${
                intersectCount > idx && classes.active
              }`}
              key={idx}
            >
              <div className={classes.innerTrack}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
