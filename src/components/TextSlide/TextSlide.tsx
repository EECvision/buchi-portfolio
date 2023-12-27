import classes from "./TextSlide.module.css";
import { useEffect, useRef, useState } from "react";

interface TextSlideProps {
  children: React.ReactNode;
  trigger: boolean;
  delay: number;
}

const TextSlide = ({ children, trigger: _trigger, delay }: TextSlideProps) => {
  const [trigger, setTrigger] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setHidden(true);
    setTimeout(
      () => {
        setTrigger(_trigger);
      },
      _trigger ? delay * 1000 : 0
    );
  }, [_trigger, delay]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.onanimationend = (e) => {
        if (e.animationName.includes("enter")) {
          setHidden(false);
        }
      };
    }
  }, []);

  return (
    <div
      style={{ overflow: hidden ? "hidden" : "unset" }}
      className={`${classes.container} slide`}
    >
      <div
        ref={contentRef}
        className={`${classes.content} ${
          trigger ? classes.enter : classes.leave
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default TextSlide;
