import { TodoPriority } from "@/app/_redux/data";
import React from "react";
import styles from "./styles.module.scss";
import { firstCap } from "@/utilities/firstCap";

type Props = {
  priority: TodoPriority;
};

export default function Priority({ priority }: Props) {
  let priorityType: string;
  switch (priority) {
    case TodoPriority.HIGH:
      priorityType = `${styles.priority} ${styles.priorityHigh}`;
      break;
    case TodoPriority.MEDIUM:
      priorityType = `${styles.priority} ${styles.priorityMedium}`;
      break;
    case TodoPriority.LOW:
      priorityType = `${styles.priority} ${styles.priorityLow}`;
      break;
  }

  return (
    <>
      <span className={priorityType}>{firstCap(priority)}</span>
    </>
  );
}
