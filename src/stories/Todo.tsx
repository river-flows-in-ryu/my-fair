import React, { useState } from "react";

import Image from "next/image";

import checkImg from "../public/Check.svg";
import closeImg from "../public/Close.svg";

interface TodoProps {
  text: string;
  isDone: boolean;
}

const Todo = ({ text, isDone }: TodoProps) => {
  return (
    <div className="flex items-center w-full h-[96px] mx-auto px-4">
      <button
        className={`w-8 h-8 mr-4 flex items-center justify-center rounded-full ${isDone ? "bg-[#2182F3]" : "border border-[#E5E5E5]"}`}
      >
        <Image src={checkImg} alt="체크이미지" />
      </button>
      <span
        className={`flex-1 text-left leading-8 font-normal  ${isDone ? "text-[#868686]" : "text-[#000000]"}`}
      >
        {text}
      </span>
      <button className="w-8 h-8 flex items-center justify-center">
        <Image alt="삭제버튼" src={closeImg} width={24} height={24} />
      </button>
    </div>
  );
};
export default Todo;
