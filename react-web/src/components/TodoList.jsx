import React from "react";
import { Trash2 } from "lucide-react";
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "첫번째할일", completed: false },
    { id: 2, text: "두번째할일", completed: true },
    { id: 3, text: "세번째할일", completed: false },
  ]);

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
            <li
              key={todo.id}
              className="flex items-center justify-between py-3 border-b border-gray-200"
            >
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked={todo.completed}
                  className="w-5 h-5"
                  onChange={() => {
                    handleCompleteToggle(todo.id);
                  }}
                />
                <span
                  className={`text-lg ${todo.completed && "text-gray-400 line-through"}`}
                >
                  {todo.text}
                </span>
              </label>
              <button
                className="text-red-500 hover:text-red-600 p-1"
                onClick={() => {
                  handleDeletTodo(todo.id);
                }}
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
