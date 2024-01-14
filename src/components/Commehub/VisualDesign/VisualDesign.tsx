import classes from "./VisualDesign.module.css";
import visualDesignImage1 from "../../../assets/commehub/visual-1.webp";
import visualDesignImage2 from "../../../assets/commehub/visual-2.png";
import visualDesignImage3 from "../../../assets/commehub/visual-3.webp";
import visualDesignImage4 from "../../../assets/commehub/visual-4.webp";
import visualDesignImage5 from "../../../assets/commehub/visual-5.webp";
import visualDesignImage6 from "../../../assets/commehub/visual-6.webp";
import visualDesignImage7 from "../../../assets/commehub/visual-7.webp";
import visualDesignImage8 from "../../../assets/commehub/visual-8.webp";
import visualDesignLabel from "../../../assets/commehub/visual-label.webp";

const VisualDesign = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={visualDesignLabel} alt="" />
      <div className={classes.title}>Visual Design</div>
      <div className={classes.description}>
        Hi-fidelity 27 essential screens from the app are represented below
      </div>
      <div className={classes.imageContainer}>
        <img src={visualDesignImage1} alt="" />
        <img src={visualDesignImage2} alt="" />
        <img src={visualDesignImage3} alt="" />
        <img src={visualDesignImage4} alt="" />
        <img src={visualDesignImage5} alt="" />
        <img src={visualDesignImage6} alt="" />
        <img src={visualDesignImage7} alt="" />
        <img src={visualDesignImage8} alt="" />
      </div>
    </div>
  );
};

export default VisualDesign;
