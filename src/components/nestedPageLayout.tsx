import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../context/LocomotiveScroll/scrollContext";
import classes from "./nestedPageLayout.module.css";

const NestedPageLayout = () => {
  const { locomotiveScroll } = useContext(ScrollContext);

  useEffect(() => {
    if (locomotiveScroll) {
      locomotiveScroll.scrollTo("#nested-page-container");
    }
  }, [locomotiveScroll]);

  return (
    <div id="nested-page-container">
      <Outlet />
      <div className={classes.wrapper}>
        <Footer isPage />
      </div>
    </div>
  );
};

export default NestedPageLayout;
