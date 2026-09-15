import React, { useState, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  Quote,
  ShieldCheck,
} from 'lucide-react';
import {
  CUSTOMER_REVIEWS,
} from '../data/constants';
import { useTracking } from '../context/TrackingContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const TrustCoverageSection: React.FC = () => {
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();

  // Estado e refs para o Carrossel de Avaliações
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewsCarouselRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const whatsappUrl = getWhatsAppUrl(
    'Olá! Vi as avaliações dos clientes da Intelsecsul e gostaria de solicitar uma avaliação técnica para o meu imóvel.'
  );

  // Manipuladores de arrasto (mouse drag para desktop e touch suave)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!reviewsCarouselRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - reviewsCarouselRef.current.offsetLeft;
    scrollLeftRef.current = reviewsCarouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !reviewsCarouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - reviewsCarouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    reviewsCarouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDraggingRef.current || !reviewsCarouselRef.current) return;
    isDraggingRef.current = false;
    // Snap magnético para o card mais próximo
    const container = reviewsCarouselRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || container.clientWidth;
    const targetIndex = Math.round(container.scrollLeft / cardWidth);
    scrollToReview(Math.max(0, Math.min(CUSTOMER_REVIEWS.length - 1, targetIndex)));
  };

  // Navegação do Carrossel de Avaliações
  const scrollToReview = (index: number) => {
    if (!reviewsCarouselRef.current) return;
    const container = reviewsCarouselRef.current;
    const cards = container.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setCurrentReviewIndex(index);
    }
  };

  const handlePrevReview = () => {
    const newIndex = Math.max(0, currentReviewIndex - 1);
    scrollToReview(newIndex);
  };

  const handleNextReview = () => {
    const newIndex = Math.min(CUSTOMER_REVIEWS.length - 1, currentReviewIndex + 1);
    scrollToReview(newIndex);
  };

  const handleReviewsScroll = () => {
    if (!reviewsCarouselRef.current) return;
    const container = reviewsCarouselRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild?.clientWidth || 1;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex !== currentReviewIndex && newIndex >= 0 && newIndex < CUSTOMER_REVIEWS.length) {
      setCurrentReviewIndex(newIndex);
    }
  };

  return (
    <section id="avaliacoes" className="py-16 sm:py-24 bg-[#0A0D14] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* CARROSSEL DE AVALIAÇÕES DE CLIENTES COM 5 ESTRELAS                        */}
        {/* ========================================================================= */}
        <div>
          {/* Cabeçalho do Carrossel de Avaliações */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>5.0 • 100% de Satisfação</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Avaliações de Nossos Clientes
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#CBD5E1]">
                Deslize para conferir a experiência de quem já protegeu seu patrimônio e recomenda a Intelsecsul.
              </p>
            </div>

            {/* Controles de Navegação do Carrossel de Avaliações */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#CBD5E1]">
                {currentReviewIndex + 1} de {CUSTOMER_REVIEWS.length}
              </span>
              <button
                id="btn-reviews-prev"
                type="button"
                onClick={handlePrevReview}
                disabled={currentReviewIndex === 0}
                className={`w-10 h-10 rounded-xl bg-[#161F30] border border-[#1E293B] flex items-center justify-center transition-all cursor-pointer ${
                  currentReviewIndex === 0
                    ? 'opacity-40 cursor-not-allowed text-slate-500'
                    : 'text-white hover:bg-[#0091FF] hover:border-[#0091FF] shadow-sm'
                }`}
                aria-label="Avaliação anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="btn-reviews-next"
                type="button"
                onClick={handleNextReview}
                disabled={currentReviewIndex === CUSTOMER_REVIEWS.length - 1}
                className={`w-10 h-10 rounded-xl bg-[#161F30] border border-[#1E293B] flex items-center justify-center transition-all cursor-pointer ${
                  currentReviewIndex === CUSTOMER_REVIEWS.length - 1
                    ? 'opacity-40 cursor-not-allowed text-slate-500'
                    : 'text-white hover:bg-[#0091FF] hover:border-[#0091FF] shadow-sm'
                }`}
                aria-label="Próxima avaliação"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Trilho do Carrossel de Avaliações (Split Design 50/50 Desktop, Empilhado Mobile) */}
          <div className="relative max-w-5xl mx-auto">
            {/* Botão Flutuante Esquerdo (Desktop) */}
            <button
              id="btn-reviews-prev-floating"
              type="button"
              onClick={handlePrevReview}
              disabled={currentReviewIndex === 0}
              className={`hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#161F30] border border-[#1E293B] items-center justify-center transition-all cursor-pointer shadow-xl ${
                currentReviewIndex === 0
                  ? 'opacity-30 cursor-not-allowed text-slate-600'
                  : 'text-white hover:bg-[#0091FF] hover:border-[#0091FF] hover:scale-105'
              }`}
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Botão Flutuante Direito (Desktop) */}
            <button
              id="btn-reviews-next-floating"
              type="button"
              onClick={handleNextReview}
              disabled={currentReviewIndex === CUSTOMER_REVIEWS.length - 1}
              className={`hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#161F30] border border-[#1E293B] items-center justify-center transition-all cursor-pointer shadow-xl ${
                currentReviewIndex === CUSTOMER_REVIEWS.length - 1
                  ? 'opacity-30 cursor-not-allowed text-slate-600'
                  : 'text-white hover:bg-[#0091FF] hover:border-[#0091FF] hover:scale-105'
              }`}
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              id="reviews-carousel-track"
              ref={reviewsCarouselRef}
              onScroll={handleReviewsScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-1 scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
            >
              {CUSTOMER_REVIEWS.map((review) => (
                <div
                  key={review.id}
                  id={`review-slide-${review.id}`}
                  className="snap-center shrink-0 w-full bg-[#161F30] border border-[#1E293B] hover:border-[#0091FF]/50 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 transition-all duration-300 group select-none"
                >
                  {/* Card Split Layout: 50% Imagem à esquerda, 50% Conteúdo à direita no Desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[420px]">
                    
                    {/* Lado Esquerdo (50%): Imagem Real / Foto da Instalação com Altura Fixa Uniforme */}
                    <div className="relative w-full h-[280px] sm:h-[320px] md:h-full min-h-[280px] sm:min-h-[320px] md:min-h-[420px] bg-[#0E131F] overflow-hidden flex items-center justify-center pointer-events-none sm:pointer-events-auto">
                      <img
                        src={review.imageUrl}
                        alt={review.imageAlt || review.author}
                        draggable={false}
                        className="w-full h-full object-contain p-2 md:p-4 transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                        referrerPolicy="no-referrer"
                      />
                      {/* Gradiente sutil apenas na borda para o desktop, sem sobrepor a imagem no mobile */}
                      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent to-[#161F30]/60 pointer-events-none" />
                    </div>

                    {/* Lado Direito (50%): Avaliação, 5 Estrelas Douradas e Dados do Cliente */}
                    <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between relative bg-[#161F30] min-h-[260px] md:min-h-[420px]">
                      {/* Ícone de Aspas decorativo de fundo */}
                      <div className="absolute top-6 right-6 text-[#1E293B] group-hover:text-[#0091FF]/20 transition-colors pointer-events-none">
                        <Quote className="w-12 h-12 rotate-180" />
                      </div>

                      <div>
                        {/* 5 Estrelas Douradas SVG + Badge 5.0 */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-xs"
                              />
                            ))}
                          </div>
                          <span className="text-xs font-extrabold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
                            5.0
                          </span>
                          <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
                            • {review.date}
                          </span>
                        </div>

                        {/* Texto da Avaliação */}
                        <blockquote className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal mb-6 relative z-10">
                          "{review.comment}"
                        </blockquote>
                      </div>

                      {/* Autor e Credenciais */}
                      <div className="pt-5 border-t border-[#1E293B] flex items-center justify-between">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00C5FF] transition-colors">
                            {review.author}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#0091FF] font-medium">
                            {review.role}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-slate-300 bg-[#121824] px-3 py-1.5 rounded-lg border border-[#1E293B]">
                          {review.location}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicadores do Carrossel de Avaliações */}
          <div className="flex items-center justify-center gap-2 mt-6 mb-10">
            {CUSTOMER_REVIEWS.map((review, idx) => (
              <button
                key={`dot-review-${review.id}`}
                type="button"
                onClick={() => scrollToReview(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentReviewIndex
                    ? 'w-8 bg-amber-400'
                    : 'w-2.5 bg-[#1E293B] hover:bg-slate-600'
                }`}
                aria-label={`Ir para avaliação de ${review.author}`}
              />
            ))}
          </div>

          {/* Chamada para Avaliação Técnica via WhatsApp */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161F30] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-6 text-left max-w-5xl mx-auto shadow-xl shadow-black/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0091FF]/10 border border-[#0091FF]/30 flex items-center justify-center shrink-0 text-[#0091FF]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  Pronto para proteger seu patrimônio com suporte total?
                </h4>
                <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
                  Agende sua visita sem compromisso em Curitiba e Região Metropolitana.
                </p>
              </div>
            </div>

            <a
              id="btn-whatsapp-avaliacoes-secao"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('avaliacoes-carrossel-cta')}
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm py-3.5 px-7 rounded-xl shadow-lg shadow-[#25D366]/25 transition-all hover:scale-102 shrink-0 w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
