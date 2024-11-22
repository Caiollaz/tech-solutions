"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Text,
  Float,
  Stars,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./animated-background";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformando Ideias em Realidade Digital
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Soluções inovadoras em tecnologia para impulsionar o seu negócio
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="text-white">
              <a href="#servicos">Conheça Nossos Serviços</a>
            </Button>
          </motion.div>
        </div>
        <div className="md:w-1/2 h-64 md:h-96">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#7897db"
                  attach="material"
                  distort={0.5}
                  speed={1.5}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
}
