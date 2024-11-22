"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Torus, Text } from "@react-three/drei";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedBackground from "./animated-background";

const faqs = [
  {
    question: "Quais tipos de projetos de software vocês desenvolvem?",
    answer:
      "Desenvolvemos uma ampla gama de projetos, incluindo aplicações web, aplicativos móveis, sistemas de gerenciamento empresarial e soluções de e-commerce. Nossa equipe é versátil e pode adaptar-se às necessidades específicas do seu projeto.",
  },
  {
    question:
      "Quanto tempo leva para desenvolver um projeto de software personalizado?",
    answer:
      "O tempo de desenvolvimento varia dependendo da complexidade e escopo do projeto. Projetos menores podem levar algumas semanas, enquanto projetos mais complexos podem levar vários meses. Fornecemos uma estimativa detalhada após a análise inicial dos requisitos do projeto.",
  },
  {
    question:
      "Vocês oferecem suporte e manutenção após o lançamento do projeto?",
    answer:
      "Sim, oferecemos serviços de suporte e manutenção contínuos após o lançamento. Isso inclui correção de bugs, atualizações de segurança e melhorias de funcionalidades. Podemos criar um plano de suporte personalizado para atender às suas necessidades específicas.",
  },
  {
    question:
      "Como vocês garantem a segurança e a proteção de dados nos projetos?",
    answer:
      "A segurança é uma prioridade em todos os nossos projetos. Implementamos as melhores práticas de segurança, incluindo criptografia de dados, autenticação segura e proteção contra vulnerabilidades comuns. Também realizamos auditorias de segurança regulares e mantemos nossos sistemas atualizados com as últimas patches de segurança.",
  },
  {
    question:
      "Quais tecnologias e frameworks vocês utilizam no desenvolvimento?",
    answer:
      "Utilizamos uma variedade de tecnologias modernas, incluindo React, Next.js, Node.js, Python, e bancos de dados SQL e NoSQL. A escolha da tecnologia depende das necessidades específicas do projeto, mas sempre priorizamos soluções robustas, escaláveis e de fácil manutenção.",
  },
];

function AnimatedTorus() {
  return (
    <Canvas style={{ height: "500px" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
        <Torus args={[1, 0.4, 16, 100]}>
          <meshStandardMaterial color="#7897db" />
        </Torus>
        <Text
          position={[0, 0, 0]}
          fontSize={0.3}
          color="#3B82F6"
          anchorX="center"
          anchorY="middle"
        >
          FAQ
        </Text>
      </Suspense>
    </Canvas>
  );
}

export function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Perguntas Frequentes
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/3"
          >
            <AnimatedTorus />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-2/3"
          >
            <Accordion
              type="single"
              collapsible
              className="w-full backdrop-blur-sm rounded-lg p-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
