import React from 'react';
import { ShieldCheck, Users, MapPin, FileCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    {
      id: 'trust-1',
      icon: ShieldCheck,
      title: 'Equipamentos de alta tecnologia',
      subtitle: 'Sistemas Full HD homologados',
    },
    {
      id: 'trust-2',
      icon: Users,
      title: 'Equipe técnica própria',
      subtitle: 'Sem terceirização de mão de obra',
    },
    {
      id: 'trust-3',
      icon: MapPin,
      title: 'Atendimento em 11 cidades da RMC',
      subtitle: 'Curitiba e Região Metropolitana',
    },
    {
      id: 'trust-4',
      icon: FileCheck,
      title: 'Contrato com SLA',
      subtitle: 'Compromisso de resposta ágil',
    },
  ];

  return (
    <section
      id="barra-de-confianca"
      className="bg-[#121824] border-b border-[#1E293B] py-6 sm:py-8 shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#161F30] border border-[#1E293B] hover:border-[#0091FF]/50 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-[#0A0D14] border border-[#1E293B] text-[#0091FF] flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-extrabold text-sm sm:text-base text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#CBD5E1] mt-0.5 font-medium hidden sm:block">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
