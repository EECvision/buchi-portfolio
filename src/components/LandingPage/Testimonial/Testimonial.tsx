import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Card from "./Card/Card";
import classes from "./Testimonial.module.css";
import { data } from "./data";
import TextFade from "../../TextFade/TextFade";

const Testimonial = () => {
  const [state, setState] = useState<"enter" | "leave">("leave");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // const mm = gsap.matchMedia();

    // mm.add("(min-width: 1025PX)", () => {
    ScrollTrigger.create({
      trigger: ".testimonial",
      start: "top 80%",
      end: "bottom top",
      onLeaveBack: () => {
        setState("leave");
      },
      onEnter: () => {
        setState("enter");
      },
    });
    // });
  }, []);

  return (
    <div className={`${classes.container} testimonial`}>
      <div className={classes.innerContainer}>
        <TextFade delay={0} trigger={state === "enter" ? true : false}>
          <div className={classes.title}>What they say about me</div>
        </TextFade>
        <div id="cardContainer" className={`${classes.wrapper}`}>
          {data.map((d, idx) => (
            <div className={`${classes.card} ${classes[state]}`} key={idx}>
              <Card {...d} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
