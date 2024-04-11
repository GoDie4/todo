import React, { useContext, useState } from "react";
import { BsX } from "react-icons/bs";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChangeTextArea = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-col w-full max-w-[450px] bg-white px-16 py-10 rounded-xl"
    >
      <button
        type="button"
        onClick={() => {
          setOpenModal(false);
        }}
        className="absolute right-2 top-2"
      >
        <BsX className="text-2xl hover:text-red-500" />
      </button>
      <label className="text-center text-[#252525] mb-8 text-xl">
        Escribe tu nuevo TODO
      </label>
      <textarea
        rows={8}
        value={newTodoValue}
        onChange={onChangeTextArea}
        className="bg-gray-50 p-2 max-h-[200px] outline-none rounded-md"
        placeholder="Escribe un nuevo todo"
      ></textarea>

      <button
        type="submit"
        className="mt-8 bg-sky-500 rounded-lg text-white text-center py-2"
      >
        Agregar
      </button>
    </form>
  );
};

export { TodoForm };
