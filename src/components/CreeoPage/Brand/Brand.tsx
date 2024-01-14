import classes from "./Brand.module.css";
import brand1 from "../../../assets/brand-1.webp";
import brand2 from "../../../assets/brand-2.webp";
import brand3 from "../../../assets/brand-3.webp";
import brand4 from "../../../assets/brand-4.webp";
import brand5 from "../../../assets/brand-5.webp";
import brand6 from "../../../assets/brand-6.webp";
import brand7 from "../../../assets/brand-7.webp";

const Brand = () => {
  return (
    <div className={classes.container}>
      <div className={classes.stages}>
        <div className={classes.stage}>
          <div className={classes.left}>
            <div className={classes.topic}>
              <span>Brand & </span> <span>3D design</span>
            </div>
          </div>
          <div className={classes.text}>
            Digital wireframes provides more accurate depictions of the
            interface’s layout without going into much details. They show a
            glimpse of how the final product will look{" "}
          </div>
        </div>
        <div className={classes.brandA}>
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
        </div>
        <div className={classes.brandB}>
          <img src={brand6} alt="" />
          <img src={brand7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
