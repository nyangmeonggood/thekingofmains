import { Preview } from "./Preview";

export const setSize = () => {
  var $selector = document.getElementById("selector"),
    $selectLi = document.body.querySelector(".container>ul>li");
  selectedPos($selector, $selectLi);
};

export const setPos = () => {
  var $selector = document.getElementById("selector"),
    $selectedLi = document.body.querySelector(".container>ul>li.active");
  selectedPos($selector, $selectedLi);
};

export const selectedPos = (target, standard) => {
  var $selectLiWidth = standard.offsetWidth,
    $selectLiHeight = standard.offsetHeight,
    $selectLiTop = standard.offsetTop,
    $selectLiLeft = standard.offsetLeft;

  target.style.width = `${$selectLiWidth}px`;
  target.style.height = `${$selectLiHeight}px`;
  target.style.top = `${$selectLiTop}px`;
  target.style.left = `${$selectLiLeft}px`;
};

export const selectPos = (setIsSelecting) => {
  var $modal = document.querySelector("#modal");
  var random = Math.floor(Math.random() * modalName.length);

  $modal.classList.add(`pop`);
  $modal.style.animationName = modalName[random];

  setIsSelecting(false);
};

export const selectClick = (
  setIsSelecting,
  setPreviewNumber,
  soundPlay,
  selectSound,
  memoryINumber,
  memoryJNumber
) => {
  for (var k = 0; k < 3; k++) {
    Object.values(
      document.querySelector(".container").children[k].children
    ).map((item) =>
      item.addEventListener("click", function () {
        soundPlay(selectSound);
        selectPos(setIsSelecting);
        setPreviewNumber(
          parseInt(item.dataset.i * 10) + parseInt(item.dataset.j)
        );

        for (var k = 0; k < 3; k++) {
          Object.values(
            document.querySelector(".container").children[k].children
          ).map((item) => item.classList.remove("active"));
        }
        document.body
          .querySelector(
            `[id="${parseInt(item.dataset.i * 10) + parseInt(item.dataset.j)}"]`
          )
          .classList.add("active");
        setPos();

        document.querySelector("#modal .desc").innerHTML = "";

        Preview[
          parseInt(item.dataset.i * 10) + parseInt(item.dataset.j)
        ].tech.map((item) => {
          let $li = document.createElement("li");
          $li.innerHTML = item;
          document.querySelector("#modal .desc").appendChild($li);
        });
      })
    );
  }

  if (document.querySelector("#selector")) {
    document.querySelector("#selector").addEventListener("click", function () {
      soundPlay(selectSound);
      selectPos(setIsSelecting);
      setPreviewNumber(
        parseInt(memoryINumber.current * 10) + parseInt(memoryJNumber.current)
      );

      for (var k = 0; k < 3; k++) {
        Object.values(
          document.querySelector(".container").children[k].children
        ).map((item) => item.classList.remove("active"));
      }
      document.body
        .querySelector(
          `[id="${
            parseInt(memoryINumber.current * 10) +
            parseInt(memoryJNumber.current)
          }"]`
        )
        .classList.add("active");
      setPos();
    });
  }
};

const modalName = ["pop0", "pop1", "pop2", "pop3"];
