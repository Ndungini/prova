import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { OptimizationChart } from '../graphs/OptimizationChart';
import { Activity, FunctionSquare, CheckCircle, BookOpen } from 'lucide-react';

export const Exam4_Question3: React.FC = () => {
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-blue-900 mb-2">Prova 4 - Questão 3: Sistema Bancário Angolano</h2>
        <p className="text-blue-800 text-sm">
          Determinação do número ótimo de deslocações ao banco ($N^*$) e representação gráfica da demanda de moeda otimizada.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Math Derivation (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
           <Card title="d) Resolução Matemática">
              <div className="space-y-4 text-sm">
                 <div className="bg-slate-50 p-3 rounded border border-slate-200">
                   <p className="font-bold text-slate-700 mb-1">Funções de Custo:</p>
                   <ul className="text-slate-600 font-mono text-xs space-y-1">
                     <li>Corretagem: $C_c = t_c \times n$</li>
                     <li>Oportunidade: $C_o = (iPY) / 2n$</li>
                   </ul>
                 </div>

                 <p className="text-slate-700 font-semibold">Minimização do Custo Total ($CT$):</p>
                 <div className="font-mono bg-blue-50 text-blue-900 p-2 rounded text-center text-xs">
                    CT = t_c n + (iPY / 2n)
                 </div>

                 <p>Derivando em ordem a $n$ e igualando a 0:</p>
                 <div className="font-mono bg-slate-800 text-white p-3 rounded text-xs space-y-2">
                    <p>dCT/dn = t_c - (iPY / 2n²) = 0</p>
                    <p>t_c = iPY / 2n²</p>
                    <p>n² = iPY / 2t_c</p>
                 </div>

                 <div className="flex items-center gap-2 bg-green-50 p-3 rounded border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-xs font-bold text-green-800 uppercase">N Ótimo (n*)</p>
                      <p className="font-mono text-lg text-green-700">n = √[iPY / 2t_c]</p>
                    </div>
                 </div>
              </div>
           </Card>
        </div>

        {/* Graph (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
           <Card className="h-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  e) Gráfico de Minimização
                </h3>
                <button
                  onClick={() => setShowResult(!showResult)}
                  className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  {showResult ? 'Ocultar Otimização' : 'Revelar N*'}
                </button>
              </div>

              <div className="flex-1 min-h-[350px]">
                 <OptimizationChart showOptimal={showResult} />
              </div>

              <div className="mt-4 text-xs text-slate-500 bg-slate-50 p-3 rounded">
                <p>
                  O ponto $N^*$ representa o equilíbrio onde o custo marginal de mais uma ida ao banco iguala o benefício marginal de ter menos dinheiro parado (menos juros perdidos).
                </p>
              </div>
           </Card>
        </div>
      </div>

      {/* Extended Theory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                O modelo aplicado nesta questão é o clássico <strong>Modelo de Baumol-Tobin</strong> para a procura de moeda por motivo de transação. Ele trata o dinheiro como um inventário que deve ser gerido de forma eficiente. No contexto do Sistema Bancário Angolano, as empresas e indivíduos enfrentam dois tipos de custos opostos: o custo de ir ao banco (corretagem, tempo, transporte), representado por $t_c$, e o custo de oportunidade de manter dinheiro em caixa em vez de aplicá-lo em ativos rentáveis, representado pela taxa de juro $i$.
            </p>
            <p>
                A derivação do $N$ ótimo (número de levantamentos) demonstra que a procura de moeda não depende linearmente do rendimento ($Y$), mas sim da raiz quadrada do mesmo. Isto introduz o conceito de <strong>economias de escala</strong> na gestão monetária: à medida que o volume de transações de uma empresa aumenta, a quantidade de dinheiro que ela precisa manter em caixa cresce menos que proporcionalmente. Isso torna o sistema financeiro mais eficiente para grandes agentes.
            </p>
            <p>
                A fórmula final {'$M^d = \\frac{PY}{2N^*} = \\sqrt{\\frac{t_c PY}{2i}}$'} evidencia uma relação inversa entre a procura de moeda e a taxa de juro ($i$). Quando as taxas de juro sobem, o custo de oportunidade de ter "dinheiro parado" aumenta, incentivando os agentes a irem mais vezes ao banco ($N$ aumenta) para manterem um saldo médio de caixa menor. Este mecanismo microeconómico fornece a fundamentação teórica para a inclinação negativa da curva LM.
            </p>
        </div>
      </div>
    </div>
  );
};