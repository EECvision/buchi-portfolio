import classes from "./DesignHighlights.module.css";
import designHighlightLabel from "../../../assets/bleuwater/design-highlight-label.webp";
import designHighlight from "../../../assets/bleuwater/design-highlight.webp";
import designHighlight2 from "../../../assets/bleuwater/design-highlight2.webp";
import designHighlightVideo from "../../../assets/videos/Bleuwater/Mockup Change.webm";

const DesignHighlights = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={designHighlightLabel} alt="" />
      <div className={classes.imageContainer}>
        <img src={designHighlight} alt="" />
        <div className={classes.imageContainer2}>
          <div>
            <img src={designHighlight2} alt="" />
          </div>
          <div>
            <video muted autoPlay loop src={designHighlightVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignHighlights;
