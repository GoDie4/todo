import React from "react";

const TodoList = (props) => {
  return <ul className="flex gap-2 flex-col w-full justify-center mx-auto my-4">{props.children}</ul>;
};

export { TodoList };
