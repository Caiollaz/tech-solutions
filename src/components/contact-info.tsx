import { FaClock, FaEnvelope } from "react-icons/fa";

export function ContactInfo() {
  return (
    <div className="bg-background/30 backdrop-blur-md p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-foreground">
        Fale com quem entende.
      </h2>
      <div className="space-y-4 text-center">
        <p className="text-lg font-semibold text-foreground">
          Em caso de dúvidas, entre em contato agora mesmo:
        </p>
        <div className="flex items-center justify-center space-x-2 text-primary hover:underline">
          <FaEnvelope />
          <span>contato@devspark.com</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-primary hover:underline">
          <FaClock />
          <span>Segunda - Sexta | 08:00 - 18:00</span>
          <span className="text-sm text-muted-foreground">(Hora do café garantida!)</span>
        </div>
      </div>
    </div>
  );
}
