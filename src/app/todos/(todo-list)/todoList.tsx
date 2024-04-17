import { Todos, Todo } from "@/app/_redux/data";
import React from "react";
import TodoItem from "./todoItem";

export default function TodoList() {
  return (
    <div className="flex gap-4">
      {Todos.map((todo: Todo) => (
        <TodoItem key={todo.id} params={todo} />
      ))}
    </div>
  );
}
