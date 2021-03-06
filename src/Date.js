import styled from "styled-components";

export default function CurrentDate() {
  const now = new Date(),
    year = now.getFullYear(),
    month = now.getMonth(),
    day = now.getDate();

  return (
    <>
      <TITLE className="title">
        The
        <br />
        King
        <br />
        Of
        <br />
        Page Mains
      </TITLE>
      <Time>
        <h2>TODAY</h2>
        <p>
          {year}
          {month < 10 ? "0" + (month + 1) : month + 1}
          {day}
        </p>
      </Time>
    </>
  );
}

const TITLE = styled.p`
  position: absolute;
  left: 10%;
  bottom: 3%;
  z-index: -1;
  font-size: 7vw;
  line-height: 1.4em;
  transform: perspective(4em) rotateX(24deg) skewX(-20deg);
  transform-origin: 0 100%;
  background: linear-gradient(#02041a, #060c9f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 900px) {
    left: 0;
    right: 2%;
    bottom: 2%;
    transform: perspective(4em) rotateX(0) skewX(0);
    text-align: right;
    opacity:0.2;
  }
`;

const Time = styled.div`
  font-family: "Press Start 2P", cursive;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  h2,
  p {
    font-size: 32px;
    background: linear-gradient(#c56121, #cac4b7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (min-width:900px){
    top: 50%;
    h2,
    p {
      font-size: 32px;
    }
  }

  @media screen and (max-width:900px){
    top: 41%;
    h2 {
      font-size: 3.5vw;
      margin-bottom:4px
    }
    p {
      font-size: 4vw;
    }
  }
`;
