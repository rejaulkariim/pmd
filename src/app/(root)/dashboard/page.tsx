"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ProjectCard from "@/components/shared/ProjectCard";
import { useProducts } from "@/hooks/useFetchData";

const DashboardPage = () => {
  const { projects, isLoading } = useProducts();

  console.log(projects, "data fromr react query");

  if (isLoading) return <MaxWidthWrapper>Loading...</MaxWidthWrapper>;

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
