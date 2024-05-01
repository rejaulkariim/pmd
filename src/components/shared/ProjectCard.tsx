import { Dropdown } from "antd";
import Link from "next/link";
import { HiDotsVertical } from "react-icons/hi";
import DeleteModal from "../modal/DeleteModal";

interface Props {
  id: string;
  name: string;
  description: string;
}

const ProjectCard = ({ id, name, description }: Props) => {
  const items: any["items"] = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Edit
        </a>
      ),
    },
    {
      key: "2",
      label: <DeleteModal />,
    },
  ];
  return (
    <div className="border-2 hover:bg-card border-border rounded-lg p-2 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center">
        <Link href={`/dashboard/project/${id}`}>
          <h1 className="font-bold">{name}</h1>
          <p className="text-foreground">{description}</p>
        </Link>

        <Dropdown
          menu={{ items }}
          placement="bottom"
          arrow
          className="cursor-pointer"
        >
          <HiDotsVertical />
        </Dropdown>
      </div>
    </div>
  );
};

export default ProjectCard;
