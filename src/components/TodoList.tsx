import { ITodo } from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export default function TodoList(props: ITodoListProps) {
  const { items, removeTodo, toggleTodo } = props;

  return (
    <div>
      {items.map((elem) => (
        <TodoItem
          key={elem.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          {...elem}
        />
      ))}
    </div>
  );
}
