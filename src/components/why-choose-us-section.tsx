"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
];

export function WhyChooseUsSection() {
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
          Por que escolher a TechSolutions?
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
