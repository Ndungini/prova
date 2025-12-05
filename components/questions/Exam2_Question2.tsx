import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { OptimizationChart } from '../graphs/OptimizationChart';
import { FunctionSquare, Activity, CheckCircle, BookOpen } from 'lucide-react';

export const Exam2_Question2: React.FC = () => {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-blue-900 mb-2">Prova 2 - Questão 2: Modelo de Baumol-Tobin</h2>
        <p className="text-blue-800 text-sm">
          Otimização da gestão de caixa e custos de deslocação bancária.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Math Derivation (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
           <Card title="a) Resolução Matemática">
              <div className="space-y-4 text-sm">
                 <div className="bg-slate-50 p-3 rounded border border-slate-200">
                   <p className="font-bold text-slate-700 mb-1">Dados:</p>
                   <ul className="list-disc list-inside text-slate-600 font-mono text-xs">
                     <li>Custo Deslocação (Total) = n(x + π)</li>
                     <li>Custo Oportunidade = PY / 2n</li>
                   </ul>
                 </div>

                 <p>Função de Custo Total ($CT$):</p>
                 <div className="font-mono bg-blue-50 text-blue-900 p-2 rounded text-center">
                    CT = n(x + π) + (PY / 2n)
                 </div>

                 <p>Para minimizar, derivamos em ordem a $n$ e igualamos a zero:</p>
                 <div className="font-mono bg-slate-800 text-white p-3 rounded text-xs space-y-2">
                    <p>dCT/dn = (x + π) - (PY / 2n²)</p>
                    <p>0 = (x + π) - (PY / 2n²)</p>
                    <p>(x + π) = PY / 2n²</p>
                    <p>n² = PY / [2(x + π)]</p>
                 </div>

                 <div className="flex items-center gap-2 bg-green-50 p-3 rounded border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-xs font-bold text-green-800 uppercase">Resultado Final (n*)</p>
                      <p className="font-mono text-lg text-green-700">n = √[PY / 2(x + π)]</p>
                    </div>
                 </div>
              </div>
           </Card>
        </div>

        {/* Graphical Representation (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
           <Card className="h-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-500" />
                  b) Gráfico de Minimização
                </h3>
                <button
                  onClick={() => setShowResult(!showResult)}
                  className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  {showResult ? 'Ocultar Otimização' : 'Revelar Ponto Ótimo'}
                </button>
              </div>

              <div className="flex-1 min-h-[350px]">
                 <OptimizationChart showOptimal={showResult} />
              </div>

              <div className="mt-4 text-xs text-slate-500 bg-slate-50 p-3 rounded">
                <p>
                  O gráfico ilustra o <em>trade-off</em>: Ir muitas vezes ao banco aumenta os custos de deslocação (linha azul), mas reduz a quantidade média de dinheiro parado, diminuindo o custo de oportunidade (linha verde). O ponto ideal está no cruzamento das taxas marginais (fundo da curva em U).
                </p>
              </div>
           </Card>
        </div>
      </div>

      {/* New Explanatory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                O <strong>Modelo de Baumol-Tobin</strong> é uma abordagem microeconómica da procura de moeda que trata o dinheiro como um ativo de inventário. O problema fundamental do agente é decidir quanto dinheiro manter em "caixa" (líquido, mas sem render juros) versus quanto manter em ativos rentáveis (como obrigações, que pagam juros mas têm custos de transação para serem convertidos). Existe um <em>trade-off</em> claro: ter muito dinheiro em mão evita idas frequentes ao banco (custos de transação), mas implica perder os juros que esse dinheiro poderia estar a render (custo de oportunidade).
            </p>
            <p>
                A solução matemática derivada acima ($n^*$) revela o princípio da <strong>Raiz Quadrada</strong>. Isto demonstra que a procura de moeda não é linear. Existem "economias de escala" na gestão de caixa. Quando o rendimento ou o volume de transações ($PY$) duplica, a quantidade ótima de moeda que o agente precisa não duplica; aumenta apenas pela raiz quadrada de 2 (aprox. 1,4 vezes). Isso torna a gestão de tesouraria mais eficiente para grandes volumes de transação.
            </p>
            <p>
                Além disso, o modelo destaca a importância da taxa de juro ($i$, implícita no custo de oportunidade). Quanto maior for a taxa de juro, mais caro é segurar dinheiro parado. Isso incentiva os agentes a irem mais vezes ao banco ($n$ aumenta) para manterem saldos médios de caixa menores. Portanto, o modelo fornece uma justificação teórica sólida para a inclinação negativa da curva de procura de moeda ($L^d$) em relação à taxa de juro, um componente vital na construção da curva LM.
            </p>
        </div>
      </div>
    </div>
  );
};