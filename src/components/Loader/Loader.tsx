import classes from "./Loader.module.css";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div className={`${classes.container} ${loading && classes.inActive}`}>
      <div className={classes.title}>Just a sec...</div>
    </div>
  );
};

export default Loader;
