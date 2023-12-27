import classes from "./VisualDesign.module.css";
import visualDesignImage1 from "../../../assets/commehub/visual-1.png";
import visualDesignImage2 from "../../../assets/commehub/visual-2.png";
import visualDesignImage3 from "../../../assets/commehub/visual-3.png";
import visualDesignImage4 from "../../../assets/commehub/visual-4.png";
import visualDesignImage5 from "../../../assets/commehub/visual-5.png";
import visualDesignImage6 from "../../../assets/commehub/visual-6.png";
import visualDesignImage7 from "../../../assets/commehub/visual-7.png";
import visualDesignImage8 from "../../../assets/commehub/visual-8.png";
import visualDesignLabel from "../../../assets/commehub/visual-label.png";

const VisualDesign = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={visualDesignLabel} alt="" />
      <div className={classes.title}>Visual Design</div>
      <div className={classes.description}>
        Hi-fidelity 27 essential screens from the app are represented below
      </div>
      <img src={visualDesignImage1} alt="" />
      <img src={visualDesignImage2} alt="" />
      <img src={visualDesignImage3} alt="" />
      <img src={visualDesignImage4} alt="" />
      <img src={visualDesignImage5} alt="" />
      <img src={visualDesignImage6} alt="" />
      <img src={visualDesignImage7} alt="" />
      <img src={visualDesignImage8} alt="" />
    </div>
  );
};

export default VisualDesign;
