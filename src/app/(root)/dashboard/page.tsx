"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/constants";

const DashboardPage = () => {
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
