import { useState } from "react";
import "./App.css";
import CurrentDate from "./Date";
import HowToUse from "./HowToUse";
import Intro from "./Intro";
import SelectContainer from "./SelectContainer";

function App() {
  const [previewNumber, setPreviewNumber] = useState(11);
  const [intro, setIntro] = useState(false);
  const [howToUse, setHowToUse] = useState(false);

  return (
    <>
      {!intro && <Intro intro={intro} setHowToUse={setHowToUse} />}

      {howToUse && (
        <HowToUse
          howToUse={howToUse}
          setIntro={setIntro}
          setHowToUse={setHowToUse}
        />
      )}

      {intro && (
        <SelectContainer
          previewNumber={previewNumber}
          setPreviewNumber={setPreviewNumber}
          setIntro={setIntro}
          setHowToUse={setHowToUse}
        />
      )}
      {intro && <CurrentDate />}
    </>
  );
}

export default App;
