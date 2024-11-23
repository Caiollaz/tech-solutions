"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Label } from "./ui/label";

const contactFormSchema = z.object({
  nome: z.string().min(1, "O nome é obrigatório."),
  email: z.string().email("E-mail inválido."),
  telefone: z.string().min(1, "O telefone é obrigatório."),
  empresa: z.string().min(1, "O nome da empresa é obrigatório."),
  mensagem: z.string().min(1, "A mensagem é obrigatória."),
  aceitaTermos: z.boolean({ message: "Termo é obrigatório" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const formFields = [
  { name: "nome", label: "Nome:", placeholder: "Digite aqui seu nome" },
  { name: "email", label: "E-mail:", placeholder: "Digite aqui seu email" },
  {
    name: "telefone",
    label: "Telefone:",
    placeholder: "Digite aqui seu telefone",
  },
  {
    name: "empresa",
    label: "Empresa:",
    placeholder: "Digite aqui o nome da sua empresa",
  },
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Formulário enviado:", data);
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-background/30 backdrop-blur-md p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-2xl font-bold mb-6 text-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Entre em contato conosco:
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {formFields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              id={field.name}
              {...register(field.name as keyof ContactFormData)}
              placeholder={field.placeholder}
            />
            {errors[field.name as keyof ContactFormData] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name as keyof ContactFormData]?.message}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Label htmlFor="mensagem">Mensagem:</Label>
        <Textarea
          id="mensagem"
          {...register("mensagem")}
          rows={4}
          placeholder="Descreva sua necessidade"
        />
        {errors.mensagem && (
          <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
        )}
      </motion.div>
      <motion.div
        className="flex flex-col space-y-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="aceitaTermos" {...register("aceitaTermos")} />
          <Label htmlFor="aceitaTermos">
            Estou ciente do uso e tratamento dos meus dados pessoais de acordo
            com o{" "}
            <a href="#" className="text-primary hover:underline">
              Termo de Consentimento para Tratamento de Dados
            </a>
          </Label>
        </div>
        {errors.aceitaTermos && (
          <p className="text-red-500 text-sm">{errors.aceitaTermos.message}</p>
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Button type="submit" className="w-full">
          Enviar Mensagem
        </Button>
      </motion.div>
    </motion.form>
  );
}
