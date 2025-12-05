import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { DebtSimulationChart } from '../graphs/DebtSimulationChart';
import { TrendingDown, AlertTriangle, Scale, BookOpen, Landmark } from 'lucide-react';

export const Exam4_Question1: React.FC = () => {
  const [scenario, setScenario] = useState<'stable' | 'explosive'>('stable');

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-amber-900 mb-2">Prova 4 - Questão 1: Sustentabilidade da Dívida (45,8% PIB)</h2>
        <p className="text-amber-800 text-sm">
          Análise da dinâmica da dívida pública angolana, avaliação de política discricionária e condições matemáticas de estabilização.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Theory & Logic Column */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="border-t-4 border-t-red-500">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              a) Dívida Explosiva
            </h3>
            <p className="text-sm text-slate-600 mb-3 text-justify leading-relaxed">
              Mesmo com equilíbrio primário ($G = T$), a dívida torna-se explosiva quando o custo do serviço da dívida (juros reais $r$) supera a capacidade da economia de gerar riqueza (crescimento $g$).
            </p>
            <div className="bg-red-50 p-3 rounded border border-red-100 text-center font-mono text-red-800 text-sm font-bold">
              Se r &gt; g &rarr; Efeito Bola de Neve
            </div>
          </Card>

          <Card className="border-t-4 border-t-blue-500">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Scale className="w-4 h-4 text-blue-500" />
              b) Avaliação da Política
            </h3>
            <p className="text-sm text-slate-600 text-justify">
              Para avaliar se uma política é expansionista ou restritiva, devemos ignorar os efeitos automáticos do ciclo económico. Utilizamos o:
            </p>
            <div className="mt-2 bg-blue-50 p-2 rounded text-blue-900 font-bold text-xs text-center">
              Saldo Orçamental Ajustado ao Ciclo (CAB)
            </div>
          </Card>

          <Card className="border-t-4 border-t-green-500">
            <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-green-500" />
              c) Condição de Estabilização
            </h3>
            <p className="text-xs text-slate-500 mb-2">A variação do rácio da dívida é dada por:</p>
            <div className="font-mono text-xs bg-slate-800 text-white p-3 rounded mb-2 text-center">
               {'$\\Delta d = (r - g)d_{t-1} - s$'}
            </div>
            <p className="text-xs text-slate-600 text-justify">
               Para estabilizar ($\Delta d = 0$), o governo deve gerar um superávite primário ($s$) suficiente para pagar a diferença entre juros e crescimento.
            </p>
          </Card>
        </div>

        {/* Graph Column */}
        <div className="lg:col-span-7 space-y-6">
           <Card className="h-full flex flex-col">
             <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-amber-600" />
                  Simulação (Início: 45,8%)
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
             
             <div className="flex-1 min-h-[350px]">
                <DebtSimulationChart scenario={scenario} initialDebt={45.8} />
             </div>

             <div className="mt-4 bg-slate-50 p-3 rounded text-sm text-slate-600">
                <p>
                  <strong>Análise:</strong> Partindo de 45,8% (2015), a trajetória depende criticamente do diferencial crescimento-juros. Se Angola não crescer acima da taxa de juro da dívida, o rácio aumentará rapidamente mesmo sem novos défices primários.
                </p>
             </div>
           </Card>
        </div>
      </div>

      {/* Extended Theory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-amber-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                A sustentabilidade da dívida pública é um conceito dinâmico e não estático. O facto de a dívida angolana estar em 45,8% do PIB (em 2015) não garante, por si só, a solvabilidade futura. A equação fundamental do movimento da dívida, {'$\\Delta d_t = (r - g)d_{t-1} - s_t$'}, demonstra que a estabilidade depende de três variáveis: a taxa de juro real ($r$), a taxa de crescimento da economia ($g$) e o saldo primário ($s$). Se $r > g$, o país entra numa dinâmica de "Bola de Neve", onde a dívida auto-alimenta o seu próprio crescimento através do pagamento de juros, exigindo esforços fiscais (superávites) cada vez maiores apenas para manter o rácio constante.
            </p>
            <p>
                Para avaliar corretamente a orientação da política orçamental — se o governo está a adotar uma postura expansionista ou restritiva — não podemos olhar apenas para o défice nominal. O défice nominal pode aumentar simplesmente porque a economia entrou em recessão (estabilizadores automáticos: menos impostos arrecadados, mais subsídios pagos), sem que tenha havido qualquer decisão ativa do governo. O indicador correto é o <strong>Saldo Orçamental Estrutural (CAB)</strong>, que remove os efeitos do ciclo económico. Se o CAB melhora, a política é restritiva; se piora, é expansionista.
            </p>
            <p>
                Em conclusão, a dívida de Angola só será sustentável se o governo conseguir cumprir a Condição de Solvabilidade Intertemporal. Isto implica que o valor presente dos superávites primários futuros deve ser suficiente para pagar a dívida atual. Num cenário adverso onde o crescimento é baixo (choque no preço do petróleo) e os juros da dívida externa são altos (risco país), a estabilização exige um ajustamento orçamental severo (aumento de $s$), o que é politicamente custoso e pode, paradoxalmente, reduzir ainda mais o crescimento ($g$).
            </p>
        </div>
      </div>
    </div>
  );
};