import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useTracking } from '../context/TrackingContext';

const CATALOG_MESSAGE = 'Olá! Vim do site e quero ver o catálogo completo de produtos e planos';

const CHIPS = [
  'Zero investimento inicial',
  'Zero taxa de instalação',
  'Manutenção e suporte inclusos',
  'Equipamentos Profissionais',
];

export const CatalogoPage: React.FC = () => {
  const tracking = useTracking();

  // Gerenciamento de meta tags básicas de SEO específicas para esta rota
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Catálogo — Intelsecsul';

    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : null;
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Câmeras de segurança instaladas em Curitiba e Região a partir de R$149/mês. Locação completa com instalação, suporte e manutenção inclusos.'
      );
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const originalOgTitle = ogTitle ? ogTitle.getAttribute('content') : null;
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Catálogo — Intelsecsul');
    }

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
      if (ogTitle && originalOgTitle) {
        ogTitle.setAttribute('content', originalOgTitle);
      }
    };
  }, []);

  const whatsappUrl = tracking?.getWhatsAppUrl
    ? tracking.getWhatsAppUrl(CATALOG_MESSAGE)
    : `https://wa.me/5541991560946?text=${encodeURIComponent(CATALOG_MESSAGE)}`;

  const handleWhatsAppClick = () => {
    tracking?.trackWhatsAppClick?.('catalogo');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0D14] text-[#CBD5E1] font-sans selection:bg-[#0091FF] selection:text-white">
      {/* 1. Cabeçalho fixo no topo, fundo escuro com borda inferior sutil #1E3A5F */}
      <header
        id="catalogo-header"
        className="fixed top-0 left-0 right-0 z-40 w-full bg-[#0A0D14] border-b border-[#1E3A5F]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-center sm:justify-start">
          <a
            href="/"
            id="catalogo-logo"
            className="flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#0091FF] rounded-lg py-1 px-1.5 transition-transform"
            aria-label="Intelsecsul - Início"
          >
            <Logo variant="navbar" />
          </a>
        </div>
      </header>

      {/* 2. Conteúdo centralizado vertical e horizontalmente */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 relative overflow-hidden bg-[#0A0D14] text-center min-h-screen">
        {/* Padrão de grid de pontos sutil (reaproveitado do Hero da página principal) */}
        <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#0091FF_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0091FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-[-100px] w-80 h-80 bg-[#00C5FF]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Título principal (h1) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans leading-tight">
            Câmeras de segurança instaladas em Curitiba e Região a partir de R$149/mês
          </h1>

          {/* Parágrafo abaixo do título */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#CBD5E1] leading-relaxed max-w-2xl font-normal">
            Locação completa: câmeras, gravador, instalação, manutenção e suporte inclusos. Sem investimento inicial e sem taxa de instalação.
          </p>

          {/* Lista de 4 badges/chips com ícone de check */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 max-w-2xl">
            {CHIPS.map((chip, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161F30] border border-[#1E293B] text-sm font-semibold text-[#CBD5E1] shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0091FF] shrink-0" />
                <span>{chip}</span>
              </div>
            ))}
          </div>

          {/* Botão de WhatsApp */}
          <a
            id="btn-catalogo-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="mt-8 sm:mt-10 inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white font-bold rounded-xl py-4 px-8 text-lg shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all cursor-pointer select-none"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span>Ver Catálogo no WhatsApp</span>
          </a>
        </div>
      </main>
    </div>
  );
};
