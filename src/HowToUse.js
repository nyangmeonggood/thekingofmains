import { useEffect, useRef } from "react";
import "./scss/howToUse.scss";
import use0 from "./img/use/kom_arrowenter.gif";
import use1 from "./img/use/kom_m.gif";
import use2 from "./img/use/kom_spacebar.gif";
import use3 from "./img/use/kom_esc.gif";

export default function HowToUse({ howToUse, setIntro, setHowToUse }) {
  const howToUseRef = useRef("");
  const currentHowToUseRef = useRef(0);
  const $how = useRef(0);
  const $howSpy = useRef(0);

  let howSlide;

  const skip = () => {
    if (currentHowToUseRef.current === 3) {
      setIntro(true);
      setHowToUse(false);
    }
  };

  const slideMinus = () => {
    if (howToUseRef.current) {
      currentHowToUseRef.current--;
      if (currentHowToUseRef.current < 0) currentHowToUseRef.current = 0;
      howSlide();
    }
  }

  const slidePlus = () => {
    if (howToUseRef.current) {
      currentHowToUseRef.current++;
      if (currentHowToUseRef.current > 3) currentHowToUseRef.current = 3;
      howSlide();
    }
  }

  useEffect(() => {
    if (document.body.clientWidth < 900) {
      setIntro(true);
      setHowToUse(false);
    }

    howSlide = () => {
      $how.current = Object.values(document.getElementsByClassName("how"));
      $howSpy.current = Object.values(
        document.querySelector(".scrollSpy").children
      );

      if (currentHowToUseRef.current === 3) {
        document.querySelector(".btnBox").classList.add("active")
      } else {
        document.querySelector(".btnBox").classList.remove("active")
      }

      $how.current.forEach((item) => {
        item.classList.remove("active");
      });
      $how.current[currentHowToUseRef.current].classList.add("active");

      $howSpy.current.forEach((item) => {
        item.classList.remove("active");
      });
      $howSpy.current[currentHowToUseRef.current].classList.add("active");
    };

    const keyFuction = (e) => {
      if (howToUse && e.keyCode === 13) {
        skip();
      }
      if (howToUse && e.keyCode === 37) {
        slideMinus()
      }
      if (howToUse && e.keyCode === 39) {
        slidePlus()
      }
      if (howToUse && e.keyCode === 27) {
        setIntro(true);
        setHowToUse(false);
      }
    };

    document.addEventListener("keydown", keyFuction);
    return () => {
      document.removeEventListener("keydown", keyFuction);
    };
  });
  return (
    <section className="howToUse" ref={howToUseRef}>
      <div>
        <button onClick={skip} className="skip">skip</button>
        <ul className="hows">
          <li className="how how0 active">
            <img src={use0} alt="arrow&enter" />
            <p>Use "Direction key" to navigate<br /> "Enter key" to select.</p>
          </li>
          <li className="how how1">
            <img src={use1} alt="m" />

            <p>Use "M key" to change<br />the layout.</p>
          </li>
          <li className="how how2">
            <img src={use2} alt="spacebar" />

            <p>Use "SpaceBar button" to open<br />Main in a new window.</p>
          </li>
          <li className="how how3">
            <img src={use3} alt="esc" />

            <p>Use "ESC Key" to cancel<br />selected Main</p>
          </li>
        </ul>

        <ul className="scrollSpy">
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="btnBox">
          <button onClick={slideMinus} className="arrow left">←</button>
          <button onClick={slidePlus} className="arrow right">←</button>
          <button onClick={skip} className="enter">Enter</button>
        </div>
      </div>
    </section>
  );
}
