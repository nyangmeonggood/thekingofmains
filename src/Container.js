import { useEffect, useRef } from "react";
import { Preview } from "./Preview";

export default function Container() {
  const containerRef = useRef(null);
  useEffect(() => {
    const $containerUl = containerRef.current.getElementsByTagName("ul");

    for (let i = 0; i < $containerUl.length; i++) {
      Object.values($containerUl[i].children).map((item) => {
        if (Preview[item.id]) {
          // item.innerHTML = Preview[item.id].name;
          item.style.backgroundImage = `url(${Preview[item.id].img})`;
        }
      });
    }
  }, []);
  return (
    <section className="container" ref={containerRef}>
      <ul>
        <li id="11" data-i="1" data-j="1"></li>
        <li id="12" data-i="1" data-j="2"></li>
        <li id="13" data-i="1" data-j="3"></li>
        <li id="21" data-i="2" data-j="1"></li>
        <li id="22" data-i="2" data-j="2"></li>
        <li id="23" data-i="2" data-j="3"></li>
        <li id="31" data-i="3" data-j="1"></li>
        <li id="32" data-i="3" data-j="2"></li>
        <li id="33" data-i="3" data-j="3"></li>
      </ul>
      <ul>
        <li id="14" data-i="1" data-j="4"></li>
        <li id="15" data-i="1" data-j="5"></li>
        <li id="16" data-i="1" data-j="6"></li>
        <li id="24" data-i="2" data-j="4"></li>
        <li id="25" data-i="2" data-j="5"></li>
        <li id="26" data-i="2" data-j="6"></li>
        <li id="34" data-i="3" data-j="4"></li>
        <li id="35" data-i="3" data-j="5"></li>
        <li id="36" data-i="3" data-j="6"></li>
      </ul>
      <ul>
        <li id="17" data-i="1" data-j="7"></li>
        <li id="18" data-i="1" data-j="8"></li>
        <li id="19" data-i="1" data-j="9"></li>
        <li id="27" data-i="2" data-j="7"></li>
        <li id="28" data-i="2" data-j="8"></li>
        <li id="29" data-i="2" data-j="9"></li>
        <li id="37" data-i="3" data-j="7"></li>
        <li id="38" data-i="3" data-j="8"></li>
        <li id="39" data-i="3" data-j="9"></li>
      </ul>
      <div id="selector"></div>
    </section>
  );
}
