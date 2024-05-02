import AddTaskModal from "@/components/modal/AddTaskModal";
import BackButton from "@/components/shared/BackButton";
import Column from "@/components/shared/Column";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { projects } from "@/constants";

interface Props {
  params: {
    id: string;
  };
}

const ProjectDetailsPage = ({ params }: Props) => {
  const result = projects.find((project) => project.id === params.id);

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

          <div className="flex items-center gap-10">
            <Column title="Todo" status="TODO" />
            <Column title="In Progress" status="IN_PROGRESS" />
            <Column title="Done" status="DONE" />
          </div>
        </div>

        {/* <div className="my-4">
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
        </div> */}
        {/* 
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
        </div> */}
      </MaxWidthWrapper>
    </section>
  );
};

export default ProjectDetailsPage;
