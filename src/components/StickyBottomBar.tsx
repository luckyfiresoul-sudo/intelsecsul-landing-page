import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { DEFAULT_WHATSAPP_MESSAGE } from '../data/constants';
import { useTracking } from '../context/TrackingContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const StickyBottomBar: React.FC = () => {
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = (
    <aside
      id="floating-whatsapp-container"
      aria-label="Atendimento rápido pelo WhatsApp"
      className="fixed z-[99999] pointer-events-auto"
      style={{
        position: 'fixed',
        bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))',
        right: '1.25rem',
        zIndex: 99999,
      }}
    >
      <a
        id="floating-whatsapp-btn"
        href={getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
        onClick={() => trackWhatsAppClick('flutuante')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp com a Intelsecsul"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white flex items-center justify-center shadow-[0_6px_25px_rgba(37,211,102,0.5)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.7)] transition-all duration-300 hover:scale-110 cursor-pointer relative group"
      >
        {/* Anel animado de pulso para chamar atenção tanto no mobile quanto no PC */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" />
      </a>
    </aside>
  );

  if (!mounted || typeof document === 'undefined') {
    return content;
  }

  return createPortal(content, document.body);
};
