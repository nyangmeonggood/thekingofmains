import { useEffect, useRef } from "react";
import "./scss/intro.scss";

export default function Intro({ intro, setHowToUse }) {
  const introRef = useRef("");

  const skipIntro = () => {
    if (introRef.current) {
      introRef.current.classList.add("active");
    }
    setHowToUse(true);
  }

  useEffect(() => {

    const keyFuction = (e) => {
      if (!intro && e.keyCode === 13) {
        soundPlay(selectSound);
        skipIntro()
      }
    };

    document.addEventListener("keydown", keyFuction);
    return () => {
      document.removeEventListener("keydown", keyFuction);
    };
  });
  return (
    <section id="intro" ref={introRef} onClick={skipIntro}>
      <div className="titleBox">
        <span>The king of</span>
        <p>
          Mains<b>'26</b>
        </p>

        <p className="pressKey">{document.body.clientWidth > 900 ? "Press Enter Key" : "Touch the Screen"}</p>
      </div>
    </section>
  );
}

  const selectSound = new Audio(
    // "https://raw.githubusercontent.com/nyangmeonggood/thekingofmains/master/src/sound/select.mp3"
    "https://raw.githubusercontent.com/nyangmeonggood/thekingofmains/master/src/sound/intro.mp3"
);

const soundPlay = (sound) => {
  sound.load();
  sound.play();
};