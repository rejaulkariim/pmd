import BackButton from "@/components/shared/BackButton";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { projects } from "@/constants";
import { formatTimestamp } from "@/lib/utils";
import { Button } from "antd";

interface Props {
  params: {
    id: string;
  };
}

const ProjectDetailsPage = ({ params }: Props) => {
  const result = projects.find((project) => project.id === params.id);
  console.log(result);
  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <BackButton />
        <h1 className="font-bold my-8">Project Details</h1>
        <div>
          <h1 className="font-bold">{result?.name}</h1>
          <p className="text-foreground">{result?.description}</p>
        </div>

        <div className="my-4">
          <div className="flex gap-4 items-center">
            <h1 className="font-bold">Tasks</h1>
            <Button
              style={{
                backgroundColor: "transparent",
                borderColor: "#191918",
                color: "#b5b3ad",
              }}
            >
              New Task
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {result?.tasks.map((task) => (
              <div key={task.id} className="my-4">
                <p className="text-sm font-semibold ">{task.title}</p>
                <span className="text-xs text-foreground border px-3 py-0.5 rounded-xl border-border">
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="my-4">
          <h1 className="font-bold">Team Member</h1>
          <div className="flex items-center gap-3">
            {result?.teamMembers.map((member) => (
              <div key={member.id} className="my-4">
                <p className="font-bold">{member.name}</p>
                <span className="text-xs text-foreground border px-3 py-0.5 rounded-xl border-border">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-bold">Recent Activities</h1>
          {result?.recentActivities.map((member) => (
            <div key={member.id} className="my-4">
              <p className="text-foreground">{member.description}</p>
              <span className="text-xs text-foreground">
                {formatTimestamp(member.timestamp)}
              </span>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ProjectDetailsPage;
