import React from 'react';
import {
  Star,
  ShieldCheck,
} from 'lucide-react';
import {
  CUSTOMER_REVIEWS,
} from '../data/constants';
import { useTracking } from '../context/TrackingContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const TrustCoverageSection: React.FC = () => {
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();

  // URL WhatsApp para contratação rápida após ver avaliações
  const contratarWhatsappUrl = getWhatsAppUrl(
    'Olá! Vi as avaliações dos clientes no site e quero CONTRATAR AGORA a locação das câmeras de segurança.'
  );

  return (
    <section id="avaliacoes" className="relative py-16 sm:py-24 bg-[#0B0904] border-y border-[#F59E0B]/30 overflow-hidden">
      {/* Efeito sutil de iluminação ambiente em âmbar/ouro corporativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-[#F59E0B]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[220px] bg-[#F59E0B]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* AVALIAÇÕES DE CLIENTES (VERTICAL, CONTÍNUO, SEM ACORDEÃO, COR ÂMBAR)      */}
        {/* ========================================================================= */}
        <div>
          {/* Cabeçalho centralizado com destaque em Âmbar / Ouro Corporativo */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/50 text-[#FCD34D] text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-[#F59E0B]/10">
              <span>Satisfação Comprovada</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-center">
              Avaliações de <span className="text-[#FBBF24]">Nossos Clientes</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#FDE68A]/80 text-center max-w-2xl mx-auto">
              Confira a experiência real de quem já protegeu seu patrimônio residencial, comercial e condominial com a Intelsecsul.
            </p>
          </div>

          {/* Lista Vertical Contínua de Avaliações (um abaixo do outro, sem acordeões) */}
          <div className="flex flex-col gap-6 sm:gap-8 max-w-4xl mx-auto">
            {CUSTOMER_REVIEWS.map((review) => (
              <div
                key={review.id}
                id={`review-card-${review.id}`}
                className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#3D2A0E] via-[#2E1F0A] to-[#1E1406] border-2 border-[#F59E0B]/80 hover:border-[#FBBF24] shadow-2xl shadow-[#F59E0B]/20 hover:shadow-[#F59E0B]/35 transition-all duration-300 group"
              >
                {/* Linha superior de destaque em âmbar dourado */}
                <div className="absolute top-0 inset-x-6 h-[2px] rounded-t-2xl pointer-events-none bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />

                {/* Card Split Layout: Imagem real à esquerda, Avaliação à direita no desktop */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Lado da Imagem: Foto real da instalação com acabamento em âmbar */}
                  <div className="md:col-span-5 relative w-full h-[240px] sm:h-[280px] md:h-full min-h-[240px] md:min-h-[300px] bg-[#140E04] overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-[#F59E0B]/40">
                    <img
                      src={review.imageUrl}
                      alt={review.imageAlt || review.author}
                      draggable={false}
                      className="w-full h-full object-contain p-3 md:p-4 transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradiente sutil para transição elegante no desktop */}
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent to-[#2E1F0A]/40 pointer-events-none" />
                  </div>

                  {/* Lado do Conteúdo: 5 Estrelas Âmbar, Depoimento e Autor */}
                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between relative">
                    <div>
                      {/* 5 Estrelas Douradas SVG + Badge 5.0 */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B] drop-shadow-xs"
                            />
                          ))}
                        </div>
                        <span className="text-xs font-extrabold text-[#FCD34D] bg-[#F59E0B]/25 px-2 py-0.5 rounded-md border border-[#F59E0B]/60">
                          5.0
                        </span>
                      </div>

                      {/* Texto da Avaliação com alta legibilidade */}
                      <blockquote className="text-base sm:text-lg text-amber-50 leading-relaxed font-normal mb-6 relative z-10">
                        "{review.comment}"
                      </blockquote>
                    </div>

                    {/* Autor e Credenciais com detalhes em âmbar */}
                    <div className="pt-5 border-t border-[#F59E0B]/40 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FCD34D] transition-colors">
                          {review.author}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#FBBF24] font-semibold">
                          Segmento: {review.role}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-[#FDE68A] bg-[#1E1406] px-3 py-1.5 rounded-lg border border-[#F59E0B]/50 shadow-xs">
                        {review.location}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botão WhatsApp Contratar Agora pós-avaliações */}
          <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FDE68A] mb-3">
              <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
              <span>Junte-se a centenas de clientes satisfeitos em Curitiba e RMC</span>
            </div>
            <a
              id="btn-whatsapp-avaliacoes-contratar-agora"
              href={contratarWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('avaliacoes-contratar-agora')}
              className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-xl font-extrabold text-white bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 transition-all text-base sm:text-lg cursor-pointer tracking-wide"
            >
              <WhatsAppIcon className="w-5 h-5 fill-white" />
              <span>CONTRATAR AGORA</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

