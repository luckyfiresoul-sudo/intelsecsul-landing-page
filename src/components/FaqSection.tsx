import React, { useState } from 'react';
import { Plus, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/constants';
import { useTracking } from '../context/TrackingContext';

// Grupos solicitados
const FAQ_GROUPS = [
  'Planos e valores',
  'Contrato e pagamento',
  'Atendimento técnico e segurança dos dados',
] as const;

export const FaqSection: React.FC = () => {
  // Apenas uma pergunta aberta por vez (inicia com a primeira aberta)
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id || null);
  const { trackWhatsAppClick } = useTracking();

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  // Schema.org FAQPage (JSON-LD)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const whatsappDuvidasUrl = `https://wa.me/5541991560946?text=${encodeURIComponent(
    'Olá! Tenho uma dúvida sobre a locação de câmeras que não encontrei no site.'
  )}`;

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0F0F12] border-b border-[#1E1E24] relative">
      {/* Script estruturado Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Perguntas Frequentes sobre Locação de Câmeras de Segurança
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#CBD5E1]/90">
            Tire suas dúvidas antes de contratar.
          </p>
        </div>

        {/* Acordeão com 3 Blocos Visuais de Categorias */}
        <div className="space-y-10 sm:space-y-12">
          {FAQ_GROUPS.map((groupName) => {
            const groupItems = FAQ_ITEMS.filter((item) => item.category === groupName);
            if (groupItems.length === 0) return null;

            return (
              <div key={groupName} className="space-y-4">
                {/* Rótulo de Categoria acima de cada grupo */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#2D6CDF]/40 to-transparent flex-1" />
                  <span className="text-xs sm:text-sm font-extrabold text-[#3B82F6] uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#181C26] border border-[#2D6CDF]/30 shadow-xs">
                    {groupName}
                  </span>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#2D6CDF]/40 to-transparent flex-1" />
                </div>

                {/* Itens do grupo */}
                <div className="space-y-3">
                  {groupItems.map((item) => {
                    const isOpen = openId === item.id;

                    return (
                      <div
                        key={item.id}
                        id={`faq-item-${item.id}`}
                        className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                          isOpen
                            ? 'bg-[#232326] border-[#3B82F6]/60 border-l-4 border-l-[#3B82F6] shadow-xl shadow-black/40'
                            : 'bg-[#232326] border-[#2D2D32] hover:border-[#3B82F6]/40 shadow-md shadow-black/20'
                        }`}
                      >
                        {/* Botão de Pergunta */}
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${item.id}`}
                          className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] transition-colors"
                        >
                          <span className="font-bold text-base sm:text-lg text-white leading-snug">
                            {item.question}
                          </span>

                          {/* Ícone de "+" que vira "×" com rotação suave */}
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                              isOpen
                                ? 'bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/50'
                                : 'bg-[#18181B] text-[#94A3B8] border border-[#2D2D32]'
                            }`}
                          >
                            <motion.div
                              animate={{ rotate: isOpen ? 45 : 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="flex items-center justify-center"
                            >
                              <Plus className="w-5 h-5" />
                            </motion.div>
                          </div>
                        </button>

                        {/* Resposta com Transição Suave de Altura */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              id={`faq-answer-${item.id}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 sm:px-6 pb-6 pt-1 text-[#CBD5E1] text-sm sm:text-base leading-relaxed text-left border-t border-[#2D2D32]/80 mt-1">
                                <p className="pt-3 whitespace-pre-line">{item.answer}</p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Linha Discreta ao final: "Ainda com dúvidas? Fale com a gente no WhatsApp" */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-[#1E1E24] text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <span className="text-sm sm:text-base text-[#94A3B8]">
            Ainda com dúvidas?
          </span>
          <a
            id="btn-faq-whatsapp-duvidas"
            href={whatsappDuvidasUrl}
            onClick={() => trackWhatsAppClick('Dúvida FAQ não encontrada')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full font-bold text-sm sm:text-base bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Fale com a gente no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
