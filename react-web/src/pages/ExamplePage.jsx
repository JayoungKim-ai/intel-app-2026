import React from "react";
import Counter from "../components/Counter";
import Like from "../components/Like";
import UserCard from "../components/UserCard";

function ExamplePage() {
  return (
    <div className="flex">
      <UserCard />
      <Counter />
      <Like />
    </div>
  );
}

export default ExamplePage;
