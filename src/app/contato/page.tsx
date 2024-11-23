"use client";

import AnimatedBackground from "@/components/animated-background";
import { AnimatedHeader } from "@/components/animated-header";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { Footer } from "@/components/footer";

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedHeader />
      <main className="flex-grow relative">
        <AnimatedBackground />
        <div className="container mx-auto px-4 py-32 relative z-10">
          <h1 className="text-4xl font-bold mb-12 text-center text-foreground">
            Entre em Contato
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
