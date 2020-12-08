import { useEffect, useRef, useState } from "react";
import Iframe from "react-iframe";
import { selectClick, selectPos, setPos, setSize } from "./Pos";
import { modalSRC } from "./Modal";
import "./scss/select.scss";
import "./scss/modal.scss";
import Container from "./Container";

export default function SelectContainer({ modalNumber, setModalNumber }) {
  const [isSelecting, setIsSelecting] = useState(true);
  var previewNumber;

  useEffect(() => {
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

      document.querySelector("#preview").src = i * 10 + j;
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
      }
      setPos();
    };

    document.addEventListener("keydown", keyFuction);
    return () => document.removeEventListener("keydown", keyFuction);
  });
  return (
    <>
      <Container />
      <img src={previewNumber} id="preview" />
      <section id="modal">
        {!isSelecting && modalSRC[modalNumber] && (
          <Iframe url={modalSRC[modalNumber]} />
        )}
        {!isSelecting && !modalSRC[modalNumber] && (
          <div>Sorry, There isn't contents :(</div>
        )}
      </section>
    </>
  );
}

const moveSound = new Audio(
  "https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/kick.mp3"
);
const selectSound = new Audio(
  "https://raw.githubusercontent.com/kucerajacob/DRUM-SEQUENCER/master/audio/rim.mp3"
);

const soundPlay = (sound) => {
  sound.load();
  sound.play();
};
