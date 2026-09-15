import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTracking } from '../context/TrackingContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FinalCtaSection: React.FC = () => {
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();

  const defaultEvaluationMessage =
    'Olá! Vim do site e quero solicitar uma avaliação gratuita para instalação de câmeras de segurança no meu imóvel.';

  return (
    <section
      id="avaliacao-gratuita"
      className="py-16 sm:py-24 bg-[#0A0D14] text-white border-b border-[#1E293B] relative overflow-hidden"
    >
      {/* Elementos sutis de fundo */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#0091FF_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0091FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Selo do CTA */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#161F30] border border-[#1E293B] text-[#00C5FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <ShieldCheck className="w-4 h-4" />
          Sem Custo e Sem Compromisso
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Peça uma avaliação gratuita para o seu imóvel
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto">
          Nosso especialista avalia os pontos críticos de segurança do seu espaço e apresenta a solução exata com custo previsível e sem taxa de instalação.
        </p>

        {/* Botão Grande Principal */}
        <div className="mt-8 sm:mt-10">
          <a
            id="cta-big-whatsapp-btn"
            href={getWhatsAppUrl(defaultEvaluationMessage)}
            onClick={() => trackWhatsAppClick('geral')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-extrabold text-white bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all text-lg sm:text-xl cursor-pointer"
          >
            <WhatsAppIcon className="w-6 h-6" />
            <span>Solicitar avaliação pelo WhatsApp</span>
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#CBD5E1]">
            <CheckCircle2 className="w-4 h-4 text-[#0091FF]" />
            <span>Atendimento ágil em horário comercial</span>
          </div>
        </div>

      </div>
    </section>
  );
};
