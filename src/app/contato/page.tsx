"use client";

import { useState } from "react";
import { AnimatedHeader } from "@/components/animated-header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da TechSolutions."
  );
  
  const whatsappNumber = "5511999999999";

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeader />
      <main className="mt-32 mb-12 flex-grow container mx-auto px-4 py-12">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Entre em Contato
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-card/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-foreground">
              Envie-nos uma mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium mb-1 text-foreground"
                >
                  Nome
                </label>
                <Input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-foreground"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium mb-1 text-foreground"
                >
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 bg-card/50 backdrop-blur-sm p-8 rounded-lg"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Fale conosco pelo WhatsApp
              </h2>
              <Button
                asChild
                className="w-full bg-green-500 hover:bg-green-600"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2" />
                  Iniciar conversa no WhatsApp
                </a>
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                Informações de Contato
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center">
                  <FaEnvelope className="text-primary mr-2" />
                  <span>contato@techsolutions.com</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-primary mr-2" />
                  <span>(11) 1234-5678</span>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="text-primary mr-2" />
                  <span>Av. Paulista, 1000 - São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
