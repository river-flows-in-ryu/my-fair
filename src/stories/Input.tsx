import React, { ChangeEvent } from "react";

interface InputProps {
  inputValue?: string;
  placeholder: string;
  width?: string;
  height?: string;
  rounded?: string;
}

const Input = ({
  inputValue,
  placeholder = "할 일을 입력해 주세요",
  width = "737px",
  height = "92px",
  rounded = "24px",
}: InputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      style={{
        width,
        height,
        borderRadius: rounded,
        backgroundColor: "#E5E5E5",
      }}
      className="p-8 gap-2 border-[#E5E5E5] mb-8 text-xl"
    />
  );
};
export default Input;
