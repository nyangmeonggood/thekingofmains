import { useEffect, useRef } from "react";
import "./scss/intro.scss";

export default function Intro({ intro, setIntro }) {
  const introRef = useRef("");
  useEffect(() => {
    const keyFuction = (e) => {
      if (!intro && e.keyCode === 13) {
        setIntro(true);
        introRef.current.style.display = "none";
      }
    };

    document.addEventListener("keydown", keyFuction);
    return () => {
      document.removeEventListener("keydown", keyFuction);
    };
  });
  return <section id="intro" ref={introRef}></section>;
}
