import React, { createContext, useContext, useEffect, useState } from 'react';
import { COMPANY_INFO } from '../data/constants';

export interface UtmParams {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
}

interface TrackingContextType {
  utmParams: UtmParams;
  hasUtmParams: boolean;
  getWhatsAppUrl: (baseMessage: string) => string;
  trackWhatsAppClick: (plano?: string) => void;
  trackFormSubmit: (tipoImovel: string, quantidadeCameras: string) => void;
}

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

const TrackingContext = createContext<TrackingContextType | undefined>(undefined);

const STORAGE_KEY = 'intelsecsul_utm_params';

export const TrackingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [utmParams, setUtmParams] = useState<UtmParams>({
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_content: null,
  });

  useEffect(() => {
    try {
      if (typeof window === 'undefined') return;

      // 1. Ler parâmetros da URL usando URLSearchParams
      const searchParams = new URLSearchParams(window.location.search);
      const urlSource = searchParams.get('utm_source');
      const urlMedium = searchParams.get('utm_medium');
      const urlCampaign = searchParams.get('utm_campaign');
      const urlContent = searchParams.get('utm_content');

      const foundInUrl = Boolean(urlSource || urlMedium || urlCampaign || urlContent);

      if (foundInUrl) {
        const captured: UtmParams = {
          utm_source: urlSource,
          utm_medium: urlMedium,
          utm_campaign: urlCampaign,
          utm_content: urlContent,
        };
        setUtmParams(captured);
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
      } else {
        // Recuperar da sessão caso o usuário tenha navegado internamente
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as UtmParams;
          setUtmParams(parsed);
        }
      }

      // Garantir inicialização do dataLayer se ainda não existir
      window.dataLayer = window.dataLayer || [];
    } catch (e) {
      console.warn('Erro ao processar parâmetros UTM:', e);
    }
  }, []);

  const hasUtmParams = Boolean(
    utmParams.utm_source ||
      utmParams.utm_medium ||
      utmParams.utm_campaign ||
      utmParams.utm_content
  );

  /**
   * Constrói o link do WhatsApp adicionando ao final a origem no formato:
   * "(origem: {utm_source} / {utm_campaign})" se houver parâmetros na URL.
   * Se não houver parâmetros, não acrescenta nada.
   */
  const getWhatsAppUrl = (baseMessage: string): string => {
    let finalMessage = baseMessage;

    if (hasUtmParams) {
      const source = utmParams.utm_source || utmParams.utm_medium || '-';
      const campaign = utmParams.utm_campaign || utmParams.utm_content || '-';
      const originTag = `(origem: ${source} / ${campaign})`;
      finalMessage = `${baseMessage.trim()} ${originTag}`;
    }

    return `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(finalMessage)}`;
  };

  /**
   * Dispara o evento whatsapp_click no dataLayer
   * Formato: { event: "whatsapp_click", plano: "NOME_DO_PLANO_OU_geral" }
   */
  const trackWhatsAppClick = (plano?: string) => {
    const planoName = plano && plano.trim() ? plano : 'geral';
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'whatsapp_click',
        plano: planoName,
      });
    }
  };

  /**
   * Dispara o evento form_submit no dataLayer
   * Formato: { event: "form_submit", tipo_imovel: "...", quantidade_cameras: "..." }
   */
  const trackFormSubmit = (tipoImovel: string, quantidadeCameras: string) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit',
        tipo_imovel: tipoImovel,
        quantidade_cameras: quantidadeCameras,
      });
    }
  };

  return (
    <TrackingContext.Provider
      value={{
        utmParams,
        hasUtmParams,
        getWhatsAppUrl,
        trackWhatsAppClick,
        trackFormSubmit,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
};

export const useTracking = (): TrackingContextType => {
  const context = useContext(TrackingContext);
  if (!context) {
    throw new Error('useTracking deve ser utilizado dentro de um TrackingProvider');
  }
  return context;
};
