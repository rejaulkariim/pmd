"use client";

import { Status, useTaskStore } from "@/lib/store";
import React, { useEffect } from "react";
import Task from "./Task";

const Column = ({ title, status }: { title: string; status: Status }) => {
  const tasks = useTaskStore((state) => state.tasks);

  console.log(tasks, "tasks");
  const filteredTasks = tasks.filter((task) => task.status === status);

  const updateTask = useTaskStore((state) => state.updateTask);
  const draggedTask = useTaskStore((state) => state.draggedTask);
  const dragTask = useTaskStore((state) => state.updateTask);

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    if (!draggedTask) return;
    updateTask(draggedTask, status);
    dragTask: null;
  };

  useEffect(() => {
    useTaskStore.persist.rehydrate();
  }, []);

  return (
    <section className="h-[400px] flex-1">
      <h1 className="font-bold mt-4">{title}</h1>

      <div
        className="mt-2 h-full w-full rounded-xl bg-background p-4 border border-border overflow-y-auto"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-4 ">
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}

          {filteredTasks.length === 0 && status === "TODO" && (
            <div className="mt-8 ">
              <p className="text-sm text-center text-foreground">
                Your new task
              </p>
            </div>
          )}

          {tasks.length && filteredTasks.length === 0 && status !== "TODO" ? (
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Drag your tasks here</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Column;
