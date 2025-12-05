import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { ADASChart } from '../graphs/ADASChart';
import { Brain, TrendingUp, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';

export const Question1: React.FC = () => {
  const [showInflation, setShowInflation] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Header Context */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-indigo-900 mb-2">Questão 1: Teorias da Inflação</h2>
        <p className="text-indigo-800 text-sm leading-relaxed">
          Compare a visão Monetarista (Friedman) e Keynesiana sobre a inflação, focando no comportamento da Oferta Agregada e na capacidade produtiva da economia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Theory (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Keynesian View Card */}
          <Card className="border-t-4 border-t-blue-500 shadow-md">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Brain className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-800">Visão Keynesiana</h3>
            </div>
            
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                A inflação resulta do <strong>Excesso de Demanda Agregada</strong> (Gap Inflacionário) quando a economia opera perto do Pleno Emprego.
              </p>
              <div className="bg-blue-50 p-3 rounded-md border border-blue-100 text-blue-900 font-medium text-xs">
                Foco: Rigidez de preços a curto prazo e a inclinação positiva da Curva de Oferta (AS).
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-500 text-xs">
                <li>Se AD &gt; AS (perto da capacidade) &rarr; Preços Sobem.</li>
                <li>Inflação de Custos (choques de oferta).</li>
              </ul>
            </div>
          </Card>

          {/* Monetarist View Card */}
          <Card className="border-t-4 border-t-green-500 shadow-md">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
              <div className="bg-green-100 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-800">Visão Monetarista</h3>
            </div>
            
            <div className="space-y-3 text-sm text-slate-600">
              <p>
                <em>"A inflação é sempre um fenómeno monetário."</em> (Milton Friedman).
              </p>
              
              <div className="flex justify-center my-2">
                 <div className="bg-slate-900 text-white px-4 py-2 rounded-lg font-mono text-sm shadow-lg">
                    MV = Py
                 </div>
              </div>

              <div className="text-xs text-justify leading-relaxed">
                Assumindo que a Velocidade (V) é estável e o Produto (y) está no nível natural (Longo Prazo), qualquer aumento na Oferta de Moeda (M) traduz-se diretamente em aumento de Preços (P).
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Graph & Analysis (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="h-full border border-slate-200 shadow-lg overflow-hidden flex flex-col">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                Modelo AD-AS & Full Capacity
              </h3>
              <button
                onClick={() => setShowInflation(!showInflation)}
                className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all ${
                  showInflation 
                    ? 'bg-red-100 text-red-700 ring-2 ring-red-500 ring-offset-1' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}
              >
                {showInflation ? 'Resetar Gráfico' : 'Simular Expansão da Demanda'}
              </button>
            </div>

            <div className="p-4 flex-1 min-h-[350px]">
              <ADASChart inflationScenario={showInflation} />
            </div>

            <div className="bg-slate-50 p-4 border-t border-slate-100 text-sm">
              <h4 className="font-bold text-slate-800 mb-2 text-xs uppercase tracking-wide">Interpretação do Gráfico:</h4>
              <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 bg-green-500 rounded-full shrink-0" />
                    <p className="text-slate-600 text-xs">
                       <strong className="text-slate-900">Zona Vertical (Clássica):</strong> Representa a "Full Capacity". Aqui, a economia não consegue produzir mais.
                    </p>
                 </div>
                 <div className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 bg-red-500 rounded-full shrink-0" />
                    <p className="text-slate-600 text-xs">
                       <strong className="text-slate-900">Resultado do Choque:</strong> O aumento da Demanda (AD') na zona vertical gera <strong>apenas Inflação</strong> (P sobe muito), sem ganho real de produto (Y estagnado).
                    </p>
                 </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* New Explanatory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                A <strong>Perspetiva Keynesiana</strong> enfatiza que a inflação é primariamente um sintoma de desequilíbrio no mercado de bens e serviços. Enquanto a economia possuir recursos ociosos (zona plana da curva AS), é possível expandir a produção sem grandes pressões nos preços. Contudo, à medida que a procura agregada (AD) cresce e a economia se aproxima do pleno emprego, surgem "gargalos" na produção. Neste cenário de "Gap Inflacionário", a procura excede a capacidade de oferta, forçando os preços a subir para racionar os bens escassos.
            </p>
            <p>
                Por outro lado, a <strong>Abordagem Monetarista</strong>, ancorada na Teoria Quantitativa da Moeda ($MV=Py$), argumenta que a inflação é, na sua essência, causada por um crescimento da oferta monetária superior ao crescimento do produto real. Friedman defendia que, no longo prazo, a curva de oferta é vertical (Inelástica). Isto significa que os agentes económicos ajustam as suas expectativas e que o dinheiro é "neutro": imprimir mais dinheiro não cria mais fábricas ou trabalhadores, apenas desvaloriza a moeda existente.
            </p>
            <p>
                O gráfico acima ilustra a síntese destas visões através do conceito de <strong>Plena Capacidade</strong> (Zona Clássica/Vertical). Quando a economia atinge o seu produto potencial ($Y^*$), a curva de Oferta Agregada torna-se perfeitamente inelástica em relação ao preço. Qualquer tentativa de estimular a economia através de políticas de procura (deslocamento da AD para a direita) nesta zona resulta num aumento "puro" do nível de preços, sem qualquer ganho real no PIB. É aqui que a advertência monetarista se torna mais evidente: o excesso de estímulo gera apenas inflação.
            </p>
        </div>
      </div>
    </div>
  );
};