import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { BsX } from "react-icons/bs";
const TodoItem = (props) => {
  return (
    <li className="w-full px-2 py-4 rounded-xl list-none flex justify-between gap-2 items-center shadow-md">
      <button type="button" onClick={props.onComplete}>
        <BsCheck2 className={`text-2xl hover:text-green-500 ${props.completed && 'text-green-500'}`}/>
      </button>
      <p className={`text-[#303030] font-light ${props.completed && 'line-through'}`}>{props.text}</p>
      <button type="button" onClick={props.onDelete}>
        <BsX className="text-2xl hover:text-red-500"/>
      </button>
    </li>
  );
};

export { TodoItem };
