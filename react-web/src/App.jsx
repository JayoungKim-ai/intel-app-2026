import React from "react";
import { Routes, Route } from "react-router-dom";
import UserCard from "./components/UserCard";
import DesignSystemPage from "./pages/DesignSystemPage";
import Header from "./components/Header";
import TeamPage from "./pages/TeamPage";
import Footer from "./components/Footer";
import Example from "./components/Example";
import Counter from "./components/Counter";
import CafeMenu from "./components/CafeMenu";
import ExampleInput from "./components/ExampleInput";
import NameCard from "./components/NameCard";
import TodoPage from "./pages/TodoPage";
import ExamplePage from "./pages/ExamplePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TeamPage />} />
        <Route path="/todolist" element={<TodoPage />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
