"use client";

import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import type { Group, Mesh } from "three";

const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "Express.js",
  "JavaScript",
  "Python",
  "Git",
  "Tailwind CSS",
];

function OrbitSkill({
  label,
  angle,
  radius,
}: {
  label: string;
  angle: number;
  radius: number;
}) {
  const [hovered, setHovered] = useState(false);

  const pos = useMemo(
    () => [Math.cos(angle) * radius, Math.sin(angle) * radius, 0] as const,
    [angle, radius],
  );

  return (
    <group position={pos}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <planeGeometry args={[1.85, 0.5]} />
        <meshStandardMaterial
          color={hovered ? "#ffffff" : "#f7f8ff"}
          emissive={hovered ? "#9398ff" : "#6f74f5"}
          emissiveIntensity={hovered ? 0.4 : 0.16}
          transparent
          opacity={0.96}
        />
      </mesh>
      <Text
        position={[0, 0, 0.02]}
        fontSize={0.16}
        color={hovered ? "#1f2340" : "#2f3459"}
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}

function OrbitScene() {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.z += delta * 0.16;
    if (ringRef.current) ringRef.current.rotation.z -= delta * 0.1;
  });

  return (
    <>
      <ambientLight intensity={1.2} />
      <pointLight position={[3, 2, 4]} intensity={1.8} color="#8d91ff" />

      <mesh ref={ringRef}>
        <torusGeometry args={[2.25, 0.04, 24, 220]} />
        <meshStandardMaterial color="#a7adff" emissive="#7f85ff" emissiveIntensity={0.3} />
      </mesh>

      <group ref={groupRef}>
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * Math.PI * 2;
          return <OrbitSkill key={skill} label={skill} angle={angle} radius={2.25} />;
        })}
      </group>
    </>
  );
}

export function SkillsOrbitSection() {
  return (
    <section className="mx-auto mt-10 w-[min(1120px,92vw)] rounded-[2rem] glass-card p-6 md:mt-12 md:p-10">
      <div className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Skills Orbit</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Tech Stack in Motion
        </h2>
      </div>

      <div className="relative mx-auto h-[360px] w-full max-w-[820px] overflow-hidden rounded-3xl border border-white/80 bg-white/55 md:h-[500px]">
        <div className="absolute left-1/2 top-1/2 z-20 h-28 w-28 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/90 shadow-xl shadow-indigo-200 md:h-40 md:w-40">
          <Image src="/profile.jpg" alt="Sriram Adithya" fill className="object-cover" />
        </div>

        <div className="absolute inset-0 z-10">
          <Canvas camera={{ position: [0, 0, 6] }}>
            <OrbitScene />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
