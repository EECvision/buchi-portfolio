import { useEffect, useState } from "react";
import classes from "./Welcome.module.css";
import gsap from "gsap";
// import fonts from "../../fonts"

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const [loaderCounter, setCounter] = useState("1%");

  // Define your font
  const font = new FontFace(
    "Monument Extended",
    "url(../../fonts/monumentextended-ultrabold-webfont.woff2)",
    {
      weight: "bold",
    }
  );

  useEffect(() => {
    // Load the font
    console.log("font loading");

    font
      .load()
      .then((loadedFont) => {
        // Font is loaded, you can now use it
        // document.fonts.add(loadedFont);
        console.log("Font loaded:", loadedFont);

        // Your code to render the page or perform additional actions
        // ...
      })
      .catch((error) => {
        console.error("Font failed to load:", error);
      });

    // layout
    const layout = document.getElementById("layout");
    if (!layout) return;
    setLoading(true);
    layout.style.height = "100vh";
    layout.style.overflow = "hidden";

    // text
    gsap.set(["#welcome-title", "#welcome-description"], { opacity: 0 });

    gsap
      .timeline()
      .to(["#welcome-title", "#welcome-description"], { opacity: 1 })
      .from(
        "#welcome-title",
        {
          y: 80,
          duration: 0.65,
          delay: 0.3,
          ease: "power4.out",
        },
        "0"
      )
      .from(
        "#welcome-description",
        {
          y: -80,
          duration: 0.65,
          delay: 0.3,
          ease: "power4.out",
        },
        "0"
      )
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
  }, []);

  return (
    <div className={`${classes.container} ${!loading && classes.inActive}`}>
      <div className={classes.textContainer}>
        <div className={classes.animationContainer}>
          <div id="welcome-title" className={classes.title}>
            Hello! 👋🏼
          </div>
        </div>
        <div className={classes.animationContainer}>
          <div id="welcome-description" className={classes.description}>
            I'm currently on the market for new design roles, and <br /> you
            found me first {":)"}
          </div>
        </div>
      </div>

      <div id="welcome-counter" className={classes.loadingContainer}>
        <div className={classes.counter}>{loaderCounter}</div>
        <div className={classes.description}>
          Loading really cool stuff, you will <br /> love it, Promise!
        </div>
      </div>
    </div>
  );
};

export default Welcome;
