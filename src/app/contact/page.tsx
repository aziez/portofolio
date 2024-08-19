// src/app/contact/page.tsx
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p>Email: {portfolioData.contact.email}</p>
      <p>Phone: {portfolioData.contact.phone}</p>
      <p>Location: {portfolioData.contact.location}</p>
    </div>
  );
}
