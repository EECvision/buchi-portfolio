// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);
//   const tl = gsap.timeline({});

//   const cards: HTMLDivElement[] = gsap.utils.toArray(".work-card");
//   const scrollArea: HTMLDivElement[] = gsap.utils.toArray(".work-scroll");

//   cards.forEach((card, idx) => {
//     card.style.zIndex = `${cards.length - idx}`;
//   });

//   const totalHeight = cards.reduce((acc, curr) => {
//     const height = curr.getBoundingClientRect().height;
//     return acc + height;
//   }, 0);

//   scrollArea[0].style.height = `${totalHeight}px`;

//   cards.forEach((card, idx) => {
//     if (idx !== cards.length - 1) {
//       tl.to(card, { yPercent: "-100" });
//     }
//     if (idx === 0) {
//       gsap.to(card, {
//         scrollTrigger: {
//           // snap: 1,
//           trigger: card,
//           start: "top 99%",
//           end: "bottom bottom",
//         },
//       });
//     }
//   });

//   ScrollTrigger.create({
//     animation: tl,
//     trigger: ".work-scroll",
//     start: "top top",
//     end: `+=${totalHeight - totalHeight / cards.length}px`,
//     pin: ".work-projects",
//     scrub: true,
//     pinSpacing: false,
//     // markers: true,
//   });
// }, []);
