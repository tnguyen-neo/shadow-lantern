"use client";

import { TodoPriority } from "@/app/_redux/data";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { firstCap } from "@/utilities/firstCap";

export default function PrioritySelection() {
  const todoPriorities = [
    TodoPriority.LOW,
    TodoPriority.MEDIUM,
    TodoPriority.HIGH,
  ];
  const [priority, setPriority] = useState(TodoPriority.LOW);

  const changePriority = (value: TodoPriority) => setPriority(value);

  return (
    <>
      {todoPriorities.map((todoPriority: TodoPriority, index) => {
        let priorityType: string;
        switch (todoPriority) {
          case TodoPriority.HIGH:
            priorityType = styles.priorityHigh;
            break;
          case TodoPriority.MEDIUM:
            priorityType = styles.priorityMedium;
            break;
          case TodoPriority.LOW:
            priorityType = styles.priorityLow;
            break;
        }
        const priorityClass =
          todoPriority === priority
            ? `${styles.priority} ${priorityType}`
            : `${styles.priority}`;

        return (
          <span
            key={index}
            className={priorityClass}
            onClick={() => changePriority(todoPriority)}
          >
            {firstCap(todoPriority)}
          </span>
        );
      })}
    </>
  );
}
