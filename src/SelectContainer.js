import { useEffect, useRef, useState } from "react";
import Iframe from "react-iframe";
import Container from "./Container";
import { selectClick, selectPos, setPos, setSize } from "./Pos";
import { modalSRC } from "./Modal";
import { Preview } from "./Preview";
import "./scss/select.scss";
import "./scss/modal.scss";
import "./scss/preview.scss";

export default function SelectContainer({ modalNumber, setModalNumber }) {
  const [isSelecting, setIsSelecting] = useState(true);
  var previewNumber = 11;

  useEffect(() => {
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

    selectClick(setIsSelecting, setModalNumber, soundPlay, selectSound);

    return () =>
      window.removeEventListener("resize", () => {
        setSize();
        setPos();
      });
  });

  useEffect(() => {
    let i = 1;
    let j = 1;

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

      previewNumber = i * 10 + j;

      document.querySelector("#preview").innerHTML = `
      <h2>${Preview[previewNumber].name}</h2>
      <p>${Preview[previewNumber].desc}</p>
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
        setModalNumber(i * 10 + j);
      }
      if (!isSelecting && e.keyCode === 27) {
        soundPlay(selectSound);
        document.querySelector("#modal").className = "";
        setIsSelecting(true);

        document.querySelector("#preview").innerHTML = `
        <h2>${Preview[previewNumber].name}</h2>
        <p>${Preview[previewNumber].desc}</p>
        `;
      }
      setPos();
    };

    document.addEventListener("keydown", keyFuction);
    return () => document.removeEventListener("keydown", keyFuction);
  });
  return (
    <>
      <Container />
      <section id="preview">
        <h2>{Preview[previewNumber].name}</h2>
        <p>{Preview[previewNumber].desc}</p>
      </section>
      <section id="modal">
        {!isSelecting && modalSRC[modalNumber] && (
          <Iframe url={modalSRC[modalNumber]} />
        )}
        {!isSelecting && !modalSRC[modalNumber] && (
          <div>Sorry, There isn't contents :(</div>
        )}
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

const setClose = () => {
  document.querySelector("#modal").className = "";

  document.querySelector("#preview").innerHTML = `
  <h2>${Preview[11].name}</h2>
  <p>${Preview[11].desc}</p>
  `;
};
