import { Header } from "@/components/header";
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
import { AnimatedHeader } from "@/components/animated-header";
import AnimatedBackground from "@/components/animated-background";
import { Label } from "@/components/ui/label";

export default function Orcamento() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeader />
      <main className="flex-grow relative">
        <AnimatedBackground />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <h1 className="text-3xl font-bol mb-8">Solicitar Orçamento</h1>
          <form className="max-w-md mx-auto space-y-6 bg-background/30 backdrop-blur-md p-8 rounded-lg shadow-lg">
            <div className="mb-3">
              <Label htmlFor="nome">Nome</Label>
              <Input type="text" id="nome" name="nome" placeholder="Digite aqui seu nome" required />
            </div>
            <div className="mb-3">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" placeholder="Digite aqui seu email" required />
            </div>
            <div className="mb-3">
              <Label htmlFor="telefone">Telefone</Label>
              <Input type="tel" id="telefone" name="telefone" placeholder="Digite aqui seu telefone" required />
            </div>
            <div className="mb-3">
              <Label htmlFor="servico">Serviço</Label>
              <Select name="servico" required>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="desenvolvimento">
                      Desenvolvimento de Software
                    </SelectItem>
                    <SelectItem value="consultoria">
                      Consultoria em TI
                    </SelectItem>
                    <SelectItem value="nuvem">Soluções em Nuvem</SelectItem>
                    <SelectItem value="outro">Outros</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-3">
              <Label htmlFor="descricao">Descrição do Projeto</Label>
              <Textarea id="descricao" name="descricao" rows={4} placeholder="Descreva sua necessidade" required />
            </div>
            <Button type="submit" className="text-white">
              Solicitar Orçamento
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
