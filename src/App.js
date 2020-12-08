import { useState } from "react";
import "./App.css";
import CurrentDate from "./Date";
import SelectContainer from "./SelectContainer";

function App() {
  const [modalNumber, setModalNumber] = useState(11);

  return (
    <>
      <SelectContainer
        modalNumber={modalNumber}
        setModalNumber={setModalNumber}
      />
      <CurrentDate />
    </>
  );
}

export default App;
