// src/app/projects/page.tsx
import ProjectCard from "@/component/ProjectCard";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      {portfolioData.projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}
