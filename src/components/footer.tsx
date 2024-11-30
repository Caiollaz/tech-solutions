"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/caiolabella/" },
    { icon: FaGithub, href: "https://github.com/caiollaz" },
  ];

  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.h3
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Legana
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Soluções inovadoras em tecnologia da informação e desenvolvimento
              de software.
            </motion.p>
          </div>
          <div>
            <motion.h3
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Links Rápidos
            </motion.h3>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {["Serviços", "Sobre", "Contato"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div>
            <motion.h3
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contato
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Email: contato@legana.com.br
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mt-8 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          © 2024 Legana. Todos os direitos reservados.
        </motion.div>
      </div>
    </footer>
  );
}
