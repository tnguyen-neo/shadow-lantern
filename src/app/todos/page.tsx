import { Data } from "../_redux/data";
import TodoList from "./(todo-list)/todoList";

export const metadata = {
  title: "To do list",
};

export default function Todos() {
  const data = Data;
  return (
    <>
      <h1>To do list</h1>
      <TodoList />
    </>
  );
}
