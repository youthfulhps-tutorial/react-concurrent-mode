import React from "react";
import "./App.css";
import TextInput from "components/TextInput";
import ColorList from "components/ColorList";
import useTextSizeTransition from "hooks/useTextSizeTransition";

function App() {
  const { text, handleInputChange, textSize, isPending } =
    useTextSizeTransition();

  return (
    <div className="App">
      <TextInput value={text} onChange={handleInputChange} />
      <ColorList itemLength={textSize} isPending={isPending} />
    </div>
  );
}

export default App;
