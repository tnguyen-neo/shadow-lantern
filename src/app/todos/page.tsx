import { Data } from "../_redux/data";
import TodoItem from "./todo-item";

export const metadata = {
  title: "To do list",
};

export default function Todos() {
  const data = Data;
  return (
    <>
      <p>To do list</p>
      <p className="flex gap-4">
        {data.map((item) => (
          <TodoItem key={item.id} params={item} />
        ))}
      </p>
    </>
  );
}
