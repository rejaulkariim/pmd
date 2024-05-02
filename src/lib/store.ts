import { v4 as uuid } from "uuid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Status = "TODO" | "IN_PROGRESS" | "DONE";

export type Task = {
  id: string;
  title: string;
  description: string;
  deadlines: Date;
  teamMember: string;
  status: Status;
};

export type State = {
  tasks: Task[];
  draggedTask: string | null;
};

export type Actions = {
  addTask: (
    title: string,
    description: string,
    deadlines: Date,
    teamMember: string
  ) => void;
  dragTask: (id: string | null) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, status: Status) => void;
};
export const useTaskStore = create<State & Actions>()(
  persist(
    (set) => ({
      tasks: [],
      draggedTask: null,
      // Add a new task
      addTask: (
        title: string,
        description: string,
        deadlines: Date,
        teamMember: string
      ) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: uuid(),
              title,
              description,
              deadlines,
              teamMember,
              status: "TODO",
            },
          ],
        })),

      // Drag task
      dragTask: (id: string | null) => set({ draggedTask: id }),

      // Remove a new task
      removeTask: (id: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      // Update a new task
      updateTask: (id: string, status: Status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status } : task
          ),
        })),
    }),
    { name: "task-store", skipHydration: true }
  )
);
