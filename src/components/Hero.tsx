import React from 'react';
import { CheckCircle2, ChevronDown, ShieldCheck } from 'lucide-react';
import { DEFAULT_WHATSAPP_MESSAGE } from '../data/constants';
import { useTracking } from '../context/TrackingContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Hero: React.FC = () => {
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();
  return (
    <section
      id="hero"
      className="relative bg-[#0A0D14] text-white pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-[#1E293B]"
    >
      {/* Elementos visuais sutis de fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(#0091FF_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0091FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-[-100px] w-80 h-80 bg-[#00C5FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:max-w-4xl flex flex-col items-start text-left">
          
          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
            Câmeras de segurança instaladas em Curitiba e Região a partir de{' '}
            <span className="text-[#00C5FF] inline-block font-black underline decoration-[#0091FF]/40 decoration-4 underline-offset-4">
              R$149/mês
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-[#CBD5E1] leading-relaxed max-w-3xl font-normal">
            Locação completa: câmeras, gravador, instalação, manutenção e suporte inclusos. Sem investimento inicial e sem taxa de instalação.
          </p>

          {/* 3 Selos em linha */}
          <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161F30] border border-[#1E293B] text-xs sm:text-sm font-semibold text-[#CBD5E1] shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#0091FF] shrink-0" />
              <span>Zero investimento inicial</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161F30] border border-[#1E293B] text-xs sm:text-sm font-semibold text-[#CBD5E1] shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#0091FF] shrink-0" />
              <span>Zero taxa de instalação</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161F30] border border-[#1E293B] text-xs sm:text-sm font-semibold text-[#CBD5E1] shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#0091FF] shrink-0" />
              <span>Manutenção e suporte inclusos</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <a
              id="hero-plans-btn"
              href="#planos"
              className="order-2 sm:order-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white bg-[#161F30] hover:bg-[#1E293B] border border-[#1E293B] hover:border-[#0091FF]/50 active:scale-[0.98] transition-all text-base sm:text-lg cursor-pointer"
            >
              <span>Ver planos</span>
              <ChevronDown className="w-5 h-5 text-[#CBD5E1]" />
            </a>

            <a
              id="hero-whatsapp-btn"
              href={getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
              onClick={() => trackWhatsAppClick('geral')}
              target="_blank"
              rel="noopener noreferrer"
              className="order-1 sm:order-2 inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-white bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all text-base sm:text-lg cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Contratar Agora</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-[#CBD5E1] flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#0091FF]" />
            Atendimento ágil em Curitiba e 10 municípios da Região Metropolitana
          </p>
        </div>
      </div>
    </section>
  );
};
