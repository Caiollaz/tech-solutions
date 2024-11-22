import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export default function Orcamento() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Solicitar Orçamento</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-sm font-medium mb-1">
              Nome
            </label>
            <Input type="text" id="nome" name="nome" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label
              htmlFor="telefone"
              className="block text-sm font-medium mb-1"
            >
              Telefone
            </label>
            <Input type="tel" id="telefone" name="telefone" required />
          </div>
          <div className="mb-4">
            <label htmlFor="servico" className="block text-sm font-medium mb-1">
              Serviço
            </label>
            <Select name="servico" required>
              <option value="">Selecione um serviço</option>
              <option value="desenvolvimento">
                Desenvolvimento de Software
              </option>
              <option value="consultoria">Consultoria em TI</option>
              <option value="nuvem">Soluções em Nuvem</option>
              <option value="outro">Outro</option>
            </Select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="descricao"
              className="block text-sm font-medium mb-1"
            >
              Descrição do Projeto
            </label>
            <Textarea id="descricao" name="descricao" rows={4} required />
          </div>
          <Button type="submit">Solicitar Orçamento</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
