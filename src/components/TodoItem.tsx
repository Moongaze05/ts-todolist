import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export default function TodoItem(props: ITodoItem) {
  const { id, complete, title, removeTodo, toggleTodo } = props;
  return (
    <div style={complete ? { textDecoration: "line-through" } : undefined}>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button onClick={() => removeTodo(id)}>delete</button>
    </div>
  );
}
