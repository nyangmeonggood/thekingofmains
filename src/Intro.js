import { useEffect, useRef } from "react";
import "./scss/intro.scss";

export default function Intro({ intro, setHowToUse }) {
  const introRef = useRef("");
  useEffect(() => {
    const keyFuction = (e) => {
      if (!intro && e.keyCode === 13) {
        introRef.current.classList.add("active");
        setHowToUse(true);
      }
    };

    document.addEventListener("keydown", keyFuction);
    return () => {
      document.removeEventListener("keydown", keyFuction);
    };
  });
  return (
    <section id="intro" ref={introRef}>
      <div className="titleBox">
        <span>The king of</span>
        <p>
          Mains<b>'26</b>
        </p>

        <p className="pressKey">Press Enter Key</p>
      </div>
    </section>
  );
}
