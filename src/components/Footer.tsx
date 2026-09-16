import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO, DEFAULT_WHATSAPP_MESSAGE } from '../data/constants';
import { useTracking } from '../context/TrackingContext';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

export const Footer: React.FC = () => {
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();
  return (
    <footer id="rodape" className="bg-[#0A0D14] text-[#CBD5E1] pt-16 pb-16 border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco principal de colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1E293B] text-left">
          
          {/* Coluna 1: Empresa & Identidade */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <Logo variant="footer" />
            </div>
            
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              Especialistas em locação e monitoramento de câmeras de segurança para residências, empresas e condomínios em Curitiba e Região Metropolitana.
            </p>
          </div>

          {/* Coluna 2: Contato & Atendimento */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  id="footer-whatsapp-link"
                  href={getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  onClick={() => trackWhatsAppClick('geral')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs transition-all shadow-md shadow-[#25D366]/25 hover:shadow-lg hover:shadow-[#25D366]/35 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </li>
            </ul>

            <h4 className="text-sm font-bold uppercase tracking-wider text-white mt-6 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0091FF]" />
              Horário de Atendimento
            </h4>
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              {COMPANY_INFO.hoursWeekday}
            </p>
            <p className="text-xs text-[#00C5FF] font-semibold mt-1">
              {COMPANY_INFO.hoursEmergency}
            </p>
          </div>

          {/* Coluna 3: Municípios Atendidos (11 Cidades) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0091FF]" />
              11 Cidades Atendidas na Grande Curitiba
            </h4>
            
            <p className="text-xs text-[#CBD5E1] mb-3">
              Atendimento presencial rápido com técnicos próprios nas seguintes localidades:
            </p>

            <div className="flex flex-wrap gap-1.5">
              {COMPANY_INFO.cities.map((city) => (
                <span
                  key={city}
                  className="text-xs px-2.5 py-1 rounded-md bg-[#161F30] border border-[#1E293B] text-[#CBD5E1] font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Linha pequena LGPD e Direitos Reservados */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1] text-center md:text-left">
          <p>
            © {new Date().getFullYear()} Intelsecsul — Segurança Eletrônica. Todos os direitos reservados.
          </p>
          
          <p className="max-w-xl text-[11px] leading-relaxed text-[#CBD5E1]/70">
            <strong>Privacidade e Proteção de Dados (LGPD):</strong> Os dados informados em nossos formulários e canais de contato são utilizados estritamente para comunicação comercial, envio de propostas e agendamento de vistorias técnicas pela Intelsecsul.
          </p>
        </div>

      </div>
    </footer>
  );
};
