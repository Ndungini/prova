import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { CostPushChart } from '../graphs/CostPushChart';
import { TrendingUp, Calculator, ArrowUpRight, BookOpen } from 'lucide-react';

export const Exam4_Question2: React.FC = () => {
  const [showShock, setShowShock] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-red-900 mb-2">Prova 4 - Questão 2: Inflação de Custos (Cost Push)</h2>
        <p className="text-red-800 text-sm">
          Demonstração matemática e explicação do mecanismo inflacionário via oferta.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Math Demonstration */}
        <div className="space-y-6">
           <Card title="Demonstração Matemática">
             <div className="space-y-4">
               <p className="text-sm text-slate-600">
                 A inflação de custos origina-se na fixação de preços pelas empresas e na negociação salarial.
               </p>
               
               <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-700 text-xs uppercase mb-3 flex items-center gap-2">
                    <Calculator className="w-3 h-3" /> Fixação de Preços
                  </h4>
                  <div className="font-mono text-center text-lg bg-white p-3 rounded shadow-sm mb-3 text-slate-800">
                     P = (1 + <span className="text-red-500 font-bold">μ</span>)W
                  </div>
                  <p className="text-xs text-slate-500 mb-2">
                    Onde <strong>P</strong> é o preço, <strong>μ</strong> é a margem de lucro (markup) e <strong>W</strong> é o salário nominal.
                  </p>
                  
                  <div className="w-full h-px bg-slate-200 my-3"></div>

                  <h4 className="font-bold text-slate-700 text-xs uppercase mb-3">
                    Espiral Salário-Preço
                  </h4>
                  <div className="font-mono text-center text-sm bg-white p-2 rounded shadow-sm text-slate-600">
                     W = P^e \times F(u, z)
                  </div>
               </div>

               <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-bold text-red-800 text-sm mb-2">O Choque de Oferta</h4>
                  <p className="text-red-700 text-sm text-justify">
                    Qualquer aumento exógeno na margem de lucro ($\mu \uparrow$), nos custos de matérias-primas (petróleo) ou nos fatores institucionais ($z \uparrow$) eleva os preços para qualquer nível de produto.
                  </p>
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
                  Gráfico AD-AS (Choque de Oferta)
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
                 <p className="text-justify">
                   <strong>Resultado:</strong> A curva de Oferta Agregada (AS) desloca-se para cima/esquerda. O equilíbrio move-se de $E_0$ para $E_1$, resultando em maior inflação ($P \uparrow$) e menor produto ($Y \downarrow$).
                 </p>
              </div>
           </Card>
        </div>
      </div>

      {/* Extended Theory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-red-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                A <strong>Inflação de Custos</strong> (Cost-Push Inflation) representa um desafio macroeconómico complexo porque, ao contrário da inflação de procura, não pode ser resolvida simplesmente arrefecendo a economia sem causar danos colaterais significativos. Este fenómeno ocorre quando os custos de produção das empresas aumentam independentemente da procura agregada. As causas comuns incluem choques nos preços das commodities (como crises petrolíferas), aumentos salariais acima da produtividade impulsionados por sindicatos fortes, ou o aumento do poder de monopólio das empresas (aumento do markup $\mu$).
            </p>
            <p>
                Matematicamente, a relação de fixação de preços $P = (1 + \mu)W$ mostra que, ceteris paribus, um aumento em $\mu$ obriga a um aumento em $P$ para manter a rentabilidade real. Se combinarmos isto com a equação de fixação de salários, vemos que um choque de custos desloca a curva de Oferta Agregada (AS) para a esquerda. Isso significa que, para produzir a mesma quantidade de bens, as empresas exigem agora um nível de preços mais alto para cobrir os seus custos acrescidos.
            </p>
            <p>
                O resultado macroeconómico imediato é a <strong>Estagflação</strong>: uma combinação de estagnação económica (queda do produto $Y$ e aumento do desemprego) com inflação alta ($P \uparrow$). Isto coloca os decisores de política económica perante um dilema cruel. Se o Banco Central combater a inflação subindo juros (política restritiva), agrava a recessão e o desemprego. Se tentar combater o desemprego estimulando a procura (política expansionista), valida o aumento de preços e pode gerar uma espiral inflacionária permanente.
            </p>
        </div>
      </div>
    </div>
  );
};