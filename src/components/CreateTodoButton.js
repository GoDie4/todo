import React, { useContext } from "react";
import { MdAdd } from "react-icons/md";
import { TodoContext } from "../context/TodoContext";
const CreateTodoButton = () => {

    const {openModal, setOpenModal} = useContext(TodoContext)
  return <button onClick={()=>{setOpenModal(!openModal)}} className="fixed bottom-6 right-6 bg-sky-400 text-white p-4 flex rounded-full"><MdAdd className="text-2xl"/></button>;
};

export { CreateTodoButton };
