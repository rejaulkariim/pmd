"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ProjectCard from "@/components/shared/ProjectCard";

const DashboardPage = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Description of E-commerce Platform",
    },
    {
      id: 2,
      name: "Social Media App",
      description: "Description of Social Media App",
    },
    {
      id: 3,
      name: "Task Management System",
      description: "Description of Task Management System",
    },
    {
      id: 4,
      name: "Online Learning Portal",
      description: "Description of Online Learning Portal",
    },
    {
      id: 5,
      name: "Finance Tracker Application",
      description: "Description of Finance Tracker Application",
    },
  ];
  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold">Projects Overview</h1>
          <div className="flex flex-col gap-4 mt-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default DashboardPage;
