import { Data, Todo } from "@/app/_redux/data";
import React from "react";
import TodoItem from "./todoItem";

export default function TodoList() {
  return (
    <div className="flex gap-4">
      {Data.map((item: Todo) => (
        <TodoItem key={item.id} params={item} />
      ))}
    </div>
  );
}
