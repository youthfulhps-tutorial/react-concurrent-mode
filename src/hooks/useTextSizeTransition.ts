import { useState, useTransition, ChangeEventHandler } from "react";

function useTextSizeTransition() {
  const [text, setText] = useState<string>("");
  const [textSize, setTextSize] = useState<number>(0);

  const [isPending, startTransition] = useTransition();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setText(value);
    startTransition(() => {
      setTextSize(value.length);
    });
  };

  return { text, textSize, isPending, handleInputChange };
}

export default useTextSizeTransition;
