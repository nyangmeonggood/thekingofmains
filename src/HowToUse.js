import { useEffect, useRef } from "react";
import "./scss/howToUse.scss";
import use0 from "./img/use/use0.gif";
import use1 from "./img/use/use1.gif";
import use2 from "./img/use/use2.gif";
import use3 from "./img/use/use3.gif";

export default function HowToUse({ howToUse, setIntro, setHowToUse }) {
  const howToUseRef = useRef("");
  const currentHowToUseRef = useRef(0);
  const skip = () => {
    setIntro(true);
    setHowToUse(false);
  };
  useEffect(() => {
    const howSlide = () => {
      const $how = Object.values(document.getElementsByClassName("how"));
      const $howSpy = Object.values(
        document.querySelector(".scrollSpy").children
      );
      $how.forEach((item) => {
        item.classList.remove("active");
      });
      $how[currentHowToUseRef.current].classList.add("active");

      $howSpy.forEach((item) => {
        item.classList.remove("active");
      });
      $howSpy[currentHowToUseRef.current].classList.add("active");
    };
    const keyFuction = (e) => {
      if (howToUse && e.keyCode === 13) {
        skip();
      }
      if (howToUse && e.keyCode === 37) {
        currentHowToUseRef.current--;
        if (currentHowToUseRef.current < 0) currentHowToUseRef.current = 0;
        howSlide();
      }
      if (howToUse && e.keyCode === 39) {
        currentHowToUseRef.current++;
        if (currentHowToUseRef.current > 3) currentHowToUseRef.current = 3;
        howSlide();
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
        <ul className="hows">
          <li className="how how0 active">
            <img src={use0} />
            <p>방향키로 이동하고 enter키로 선택합니다</p>
          </li>
          <li className="how how1">
            <img src={use1} />

            <p>m키를 이용해 레이아웃을 변경합니다</p>
          </li>
          <li className="how how2">
            <img src={use3} />

            <p>spaceBar 버튼을 이용해 새 창에서 열 수 있습니다.</p>
          </li>
          <li className="how how3">
            <img src={use3} />

            <p>esc키를 이용해 선택을 취소할 수 있습니다.</p>
          </li>
        </ul>

        <ul className="scrollSpy">
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <button onClick={skip}>Skip</button>
      </div>
    </section>
  );
}
