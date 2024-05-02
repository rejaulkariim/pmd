"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ProjectCard from "@/components/shared/ProjectCard";
import { useProducts } from "@/hooks/useFetchData";
import { Skeleton } from "antd";

const DashboardPage = () => {
  const { projects, isLoading } = useProducts();

  if (isLoading)
    return (
      <section className="py-10">
        <MaxWidthWrapper className="max-w-3xl">
          <h1 className="font-bold">Projects Overview</h1>
          <Skeleton paragraph={{ rows: 4 }} />
        </MaxWidthWrapper>
      </section>
    );

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
