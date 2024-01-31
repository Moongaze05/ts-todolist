import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ITodo } from "../types/data";
import TodoList from "./TodoList";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function addTodo(): void {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  }

  function handleChange(ev: ChangeEvent<HTMLInputElement>): void {
    setValue(ev.target.value);
  }

  function handleKeyUp(ev: React.KeyboardEvent<HTMLInputElement>): void {
    if (ev.key === "Enter") {
      addTodo();
    }
  }

  function removeTodo(id: number): void {
    setTodos(todos.filter((elem) => elem.id !== id));
  }

  function toggleTodo(id: number): void {
    setTodos(
      todos.map((elem) => {
        if (elem.id !== id) {
          return elem;
        } else {
          return {
            ...elem,
            complete: !elem.complete,
          };
        }
      })
    );
  }

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          value={value}
          onChange={(ev) => handleChange(ev)}
          onKeyUp={(ev) => handleKeyUp(ev)}
          type="text"
        />
        <button onClick={addTodo}>add</button>
      </div>

      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export { App };
