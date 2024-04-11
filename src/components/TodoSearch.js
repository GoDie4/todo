import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      placeholder="Comer galletitas"
      className=" bg-[#ffffffc8] border font-light text-[#252525] border-gray-300 rounded-full py-1 text-center block w-full mx-auto my-6 outline-[#905afd] "
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
};

export { TodoSearch };
