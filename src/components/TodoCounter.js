import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoCounter = () => {
  const { todos } = useContext(TodoContext);
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed === true).length;
  return (
    <h1 className="text-center font-extrabold text-2xl text-[#6241a4]">
      {total > 0
        ? total === completed
          ? "Felicidades todos completados"
          : `${completed} tareas completadas de ${total}`
        : "Agregar todos"}
    </h1>
  );
};

export { TodoCounter };
