import { TodoPriority } from "@/app/_redux/data";
import React from "react";
import "./styles.scss";

type Props = {
  priority: TodoPriority;
};

export default function Priority({ priority }: Props) {
  return (
    <>
      <span className={`priority priority-${priority}`}>{priority}</span>
    </>
  );
}
