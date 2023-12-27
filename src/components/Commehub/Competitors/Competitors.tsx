import classes from "./Competitors.module.css";
import competitorsLabel from "../../../assets/commehub/competitors-label.png";
import LinkIcon from "../../../assets/commehub/icon-link.svg";

const Competitors = () => {
  return (
    <div className={classes.container}>
      <img className={classes.label} src={competitorsLabel} alt="" />
      <div className={classes.title}>Competitor Analysis</div>
      <div className={classes.description}>
        Having gained insight into the user&apos;s Pain points when engaging in
        group purchase, I then started looking into{" "}
        <span>existing solutions</span> to understand how they are solving the
        problem. I carefully selected three competitors for analysis. Please
        click on the links below to see the analysis.
      </div>

      <div className={classes.listItems}>
        <div className={classes.item}>
          <span>Alibaba</span>
          <img src={LinkIcon} alt="" />
        </div>
        <div className={classes.item}>
          <span>Aliexpress</span>
          <img src={LinkIcon} alt="" />
        </div>
        <div className={classes.item}>
          <span>1688 website</span>
          <img src={LinkIcon} alt="" />
        </div>
      </div>
      <div className={classes.description}>
        Except for Aliexpress, other apps/websites lacks customized
        recommendation catered to users looking to engage in group purchase.
        While Aliexpress featured group buying, it’s also only limited to only a
        group of two.
      </div>
    </div>
  );
};

export default Competitors;
