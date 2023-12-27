// /* eslint-disable react/no-unescaped-entities */
// import { forwardRef, useEffect } from "react";
// import classes from "./CustomButton.module.css";

// interface CustomButtonState {
//   hover?: boolean;
// }

// const CustomButton = ({ hover }: CustomButtonState) => {
//   useEffect(() => {
//     if (!hover) return;
//     const btn = document.getElementById("btn");
//     const overlay = document.getElementById("overlay");

//     const handleMouseEnter = () => {
//       if (overlay.classList.contains("leave")) {
//         overlay.classList.replace("leave", "enter");
//       } else {
//         overlay.classList.add("enter");
//       }
//     };

//     const handleMouseLeave = () => {
//       overlay.classList.replace("enter", "leave");
//     };

//     btn.addEventListener("mouseenter", handleMouseEnter);
//     btn.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       btn.removeEventListener("mouseenter", handleMouseEnter);
//       btn.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, [hover]);

//   return (
//     <div id="btn" className={classes["btn"]}>
//       <div id="overlay" className={"btn-overlay"}></div>
//     </div>
//   );
// };

// export default CustomButton;
