"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const caseStudies = [
  {
    title: "Transformação Digital para Varejista",
    description:
      "Implementamos uma solução omnichannel que aumentou as vendas online em 150%.",
    image: "/placeholder.svg",
    results: [
      "Aumento de 150% nas vendas online",
      "Redução de 30% nos custos operacionais",
      "Melhoria de 40% na satisfação do cliente",
    ],
  },
  {
    title: "Sistema de IA para Análise de Dados",
    description:
      "Desenvolvemos um sistema de IA que otimizou a tomada de decisões de uma empresa de logística.",
    image: "/placeholder.svg",
    results: [
      "Redução de 25% no tempo de entrega",
      "Economia de 20% em custos de combustível",
      "Aumento de 35% na eficiência operacional",
    ],
  },
  {
    title: "Migração para Nuvem de Grande Empresa",
    description:
      "Realizamos a migração completa da infraestrutura de TI de uma multinacional para a nuvem.",
    image: "/placeholder.svg",
    results: [
      "Redução de 40% nos custos de infraestrutura",
      "Aumento de 99,99% no uptime dos sistemas",
      "Escalabilidade 10x mais rápida",
    ],
  },
];

export function CaseStudiesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Casos de Sucesso
        </motion.h2>
        <motion.div
          ref={ref}
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="md:w-1/2">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-blue-700">
                  {caseStudy.title}
                </h3>
                <p className="text-lg text-gray-600">{caseStudy.description}</p>
                <h4 className="font-semibold text-blue-600">Resultados:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="text-gray-700">
                      {result}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-4">
                  Ver Detalhes
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
