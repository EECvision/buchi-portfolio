/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import classes from "./Welcome.module.css";
import gsap from "gsap";
import emoji from "../../assets/landing-page/emoji.webp";
import { useLocation } from "react-router-dom";
// import fonts from "../../fonts"

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const [loaderCounter, setCounter] = useState("1%");
  const [isFontsLoaded, setIsFontsLoaded] = useState(false);
  const [styleElement, setStyleElement] = useState<any>(null);

  const location = useLocation();

  const init = async () => {
    // Load the font
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
      })
      .from("#welcome-description", {
        opacity: 0,
        scale: 0.9,
        delay: 0.1,
        duration: 0.1,
        ease: "back",
      });

    let counter = 1;
    const increment = () => {
      if (counter <= 90) {
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

  const removeScrollbarStyle = () => {
    if (styleElement) {
      // Remove the style element from the document's head
      styleElement?.parentNode?.removeChild(styleElement);
      setStyleElement(null); // Reset the reference
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    // Check if the browser is a WebKit browser (Chrome, Safari)
    const isWebKit = "WebkitAppearance" in document.documentElement.style;

    if (location.pathname.includes("work")) {
      // Remove style if pathname includes 'work'
      removeScrollbarStyle();
    } else {
      if (isWebKit) {
        // Create a style element
        const styleElement = document.createElement("style");

        // Set the CSS rule to hide the scrollbar
        styleElement.textContent = "body::-webkit-scrollbar { display: none; }";

        // Append the style element to the document's head
        document.head.appendChild(styleElement);

        // Store a reference to the style element
        setStyleElement(styleElement);
      }
    }

    // Cleanup function
    return () => {
      // Remove the style element when the component unmounts
      removeScrollbarStyle();
    };
  }, [location]);

  return (
    <div
      className={`${classes.container} ${!loading && classes.inActive} ${
        !isFontsLoaded && classes.clearScreen
      }`}
    >
      <div className={classes.loadingContainer}>
        <div className={classes.counterContainer} id="welcome-counter">
          <div className={classes.counter}>{loaderCounter}</div>
          <div id="welcome-description" className={classes.description}>
            Loading really cool stuff, you will love it, <br /> Promise!
          </div>
        </div>

        <img id="welcome-emoji" className={classes.emoji} src={emoji} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
