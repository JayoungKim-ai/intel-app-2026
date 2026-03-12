import React from "react";

import { useState, useEffect } from "react";
import TodoItem from "../components/TodoItem";

function TodoPage() {
  // 로컬스토리지에서 불러오기
  const [todos, setTodos] = useState(() => {
    const strTodos = localStorage.getItem("todos");
    return strTodos ? JSON.parse(strTodos) : [];
  });

  const [todoInput, setTodoInput] = useState("");

  // 추가 /////////////////////////////////////////
  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text: todoInput, completed: false };
    setTodos([...todos, newTodo]);
  };

  // 완료처리 ///////////////////////////////////////
  const handleCompleteToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
  };

  // 삭제 ///////////////////////////////////////
  const handleDeletTodo = (id) => {
    console.log(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // 로컬스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border border-gray-200">
        {/* 헤더 */}
        <h1 className="text-3xl font-bold text-center mb-6">📝 투두리스트</h1>

        {/* 입력창 & 버튼 */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            placeholder="할 일을 입력하세요"
            className="flex-1 border border-gray-300 rounded px-4 py-3 outline-none"
          />
          <button
            onClick={handleAddTodo}
            className="bg-purple-500 text-white font-bold px-6 py-3 rounded"
          >
            추가
          </button>
        </div>

        {/* 할 일 목록 */}
        <ul className="max-h-[400px] overflow-y-auto pr-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCompleteToggle={handleCompleteToggle}
              handleDeletTodo={handleDeletTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoPage;
