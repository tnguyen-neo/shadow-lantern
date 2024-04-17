export enum TodoPriority {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}

export type Todo = {
  id: number | string;
  label: string;
  priority: TodoPriority;
};

export const Todos: Todo[] = [
  { id: 1, label: "A", priority: TodoPriority.HIGH },
  { id: 2, label: "B", priority: TodoPriority.LOW },
  { id: 3, label: "C", priority: TodoPriority.MEDIUM },
  { id: 4, label: "D", priority: TodoPriority.MEDIUM },
];
