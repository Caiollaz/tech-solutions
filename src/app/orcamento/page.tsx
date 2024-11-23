'use client'

import { motion } from 'framer-motion';
import { AnimatedHeader } from "@/components/animated-header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AnimatedBackground from "@/components/animated-background";
import { Label } from "@/components/ui/label";

const formFields = [
  { name: 'nome', label: 'Nome', type: 'text', placeholder: 'Digite aqui seu nome' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'Digite aqui seu email' },
  { name: 'telefone', label: 'Telefone', type: 'tel', placeholder: 'Digite aqui seu telefone' },
];

export default function OrcamentoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeader />
      <main className="flex-grow relative">
        <AnimatedBackground />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center text-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Solicitar Orçamento
          </motion.h1>
          <motion.form 
            className="max-w-md mx-auto space-y-6 bg-background/30 backdrop-blur-md p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {formFields.map((field, index) => (
              <motion.div 
                key={field.name} 
                className="mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input 
                  type={field.type} 
                  id={field.name} 
                  name={field.name} 
                  placeholder={field.placeholder} 
                  required 
                />
              </motion.div>
            ))}
            <motion.div 
              className="mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Label htmlFor="servico">Serviço</Label>
              <Select name="servico" required>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="desenvolvimento">Desenvolvimento de Software</SelectItem>
                    <SelectItem value="consultoria">Consultoria em TI</SelectItem>
                    <SelectItem value="nuvem">Soluções em Nuvem</SelectItem>
                    <SelectItem value="outro">Outros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </motion.div>
            <motion.div 
              className="mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Label htmlFor="descricao">Descrição do Projeto</Label>
              <Textarea 
                id="descricao" 
                name="descricao" 
                rows={4} 
                placeholder="Descreva sua necessidade" 
                required 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button type="submit" className="w-full">
                Solicitar Orçamento
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

