import { useEffect } from "react";
import classes from "./youtube.1.module.css";

const Youtube = () => {
  useEffect(() => {
    const cards = document.querySelector("#container")?.children;

    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          //   if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5, rootMargin: "-50px" }
    );

    for (const card of cards) {
      observer.observe(card);
    }
  }, []);

  return (
    <div id="container" className={classes.container}>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
  );
};

export default Youtube;
