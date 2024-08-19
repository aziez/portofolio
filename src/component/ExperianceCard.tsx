// src/components/ExperienceCard.tsx
interface ExperienceProps {
  company: string;
  position: string;
  date: string;
  responsibilities: string[];
}

export default function ExperienceCard({
  company,
  position,
  date,
  responsibilities,
}: ExperienceProps) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl font-bold">{position}</h3>
      <h4 className="text-lg">{company}</h4>
      <p className="text-gray-600">{date}</p>
      <ul className="list-disc pl-5 mt-2">
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}
