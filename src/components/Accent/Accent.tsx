import React from "react";
import classes from "./Accent.module.css";

interface AccentProps {
  children: React.ReactNode;
}
const Accent = ({ children }: AccentProps) => {
  return <div className={classes.text}>{children}</div>;
};

export default Accent;
