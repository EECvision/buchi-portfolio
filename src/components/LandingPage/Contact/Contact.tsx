import classes from "./Contact.module.css";
import buchi from "../../../assets/landing-page/buchi-avatar.svg";
import { useRef, useContext } from "react";
import CustomDragV2 from "../../CustomDragV2/CustomDragV2";
import CustomButtonV2 from "../../CustomButtonV2/CustomButtonV2";
import phoneIcon from "../../../assets/landing-page/icon-phone.svg";
import emailIcon from "../../../assets/landing-page/icon-email.svg";
import { CursorContext } from "../../../context/cursor/CursorContext";
import { setComponent } from "../../../context/cursor/cursorActions";

const Contact = () => {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const { dispatch } = useContext(CursorContext);

  const handleMouseEnter = () => {
    dispatch(setComponent("email"));
  };

  const handleMouseLeave = () => {
    dispatch(setComponent(null));
  };

  return (
    <>
      <div id="Contact" className={classes.container}>
        <div className={classes.imageContainer}>
          <img src={buchi} alt="" />
        </div>
        <div className={classes.text}>
          Happy to work with you, send a message
        </div>
        <div className={classes.mainText}>
          Hello@Buchi.com
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={classes.mainTextOverlay}
          ></div>
        </div>
        <div className={classes.btnContainer}>
          <CustomDragV2 bouce customRef={btnRef1}>
            <CustomButtonV2
              layoutClass={classes.btn}
              overlayClass={classes.btnOverlay}
              ref={btnRef1}
            >
              <div className={classes.btnText}>
                <img src={emailIcon} alt="" />
                <span>Hello@Buchi.com</span>
              </div>
            </CustomButtonV2>
          </CustomDragV2>
          <CustomDragV2 bouce customRef={btnRef2}>
            <CustomButtonV2
              layoutClass={classes.btn}
              overlayClass={classes.btnOverlay}
              ref={btnRef2}
            >
              <div className={classes.btnText}>
                <img src={phoneIcon} alt="" />
                <span>+234 8024386677</span>
              </div>
            </CustomButtonV2>
          </CustomDragV2>
        </div>
      </div>
    </>
  );
};

export default Contact;
