// src/components/ProjectCard.tsx
interface ProjectProps {
  name: string;
  description: string;
}

export default function ProjectCard({ name, description }: ProjectProps) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p>{description}</p>
    </div>
  );
}
