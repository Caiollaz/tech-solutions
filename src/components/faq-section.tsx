"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

export function FAQSection() {
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
          Perguntas Frequentes
        </motion.h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-lg"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-foreground/10 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
