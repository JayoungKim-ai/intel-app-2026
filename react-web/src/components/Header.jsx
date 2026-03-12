import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const menuStyle = (isActive) => {
    return isActive
      ? "px-4 py-2 rounded-lg text-body font-semibold text-primary-700 bg-primary-50"
      : "px-4 py-2 rounded-lg text-body font-medium text-gray-500 hover:text-primary-700 hover:bg-primary-50 transition-colors";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 backdrop-blur-xl bg-white/85">
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* 로고 */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">
            T
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">
            TeamFlow
          </span>
        </a>

        {/* 네비게이션 */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={({ isActive }) => menuStyle(isActive)}>
            홈
          </NavLink>
          <NavLink
            to="/todolist"
            className={({ isActive }) => menuStyle(isActive)}
          >
            TodoList
          </NavLink>
          <NavLink
            to="/example"
            className={({ isActive }) => menuStyle(isActive)}
          >
            Examples
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
