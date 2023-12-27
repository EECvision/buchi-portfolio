import gsap from "gsap";
import "./styles.css";
import { useEffect } from "react";

const Playground = () => {
  useEffect(() => {
    gsap.timeline().from(".letter", {
      y: 160,
      stagger: 0.1,
      duration: 0.8,
      ease: "back",
    });

    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="letter-container">
      <span className="letter">A</span>
      <span className="letter">B</span>
      <span className="letter">C</span>
      <span className="letter">D</span>
      <span className="letter">E</span>
    </div>
  );
};

export default Playground;
