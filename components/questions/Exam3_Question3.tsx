import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { MFFixedChart } from '../graphs/MFFixedChart';
import { Anchor, TrendingDown, BookOpen } from 'lucide-react';

export const Exam3_Question3: React.FC = () => {
  const [contracted, setContracted] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-indigo-900 mb-2">Prova 3 - Questão 3: Política Orçamental (Câmbio Fixo)</h2>
        <p className="text-indigo-800 text-sm">
          Demonstre o impacto de uma política orçamental restritiva ($G \downarrow$ ou $T \uparrow$) num regime de câmbio fixo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="space-y-6">
          <Card className="h-full flex flex-col">
             <div className="flex justify-between items-center mb-4 border-b pb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Anchor className="w-5 h-5 text-indigo-600" />
                  Mundell-Fleming (Câmbio Fixo)
                </h3>
                <button
                  onClick={() => setContracted(!contracted)}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${contracted ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  {contracted ? 'Resetar' : 'Aplicar Restrição'}
                </button>
             </div>
             
             <div className="flex-1 min-h-[350px]">
                <MFFixedChart contracted={contracted} />
             </div>

             <div className="mt-4 bg-slate-50 p-3 rounded text-sm text-slate-600">
                <p>
                  <strong>Resultado:</strong> A contração orçamental é extremamente eficaz (negativamente) em câmbio fixo. O PIB cai duplamente: pelo corte direto de G e pela contração monetária induzida para manter o câmbio.
                </p>
             </div>
          </Card>
        </div>

        <div className="space-y-6">
           <Card title="Cadeia de Efeitos">
              <ul className="space-y-4 text-sm text-slate-700">
                 <li className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full font-bold text-red-600">1</div>
                    <div>
                       <strong>Choque Fiscal:</strong> O Governo corta gastos ($G \downarrow$). A Curva IS desloca-se para a esquerda.
                    </div>
                 </li>
                 <li className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full font-bold text-red-600">2</div>
                    <div>
                       <strong>Pressão na Taxa de Juro:</strong> A menor procura reduz a taxa de juro interna ($i < i^*$).
                    </div>
                 </li>
                 <li className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full font-bold text-red-600">3</div>
                    <div>
                       <strong>Intervenção Cambial:</strong> A saída de capitais pressiona a moeda a depreciar. Para defender o Câmbio Fixo, o Banco Central vende reservas e compra moeda nacional.
                    </div>
                 </li>
                 <li className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full font-bold text-red-600">4</div>
                    <div>
                       <strong>Contração Monetária:</strong> A compra de moeda nacional reduz a oferta monetária ($M \downarrow$). A LM desloca-se para a esquerda até $i = i^*$.
                    </div>
                 </li>
              </ul>
           </Card>
        </div>

      </div>

      {/* Analysis Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                Em regime de câmbio fixo, a política orçamental tem potência máxima sobre o produto. Quando o governo implementa uma política restritiva (redução de Despesa Pública $G$ ou aumento de Impostos $T$), a curva IS desloca-se para a esquerda, reduzindo a procura agregada. Inicialmente, isto pressiona a taxa de juro para baixo, ficando inferior à taxa internacional ($i < i^*$).
            </p>
            <p>
                O diferencial de juros provoca uma saída de capitais, criando uma pressão de depreciação sobre a moeda nacional. Como o Banco Central está comprometido com uma paridade fixa, ele é obrigado a intervir no mercado cambial: vende reservas internacionais e compra a sua própria moeda para "enxugar" o excesso de oferta de moeda nacional. Esta operação reduz a Base Monetária ($M \downarrow$).
            </p>
            <p>
                Graficamente, a redução da oferta monetária desloca a curva LM para a esquerda. Este movimento continua até que a pressão sobre o câmbio cesse, ou seja, até que a taxa de juro interna retorne ao nível internacional ($i = i^*$). O resultado final é uma recessão profunda: o produto ($Y$) cai tanto pelo impacto inicial do corte fiscal como pelo impacto secundário da contração monetária forçada. A política orçamental em câmbio fixo não sofre de <em>crowding-out</em>; pelo contrário, os seus efeitos são amplificados.
            </p>
        </div>
      </div>
    </div>
  );
};