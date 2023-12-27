import classes from "./TextFade.module.css";
import { useEffect, useState } from "react";

interface TextSlideProps {
  children: React.ReactNode;
  trigger: boolean;
  delay: number;
  duration?: "normal" | "fast" | "slow";
}

const TextFade = ({ children, trigger: _trigger, delay }: TextSlideProps) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTimeout(
      () => {
        setTrigger(_trigger);
      },
      _trigger ? delay * 1000 : 0
    );
  }, [_trigger, delay]);

  return (
    <div className={`${classes.container}`}>
      <div
        className={`${classes.content} ${
          trigger ? classes.enter : classes.leave
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default TextFade;
