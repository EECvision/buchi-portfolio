import classes from "./DesignHighlights.module.css";
import designHighlightLabel from "../../../assets/bleuwater/design-highlight-label.webp";
import designHighlight from "../../../assets/bleuwater/design-highlight.webp";

const DesignHighlights = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={designHighlightLabel} alt="" />
      <img className={classes.image} src={designHighlight} alt="" />
    </div>
  );
};

export default DesignHighlights;
