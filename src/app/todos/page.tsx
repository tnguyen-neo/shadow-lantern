import TodoList from "./(todo-list)/todoList";
import AddTodo from "./(component)/addTodo";

export const metadata = {
  title: "To do list",
};

export default function Todos() {
  return (
    <>
      <div className="grid gap-4">
        <div className="flex gap-4 items-center">
          <h1>To do list</h1>
          <AddTodo />
        </div>
        <TodoList />
      </div>
    </>
  );
}
