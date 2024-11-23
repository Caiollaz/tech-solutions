"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedBackground from "./animated-background";

const reasons = [
  {
    title: "Experiência",
    description: "Anos de experiência no mercado de TI",
    icon: "🏆",
  },
  {
    title: "Inovação",
    description: "Sempre atualizados com as últimas tecnologias",
    icon: "💡",
  },
  {
    title: "Qualidade",
    description: "Comprometidos com a excelência em cada projeto",
    icon: "✨",
  },
  {
    title: "Suporte",
    description: "Atendimento personalizado e suporte contínuo",
    icon: "🤝",
  },
  {
    title: "Segurança",
    description: "Priorizamos a segurança e proteção de dados da sua empresa",
    icon: "🔒",
  },
  {
    title: "Eficiência",
    description: "Entregamos soluções rápidas e eficientes para o seu negócio",
    icon: "⚡",
  },
  {
    title: "Escalabilidade",
    description: "Soluções que crescem junto com o seu negócio",
    icon: "📈",
  },
  {
    title: "Custo-benefício",
    description: "Soluções que oferecem o melhor valor pelo seu investimento",
    icon: "💰",
  },
];

export function WhyChooseUsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Por que escolher a DevSpark?
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-background/30 backdrop-blur-md p-6 rounded-lg shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
