// src/app/experience/page.tsx
import ExperienceCard from "@/component/ExperianceCard";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Experience</h1>
      {portfolioData.experience.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
}
