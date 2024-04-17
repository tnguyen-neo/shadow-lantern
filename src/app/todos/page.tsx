import { Button } from "@nextui-org/react";
import { Data } from "../_redux/data";
import TodoList from "./(todo-list)/todoList";
import { Plus } from "react-feather";

export const metadata = {
  title: "To do list",
};

export default function Todos() {
  const data = Data;
  return (
    <>
      <div className="grid gap-4">
        <div className="flex gap-4 items-center">
          <h1>To do list</h1>
          <Button isIconOnly color="primary" size="sm" radius="sm">
            <Plus />
          </Button>
        </div>
        <TodoList />
      </div>
    </>
  );
}
