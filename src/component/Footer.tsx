// src/components/Footer.tsx
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© 2024 {portfolioData.name}. All rights reserved.</p>
    </footer>
  );
}
