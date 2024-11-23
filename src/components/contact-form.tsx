"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  areaAtendimento: z.object(
    {
      label: z.string(),
      value: z.string(),
    },
    { required_error: "A área de atendimento é obrigatório." }
  ),
  mensagem: z.string().min(1, "A mensagem é obrigatória."),
  aceitaTermos: z.boolean(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-background/30 backdrop-blur-md p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-foreground">
        Entre em contato conosco:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="nome">Nome:</Label>
          <Input
            id="nome"
            {...register("nome")}
            placeholder="Digite aqui seu nome"
          />
        </div>
        <div>
          <Label htmlFor="nome">E-mail:</Label>
          <Input
            id="email"
            {...register("email")}
            placeholder="Digite aqui seu email"
          />
        </div>
        <div>
          <Label htmlFor="telefone">Telefone:</Label>
          <Input
            id="telefone"
            {...register("telefone")}
            placeholder="Digite aqui seu telefone"
          />
        </div>
        <div>
          <Label htmlFor="empresa">Empresa:</Label>
          <Input
            id="empresa"
            {...register("empresa")}
            placeholder="Digite aqui o nome da sua empresa"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="areaAtendimento">Área de Atendimento:</Label>
        <Select {...register("areaAtendimento")}>
          <SelectTrigger>
            <SelectValue placeholder="Escolha uma opção" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="desenvolvimento">
                Desenvolvimento de Software
              </SelectItem>
              <SelectItem value="consultoria">Consultoria em TI</SelectItem>
              <SelectItem value="nuvem">Soluções em Nuvem</SelectItem>
              <SelectItem value="outro">Outros</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="mensagem">Mensagem:</Label>
        <Textarea
          id="mensagem"
          {...register("mensagem")}
          rows={4}
          placeholder="Descreva sua necessidade"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="aceitaTermos" {...register("aceitaTermos")} />
        <Label htmlFor="aceitaTermos">
          Estou ciente do uso e tratamento dos meus dados pessoais de acordo com
          o{" "}
          <a href="#" className="text-primary hover:underline">
            Termo de Consentimento para Tratamento de Dados
          </a>
        </Label>
      </div>
      <Button type="submit" className="w-full">
        Enviar Mensagem
      </Button>
    </form>
  );
}
