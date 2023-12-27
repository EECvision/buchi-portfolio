import classes from "./Wallet.module.css";
import walletImage1 from "../../../assets/bleuwater/wallet-connect-1.png";
import walletImage2 from "../../../assets/bleuwater/wallet-connect-2.png";

const Wallet = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>
          Streamlining Onboarding by Simplifying Wallet Connection
        </div>
        <div className={classes.description}>
          <div>
            To address concerns from early platform adopters who were unsure
            about connecting the correct wallet to each blockchain due to Bleu
            Water's multi-chain nature, we introduced blockchain selection in
            the flow. Users can now choose their preferred blockchain, and once
            selected, we dynamically present the supported wallets for that
            specific blockchain.
          </div>
          <br />
          <div>
            This innovative flow not only reduces onboarding friction but also
            empowers users without a wallet to easily learn about and create one
            on our dedicated page.
          </div>
        </div>

        <div className={classes.imageContainer}>
          <img src={walletImage1} alt="" />
          <img src={walletImage2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
