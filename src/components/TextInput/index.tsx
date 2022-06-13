import React, { ChangeEventHandler } from "react";

interface TextInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function TextInput({ value, onChange }: TextInputProps) {
  return (
    <input
      className="text-input"
      type="text"
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
