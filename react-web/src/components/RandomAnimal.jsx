import React from "react";
import { useState, useEffect } from "react";

function RandomAnimal() {
  const [animal, setAnimal] = useState();
  console.log(animal);
  useEffect(() => {
    async function getData() {
      const respones = await fetch("http://127.0.0.1:8000/animal");
      const data = await respones.json();
      setAnimal(data);
    }
    getData();
  }, []);
  return <div>RandomAnimal</div>;
}

export default RandomAnimal;
