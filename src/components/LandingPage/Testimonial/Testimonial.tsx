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

    const cards: HTMLDivElement[] = gsap.utils.toArray(".testimonial-card");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025PX)", () => {
      cards.forEach((card, idx) => {
        gsap.from(card, {
          yPercent: "50",
          delay: idx === 0 ? 0.1 : idx === 1 ? 0.2 : 0.25,
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: card,
            start: "top bottom",
            end: "bottom top",
          },
        });
      });
    });

    mm.add("(max-width: 1024PX)", () => {
      cards.forEach((card, idx) => {
        const innerCard = document.getElementsByClassName(
          "testimonial-inner-card"
        )[idx];
        gsap.from(card, {
          yPercent: "50",
          delay: idx === 0 ? 0.05 : idx === 1 ? 0.1 : 0.125,
          scrollTrigger: {
            toggleActions: "play none none reverse",
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            onLeaveBack: () => {
              innerCard.classList.remove("enter");
            },
            onEnter: () => {
              innerCard.classList.add("enter");
            },
          },
        });
      });
    });

    ScrollTrigger.create({
      trigger: ".testimonial",
      start: "top bottom",
      end: "bottom top",
      onLeaveBack: () => {
        setState("leave");
      },
      onEnter: () => {
        setState("enter");
      },
    });
  }, []);

  return (
    <div className={`${classes.container} testimonial`}>
      <div className={classes.innerContainer}>
        <TextFade delay={0} trigger={state === "enter" ? true : false}>
          <div className={classes.title}>What they say about me</div>
        </TextFade>
        <div id="cardContainer" className={`${classes.wrapper}`}>
          {data.map((d, idx) => (
            <div className={`${classes.card} testimonial-card`} key={idx}>
              <Card {...d} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
