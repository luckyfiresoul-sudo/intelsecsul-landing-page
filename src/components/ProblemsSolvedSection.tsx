import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import { COMPARISON_TABLE_ITEMS } from '../data/constants';
import { useTracking } from '../context/TrackingContext';
import { WhatsAppIcon } from './WhatsAppIcon';

export const ProblemsSolvedSection: React.FC = () => {
  const { getWhatsAppUrl, trackWhatsAppClick } = useTracking();

  return (
    <section id="problemas-que-resolvemos" className="py-16 sm:py-24 bg-[#0A0D14] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00C5FF] bg-[#161F30] border border-[#1E293B] px-3.5 py-1 rounded-full inline-block mb-3 shadow-xs">
            Comparativo Direto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por Que Alugar é Melhor Que Comprar?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#CBD5E1]">
            Compare custos, riscos e benefícios entre comprar equipamentos por conta própria e a comodidade do sistema por assinatura com a Intelsecsul.
          </p>
        </div>

        {/* Tabela Comparativa Desktop & Tablet */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-[#1E293B] bg-[#161F30] shadow-2xl shadow-black/40">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1E293B] bg-[#0A0D14]/80">
                <th className="py-5 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 w-[26%]">
                  Critério de Avaliação
                </th>
                <th className="py-5 px-6 text-sm font-bold text-rose-300 w-[37%] border-l border-[#1E293B]">
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <span>Comprar Câmeras por Conta</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-sm font-extrabold text-[#00C5FF] w-[37%] border-l border-[#0091FF]/30 bg-[#0091FF]/10 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Alugar com a Intelsecsul</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Recomendado
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]">
              {COMPARISON_TABLE_ITEMS.map((item, index) => (
                <tr
                  key={item.id}
                  id={`row-${item.id}`}
                  className={`transition-colors hover:bg-white/[0.02] ${
                    index % 2 === 0 ? 'bg-[#161F30]' : 'bg-[#131B2B]'
                  }`}
                >
                  {/* Critério */}
                  <td className="py-5 px-6 align-top">
                    <span className="font-bold text-white text-sm sm:text-base block">
                      {item.criterion}
                    </span>
                  </td>

                  {/* Comprar por conta */}
                  <td className="py-5 px-6 align-top border-l border-[#1E293B]">
                    <div className="text-sm">
                      <p className="font-semibold text-rose-200/90 mb-1">
                        {item.buyingTitle}
                      </p>
                      <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">
                        {item.buyingDescription}
                      </p>
                    </div>
                  </td>

                  {/* Alugar com Intelsecsul */}
                  <td className="py-5 px-6 align-top border-l border-[#0091FF]/30 bg-[#0091FF]/5">
                    <div className="text-sm">
                      <p className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item.rentingTitle}</span>
                      </p>
                      <p className="text-slate-200 leading-relaxed text-xs sm:text-sm pl-5.5">
                        {item.rentingDescription}
                      </p>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Versão Mobile em Cartões de Comparação Direta */}
        <div className="md:hidden space-y-4">
          {COMPARISON_TABLE_ITEMS.map((item) => (
            <div
              key={item.id}
              id={`mobile-card-${item.id}`}
              className="bg-[#161F30] border border-[#1E293B] rounded-2xl p-5 shadow-lg shadow-black/30"
            >
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-[#1E293B] flex items-center justify-between">
                <span>{item.criterion}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C5FF] bg-[#121824] px-2 py-0.5 rounded border border-[#1E293B]">
                  Critério
                </span>
              </h3>

              {/* Bloco Comprar por Conta */}
              <div className="mb-3 p-3.5 rounded-xl bg-[#0A0D14] border border-rose-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-rose-300">
                    Comprar Câmeras por Conta
                  </span>
                </div>
                <p className="text-sm font-semibold text-rose-200/90 pl-6">
                  {item.buyingTitle}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pl-6 mt-0.5">
                  {item.buyingDescription}
                </p>
              </div>

              {/* Bloco Alugar com Intelsecsul */}
              <div className="p-3.5 rounded-xl bg-[#0091FF]/10 border border-[#0091FF]/40">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-[#00C5FF]">
                    Alugar com a Intelsecsul
                  </span>
                </div>
                <p className="text-sm font-bold text-emerald-400 pl-6">
                  {item.rentingTitle}
                </p>
                <p className="text-xs text-slate-200 leading-relaxed pl-6 mt-0.5">
                  {item.rentingDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Único Verde WhatsApp */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            id="cta-comparativo-whatsapp"
            href={getWhatsAppUrl('Olá! Vi a tabela comparativa no site e quero tirar dúvidas sobre a locação de câmeras com a Intelsecsul.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('Tabela Comparativa Aluguel vs Compra')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-white bg-[#25D366] hover:bg-[#20ba5a] active:scale-[0.98] shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all text-base sm:text-lg cursor-pointer text-center"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span>Contratar agora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
