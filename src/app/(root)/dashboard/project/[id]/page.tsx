"use client";

import AddTaskModal from "@/components/modal/AddTaskModal";
import BackButton from "@/components/shared/BackButton";
import Column from "@/components/shared/Column";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { projects } from "@/constants";
import { useTaskStore } from "@/lib/store";
import { cn, formatTimestamp } from "@/lib/utils";
import { Select } from "antd";
import { useState } from "react";

interface Props {
  params: {
    id: string;
  };
}

const ProjectDetailsPage = ({ params }: Props) => {
  const [filterByStatus, setFilterByStatus] = useState("TODO");
  const result = projects.find((project) => project.id === params.id);
  const tasks = useTaskStore((state) => state.tasks);
  const filteredTasks = tasks.filter((task) => task.status === filterByStatus);

  const handleChange = (value: string) => {
    setFilterByStatus(value);
  };

  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <BackButton />
        <h1 className="font-bold my-8">Project Details</h1>
        <div>
          <h1 className="font-bold">{result?.name}</h1>
          <p className="text-foreground">{result?.description}</p>
        </div>

        <div className="my-10">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Manage Task</h1>
            <AddTaskModal />
          </div>

          <div className="flex items-center gap-6">
            <Column title="Todo" status="TODO" />
            <Column title="In Progress" status="IN_PROGRESS" />
            <Column title="Done" status="DONE" />
          </div>
        </div>

        <div className="pt-10 flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Recent Activities</h1>

            <Select
              onChange={handleChange}
              defaultValue="Filter By Status"
              options={[
                { value: "TODO", label: "Todo" },
                { value: "IN_PROGRESS", label: "In Progress" },
                { value: "DONE", label: "Done" },
              ]}
            />
          </div>

          {filterByStatus ? (
            <div className="flex flex-col gap-4">
              {filteredTasks?.map((task) => (
                <div
                  key={task.id}
                  className={cn("rounded-lg p-4 w-full", {
                    "border-2 border-blue-500": task.status === "TODO",
                    "border-2 border-amber-500": task.status === "IN_PROGRESS",
                    "border-2 border-emerald-500": task.status === "DONE",
                  })}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-foreground">{task.title}</p>
                    <span
                      className={cn("text-xs uppercase", {
                        " px-4 py-1 rounded-full bg-blue-500":
                          task.status === "TODO",
                        "px-4 py-1 rounded-full bg-amber-500":
                          task.status === "IN_PROGRESS",
                        "px-4 py-1 rounded-full bg-emerald-500":
                          task.status === "DONE",
                      })}
                    >
                      Project {task.status} by {task.teamMember}
                    </span>
                  </div>
                  <span className="text-xs text-foreground">
                    {formatTimestamp(task.deadlines)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p>No result found</p>
          )}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProjectDetailsPage;
