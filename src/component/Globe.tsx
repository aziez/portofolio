"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function Globe() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef}>
      <meshStandardMaterial color="#4287f5" wireframe />
    </Sphere>
  );
}
