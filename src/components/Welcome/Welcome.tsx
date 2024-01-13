import { useEffect, useState } from "react";
import classes from "./Welcome.module.css";
import gsap from "gsap";
import emoji from "../../assets/landing-page/emoji.png";
// import fonts from "../../fonts"

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const [loaderCounter, setCounter] = useState("1%");
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  const init = async () => {
    // Load the font
    console.log("font loading");

    await document.fonts.ready;
    setIsFontsLoaded(true);
    // layout
    const layout = document.getElementById("layout");
    if (!layout) return;
    setLoading(true);
    layout.style.height = "100vh";
    layout.style.overflow = "hidden";

    gsap.set("#welcome-emoji", { yPercent: "100" });
    // text
    gsap
      .timeline()
      .to("#welcome-emoji", {
        delay: 0.3,
        duration: 0.6,
        ease: "back",
        yPercent: "0",
      })
      .from("#welcome-counter", {
        opacity: 0,
        scale: 0.9,
        delay: 0.3,
        duration: 0.3,
        ease: "back",
        onComplete: () => {
          increment();
        },
      });

    let counter = 1;
    const increment = () => {
      if (counter <= 100) {
        setCounter(counter + "%");
        counter++;
        setTimeout(
          increment,
          Math.random() * 15 > 1 ? Math.random() * 20 : Math.random() * 500
        );
      } else {
        setLoading(false);
        layout.style.height = "auto";
        layout.style.overflow = "auto";
        window.sessionStorage.setItem("isLoaded", "true");

        gsap
          .timeline()
          .from(
            "#header-image-container",
            {
              y: 200,
              duration: 0.45,
              delay: 0.2,
            },
            "0"
          )
          .from(
            "#header-connect-button",
            {
              y: 200,
              duration: 0.55,
              delay: 0.2,
            },
            "0"
          )
          // .from(
          //   ".header-letter",
          //   {
          //     y: 140,
          //     duration: 0.45,
          //     delay: 0.6,
          //   },
          //   "0"
          // )
          // .from(
          //   "#Work",
          //   {
          //     y: 40,
          //     duration: 0.45,
          //     delay: 0.6,
          //   },
          //   "0"
          // )
          .from(
            [".header-left"],
            { y: 40, opacity: 0, delay: 0.4, duration: 0.45 },
            "0"
          )
          .from(
            [".header-right"],
            { y: 40, opacity: 0, delay: 0.4, duration: 0.45 },
            "0"
          );
      }
    };
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      className={`${classes.container} ${!loading && classes.inActive} ${
        !isFontsLoaded && classes.clearScreen
      }`}
    >
      <div className={classes.loadingContainer}>
        <div id="welcome-counter">
          <div className={classes.counter}>{loaderCounter}</div>
          <div className={classes.description}>
            Loading really cool stuff, you will <br /> love it, Promise!
          </div>
        </div>

        <img id="welcome-emoji" className={classes.emoji} src={emoji} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
