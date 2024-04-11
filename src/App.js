import "./App.css";

import { AppUI } from "./components/AppUI";
import { TodoProvider } from "./context/TodoContext";

// const defaultTodos = [
//   { text: "Comer galletitas", completed: true },
//   { text: "Comer fruta", completed: false },
//   { text: "Jugar valoránt", completed: false },
// ];

// localStorage.setItem("todos", JSON.stringify(defaultTodos));

function App() {
  return (
    <>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </>
  );
}

export default App;
