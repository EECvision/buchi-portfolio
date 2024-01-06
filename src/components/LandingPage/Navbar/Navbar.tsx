/* eslint-disable react-hooks/exhaustive-deps */
import classes from "./Navbar.module.css";
import ArrowDown from "../../../assets/landing-page/arrow-down.svg";
import CustomDragV2 from "../../CustomDragV2/CustomDragV2";
import CustomButtonV2 from "../../CustomButtonV2/CustomButtonV2";
import { useContext, useRef } from "react";
import { ScrollContext } from "../../../context/LocomotiveScroll/scrollContext";

const Navbar = () => {
  const { locomotiveScroll } = useContext(ScrollContext);

  const handleScrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      locomotiveScroll.scrollTo(element);
    }
  };

  const item1Ref1 = useRef(null);
  const item1Ref2 = useRef(null);
  const item1Ref3 = useRef(null);
  const item1Ref4 = useRef(null);

  const handleDownloadResume = () => {};

  return (
    <div id="Navbar" className={classes.container}>
      <div className={classes.logo}>
        <div className={classes.pulse}>
          <div></div>
        </div>
        <div className={classes.logoText}>Available for work</div>
      </div>
      <div className={classes.nav}>
        <CustomDragV2
          onClick={() => handleScrollIntoView("Work")}
          bouce
          customRef={item1Ref1}
        >
          <CustomButtonV2 ref={item1Ref1}>
            <div className={classes.item}>Work</div>
          </CustomButtonV2>
        </CustomDragV2>
        <CustomDragV2
          onClick={() => handleScrollIntoView("About")}
          bouce
          customRef={item1Ref2}
        >
          <CustomButtonV2 ref={item1Ref2}>
            <div className={classes.item}>About me</div>
          </CustomButtonV2>
        </CustomDragV2>
        <CustomDragV2
          onClick={() => handleScrollIntoView("Contact")}
          bouce
          customRef={item1Ref3}
        >
          <CustomButtonV2 ref={item1Ref3}>
            <div className={classes.item}>Contact</div>
          </CustomButtonV2>
        </CustomDragV2>
        <CustomDragV2
          onClick={handleDownloadResume}
          bouce
          customRef={item1Ref4}
        >
          <CustomButtonV2 ref={item1Ref4}>
            <div className={classes.item}>
              <span>Resume</span>
              <img src={ArrowDown} alt="" />
            </div>
          </CustomButtonV2>
        </CustomDragV2>
      </div>
    </div>
  );
};

export default Navbar;
