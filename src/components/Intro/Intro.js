import { useEffect, useRef } from "react";
import { Spring, animated } from "react-spring";
import { init } from "ityped";
import "./Intro.scss";

const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      cursorChar: "_",
      strings: ["HTML", "CSS/SCSS", "Adaptive", "JavaScript", "AJAX", "ReactJS", "git"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
      <Spring
          from={{ opacity: 0, marginLeft: -1200 }}
          to={{ opacity: 1, marginLeft: 0 }}
          config={{ duration: 800 }}
          
        >
          {(props) => (
            <animated.div className="img-container" style={props}>
              <img src="assets/Alex_1.jpg" alt="pic" />
            </animated.div>
          )}
        </Spring>
      </div>
      <div className="right">
        <Spring
          from={{ opacity: 0, transform: "translateX(800px)" }}
          to={{ opacity: 1, transform: "translateX(0)" }}
          config={{ duration: 800 }}
        >
          {(props) => (
            <animated.div className="wrapper" style={props}>
              <h2>Hi there! I'm</h2>
              <h1>Oleksiy Kudryashov</h1>
              <h3>Front-end: <span ref={textRef}></span></h3>
            </animated.div>
          )}
        </Spring>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
