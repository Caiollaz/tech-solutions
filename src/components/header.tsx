import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          TechSolutions
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/servicos"
                className="text-foreground hover:text-primary"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="text-foreground hover:text-primary"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-foreground hover:text-primary"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <Button asChild>
          <Link href="/orcamento">Solicitar Orçamento</Link>
        </Button>
      </div>
    </header>
  );
}
