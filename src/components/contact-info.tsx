"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const contactItems = [
  {
    icon: FaEnvelope,
    text: "contato@devspark.com",
    href: "mailto:contato@devspark.com",
  },
  { icon: FaPhone, text: "(41) 99728-0000", href: "tel:+5541997280000" },
  {
    icon: FaWhatsapp,
    text: "(41) 99728-0000",
    href: "https://wa.me/5541997280000",
  },
  { icon: FaClock, text: "Segunda - Sexta | 08:00 - 18:00" },
];

export function ContactInfo() {
  return (
    <motion.div
      className="bg-background/30 backdrop-blur-md p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Fale com quem entende
      </motion.h2>
      <motion.p
        className="text-lg mb-12 text-center text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Em caso de dúvidas, entre em contato agora mesmo:
      </motion.p>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 text-foreground"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <item.icon className="text-primary" size={20} />
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
