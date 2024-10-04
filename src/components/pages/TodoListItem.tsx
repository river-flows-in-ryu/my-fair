import React from "react";

import Image from "next/image";

import closeImg from "../../public/Close.svg";
import checkImg from "../../public/Check.svg";

interface Props {
  id: number;
  text: string;
  isDone: boolean;
  handleClickToggleIsDone: (id: number) => void;
  handleClickRemoveItem: (id: number) => void;
}

const TodoListItem = React.memo(
  ({
    id,
    text,
    isDone,
    handleClickToggleIsDone,
    handleClickRemoveItem,
  }: Props) => {
    return (
      <li className="flex justify-between px-4 py-8">
        <button
          onClick={() => handleClickToggleIsDone(id)}
          className={`w-8 h-8 mr-4 flex items-center justify-center rounded-full ${isDone ? "bg-[#2182F3]" : "border border-[#E5E5E5]"}`}
        >
          {isDone && <Image src={checkImg} alt="체크" />}
        </button>
        <span
          className={`flex-1 leading-8 font-normal ${isDone ? "text-[#868686]" : "text-text-[#000000]"}`}
        >
          {text}
        </span>
        <button
          onClick={() => handleClickRemoveItem(id)}
          className="w-8 h-8 flex items-center justify-center"
        >
          <Image alt="닫기버튼" src={closeImg} width={24} height={24} />
        </button>
      </li>
    );
  }
);

export default TodoListItem;
