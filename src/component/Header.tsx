// src/components/Header.tsx
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">{portfolioData.name}</h1>
      <p>{portfolioData.title}</p>
      <nav className="mt-4">
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/experience" className="mr-4">
          Experience
        </Link>
        <Link href="/projects" className="mr-4">
          Projects
        </Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
