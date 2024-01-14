import classes from "./Splits.module.css";
import splitImage from "../../../assets/bleuwater/splits.webp";

const Splits = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>Royalty splits and payouts</div>
        <div className={classes.description}>
          We understand how significant royalties are in the world of NFTs
          (Non-Fungible Tokens) and ensured that creators continue to benefit
          from the resale and secondary market transactions of their digital
          assets. Our approach prioritizes transparency and ensures a seamless
          experience for creators.
        </div>

        <div className={classes.imageContainer}>
          <img src={splitImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Splits;
