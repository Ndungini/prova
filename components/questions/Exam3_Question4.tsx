import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { DebtSimulationChart } from '../graphs/DebtSimulationChart';
import { AlertTriangle, TrendingDown, Scale, BookOpen } from 'lucide-react';

export const Exam3_Question4: React.FC = () => {
  const [scenario, setScenario] = useState<'stable' | 'explosive'>('stable');

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-orange-900 mb-2">Prova 3 - Questão 4: Dívida Pública (Contexto Angola)</h2>
        <p className="text-orange-800 text-sm">
          Como Ministro(a) das Finanças: Analise a dinâmica da dívida (70% do PIB), condições de estabilidade e avaliação da política orçamental.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Theory (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
           <Card className="border-t-4 border-t-red-500">
             <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase">a) O Perigo da Dívida Explosiva</h3>
             <p className="text-sm text-slate-600 mb-3 text-justify">
               Mesmo com as contas equilibradas (Défice Primário = 0), a dívida pode crescer indefinidamente se a taxa de juro ($r$) for maior que a taxa de crescimento da economia ($g$).
             </p>
             <div className="bg-red-50 p-3 rounded border border-red-100 text-center font-mono text-red-800 text-sm">
                Se r &gt; g &rarr; Dívida Cresce (Efeito Bola de Neve)
             </div>
           </Card>

           <Card className="border-t-4 border-t-blue-500">
             <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase">b) Avaliação da Política</h3>
             <p className="text-sm text-slate-600 mb-3 text-justify">
               Para saber se a política é expansionista ou restritiva, devemos olhar para o <strong>Saldo Orçamental Ajustado ao Ciclo</strong> (CAB), e não para o saldo nominal.
             </p>
             <ul className="text-xs text-slate-500 list-disc list-inside">
               <li>Remove efeito dos estabilizadores automáticos.</li>
               <li>Mede a intenção discricionária do governo.</li>
             </ul>
           </Card>
           
           <Card className="border-t-4 border-t-green-500">
             <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase">c) Condição de Estabilidade</h3>
             <div className="font-mono text-xs bg-slate-800 text-white p-3 rounded mb-2">
                &Delta;(B/Y) = (r - g)(B/Y) - s
             </div>
             <p className="text-xs text-slate-600">
                Para estabilizar (&Delta;=0), é necessário um superávite primário ($s$) igual ao serviço da dívida ajustado ao crescimento.
             </p>
           </Card>
        </div>

        {/* Right Column: Simulation (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-orange-500" />
                Simulação da Dinâmica da Dívida
              </h3>
              <div className="flex gap-2">
                 <button
                   onClick={() => setScenario('stable')}
                   className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${scenario === 'stable' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}
                 >
                   Cenário: g &gt; r
                 </button>
                 <button
                   onClick={() => setScenario('explosive')}
                   className={`px-3 py-1 text-xs font-bold rounded-md transition-colors ${scenario === 'explosive' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-500'}`}
                 >
                   Cenário: r &gt; g
                 </button>
              </div>
            </div>

            <div className="flex-1 min-h-[300px]">
              <DebtSimulationChart scenario={scenario} />
            </div>

            <div className="mt-4 bg-slate-50 p-3 rounded text-sm text-slate-600">
               {scenario === 'explosive' ? (
                 <p className="flex items-center gap-2 text-red-700 font-bold">
                    <AlertTriangle className="w-4 h-4" />
                    Alerta: Com juros altos e baixo crescimento, a dívida torna-se insustentável sem cortes profundos.
                 </p>
               ) : (
                 <p className="flex items-center gap-2 text-green-700 font-bold">
                    <Scale className="w-4 h-4" />
                    Sustentável: O crescimento económico "paga" os juros, permitindo estabilização.
                 </p>
               )}
            </div>
          </Card>
        </div>
      </div>

      {/* Analysis Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-orange-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                {'A dinâmica da dívida pública, expressa na equação de movimento $\\Delta d_t = (r - g)d_{t-1} - s_t$, revela que a sustentabilidade não depende apenas da vontade política (o superávite primário $s$), mas crucialmente das condições macroeconómicas. Se a taxa de juro real da dívida ($r$) for superior à taxa de crescimento real da economia ($g$), a dívida entra numa trajetória explosiva automática ("efeito bola de neve"), mesmo que o governo não gaste mais do que arrecada (equilíbrio primário). Para Angola, um país vulnerável a choques externos, um $r$ elevado (devido ao prémio de risco) combinado com um $g$ baixo pode ser fatal.'}
            </p>
            <p>
                A avaliação da orientação da política orçamental (se expansionista ou restritiva) exige cautela. O défice nominal pode estar alto simplesmente porque a economia está em recessão (menor receita fiscal automática), e não porque o governo aumentou gastos discricionários. Por isso, a ferramenta correta é o <strong>Saldo Estrutural ou Ajustado ao Ciclo (CAB)</strong>. Se o CAB piorar, então há uma expansão fiscal genuína; se o CAB melhorar (mesmo que o défice nominal suba), a política é, na verdade, restritiva.
            </p>
            <p>
                Matematicamente, a condição para estabilizar o rácio da dívida ($\Delta(B/Y) = 0$) exige que o superávite primário seja suficiente para cobrir o diferencial entre juros e crescimento: $s = (r - g)(B/Y)$. Se $r > g$, o governo <strong>tem</strong> de gerar superávites primários permanentes apenas para manter a dívida constante. A dívida de Angola torna-se sustentável apenas se o governo conseguir garantir que a economia cresça a um ritmo superior aos juros da dívida ou se implementar ajustamentos estruturais que garantam os superávites necessários ($s$) sem asfixiar o crescimento ($g$).
            </p>
        </div>
      </div>
    </div>
  );
};