// <CustomDragV2
//   onInstantMouseDirChange={setMouseDir}
//   onMouseMove={setCursorPosition}
//   onMouseTrack={setMouseTrack}
//   bouce
// >
//   <div
//     ref={connectRef}
//     className={`${classes.connect} ${mouseTrack === "enter" && classes.hover}`}
//   >
//     <span ref={textRef}>Get in touch</span>
//     <div
//       className={`${classes.connectIcon} ${
//         classes[mouseTrack === "leave" ? "top-right" : mouseDir || "top-right"]
//       }`}
//     >
//       <img ref={iconRef} src={pointerIcon} />
//     </div>
//   </div>
// </CustomDragV2>;

// layout

/* {loaded === "not loaded" && <Welcome />} */

//   const [loaded, setLoaded] = useState<"loaded" | "not loaded" | null>(null);

//   useEffect(() => {
//     if (window.sessionStorage.getItem("isLoaded")) {
//       setLoaded("loaded");
//     } else {
//       setLoaded("not loaded");
//     }
//   }, []);
