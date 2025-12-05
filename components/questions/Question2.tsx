import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { ISLMChart } from '../graphs/ISLMChart';
import { EurozoneLMChart } from '../graphs/EurozoneLMChart';
import { ArrowRight, BookOpen, DollarSign, Euro, TrendingDown, Globe } from 'lucide-react';

export const Question2: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Mapping steps to Chart Stages
  // Step 0 (Intro) -> Stage 0 (Init)
  // Step 1 (Expansão M) -> Stage 1 (LM Shift, y0->y1)
  // Step 2 (Ajuste Cambial) -> Stage 2 (IS Shift, y1->y2)
  // Step 3 (Conclusão) -> Stage 2 (Final State)
  
  const getEuroStage = (step: number) => {
    if (step === 0) return 0;
    if (step === 1) return 1;
    return 2; // Steps 2 and 3 show final state
  };

  const steps = [
    {
      title: "Cenário Inicial (E0)",
      description: "Equilíbrio interno na Zona Euro (ISXM = LM). A economia está no ponto y0.",
      effectEU: "Ponto y0 definido pela interseção inicial.",
      effectUSA: "Equilíbrio inicial.",
    },
    {
      title: "1. Expansão Monetária (y0 → y1)",
      description: "O BCE aumenta a oferta de moeda. A curva LM desloca-se para baixo/direita (LM'). O juro cai.",
      effectEU: "Movimento 1: A taxa de juro cai (i1 < i0). O produto aumenta para y1 temporariamente.",
      effectUSA: "Ainda sem impacto visível.",
    },
    {
      title: "2. Ajustamento Cambial (y1 → y2)",
      description: "Juros baixos na UE provocam saída de capitais. O Euro deprecia. Isso aumenta as Exportações Líquidas (IS desloca p/ direita).",
      effectEU: "Movimento 2: A depreciação cambial impulsiona a procura (ISXM'). O produto cresce ainda mais, de y1 para y2.",
      effectUSA: "O Dólar aprecia (perda de competitividade).",
      showUSAShift: false // Still showing transition
    },
    {
      title: "3. Impacto Final (Beggar-thy-neighbour)",
      description: "O aumento de Y na Europa (y2) ocorre, em parte, à custa da queda de Y nos EUA.",
      effectEU: "Equilíbrio Final em E2 (y2). Juros podem subir ligeiramente em relação a fase intermédia, mas Y é máximo.",
      effectUSA: "Recessão nos EUA: Curva IS americana desloca para esquerda devido à apreciação do Dólar.",
      showUSAShift: true
    }
  ];

  const currentStepData = steps[activeStep];
  const euroStage = getEuroStage(activeStep);

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Introduction */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-blue-900 mb-2">Questão 2: Dinâmica Mundell-Fleming</h2>
        <div className="flex items-center gap-2 text-sm text-blue-700 mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Foco Visual: Movimentos Sequenciais (y0 → y1 → y2)</span>
        </div>
        <p className="text-blue-800 leading-relaxed text-sm">
          Analise passo-a-passo como o choque monetário afeta o produto através de dois canais: o canal dos juros (LM) e o canal cambial (IS).
        </p>
      </div>

      {/* Stepper Controls */}
      <div className="flex flex-col items-center justify-center space-y-4 sticky top-20 z-20 bg-white/90 backdrop-blur p-4 rounded-xl border border-slate-200 shadow-md">
        <div className="flex items-center gap-2 w-full max-w-md justify-center">
          {steps.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 transition-all duration-500 rounded-full ${idx <= activeStep ? 'w-full bg-indigo-600' : 'w-full bg-slate-200'}`} 
            />
          ))}
        </div>
        
        <div className="flex items-center justify-between w-full max-w-md gap-4">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg disabled:opacity-30 transition-colors"
          >
            Anterior
          </button>
          
          <div className="text-center flex-1">
             <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">Passo {activeStep + 1} de 4</span>
             <h3 className="font-bold text-slate-800 text-sm">{currentStepData.title}</h3>
          </div>

          <button
            onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
            disabled={activeStep === steps.length - 1}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm disabled:opacity-30 transition-all"
          >
            Próximo
          </button>
        </div>
        <p className="text-xs text-slate-500 max-w-lg text-center bg-slate-50 p-2 rounded border border-slate-100">
            {currentStepData.description}
        </p>
      </div>

      {/* Graphs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* Eurozone Chart Container */}
        <Card className={`transition-all duration-500 border-t-4 ${euroStage > 0 ? 'border-t-indigo-500 shadow-md' : 'border-t-slate-300'}`}>
          <div className="flex items-center justify-between mb-2 border-b pb-2">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <div className="bg-indigo-100 p-1.5 rounded-lg">
                <Euro className="w-5 h-5 text-indigo-700" />
              </div>
              Zona Euro (Choque)
            </h3>
            {euroStage === 1 && <span className="text-xs font-bold text-blue-600 animate-pulse">LM Desloca &rarr;</span>}
            {euroStage === 2 && <span className="text-xs font-bold text-green-600 animate-pulse">IS Desloca &rarr;</span>}
          </div>
          
          <div className="min-h-[60px] text-sm text-slate-600 mb-2">
            {currentStepData.effectEU}
          </div>

          <EurozoneLMChart stage={euroStage} />
          
          <div className="mt-4 flex gap-2 text-xs">
             <div className="flex-1 bg-slate-50 p-2 rounded border border-slate-100 text-center">
                <span className="block font-bold text-slate-400">y0</span>
                Início
             </div>
             <div className={`flex-1 p-2 rounded border text-center transition-colors ${euroStage >= 1 ? 'bg-blue-50 border-blue-100 text-blue-800' : 'bg-slate-50 border-slate-100 opacity-50'}`}>
                <span className="block font-bold">y1</span>
                Efeito Juros
             </div>
             <div className={`flex-1 p-2 rounded border text-center transition-colors ${euroStage >= 2 ? 'bg-green-50 border-green-100 text-green-800' : 'bg-slate-50 border-slate-100 opacity-50'}`}>
                <span className="block font-bold">y2</span>
                Efeito Câmbio
             </div>
          </div>
        </Card>

        {/* USA Chart Container */}
        <Card className={`transition-all duration-500 border-t-4 ${currentStepData.showUSAShift ? 'border-t-red-500 shadow-md' : 'border-t-slate-300'}`}>
          <div className="flex items-center justify-between mb-2 border-b pb-2">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <div className="bg-red-100 p-1.5 rounded-lg">
                <DollarSign className="w-5 h-5 text-red-700" />
              </div>
              Estados Unidos (Impacto)
            </h3>
             {currentStepData.showUSAShift && <span className="text-xs font-bold text-red-600 animate-pulse">IS Desloca &larr;</span>}
          </div>

          <div className="min-h-[60px] text-sm text-slate-600 mb-2">
            {currentStepData.effectUSA}
          </div>

          <ISLMChart showShift={!!currentStepData.showUSAShift} />
        </Card>
      </div>

      {/* Detailed Analysis Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-md">
        <h3 className="font-bold text-indigo-900 text-lg mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
          <Globe className="w-5 h-5 text-indigo-600" />
          Análise Económica: O que acontece à Taxa de Juro Mundial?
        </h3>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-green-50 p-4 rounded-lg border border-green-100">
             <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-800">Conclusão Direta</span>
             </div>
             <p className="text-green-900 font-medium leading-relaxed">
               A taxa de juro mundial <strong>desce</strong> ($i_1 &lt; i_0$).
             </p>
             <p className="text-sm text-green-800 mt-2">
               Como a Zona Euro é uma economia grande, a expansão monetária cria um excesso de liquidez global que pressiona os juros para baixo em ambos os blocos económicos.
             </p>
          </div>

          <div className="flex-[2] space-y-4 text-slate-700 text-sm leading-relaxed text-justify">
            <p>
              <strong className="text-indigo-700">1. Mecanismo de Transmissão:</strong> Inicialmente, a expansão monetária pelo BCE desloca a curva LM para a direita, o que provoca uma queda imediata na taxa de juro doméstica. Esse diferencial de juros ($i &lt; i^*$) gera uma saída de capitais em direção ao exterior (EUA), resultando na depreciação do Euro e consequente melhoria da Balança Comercial. Este efeito desloca a curva IS europeia para a direita ($E_0 \to E_1 \to E_2$).
            </p>
            <p>
              <strong className="text-indigo-700">2. Equilíbrio Final Global:</strong> A depreciação do Euro corresponde a uma apreciação do Dólar, o que prejudica as exportações líquidas americanas (deslocando a IS dos EUA para a esquerda). O resultado é uma recessão nos EUA e uma expansão na Europa. No entanto, para que o mercado de bens e monetário global esteja em equilíbrio, <strong>a taxa de juro mundial deve estabilizar num patamar inferior ao inicial</strong>. A liquidez adicional injetada pelo BCE reduz o "custo do dinheiro" globalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};