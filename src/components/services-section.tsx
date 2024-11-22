"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedBackground from "./animated-background";

const services = [
  {
    title: "Desenvolvimento de Software",
    description:
      "Criamos soluções personalizadas para atender às necessidades específicas do seu negócio.",
    icon: "💻",
    details: [
      "Aplicações web e mobile",
      "Sistemas de gerenciamento",
      "Integrações de API",
      "Desenvolvimento ágil",
    ],
  },
  {
    title: "Consultoria em TI",
    description:
      "Oferecemos orientação especializada para otimizar seus processos e infraestrutura de TI.",
    icon: "🔍",
    details: [
      "Análise de infraestrutura",
      "Planejamento estratégico",
      "Otimização de processos",
      "Segurança da informação",
    ],
  },
];

export function ServicesSection() {
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
    <section id="servicos" className="py-20 relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Nossos Serviços
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside mb-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="mb-2">
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline">Saiba mais</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
