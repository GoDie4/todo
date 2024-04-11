import React from "react";

const LoadingTodos = () => {
  const items = localStorage.getItem("todos");
  console.log(JSON.parse(items).length);
  return (
    <ul className="flex gap-2 flex-col w-full justify-center mx-auto my-4">
      {JSON.parse(items).map((item, index) => (
        <>
          {index < JSON.parse(items).length && (
            <li className="bg-gray-50 animate-pulse duration-100 w-full px-2 h-[56px] py-4 rounded-xl list-none flex justify-between gap-2 items-center shadow-md"></li>
          )}
        </>
      ))}
     
    </ul>
  );
};

export { LoadingTodos };
