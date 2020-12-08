import { useState } from "react";
import "./App.css";
import CurrentDate from "./Date";
import SelectContainer from "./SelectContainer";

function App() {
  const [previewNumber, setPreviewNumber] = useState(11);
  
  return (
    <>
      <SelectContainer previewNumber={previewNumber} setPreviewNumber={setPreviewNumber}
      />
      <CurrentDate />
    </>
  );
}

export default App;
