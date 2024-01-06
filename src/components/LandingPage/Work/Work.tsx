/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from "./Work.module.css";
import ProjectPage from "../Project/Project";
import { useEffect, useRef } from "react";
import CustomDragV2 from "../../CustomDragV2/CustomDragV2";
import CustomButtonV2 from "../../CustomButtonV2/CustomButtonV2";
import { projects } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Work = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const cards: HTMLDivElement[] = gsap.utils.toArray(".work-card");
    const elements: HTMLDivElement[] = gsap.utils.toArray(".scroll-element");

    mm.add(
      {
        isDesktop: "(min-width: 1025px)",
        isMobile: "(max-width: 1024px)",
      },
      (context) => {
        if (!context.conditions) return;
        const { isMobile } = context.conditions;

        if (isMobile) return;

        cards.forEach((card, idx) => {
          if (idx !== 0) {
            gsap.set(card, { yPercent: "100" });
          }
        });

        elements.forEach((elem, idx) => {
          elem.style.height = `${cards[idx].getBoundingClientRect().height}px`;
          gsap
            .timeline()
            .to(cards[idx], {
              yPercent: `0`,
              scrollTrigger: {
                trigger: elem,
                start: "top bottom",
                end: "bottom bottom",
                // markers: true,
                scrub: true,
              },
            })
            .to(cards[idx], {
              scale:
                cards.length - 1 - idx > 0
                  ? 1 - (elements.length - idx) * 0.06
                  : 1,
              y: `${idx * 10}px`,
              scrollTrigger: {
                trigger: elem,
                start: "top top",
                end: "+=1000",
                scrub: true,
              },
            })
            .to(
              cards[idx + 1],
              {
                boxShadow: "0px -92px 400px -68px rgba(0, 0, 0, 1)",
                scrollTrigger: {
                  trigger: elem,
                  start: "top top",
                  end: "+=1000",
                  scrub: true,
                },
              },
              "0"
            )
            .to(
              cards[idx],
              {
                boxShadow: "unset",
                scrollTrigger: {
                  trigger: elem,
                  start: "top top",
                  end: "+=1000",
                  scrub: true,
                },
              },
              "0"
            );
        });

        ScrollTrigger.create({
          trigger: "#scroll-window",
          start: "top top",
          end: "bottom bottom",
          pin: ".work-projects",
          pinSpacing: false,
          // markers: true,
        });
      }
    );

    gsap
      .timeline()
      .to(".work-label", {
        scrollTrigger: {
          trigger: "#scroll-window",
          start: "top 3.7%",
          end: "bottom bottom",
          pin: ".work-label",
        },
      })
      .to(".work-label", {
        yPercent: "-100",
        scrollTrigger: {
          trigger: "#scroll-window",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
  }, []);

  return (
    <>
      <div id="Work" className={`${classes.container} work`}>
        <div className={classes.wrapper}>
          <div className={`${classes.scrollWrapper} work-scroll`}>
            <div className={`${classes.label} work-label`}>Featured Works</div>
            <div className={`${classes.projects} work-projects`}>
              {projects.map((project, idx) => (
                <ProjectPage data={project} key={idx} />
              ))}
            </div>

            <div id="scroll-window" className={classes.scrollWindow}>
              {projects.map((_, idx) => (
                <div className="scroll-element" key={idx}></div>
              ))}
            </div>
          </div>

          <div className={classes.btnContainer}>
            <CustomDragV2 bouce customRef={btnRef}>
              <CustomButtonV2
                layoutClass={classes.btn}
                overlayClass={classes.btnOverlay}
                ref={btnRef}
              >
                <div className={classes.text}>
                  More works <div className={classes.count}>2</div>
                </div>
              </CustomButtonV2>
            </CustomDragV2>
          </div>
        </div>
      </div>
    </>
  );
};
