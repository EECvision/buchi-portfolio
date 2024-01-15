import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import { useContext, useEffect } from "react";
import { ScrollContext } from "../context/LocomotiveScroll/scrollContext";
import classes from "./nestedPageLayout.module.css";

const NestedPageLayout = () => {
  const { locomotiveScroll } = useContext(ScrollContext);
  const location = useLocation();

  useEffect(() => {
    if (locomotiveScroll) {
      locomotiveScroll.scrollTo("#nested-page-container", {
        immediate: true,
      });
    }
  }, [locomotiveScroll, location]);

  return (
    <div>
      <div id="nested-page-container"></div>
      <Outlet />
      <div className={classes.wrapper}>
        <Footer isPage />
      </div>
    </div>
  );
};

export default NestedPageLayout;
