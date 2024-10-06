import React from "react";
import "../globals.css";

import H1 from "./H1";
import Input from "./Input";
import Button from "./Button";
import Todo from "./Todo";

export const Page: React.FC = () => {
  return (
    <main className=" min-h-screen text-center py-[128px] bg-[#F6F6F6] font-pretendard">
      <div className="mb-[64px]">
        <H1
          text="To Do List"
          color="#333333"
          fontWeight="bold"
          fontSize="56px"
        />
      </div>
      <Input placeholder="할 일을 입력해 주세요" />
      <section className="w-[737px] rounded-3xl p-8 bg-[#FFFFFF] shadow-custom  mx-auto">
        <div className="flex w-[324px] h-10 mx-auto mb-8">
          <Button
            color="#2182F3"
            label="All"
            bgColor="#EBF4FF"
            width="108px"
            height="40px"
          />
          <Button
            label="To Do"
            width="108px"
            height="40px"
            color="#454545"
            bgColor="#FFFFFF"
          />
          <Button
            label="Done"
            width="108px"
            height="40px"
            color="#454545"
            bgColor="#FFFFFF"
          />
        </div>
        <div className="w-full  text-left text-xl	">
          <div className="h-[60px] pl-4 py-4">총 3개</div>
        </div>
        <div className="px-4 py-8">
          <Todo isDone={true} text="출근하고 비타민 먹기" />
          <Todo isDone={false} text="Daily Scrum 작성하기" />
          <Todo isDone={false} text="주간회의 참여하기" />
        </div>
      </section>
    </main>
  );
};
