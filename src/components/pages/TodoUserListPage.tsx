"use client";
import React, { useState, KeyboardEvent } from "react";

import TodoListItem from "./TodoListItem";

interface Props {}

const TodoUserListPage = ({}: Props) => {
  const initialToDoList = [
    { id: 1, text: "출근하고 비타민 먹기", isDone: true },
    { id: 2, text: "Daily Scrum 작성하기", isDone: false },
    { id: 3, text: "주간회의 참여하기", isDone: false },
  ];
  const [todoArray, setTodoArray] = useState(initialToDoList);

  const [tapState, setTabState] = useState<"all" | "todo" | "done">("all");

  const [inputValue, setInputValue] = useState<string>("");

  const TabButtonStyle = `w-1/3 h-full rounded-xl font-pretendard`;

  const getTabButtonClass = (state: string) => {
    return `${TabButtonStyle} ${tapState === state ? "bg-[#EBF4FF] text-[#2182F3]" : "text-[#454545]"}`;
  };

  // todo 추가 func
  const handleEnterKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    // 한글 중복입력 방지
    if (event?.key === "Enter" && event?.nativeEvent?.isComposing === false) {
      if (!inputValue.trim()) return;

      const newTodo = {
        id:
          todoArray?.length > 0
            ? Math.max(...todoArray.map((todo) => todo.id)) + 1
            : 1,
        text: inputValue,
        isDone: false,
      };
      setInputValue("");
      setTodoArray((prev) => [...prev, newTodo]);
    }
  };

  // 완료 버튼 toggle func
  const handleClickToggleIsDone = (id: number) => {
    setTodoArray((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // 삭제 func
  const handleClickRemoveItem = (id: number) => {
    setTodoArray((prev) => {
      const index = prev.findIndex((todo) => todo?.id === id);
      if (index !== -1) {
        const newTodos = [...prev];
        newTodos.splice(index, 1);
        return newTodos;
      }
      return prev;
    });
  };

  const filterTodos = todoArray?.filter((todo) => {
    if (tapState === "all") return true;
    else if (tapState === "todo") return !todo?.isDone;
    else return todo?.isDone;
  });

  return (
    <main className=" min-h-screen text-center py-[128px] bg-[#F6F6F6] font-pretendard">
      <h1 className="text-[#333333]  text-[56px] leading-[72px] mb-[64px] font-bold">
        To Do List
      </h1>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={inputValue}
        onChange={(event) => setInputValue(event?.target?.value)}
        className="w-[737px] h-[92px] rounded-3xl p-8 gap-2 bg-[#E5E5E5] border-[#E5E5E5] mb-8 text-xl"
        onKeyDown={handleEnterKeyDown}
      />
      <section className="w-[737px] rounded-3xl p-8 bg-[#FFFFFF] shadow-custom  mx-auto">
        <div className="flex w-[324px] h-10 mx-auto mb-8">
          <button
            onClick={() => setTabState("all")}
            className={getTabButtonClass("all")}
          >
            All
          </button>
          <button
            onClick={() => setTabState("todo")}
            className={getTabButtonClass("todo")}
          >
            To Do
          </button>
          <button
            onClick={() => setTabState("done")}
            className={getTabButtonClass("done")}
          >
            Done
          </button>
        </div>
        <div className="w-full  text-left text-xl	">
          <div className="h-[60px] pl-4 py-4">
            총 {filterTodos?.length || 0}개
          </div>
          <ul className="w-full">
            {filterTodos.length !== 0 ? (
              <>
                {filterTodos?.map((todo) => {
                  const { id, text, isDone } = todo;
                  return (
                    <TodoListItem
                      key={id}
                      id={id}
                      text={text}
                      isDone={isDone}
                      handleClickToggleIsDone={handleClickToggleIsDone}
                      handleClickRemoveItem={handleClickRemoveItem}
                    />
                  );
                })}
              </>
            ) : (
              <li className="text-center">아무것도 없네요 😅</li>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default TodoUserListPage;
