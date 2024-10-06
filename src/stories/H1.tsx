import React from "react";

interface H1Props {
  text: string;
  color: string;
  fontWeight: "bold" | "normal";
  fontSize: string;
}

const H1 = ({
  text,
  color = "#333333",
  fontWeight = "normal",
  fontSize = "56px",
}: H1Props) => {
  return <h1 style={{ color, fontWeight, fontSize }}>{text}</h1>;
};

export default H1;
