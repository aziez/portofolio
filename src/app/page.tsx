// src/app/page.tsx
"use client";
import { portfolioData } from "@/data/portfolio";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "@/component/Globe";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="h-[50vh] mb-8">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Globe />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">{portfolioData.summary}</p>
      {/* Rest of your content */}
      <h2 className="text-2xl font-bold mb-2">Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold">Front End</h3>
          <ul className="list-disc pl-5">
            {portfolioData.skills.frontEnd.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">IT Support</h3>
          <ul className="list-disc pl-5">
            {portfolioData.skills.itSupport.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
