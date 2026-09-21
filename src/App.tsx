import React, { useState, useEffect } from 'react';
import { TrackingProvider } from './context/TrackingContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlansSection } from './components/PlansSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProblemsSolvedSection } from './components/ProblemsSolvedSection';
import { TrustCoverageSection } from './components/TrustCoverageSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CatalogoPage } from './components/CatalogoPage';

function isCatalogoRoute(): boolean {
  if (typeof window === 'undefined') return false;
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  const hash = window.location.hash.toLowerCase().replace(/\/+$/, '');
  return path === '/catalogo' || hash === '#/catalogo' || hash === '#catalogo';
}

export default function App() {
  const [isCatalogo, setIsCatalogo] = useState<boolean>(isCatalogoRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsCatalogo(isCatalogoRoute());
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  return (
    <TrackingProvider>
      {isCatalogo ? (
        <CatalogoPage />
      ) : (
        <div className="min-h-screen flex flex-col bg-[#0A0D14] font-sans text-[#CBD5E1] selection:bg-[#0091FF] selection:text-white">
          {/* 1. Barra fixa no topo (sticky) */}
          <Navbar />

          <main className="flex-1">
            {/* 2. Hero (fundo azul-marinho) */}
            <Hero />

            {/* 4. Catálogo de planos (id="planos") */}
            <PlansSection />

            {/* 5. Como funciona */}
            <HowItWorksSection />

            {/* 6. Comparativo Aluguel vs Compra ("Por Que Alugar é Melhor Que Comprar?") */}
            <ProblemsSolvedSection />

            {/* 7. Seção de confiança (cidades atendidas + avaliações) */}
            <TrustCoverageSection />

            {/* 11. FAQ acordeão */}
            <FaqSection />

            {/* 12. CTA final com formulário rápido */}
            <FinalCtaSection />
          </main>

          {/* 13. Rodapé com dados legais e LGPD */}
          <Footer />

          {/* Botão flutuante redondo para WhatsApp */}
          <StickyBottomBar />
        </div>
      )}
    </TrackingProvider>
  );
}
