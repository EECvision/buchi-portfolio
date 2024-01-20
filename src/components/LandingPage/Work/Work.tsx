/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from "./Work.module.css";
import ProjectPage from "../Project/Project";
import { useEffect, useRef, useState } from "react";
import CustomDragV2 from "../../CustomDragV2/CustomDragV2";
import CustomButtonV2 from "../../CustomButtonV2/CustomButtonV2";
import { projects } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import overlayImage from "../../../assets/overlay-4.webp";

export const Work = () => {
  const btnRef = useRef(null);
  const [addOverlay, setAddOverlay] = useState<"none" | "first" | "second">(
    "none"
  );

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
              cards[idx + 1]?.children[0],
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

    gsap.timeline().to(".work-label", {
      scrollTrigger: {
        trigger: "#scroll-window",
        start: "top 3.7%",
        end: "bottom bottom",
        pin: ".work-label",
        onEnter: () => {
          setAddOverlay("second");
        },
        onLeaveBack: () => {
          setAddOverlay("none");
        },
      },
    });

    gsap.timeline().to(".work-label", {
      scrollTrigger: {
        trigger: "#scroll-window",
        start: "top 50%",
        end: "bottom bottom",
        onEnter: () => {
          setAddOverlay("first");
        },
        onLeaveBack: () => {
          setAddOverlay("none");
        },
      },
    });
  }, []);

  return (
    <>
      <div
        id="Work"
        className={`${classes.container} ${classes[addOverlay]} work`}
      >
        <img className={classes.overlayImage} src={overlayImage} alt="" />

        <div className={classes.wrapper}>
          <div className={classes.mobileLabel}>Featured Works</div>
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
