import React from 'react';
import { Card } from '../ui/Card';
import { MoneyMarketChart } from '../graphs/MoneyMarketChart';
import { DollarSign, Activity, BookOpen } from 'lucide-react';

export const Exam3_Question2: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-600 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-emerald-900 mb-2">Prova 3 - Questão 2: Mercado Monetário (Pequena Economia Aberta)</h2>
        <p className="text-emerald-800 text-sm">
          Tendo em conta o modelo exógeno $i = i^*$, qual a relação entre a oferta real de moeda ($M^s/P$) e a procura de liquidez $L(i, Y)$?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="h-full">
           <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
             <Activity className="w-5 h-5 text-emerald-600" />
             Equilíbrio no Mercado Monetário
           </h3>
           <div className="h-[300px]">
              <MoneyMarketChart />
           </div>
        </Card>

        <Card title="Análise do Modelo">
           <div className="space-y-4 text-sm text-slate-700">
              <p className="leading-relaxed">
                 Numa pequena economia aberta com perfeita mobilidade de capitais, a taxa de juro interna ($i$) é determinada exogenamente pelos mercados internacionais ($i^*$).
              </p>
              
              <div className="bg-slate-50 p-4 rounded border border-slate-200 font-mono text-center my-4">
                 M/P = L(i*, Y)
              </div>

              <p>
                 Isto implica que o Banco Central perde o controlo sobre a oferta monetária (em câmbio fixo) ou que a taxa de juro deixa de ser uma variável de ajuste interno (em câmbio flutuante). O equilíbrio é determinado onde a procura de liquidez à taxa mundial cruza a oferta.
              </p>
           </div>
        </Card>
      </div>

      {/* Analysis Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                A questão aborda a condição de equilíbrio do mercado monetário sob a hipótese de <strong>Pequena Economia Aberta</strong>. Neste cenário, a taxa de juro doméstica não se desvia da taxa de juro internacional ($i = i^*$) devido à arbitragem. Se $i > i^*$, haveria entrada infinita de capitais até $i$ baixar; se $i < i^*$, haveria saída infinita. Portanto, a variável preço do dinheiro ($i$) é fixa exogenamente.
            </p>
            <p>
                A equação $M^s/P = L(i^*, Y)$ diz-nos que a oferta real de moeda deve igualar a procura de liquidez avaliada à taxa de juro internacional e ao nível de rendimento vigente. Graficamente, a curva de oferta de moeda é vertical (exógena ao juro no gráfico padrão), e a curva de procura $L$ tem inclinação negativa. O ponto crucial é que a taxa de juro não se ajusta para limpar o mercado doméstico; é a quantidade de moeda ($M$) ou o nível de rendimento ($Y$) que se devem ajustar.
            </p>
            <p>
                Esta relação tem implicações profundas dependendo do regime cambial. Em câmbio fixo, como $i^*$ e $P$ são dados, a oferta monetária $M$ torna-se endógena: o Banco Central tem de fornecer exatamente a quantidade de moeda que o público demanda à taxa $i^*$. Se tentar reduzir $M$, a taxa de juro subiria ($i > i^*$), atraindo capitais e forçando o Banco a vender moeda nacional para manter o câmbio, o que aumentaria $M$ de volta ao nível inicial.
            </p>
        </div>
      </div>
    </div>
  );
};