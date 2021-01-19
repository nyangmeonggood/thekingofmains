import { useState } from "react";
import "./App.css";
import CurrentDate from "./Date";
import Intro from "./Intro";
import SelectContainer from "./SelectContainer";

function App() {
  const [previewNumber, setPreviewNumber] = useState(11);
  const [intro, setIntro] = useState(false);

  return (
    <>
      <Intro intro={intro} setIntro={setIntro} />
      {intro && (
        <SelectContainer
          previewNumber={previewNumber}
          setPreviewNumber={setPreviewNumber}
        />
      )}
      {intro && <CurrentDate />}
    </>
  );
}

export default App;
