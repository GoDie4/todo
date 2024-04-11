import React, { useContext } from "react";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Fragment } from "react";
import { TodoCounter } from "./TodoCounter";
import { LoadingTodos } from "./LoadingTodos";
import { TodoContext } from "../context/TodoContext";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";

const AppUI = () => {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal } =
    useContext(TodoContext);

  return (
    <Fragment>
      <section className="flex flex-col  max-w-[600px] gap-8">
        <div className="bg-white px-12 min-w-[430px] min-h-[540px] rounded-3xl py-20 shadow-2xl">
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {loading && <LoadingTodos />}
            {error && <p>Errorcito</p>}
            {!loading && searchedTodos.length === 0 && (
              <p>Crea tu primer todo</p>
            )}
            {searchedTodos.map((item) => (
              <TodoItem
                key={item.text}
                text={item.text}
                completed={item.completed}
                onComplete={() => completeTodo(item.text)}
                onDelete={() => deleteTodo(item.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton />

          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export { AppUI };
