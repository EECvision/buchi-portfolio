import classes from "./Brandina.module.css";
import brandImage1 from "../../../assets/commehub/brandina-1.webp";
import brandImage2 from "../../../assets/commehub/brandina-2.webp";
import brandImage3 from "../../../assets/commehub/brandina-3.png";
import iconImage from "../../../assets/commehub/icons.webp";
import typographyImage from "../../../assets/commehub/typography.webp";
import brandinaLabel from "../../../assets/commehub/brandina-label.webp";

const Brandina = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={brandinaLabel} alt="" />
      <div className={classes.title}>Logo and Branding</div>
      <div className={classes.description}>
        Here I took on the challenge to design a fun minimal font logo Mark
        using the first five letters from the brand name and a cart icon. The
        fun and vibrant colors allows for instant brand recognition and
        memorability for target audience.
      </div>
      <div className={classes.imageContainer}>
        <img src={brandImage1} alt="" />
        <div className={classes.flex}>
          <div>
            <img src={brandImage2} alt="" />
          </div>
          <div>
            <img src={brandImage3} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.subtitle}>Iconography</div>
      <img src={iconImage} alt="" />
      <div className={classes.subtitle}>Typography and Style guide</div>
      <div className={classes.wrapper}>
        <div className={classes.guideNames}>
          <div className={classes._20}>Poppins H1 SemiBold 20</div>
          <div className={classes._16}>Poppins H2 SemiBold 16</div>
          <div className={classes._14}>Poppins H3 SemiBold 14</div>
          <div className={classes._12}>Poppins Body Regular 12</div>
          <div className={classes._10}>Poppins Body Medium 10</div>
        </div>
        <img src={typographyImage} alt="" />
      </div>
    </div>
  );
};

export default Brandina;
