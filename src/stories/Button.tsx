import React from "react";

interface ButtonProps {
  label: string;
  color: string;
  bgColor: string;
  width: string;
  height: string;
  rounded?: string;
}

const Button = ({
  label,
  color,
  bgColor = "#FFFFFF",
  width,
  height,
  rounded,
}: ButtonProps) => {
  return (
    <button
      style={{
        color,
        backgroundColor: bgColor,
        width,
        height,
        borderRadius: rounded,
      }}
      className="border-none"
    >
      {label}
    </button>
  );
};

export default Button;
