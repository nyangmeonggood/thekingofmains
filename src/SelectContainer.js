import { useCallback, useEffect, useRef, useState } from "react";
import Iframe from "react-iframe";
import Container from "./Container";
import { selectClick, selectPos, setPos, setSize } from "./Pos";
import { modalSRC } from "./Modal";
import { Preview } from "./Preview";
import "./scss/select.scss";
import "./scss/modal.scss";
import "./scss/preview.scss";

export default function SelectContainer({ previewNumber, setPreviewNumber }) {
  const [isSelecting, setIsSelecting] = useState(true);
  const memoryINumber = useRef(1),
    memoryJNumber = useRef(1);

  const setSwitch = useCallback(() => {
    if (document.querySelector("#modal .modalBox"))
      document.querySelector("#modal .modalBox").classList.toggle("switch");
  }, []);

  const setClose = useCallback(() => {
    document.querySelector("#modal").className = "";
    setIsSelecting(true);

    document.querySelector("#preview").innerHTML = `
      <div class="textBox">
        <h2>${Preview[previewNumber].name}</h2>
        <span>- ${
          Preview[previewNumber].responsive
            ? "Responsive Web"
            : " Not Responsive"
        }</span>
        <p>${Preview[previewNumber].desc}</p>
      </div>
      <img src=${Preview[previewNumber].img} alt=""></img>
    `;
  }, [previewNumber]);

  useEffect(() => {
    document.body
      .querySelector(
        `[id="${memoryINumber.current * 10 + memoryJNumber.current}"]`
      )
      .classList.add("active");
    // const bg = new Audio(
    //   "https://raw.githubusercontent.com/nyangmeonggood/thekingofmains/master/src/sound/bg.mp3"
    // );
    // bg.loop = true;
    // document.body.addEventListener("click", () => bg.play());
    setSize();

    window.addEventListener("resize", () => {
      setSize();
      setPos();
    });

    selectClick(
      setIsSelecting,
      setPreviewNumber,
      soundPlay,
      selectSound,
      memoryINumber,
      memoryJNumber
    );

    return () =>
      window.removeEventListener("resize", () => {
        setSize();
        setPos();
      });
  }, [setPreviewNumber]);

  useEffect(() => {
    let i = memoryINumber.current;
    let j = memoryJNumber.current;

    const moveSelector = () => {
      if (i > 3) i = 1;
      if (i < 1) i = 3;
      if (j < 1) j = 9;
      if (j > 9) j = 1;

      for (var k = 0; k < 3; k++) {
        Object.values(
          document.querySelector(".container").children[k].children
        ).map((item) => item.classList.remove("active"));
      }

      document.body
        .querySelector(`[id="${i * 10 + j}"]`)
        .classList.add("active");

      document.querySelector("#preview").innerHTML = `
      <div class="textBox">
        <h2>${Preview[i * 10 + j].name}</h2>
        <span>- ${
          Preview[i * 10 + j].responsive ? "Responsive Web" : " Not Responsive"
        }</span>
        <p>${Preview[i * 10 + j].desc}</p>
      </div>
      <img src=${Preview[i * 10 + j].img} alt=""></img>
      `;
    };

    const keyFuction = (e) => {
      if (isSelecting && e.keyCode === 37) {
        soundPlay(moveSound);
        j--;
        moveSelector();
      }
      if (isSelecting && e.keyCode === 38) {
        soundPlay(moveSound);
        i--;
        moveSelector();
      }
      if (isSelecting && e.keyCode === 39) {
        soundPlay(moveSound);
        j++;
        moveSelector();
      }
      if (isSelecting && e.keyCode === 40) {
        soundPlay(moveSound);
        i++;
        moveSelector();
      }
      if (isSelecting && e.keyCode === 13) {
        soundPlay(selectSound);
        selectPos(setIsSelecting);
        setPreviewNumber(i * 10 + j);
        memoryINumber.current = i;
        memoryJNumber.current = j;
      }
      if (!isSelecting && e.keyCode === 27) {
        soundPlay(selectSound);
        setClose();
      }
      if (!isSelecting && e.keyCode === 77) {
        setSwitch();
      }
      if (!isSelecting && e.keyCode === 32) {
        window.open(modalSRC[previewNumber]);
      }
      setPos();
    };

    document.addEventListener("keydown", keyFuction);
    return () => {
      document.removeEventListener("keydown", keyFuction);
    };
  }, [isSelecting, setClose, previewNumber, setPreviewNumber, setSwitch]);
  return (
    <>
      <Container />
      <section id="preview">
        <div className="textBox">
          <h2>{Preview[previewNumber].name} </h2>
          <span>
            -{" "}
            {Preview[previewNumber].responsive
              ? "Responsive Web"
              : " Not Responsive"}
          </span>
          <p>{Preview[previewNumber].desc}</p>
        </div>
        <img src={Preview[previewNumber].img} alt=""></img>
      </section>
      <section id="modal">
        <div className="modalBox">
          {!isSelecting && modalSRC[previewNumber] && (
            <Iframe url={modalSRC[previewNumber]} />
          )}
          {!isSelecting && !modalSRC[previewNumber] && (
            <div>Sorry, There isn't contents :(</div>
          )}
          <button className="switchBtn btn" onClick={setSwitch}>
            <i className="pc">PC</i>
            <i className="m">M</i>
          </button>
          <a
            className="newBtn btn"
            href={modalSRC[previewNumber]}
            target="_blank"
            rel="noopener noreferrer"
          >
            New
          </a>
        </div>
        <button className="close" onClick={setClose}>
          <span></span>
          <span></span>
        </button>
      </section>
    </>
  );
}

const moveSound = new Audio(
  // "https://raw.githubusercontent.com/nyangmeonggood/thekingofmains/master/src/sound/move.mp3"
  "https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/clap.mp3"
);
const selectSound = new Audio(
  // "https://raw.githubusercontent.com/nyangmeonggood/thekingofmains/master/src/sound/select.mp3"
  "https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/hihat.mp3"
);

const soundPlay = (sound) => {
  sound.load();
  sound.play();
};
