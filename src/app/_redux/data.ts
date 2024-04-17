export enum TodoPriority {
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
}

export type Todo = {
  id: number | string;
  label: string;
  priority: TodoPriority;
};

export const Data: Todo[] = [
  { id: 1, label: "A", priority: TodoPriority.HIGH },
  { id: 2, label: "B", priority: TodoPriority.LOW },
  { id: 3, label: "C", priority: TodoPriority.MEDIUM },
  { id: 4, label: "D", priority: TodoPriority.MEDIUM },
];
