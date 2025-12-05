import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { PhillipsCurve } from '../graphs/PhillipsCurve';
import { Anchor, Zap, Calculator, ArrowRight, Brain, TrendingUp, BookOpen } from 'lucide-react';

export const Question3: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "1. Curva Original (Curto Prazo)",
      icon: <TrendingUp className="w-4 h-4" />,
      longRun: false,
      shift: false,
      summary: "O Trade-off Simples",
      detail: "No curto prazo, existe uma relação inversa: para reduzir o desemprego, aceitamos mais inflação. Os trabalhadores ainda não ajustaram as suas expectativas de preços."
    },
    {
      id: 1,
      title: "2. Longo Prazo (Friedman)",
      icon: <Anchor className="w-4 h-4" />,
      longRun: true,
      shift: false,
      summary: "A Taxa Natural",
      detail: "A contribuição de Friedman: No longo prazo, a ilusão monetária desaparece. O desemprego retorna sempre à sua Taxa Natural (un), independentemente da inflação. A curva torna-se VERTICAL."
    },
    {
      id: 2,
      title: "3. Expectativas Adaptativas",
      icon: <Brain className="w-4 h-4" />,
      longRun: true,
      shift: true,
      summary: "O Deslocamento da Curva",
      detail: "Se o governo insiste em manter o desemprego abaixo do natural, a inflação esperada sobe. Isso desloca a curva de curto prazo para cima, gerando inflação cada vez maior sem ganho no emprego."
    }
  ];

  const currentStep = steps[activeStep];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Context */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-emerald-900 mb-2">Questão 3: A Curva de Phillips</h2>
        <p className="text-emerald-800 text-sm leading-relaxed">
          Analise a evolução da relação entre Desemprego e Inflação, focando na crítica de Milton Friedman e no papel fundamental das <strong>Expectativas de Inflação</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Graph & Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="h-full border border-slate-200 shadow-lg flex flex-col">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                Simulação Gráfica
              </h3>
              <div className="flex bg-white rounded-lg border border-slate-200 p-1">
                {steps.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStep(s.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                      activeStep === s.id 
                        ? 'bg-emerald-600 text-white shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {s.title.split('.')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 flex-1 min-h-[320px]">
              <PhillipsCurve 
                showLongRun={currentStep.longRun} 
                expectationsShift={currentStep.shift} 
              />
            </div>

            <div className="bg-slate-50 p-5 border-t border-slate-100">
               <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg shrink-0 mt-1 ${activeStep === 0 ? 'bg-blue-100 text-blue-600' : activeStep === 1 ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'}`}>
                    {currentStep.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{currentStep.summary}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {currentStep.detail}
                    </p>
                  </div>
               </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Mathematical Demonstration (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <Card title="Demonstração Matemática" className="border-t-4 border-t-slate-600 h-full">
            <div className="space-y-8">
              
              {/* Equation Block */}
              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-slate-200 rounded-full"></div>
                <div className="pl-4">
                  <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Calculator className="w-3 h-3" />
                    1. A Equação de Friedman
                  </h4>
                  <div className="bg-slate-800 text-white p-4 rounded-lg shadow-inner font-mono text-center text-sm md:text-base">
                    <span className="text-red-400">π_t</span> = <span className="text-purple-400">π_t^e</span> - α(<span className="text-blue-400">u_t</span> - <span className="text-emerald-400">u_n</span>)
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                     <div className="flex items-center gap-1.5 text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span> Inflação Real
                     </div>
                     <div className="flex items-center gap-1.5 text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span> Expectativa
                     </div>
                     <div className="flex items-center gap-1.5 text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span> Desemprego
                     </div>
                     <div className="flex items-center gap-1.5 text-slate-600">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Taxa Natural
                     </div>
                  </div>
                </div>
              </div>

              {/* Condition Block */}
              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-slate-200 rounded-full"></div>
                <div className="pl-4">
                  <h4 className="font-bold text-slate-700 text-xs uppercase tracking-wider mb-3">
                    2. Condição de Longo Prazo
                  </h4>
                  <p className="text-slate-600 text-sm mb-2 text-justify">
                    No longo prazo, os agentes não cometem erros sistemáticos. A inflação esperada iguala a inflação real:
                  </p>
                  <div className="bg-purple-50 border border-purple-100 text-purple-900 p-2 rounded text-center font-bold text-sm">
                    π_t = π_t^e
                  </div>
                </div>
              </div>

              {/* Result Block */}
              <div className="relative">
                <div className="absolute -left-3 top-0 bottom-0 w-1 bg-emerald-400 rounded-full"></div>
                <div className="pl-4">
                  <h4 className="font-bold text-emerald-800 text-xs uppercase tracking-wider mb-3">
                    3. O Resultado Final
                  </h4>
                  <div className="text-slate-600 text-sm space-y-2">
                    <p>Substituindo na equação:</p>
                    <div className="font-mono text-xs bg-slate-50 p-2 rounded border border-slate-200 text-slate-500">
                       0 = -α(u_t - u_n)
                    </div>
                    <div className="flex items-center gap-3 mt-2 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                      <ArrowRight className="w-5 h-5 text-emerald-600" />
                      <span className="font-bold text-emerald-800 text-lg">u_t = u_n</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 italic">
                      "A curva de Phillips de Longo Prazo é vertical sobre a Taxa Natural de Desemprego."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </Card>
        </div>
      </div>

      {/* New Explanatory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                A <strong>Curva de Phillips original</strong> sugeria um <em>trade-off</em> estável: os governos poderiam, teoricamente, escolher "comprar" menos desemprego aceitando um pouco mais de inflação. Esta visão baseava-se na ideia de que os trabalhadores sofriam de ilusão monetária, observando apenas os salários nominais e ignorando, no curto prazo, a subida geral dos preços.
            </p>
            <p>
                No entanto, a crítica monetarista (liderada por Friedman e Phelps) introduziu o papel crucial das <strong>Expectativas Adaptativas</strong>. Eles argumentaram que os agentes económicos não são estáticos; quando a inflação sobe consistentemente, os trabalhadores acabam por incorporar essa subida nas suas negociações salariais. Isto desloca a Curva de Phillips de curto prazo para cima, anulando o ganho inicial no emprego à medida que os custos reais das empresas aumentam.
            </p>
            <p>
                Como conclusão, surge o conceito imperativo de <strong>Taxa Natural de Desemprego</strong>. No longo prazo, a economia gravita sempre para esta taxa natural, independentemente do nível de inflação. Qualquer tentativa política de forçar sistematicamente o desemprego abaixo deste nível resulta apenas numa espiral inflacionária, sem ganhos reais de produção. A curva de longo prazo é, portanto, vertical, indicando a neutralidade da moeda no longo prazo.
            </p>
        </div>
      </div>
    </div>
  );
};