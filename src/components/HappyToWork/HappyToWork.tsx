/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from "./HappyToWork.module.css";
import Envelop from "../../assets/envelop.svg";
import copyHead from "../../assets/icon-copy-head.svg";
import copiedHead from "../../assets/icon-copied-head.svg";
import { useState } from "react";

const HappyToWork = () => {
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState(false);
  const [enableHover, setEnableHover] = useState(true);

  const handleCopy = (event: any) => {
    event.stopPropagation();
    navigator.clipboard.writeText("Hello@Buchi.pro");
    setCopied(true);
    setEnableHover(false);
    setHover(false);
    setTimeout(() => {
      setCopied(false);
    }, 650);
  };

  const handleMouseEnter = () => {
    if (enableHover) {
      setHover(true);
    }
  };

  const handleMouseLeave = () => {
    setEnableHover(true);
    setHover(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>Happy to work with you</div>
        <div className={`${classes.title} ${classes.mobile}`}>
          Let&apos;s work together!
        </div>
        <div className={classes.description}>
          I'm one email away. so, go ahead, click and drop me a message. Let's
          build that awesome project together!
        </div>
        <div className={`${classes.description} ${classes.mobile}`}>
          I'm one email away. so, go ahead, click and drop me a message.
        </div>
        <div className={classes.pointer}>👇</div>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleCopy}
          className={`${classes.emailContainer} ${hover && classes.hover}`}
        >
          <div className={classes.envelopIcon}>
            {copied ? (
              <img className={classes.copied} src={copiedHead} alt="" />
            ) : (
              <>
                <img className={classes.envelop} src={Envelop} alt="" />
                <img className={classes.head} src={copyHead} alt="" />
              </>
            )}
          </div>
          <div className={classes.textContainer}>
            {copied ? (
              <div className={`${classes.bItem} ${classes.copied}`}>
                Copied e-mail
              </div>
            ) : (
              <div className={classes.scrollSpace}>
                <div className={classes.bItem}>Hello@Buchi.pro</div>
                <div className={classes.bItem}>Copy e-mail</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyToWork;
