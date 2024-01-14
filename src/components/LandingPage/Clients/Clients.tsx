import classes from "./Clients.module.css";
import client1 from "../../../assets/landing-page/project-bleuwater.webp";
import client2 from "../../../assets/landing-page/project-creeo.webp";
import client3 from "../../../assets/landing-page/project-genadrop.webp";
import client4 from "../../../assets/landing-page/project-minority.webp";
//
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import TextFade from "../../TextFade/TextFade";

const clients = [client1, client2, client3, client4];

const Clients = () => {
  const [state, setState] = useState<"enter" | "leave">("leave");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".client",
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
    <div className={`${classes.container} client`}>
      <TextFade trigger={state === "enter" ? true : false} delay={0.65}>
        <div className={classes.title}>Selected Clients</div>
      </TextFade>
      <div className={classes.clientWrapper}>
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className={classes.clientContainer}>
            {clients.map((c, idx) => (
              <div className={classes.client} key={idx}>
                <img src={c} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
