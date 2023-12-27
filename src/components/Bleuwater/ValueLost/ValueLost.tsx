import classes from "./ValueLost.module.css";

const ValueLost = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.box}>
          <div className={classes.value}>$237k+</div>
          <div className={classes.description}>
            Value lost in Digital Assets
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.value}>$103k+</div>
          <div className={classes.description}>
            Value lost/unpaid in royalties
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueLost;
