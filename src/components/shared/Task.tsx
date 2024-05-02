import { useTaskStore } from "@/lib/store";
import { cn, formatTimestamp } from "@/lib/utils";
import { Dropdown } from "antd";
import { HiDotsVertical } from "react-icons/hi";
import DeleteModal from "../modal/DeleteModal";

const Task = ({
  id,
  title,
  description,
  deadlines,
  teamMember,
  status,
}: {
  id: string;
  title: string;
  description: string;
  deadlines: Date;
  teamMember: string;
  status: string;
}) => {
  const dragTask = useTaskStore((state) => state.dragTask);

  const items: any["items"] = [
    {
      key: "1",
      label: "Edit",
    },
    {
      key: "2",
      label: <DeleteModal id={id} />,
    },
  ];

  return (
    <>
      <div
        className={cn(
          "flex cursor-move flex-col rounded-lg bg-card p-4 text-foreground space-y-3",
          {
            "border-2 border-blue-500": status === "TODO",
            "border-2 border-amber-500": status === "IN_PROGRESS",
            "border-2 border-emerald-500": status === "DONE",
          }
        )}
        onDragStart={() => dragTask(id)}
        draggable
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-foreground">{description}</p>
          </div>

          <Dropdown
            menu={{ items }}
            placement="bottom"
            arrow
            className="cursor-pointer"
          >
            <HiDotsVertical />
          </Dropdown>
        </div>

        <div className="flex flex-col">
          <p className="text-xs text-foreground">
            Deadlines: {formatTimestamp(deadlines)}
          </p>
          <p className="text-xs text-foreground capitalize">
            Assigned to: {teamMember}
          </p>
        </div>
      </div>
    </>
  );
};

export default Task;
