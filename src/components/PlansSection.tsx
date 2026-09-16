import React from 'react';
import { Camera, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { PLANS_DATA } from '../data/constants';
import { useTracking } from '../context/TrackingContext';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PlanTheme {
  cardBg: string;
  cardBorder: string;
  glowLine: string;
  tag: string;
  titleHover: string;
  currency: string;
  label: string;
  checkIcon: string;
  imageBorder: string;
  badgeGradient?: string;
}

const PLAN_THEMES: Record<string, PlanTheme> = {
  'plano-essencial': {
    cardBg: 'bg-gradient-to-b from-[#11384D] via-[#0D2A3A] to-[#081B26]',
    cardBorder: 'border-2 border-[#00C5FF]/80 hover:border-[#00C5FF] shadow-2xl shadow-[#00C5FF]/20 hover:shadow-[#00C5FF]/35',
    glowLine: 'bg-gradient-to-r from-transparent via-[#00C5FF] to-transparent',
    tag: 'bg-[#00C5FF]/25 border-[#00C5FF]/70 text-[#00E5FF] font-bold',
    titleHover: 'group-hover:text-[#00E5FF]',
    currency: 'text-[#00E5FF]',
    label: 'text-[#67E8F9]',
    checkIcon: 'bg-[#00C5FF]/25 border-[#00C5FF]/60 text-[#00E5FF]',
    imageBorder: 'border-[#00C5FF]/50 group-hover:border-[#00C5FF]',
  },
  'plano-compacto': {
    cardBg: 'bg-gradient-to-b from-[#1A3161] via-[#13254A] to-[#0D1833]',
    cardBorder: 'border-2 border-[#3B82F6]/80 hover:border-[#60A5FA] shadow-2xl shadow-[#3B82F6]/25 hover:shadow-[#3B82F6]/40',
    glowLine: 'bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent',
    tag: 'bg-[#3B82F6]/25 border-[#3B82F6]/70 text-[#93C5FD] font-bold',
    titleHover: 'group-hover:text-[#93C5FD]',
    currency: 'text-[#60A5FA]',
    label: 'text-[#BFDBFE]',
    checkIcon: 'bg-[#3B82F6]/25 border-[#3B82F6]/60 text-[#93C5FD]',
    imageBorder: 'border-[#3B82F6]/50 group-hover:border-[#3B82F6]',
  },
  'plano-protecao': {
    cardBg: 'bg-gradient-to-b from-[#13402E] via-[#0E3023] to-[#092017]',
    cardBorder: 'border-2 border-[#10B981] shadow-2xl shadow-[#10B981]/30 ring-2 sm:ring-4 ring-[#10B981]/30 md:-translate-y-2',
    glowLine: 'bg-gradient-to-r from-transparent via-[#10B981] to-transparent',
    tag: 'bg-[#10B981]/25 border-[#10B981]/60 text-[#34D399] font-bold',
    titleHover: 'group-hover:text-[#34D399]',
    currency: 'text-[#34D399]',
    label: 'text-[#6EE7B7]',
    checkIcon: 'bg-[#10B981]/25 border-[#10B981]/50 text-[#34D399]',
    imageBorder: 'border-[#10B981]/50 group-hover:border-[#10B981]',
    badgeGradient: 'bg-gradient-to-r from-[#059669] to-[#10B981] shadow-[#10B981]/30',
  },
  'plano-completo': {
    cardBg: 'bg-gradient-to-b from-[#24265E] via-[#1B1D48] to-[#111231]',
    cardBorder: 'border-2 border-[#6366F1]/80 hover:border-[#818CF8] shadow-2xl shadow-[#6366F1]/20 hover:shadow-[#6366F1]/35',
    glowLine: 'bg-gradient-to-r from-transparent via-[#6366F1] to-transparent',
    tag: 'bg-[#6366F1]/25 border-[#6366F1]/60 text-[#A5B4FC] font-bold',
    titleHover: 'group-hover:text-[#A5B4FC]',
    currency: 'text-[#A5B4FC]',
    label: 'text-[#C7D2FE]',
    checkIcon: 'bg-[#6366F1]/25 border-[#6366F1]/50 text-[#A5B4FC]',
    imageBorder: 'border-[#6366F1]/50 group-hover:border-[#6366F1]',
  },
  'plano-empresarial': {
    cardBg: 'bg-gradient-to-b from-[#3D2A0E] via-[#2E1F0A] to-[#1E1406]',
    cardBorder: 'border-2 border-[#F59E0B]/80 hover:border-[#FBBF24] shadow-2xl shadow-[#F59E0B]/20 hover:shadow-[#F59E0B]/35',
    glowLine: 'bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent',
    tag: 'bg-[#F59E0B]/25 border-[#F59E0B]/60 text-[#FCD34D] font-bold',
    titleHover: 'group-hover:text-[#FCD34D]',
    currency: 'text-[#FBBF24]',
    label: 'text-[#FDE68A]',
    checkIcon: 'bg-[#F59E0B]/25 border-[#F59E0B]/50 text-[#FCD34D]',
    imageBorder: 'border-[#F59E0B]/50 group-hover:border-[#F59E0B]',
  },
  'plano-condominio': {
    cardBg: 'bg-gradient-to-b from-[#3E1857] via-[#2E1140] to-[#1E0B2B]',
    cardBorder: 'border-2 border-[#A855F7]/80 hover:border-[#C084FC] shadow-2xl shadow-[#A855F7]/20 hover:shadow-[#A855F7]/35',
    glowLine: 'bg-gradient-to-r from-transparent via-[#A855F7] to-transparent',
    tag: 'bg-[#A855F7]/25 border-[#A855F7]/60 text-[#D8B4FE] font-bold',
    titleHover: 'group-hover:text-[#D8B4FE]',
    currency: 'text-[#C084FC]',
    label: 'text-[#F3E8FF]',
    checkIcon: 'bg-[#A855F7]/25 border-[#A855F7]/50 text-[#D8B4FE]',
    imageBorder: 'border-[#A855F7]/50 group-hover:border-[#A855F7]',
  },
};

const DEFAULT_THEME: PlanTheme = {
  cardBg: 'bg-gradient-to-b from-[#11384D] via-[#0D2A3A] to-[#081B26]',
  cardBorder: 'border-2 border-[#00C5FF]/80 hover:border-[#00C5FF] shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#00C5FF]/20',
  glowLine: 'bg-gradient-to-r from-transparent via-[#00C5FF] to-transparent',
  tag: 'bg-[#00C5FF]/25 border border-[#00C5FF]/50 text-[#00E5FF]',
  titleHover: 'group-hover:text-[#00E5FF]',
  currency: 'text-[#00E5FF]',
  label: 'text-[#67E8F9]',
  checkIcon: 'bg-[#00C5FF]/25 border border-[#00C5FF]/50 text-[#00E5FF]',
  imageBorder: 'border-[#00C5FF]/50 group-hover:border-[#00C5FF]',
};

export const PlansSection: React.FC = () => {
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();

  return (
    <section id="planos" className="relative py-16 sm:py-24 bg-[#080E1A] border-b border-[#1E3A5F]/60 overflow-hidden">
      {/* Efeito sutil e contido de iluminação ambiente no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-[#0091FF]/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[220px] bg-[#00C5FF]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0091FF]/15 border border-[#0091FF]/40 text-[#00C5FF] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm shadow-[#0091FF]/10">
            <ShieldCheck className="w-3.5 h-3.5" />
            Planos sem taxa de instalação
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escolha o plano ideal para a sua necessidade
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#CBD5E1]">
            Todos os planos incluem equipamentos profissionais de ponta, instalação especializada, manutenção preventiva, corretiva e substituição imediata de peças.
          </p>
        </div>

        {/* Grade de Cards: Vertical contínua no mobile, 2/3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-md md:max-w-none mx-auto">
          {PLANS_DATA.map((plan) => {
            const isHighlight = plan.highlighted;
            const theme = PLAN_THEMES[plan.id] || DEFAULT_THEME;
            const whatsappUrl = getWhatsAppUrl(plan.whatsappMessage);
            const buttonText = plan.buttonLabel || 'CONTRATAR AGORA';

            return (
              <div
                key={plan.id}
                id={`card-${plan.id}`}
                className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-7 transition-all duration-300 w-full group ${theme.cardBg} ${theme.cardBorder}`}
              >
                {/* Linha superior de destaque com a cor do plano */}
                <div
                  className={`absolute top-0 inset-x-6 h-[2px] rounded-t-2xl pointer-events-none ${theme.glowLine}`}
                />

                {/* Selo de Destaque "Mais escolhido" */}
                {isHighlight && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${theme.badgeGradient || 'bg-gradient-to-r from-[#0077FF] to-[#00D0FF]'} text-white font-extrabold text-xs uppercase tracking-wider py-1 px-4 rounded-full shadow-lg flex items-center gap-1`}>
                    <Sparkles className="w-3.5 h-3.5 fill-white" />
                    {plan.badge || 'Mais escolhido'}
                  </div>
                )}

                <div>
                  {/* Topo do Card: Nome e Especificação */}
                  <div className="text-left mb-4">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-xl font-bold text-white ${theme.titleHover} transition-colors`}>
                        {plan.name}
                      </h3>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${theme.tag}`}>
                        {plan.camerasCount} {plan.camerasCount === 1 ? 'Câmera' : 'Câmeras'}
                      </span>
                    </div>
                  </div>

                  {/* Imagem do Kit ou Placeholder visual */}
                  {plan.image ? (
                    <div className={`w-full aspect-square bg-[#070D16] rounded-xl border ${theme.imageBorder} mb-5 overflow-hidden flex items-center justify-center p-3 transition-colors`}>
                      <img
                        src={plan.image}
                        alt={`Equipamentos inclusos no ${plan.name}`}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={400}
                      />
                    </div>
                  ) : (
                    <div className={`w-full aspect-square bg-[#070D16] rounded-xl p-4 border ${theme.imageBorder} mb-5 flex flex-col items-center justify-center gap-3 text-center`}>
                      <div className="p-3 rounded-xl bg-[#0F1B2C] border border-[#1E3A5F] text-[#0091FF]">
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
                  <div className="my-5 pb-5 border-b border-[#1E3A5F]/80 text-left">
                    <span className={`text-xs ${theme.label} font-semibold uppercase tracking-wider block mb-1`}>
                      Mensalidade sem taxa de instalação
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-2xl font-bold ${theme.currency}`}>R$</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {plan.priceMonthly}
                      </span>
                      <span className="text-[#94A3B8] font-medium text-sm">
                        / mês
                      </span>
                    </div>
                  </div>

                  {/* Lista de Itens do Plano */}
                  <div className="text-left space-y-2.5 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] block mb-2">
                      Composição do sistema:
                    </span>
                    {plan.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-2.5 text-sm text-[#CBD5E1]">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${theme.checkIcon}`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão CTA */}
                <div className="mt-4 pt-4 border-t border-[#1E3A5F]/80 text-left">
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
        <div className="mt-12 bg-gradient-to-r from-[#0F1B2C] via-[#101E31] to-[#0D1726] rounded-xl p-5 sm:p-6 border border-[#1E3A5F] max-w-2xl mx-auto shadow-xl shadow-black/40 flex flex-col sm:flex-row items-center justify-between gap-4">
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
