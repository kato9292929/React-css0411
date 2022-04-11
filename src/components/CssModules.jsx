import classes from "./CssModules.module.scss";

export const CssMosules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Mosules-</p>
      <button className={classes.button}>FIGHT!!</button>
    </div>
  );
};
