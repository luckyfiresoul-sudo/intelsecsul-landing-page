import React, { useRef } from 'react';
import { Camera, Check, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, HardDrive } from 'lucide-react';
import { PLANS_DATA } from '../data/constants';
import { useTracking } from '../context/TrackingContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const PlansSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="py-16 sm:py-24 bg-[#0A0D14] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#161F30] border border-[#1E293B] text-[#00C5FF] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            Planos sem taxa de instalação
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escolha o plano ideal para a sua necessidade
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#CBD5E1]">
            Todos os planos incluem equipamentos profissionais de ponta, instalação especializada, manutenção preventiva, corretiva e substituição imediata de peças.
          </p>

          {/* Dica para mobile com controles de navegação rápida */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-xs font-semibold text-[#CBD5E1]/70">
            <span>Deslize para o lado para ver todos os planos</span>
            <div className="flex items-center gap-1 ml-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="p-1 rounded-full bg-[#161F30] border border-[#1E293B] text-white active:bg-[#1E293B]"
                aria-label="Plano anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="p-1 rounded-full bg-[#161F30] border border-[#1E293B] text-white active:bg-[#1E293B]"
                aria-label="Próximo plano"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Grade de Cards: 3 colunas em desktop, carrossel fluido e desobstruído no mobile */}
        <div
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 overflow-x-auto md:overflow-visible pt-4 pb-8 md:py-0 snap-x snap-mandatory scrollbar-none px-4 sm:px-6 -mx-4 sm:-mx-6 md:mx-0 md:px-0"
        >
          {PLANS_DATA.map((plan) => {
            const isHighlight = plan.highlighted;
            const whatsappUrl = getWhatsAppUrl(plan.whatsappMessage);
            const buttonText = plan.buttonLabel || 'Quero este plano';

            return (
              <div
                key={plan.id}
                id={`card-${plan.id}`}
                className={`relative flex flex-col justify-between bg-[#161F30] rounded-2xl p-5 sm:p-7 transition-all duration-200 w-[88vw] max-w-[340px] shrink-0 md:w-auto md:max-w-none md:shrink snap-center ${
                  isHighlight
                    ? 'border-2 border-[#0091FF] shadow-2xl shadow-[#0091FF]/20 ring-2 sm:ring-4 ring-[#0091FF]/20 md:-translate-y-2'
                    : 'border border-[#1E293B] hover:border-[#0091FF]/50 shadow-xl shadow-black/40'
                }`}
              >
                {/* Selo de Destaque "Mais escolhido" */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0077FF] to-[#00D0FF] text-white font-extrabold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    {plan.badge || 'Mais escolhido'}
                  </div>
                )}

                <div>
                  {/* Topo do Card: Nome e Especificação */}
                  <div className="text-left mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">
                        {plan.name}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#121824] border border-[#1E293B] text-[#CBD5E1]">
                        {plan.camerasCount} {plan.camerasCount === 1 ? 'Câmera' : 'Câmeras'}
                      </span>
                    </div>
                  </div>

                  {/* Imagem do Kit ou Placeholder visual */}
                  {plan.image ? (
                    <div className="w-full aspect-square bg-[#121824] rounded-xl border border-[#1E293B] mb-5 overflow-hidden flex items-center justify-center p-3 group">
                      <img
                        src={plan.image}
                        alt={`Equipamentos inclusos no ${plan.name}`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-square bg-[#121824] rounded-xl p-4 border border-[#1E293B] mb-5 flex flex-col items-center justify-center gap-3 text-center">
                      <div className="p-3 rounded-xl bg-[#0A0D14] border border-[#1E293B] text-[#0091FF]">
                        <Camera className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block">
                          [IMAGEM: kit {plan.camerasCount} câmeras]
                        </span>
                        <span className="text-xs text-[#CBD5E1]/70 mt-1 block">
                          Equipamentos homologados de alta definição
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Preço em destaque */}
                  <div className="my-5 pb-5 border-b border-[#1E293B] text-left">
                    <span className="text-xs text-[#CBD5E1]/70 font-semibold uppercase tracking-wider block mb-1">
                      Mensalidade sem taxa de instalação
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl font-bold text-[#00C5FF]">R$</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {plan.priceMonthly}
                      </span>
                      <span className="text-[#CBD5E1] font-medium text-sm">
                        / mês
                      </span>
                    </div>
                  </div>

                  {/* Lista de Itens do Plano */}
                  <div className="text-left space-y-2.5 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]/60 block mb-2">
                      Composição do sistema:
                    </span>
                    {plan.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-sm text-[#CBD5E1]">
                        <div className="w-4 h-4 rounded-full bg-[#121824] border border-[#1E293B] text-[#0091FF] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão CTA */}
                <div className="mt-4 pt-4 border-t border-[#1E293B] text-left">
                  <a
                    id={`btn-plan-${plan.id}`}
                    href={whatsappUrl}
                    onClick={() => trackWhatsAppClick(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold transition-all text-sm sm:text-base cursor-pointer bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span className="truncate">{buttonText}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informação adicional de contratação */}
        <div className="mt-12 bg-[#161F30] rounded-xl p-5 sm:p-6 border border-[#1E293B] max-w-2xl mx-auto shadow-xl shadow-black/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#CBD5E1] font-medium text-center sm:text-left">
            Precisa de uma quantidade diferente de câmeras ou projeto personalizado?
          </p>
          <a
            id="plan-custom-whatsapp-btn"
            href={getWhatsAppUrl('Olá! Vim do site e preciso de uma quantidade personalizada de câmeras.')}
            onClick={() => trackWhatsAppClick('geral')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#25D366]/25 hover:shadow-lg hover:shadow-[#25D366]/35 transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Falar com consultor</span>
          </a>
        </div>

      </div>
    </section>
  );
};
