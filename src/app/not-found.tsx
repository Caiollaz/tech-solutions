"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedHeader } from "@/components/animated-header";
import { Footer } from "@/components/footer";

const glitchAnimation: Variants = {
  hidden: { skew: 0, opacity: 1 },
  visible: {
    skew: [0, -5, 5, 0],
    opacity: [1, 0.8, 0.9, 1],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeader />
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.h1
              className="text-[15rem] font-bold mb-4 text-primary relative z-10"
              initial={{ scale: 0.5, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <motion.span
                variants={glitchAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                4
              </motion.span>
              <motion.span
                variants={glitchAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ animationDelay: "0.1s" }}
              >
                0
              </motion.span>
              <motion.span
                variants={glitchAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ animationDelay: "0.2s" }}
              >
                4
              </motion.span>
            </motion.h1>
            <motion.h2
              className="text-4xl font-semibold mb-4 text-foreground relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Página não encontrada
            </motion.h2>
            <motion.p
              className="text-xl mb-8 text-muted-foreground relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Ops! Parece que você se perdeu no ciberespaço.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative z-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/">
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Voltar para a página inicial →
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
