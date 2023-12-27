import "./Codepen.css";
import { useEffect } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Codepen = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".menu",
        pin: true,
        start: "top 45%",
        //scrub: 0.5,
        endTrigger: "footer.footer",
        end: "top bottom",
        pinSpacing: false,
        markers: true,
        //markers: {startColor: "white", endColor: "white"},
        toggleActions: "restart none none reverse",
      },
    });

    // tl.to(".menu ul", {
    //   y: 100,
    //   duration: 5,
    // });
    tl.to(".menu ul", {
      opacity: 1,
      y: "-100",
      duration: 0.5,
    });

    // //scroll top
    // document.querySelectorAll(".menu ul li").forEach((btn, index) => {
    //   btn.addEventListener("click", () => {
    //     gsap.to(window, {
    //       duration: 1,
    //       scrollTo: { y: "#post__" + (index + 1), offsetY: 300 },
    //     });
    //   });
    // });
  });

  return (
    <>
      <div className="main">
        <header>Header</header>
        <div className="menu">
          <ul>
            <li>
              <a href="#post__0">1 planer</a>
            </li>
            <li>
              <a href="#post__1">2 planer</a>
            </li>
            <li>
              <a href="#post__2">3 planer</a>
            </li>
            <li>
              <a href="#post__3">4 planer</a>
            </li>
            <li>
              <a href="#post__4">5 planer</a>
            </li>
          </ul>
        </div>

        <div className="boxes">
          <ol>
            <li id="post__0">planer 0</li>
            <li id="post__1">planer 1</li>
            <li id="post__2">planer 3</li>
            <li id="post__3">planer 4</li>
            <li id="post__4">planer 5</li>
          </ol>
        </div>
      </div>
      <footer className="footer"> footer </footer>
    </>
  );
};

export default Codepen;
