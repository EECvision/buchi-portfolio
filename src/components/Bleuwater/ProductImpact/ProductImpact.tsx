import classes from "./ProductImpact.module.css";
import productImpactLabel from "../../../assets/bleuwater/product-impact-label.webp";
import checkMark from "../../../assets/bleuwater/check-mark.svg";

const ProductImpact = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img className={classes.label} src={productImpactLabel} alt="" />
        <div className={classes.title}>Impact</div>
        <div className={classes.description}>
          <div>
            Our solution has had a profound impact on digital asset creators by
            ensuring that they receive royalties of up to $100,000 and
            protecting their valuable digital assets from theft. This not only
            empowers creators to fully benefit from their work but also enhances
            the security and value of their digital assets, fostering a more
            sustainable and lucrative creative ecosystem.
          </div>
          <br />
          <div>
            In essence, our solution doesn't just protect and monetize digital
            assets; it strengthens the foundation of the entire creative
            ecosystem. By offering creators the opportunity to earn what they
            deserve and safeguard their work, we're cultivating a more
            sustainable and prosperous environment for digital creators,
            collectors, and enthusiasts alike."
          </div>
        </div>

        <div className={classes.impactContainer}>
          <div className={classes.left}>
            <div className={classes.value}>10k+</div>
            <div className={classes.text}>
              <img src={checkMark} alt="" />
              <span> Over 10,000 Protected digital assets</span>
            </div>
          </div>
          <div className={classes.center}></div>
          <div className={classes.right}>
            <div className={classes.value}> $100k+</div>
            <div className={classes.text}>
              <img src={checkMark} alt="" />
              <span>Value paid in assets royalties</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImpact;
