import React from "react";
import { Trash2 } from "lucide-react";
function TodoItem({ todo, handleCompleteToggle, handleDeletTodo }) {
  return (
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
  );
}

export default TodoItem;
