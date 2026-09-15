import React from 'react';
import { MessageSquareText, ClipboardCheck, Wrench, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/constants';

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [MessageSquareText, ClipboardCheck, Wrench];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#121824] border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#00C5FF] bg-[#161F30] border border-[#1E293B] px-3.5 py-1 rounded-full inline-block mb-3 shadow-xs">
            Processo Simples e Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como funciona a locação
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#CBD5E1]">
            Tenha seu imóvel protegido em 3 etapas descomplicadas, sem burocracia e sem taxa de instalação.
          </p>
        </div>

        {/* 3 Passos Numerados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {HOW_IT_WORKS_STEPS.map((item, index) => {
            const Icon = stepIcons[index] || MessageSquareText;
            return (
              <div
                key={item.step}
                id={`step-${item.step}`}
                className="relative bg-[#161F30] border border-[#1E293B] rounded-2xl p-7 flex flex-col items-start text-left hover:border-[#0091FF]/50 shadow-xl shadow-black/30 transition-all group"
              >
                {/* Número do Passo & Ícone */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A0D14] border border-[#1E293B] text-[#0091FF] flex items-center justify-center font-black text-2xl shadow-md group-hover:scale-105 group-hover:text-[#00C5FF] transition-all">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#121824] border border-[#1E293B] flex items-center justify-center text-[#CBD5E1] shadow-xs">
                    <Icon className="w-5 h-5 text-[#0091FF]" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {item.description}
                </p>

                {index < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#161F30] border border-[#1E293B] flex items-center justify-center text-[#0091FF] shadow-md">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
