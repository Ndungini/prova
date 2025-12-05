import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { CostPushChart } from '../graphs/CostPushChart';
import { ArrowUpRight, TrendingUp, AlertOctagon, Calculator, BookOpen } from 'lucide-react';

export const Exam2_Question1: React.FC = () => {
  const [showShock, setShowShock] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-red-900 mb-2">Prova 2 - Questão 1: Inflação de Custos</h2>
        <p className="text-red-800 text-sm">
          Mostre matematicamente e explique o mecanismo da inflação gerada por pressões de custos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Theory & Math */}
        <div className="space-y-6">
           <Card title="Demonstração Matemática">
             <div className="space-y-4">
               <p className="text-sm text-slate-600 text-justify">
                 A inflação de custos ocorre quando há um encarecimento dos fatores de produção (salários, energia, matérias-primas), independentemente da procura agregada.
               </p>
               
               <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-700 text-xs uppercase mb-3 flex items-center gap-2">
                    <Calculator className="w-3 h-3" /> Equação de Preços (Oferta Agregada)
                  </h4>
                  <div className="font-mono text-center text-lg bg-white p-3 rounded shadow-sm mb-3">
                     P = P^e(1 + <span className="text-red-500 font-bold">μ</span>)F(u, z)
                  </div>
                  <ul className="text-xs text-slate-500 space-y-1 ml-2">
                    <li><span className="font-bold">P:</span> Nível de Preços</li>
                    <li><span className="font-bold">μ (mu):</span> Markup (Margem de lucro/Custos)</li>
                    <li><span className="font-bold">z:</span> Variáveis de custo estrutural</li>
                  </ul>
               </div>

               <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-bold text-red-800 text-sm mb-2">Mecanismo do Choque</h4>
                  <p className="text-red-700 text-sm">
                    Se os custos aumentam (ex: choque petrolífero ou aumento salarial acima da produtividade), o parâmetro <strong>μ</strong> ou <strong>z</strong> sobe.
                  </p>
                  <div className="flex items-center gap-2 mt-2 font-bold text-red-900 justify-center">
                    μ↑ <ArrowUpRight className="w-4 h-4" /> Custos↑ <ArrowUpRight className="w-4 h-4" /> Preços↑
                  </div>
               </div>
             </div>
           </Card>
        </div>

        {/* Graph */}
        <div className="space-y-6">
           <Card className="h-full flex flex-col">
              <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-red-500" />
                  Efeito Estagflacionário
                </h3>
                <button
                  onClick={() => setShowShock(!showShock)}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${showShock ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {showShock ? 'Resetar' : 'Aplicar Choque'}
                </button>
              </div>
              
              <div className="flex-1 min-h-[300px]">
                <CostPushChart showShock={showShock} />
              </div>

              <div className="mt-4 bg-slate-50 p-3 rounded text-sm text-slate-600">
                 <p className="flex items-start gap-2">
                   <AlertOctagon className="w-5 h-5 text-orange-500 shrink-0" />
                   <span>
                     <strong>Nota Económica:</strong> Observe que o equilíbrio move-se de E0 para E1. O resultado é o "pior dos dois mundos": <strong>Preços mais altos</strong> (Inflação) e <strong>Produto menor</strong> (Recessão/Desemprego).
                   </span>
                 </p>
              </div>
           </Card>
        </div>
      </div>

      {/* New Explanatory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-red-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                A <strong>Inflação de Custos</strong> (ou inflação de oferta) difere fundamentalmente da inflação de procura. Enquanto esta última é impulsionada por um excesso de consumo e investimento, a inflação de custos nasce no lado da produção. Ela ocorre quando os custos operacionais das empresas aumentam de forma exógena — seja por um aumento nos preços das matérias-primas (como o petróleo), aumentos salariais desvinculados da produtividade ou aumento de impostos indiretos. Este aumento de custos força as empresas a elevar os preços para manter as suas margens de lucro (markup).
            </p>
            <p>
                Matematicamente, observamos este fenómeno através da equação de fixação de preços: $P = (1 + \mu)W$. Se considerarmos o salário $W$ como uma função das expectativas de preços e do desemprego, qualquer choque que aumente a margem $\mu$ ou os fatores institucionais $z$ desloca a curva de Oferta Agregada (AS) para a esquerda e para cima. Isso significa que, para o mesmo nível de produto, os preços são agora mais altos. A economia sofre um "choque de oferta negativo".
            </p>
            <p>
                A consequência mais perversa deste tipo de inflação é a <strong>Estagflação</strong>. Ao contrário da inflação de procura, onde o aumento dos preços é geralmente acompanhado por um aumento do produto e do emprego (pelo menos no curto prazo), aqui temos o "pior de dois mundos": os preços sobem (inflação) enquanto o produto cai (recessão). Isso cria um dilema terrível para a política económica: se o Banco Central subir os juros para combater a inflação, agrava a recessão; se baixar os juros para estimular o emprego, agrava a inflação.
            </p>
        </div>
      </div>
    </div>
  );
};