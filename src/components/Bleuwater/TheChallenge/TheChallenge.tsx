import classes from "./TheChallenge.module.css";
import theChallengeLabel from "../../../assets/bleuwater/the-challenge-label.png";

const TheChallenge = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <img className={classes.label} src={theChallengeLabel} alt="" />
        <div className={classes.content}>
          <div className={classes.title}>Understanding the challenge</div>
          <div className={classes.description}>
            The absence of transparency, adequate royalty payouts, and on-chain
            asset protection from existing platforms like Opensea, Blur and
            rarible has raised genuine concerns among project owners and the NFT
            community about both profitability and security of their digital
            assets.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheChallenge;
