import React from 'react';
import { Card } from '../ui/Card';
import { Banknote, Repeat, Info, BookOpen } from 'lucide-react';

export const Exam2_Question3: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-emerald-900 mb-2">Prova 2 - Questão 3: Velocidade de Circulação</h2>
        <p className="text-emerald-800 text-sm">
          Aplicação da Teoria Quantitativa da Moeda (MV = PY).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Calculation Card */}
        <Card title="Cálculo da Velocidade (V)">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <span className="block text-slate-500 text-xs uppercase font-bold">Moeda (M)</span>
                <span className="text-lg font-mono text-slate-800">56.000.000 Kz</span>
              </div>
              <div className="bg-slate-50 p-3 rounded border border-slate-200">
                <span className="block text-slate-500 text-xs uppercase font-bold">Rendimento (PY)</span>
                <span className="text-lg font-mono text-slate-800">7.000.000 Kz</span>
              </div>
            </div>

            <div className="relative p-6 bg-emerald-900 rounded-xl text-white shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Repeat className="w-32 h-32" />
              </div>
              <p className="font-mono text-sm opacity-80 mb-2">Fórmula: V = PY / M</p>
              <div className="text-3xl font-bold mb-2">
                V = 0,125
              </div>
              <p className="text-xs text-emerald-300">
                (7.000.000 / 56.000.000)
              </p>
            </div>
          </div>
        </Card>

        {/* Interpretation Card */}
        <Card title="Significado Económico">
          <div className="space-y-4">
             <div className="flex items-start gap-3">
               <div className="bg-amber-100 p-2 rounded-full shrink-0">
                 <Info className="w-5 h-5 text-amber-600" />
               </div>
               <div>
                 <h4 className="font-bold text-slate-800 text-sm">Baixa Velocidade de Circulação</h4>
                 <p className="text-slate-600 text-sm mt-1 leading-relaxed text-justify">
                   O resultado de <strong>0,125</strong> indica uma velocidade de circulação extremamente baixa. Isso significa que, em média, cada unidade de moeda (Kwanza) é utilizada apenas 0,125 vezes para comprar bens e serviços finais num ano. Ou seja, a moeda "troca de mãos" muito lentamente.
                 </p>
               </div>
             </div>

             <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
               <h4 className="font-bold text-slate-700 text-xs uppercase mb-2">Possíveis Causas em Angola (Contexto):</h4>
               <ul className="space-y-2 text-sm text-slate-600">
                 <li className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                   Elevada preferência pela liquidez (atesouramento fora dos bancos).
                 </li>
                 <li className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                   Ineficiência do sistema de pagamentos.
                 </li>
                 <li className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                   Economia informal baseada em numerário (Cash).
                 </li>
               </ul>
             </div>
          </div>
        </Card>
      </div>

      {/* New Explanatory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                A <strong>Velocidade de Circulação da Moeda ($V$)</strong> é um conceito central na Teoria Quantitativa. Ela mede a frequência com que a massa monetária ($M$) é utilizada para adquirir bens e serviços finais ($PY$) num dado período. Uma velocidade alta indica uma economia dinâmica e eficiente no uso dos meios de pagamento; uma velocidade baixa sugere que a moeda está a ser "retida" ou atesourada pelos agentes económicos, em vez de circular no mercado.
            </p>
            <p>
                O resultado obtido no exercício ($V = 0,125$) é anormalmente baixo para padrões internacionais, o que exige uma interpretação estrutural. Em economias em desenvolvimento ou com grandes setores informais, como é o caso no contexto da questão, uma grande quantidade de moeda física é mantida "debaixo do colchão" ou circula em mercados paralelos que não são capturados nas estatísticas oficiais do PIB. Isso faz com que a Massa Monetária ($M$) pareça desproporcionalmente grande em relação ao Produto ($PY$) registado.
            </p>
            <p>
                Adicionalmente, este fenómeno pode refletir uma profunda desconfiança no sistema bancário ou ineficiências tecnológicas. Se os sistemas de pagamento eletrónico são escassos ou falíveis, as pessoas e empresas são forçadas a manter grandes saldos de caixa por precaução. Do ponto de vista da política monetária, uma velocidade instável ou muito baixa dificulta o controlo da inflação, pois quebra a relação direta e previsível entre a emissão de moeda e o nível de preços assumida pelos monetaristas clássicos.
            </p>
        </div>
      </div>
    </div>
  );
};