import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO, DEFAULT_WHATSAPP_MESSAGE } from '../data/constants';
import { useTracking } from '../context/TrackingContext';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Navbar: React.FC = () => {
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();
  return (
    <header
      id="topo"
      className="sticky top-0 z-40 w-full bg-[#0A0D14]/90 backdrop-blur-md border-b border-[#1E293B] shadow-lg shadow-black/40 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo à esquerda */}
        <a
          href="#topo"
          id="nav-logo"
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#0091FF] rounded-lg py-1 px-1.5 transition-transform"
          aria-label="IntelsecSul - Início"
        >
          <Logo variant="navbar" />
        </a>

        {/* Controles à direita */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Telefone clicável (apenas desktop/tablet, oculto no mobile) */}
          <a
            id="nav-phone-link"
            href={COMPANY_INFO.phoneTel}
            className="hidden md:flex items-center gap-2.5 text-[#CBD5E1] hover:text-white font-medium text-sm transition-colors py-1.5 px-3 rounded-lg hover:bg-[#161F30] border border-transparent hover:border-[#1E293B]"
            title="Ligar para Intelsecsul"
          >
            <div className="w-7 h-7 rounded-lg bg-[#161F30] border border-[#1E293B] flex items-center justify-center text-[#0091FF]">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] text-[#CBD5E1]/70 font-normal leading-tight">
                Ligue ou chame
              </span>
              <span className="font-bold text-white tracking-wide text-xs sm:text-sm">
                {COMPANY_INFO.phoneDisplay}
              </span>
            </div>
          </a>

          {/* Botão WhatsApp (oculto no mobile conforme solicitado) */}
          <a
            id="nav-whatsapp-btn"
            href={getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
            onClick={() => trackWhatsAppClick('geral')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] shadow-md shadow-[#25D366]/25 hover:shadow-lg hover:shadow-[#25D366]/35 transition-all text-xs sm:text-sm cursor-pointer whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
