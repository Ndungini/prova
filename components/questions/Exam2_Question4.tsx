import React from 'react';
import { Card } from '../ui/Card';
import { Scale, Scissors, TrendingUp, BookOpen } from 'lucide-react';

export const Exam2_Question4: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-purple-900 mb-2">Prova 2 - Questão 4: Consolidação Orçamental</h2>
        <p className="text-purple-800 text-sm">
          Estratégias para ajustar um Orçamento Geral do Estado (OGE) deficitário.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="border-t-4 border-t-purple-400">
           <h3 className="font-bold text-slate-800 mb-4">Mecanismos de Ajuste</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Revenue Side */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                 <div className="flex items-center gap-2 mb-3">
                   <TrendingUp className="w-5 h-5 text-green-600" />
                   <h4 className="font-bold text-green-800">Lado da Receita (Aumentar T)</h4>
                 </div>
                 <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                    <li>Alargamento da base tributária (combate à fuga fiscal e economia informal).</li>
                    <li>Aumento das taxas de impostos (IVA, IR).</li>
                    <li>Melhoria da eficiência na cobrança fiscal (modernização da AGT).</li>
                 </ul>
              </div>

              {/* Expenditure Side */}
              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                 <div className="flex items-center gap-2 mb-3">
                   <Scissors className="w-5 h-5 text-red-600" />
                   <h4 className="font-bold text-red-800">Lado da Despesa (Cortar G)</h4>
                 </div>
                 <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
                    <li>Racionalização dos custos operacionais do Estado.</li>
                    <li>Revisão e corte de subsídios (ex: combustíveis, utilidades).</li>
                    <li>Priorização de investimentos públicos com alto retorno social.</li>
                 </ul>
              </div>
           </div>
        </Card>

        <Card title="A Lógica da Consolidação">
           <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-slate-100 p-4 rounded-full">
                 <Scale className="w-8 h-8 text-slate-600" />
              </div>
              <div className="text-sm text-slate-600 text-justify leading-relaxed">
                 <p className="mb-2">
                    Para consolidar um OGE deficitário, o governo deve transformar um <strong>Défice Primário</strong> num <strong>Superávite Primário</strong> ou, pelo menos, garantir que o défice seja sustentável (crescimento da economia > juros da dívida).
                 </p>
                 <p>
                    O ajuste não é apenas contabilístico; exige reformas estruturais para garantir que a redução do défice não asfixie o crescimento económico (o paradoxo da austeridade). A "consolidação" implica criar folga orçamental (poupança pública) para financiar investimento (activos públicos) sem aumentar explosivamente a dívida.
                 </p>
              </div>
           </div>
        </Card>
      </div>

      {/* New Explanatory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-purple-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                A <strong>Consolidação Orçamental</strong> refere-se ao conjunto de políticas destinadas a reduzir o défice orçamental e a acumulação da dívida pública. A teoria económica sugere que défices crónicos podem levar ao aumento das taxas de juro (efeito <em>crowding-out</em>), onde o Estado compete com o setor privado por fundos, encarecendo o investimento empresarial. Portanto, o objetivo final do ajuste não é apenas o equilíbrio contabilístico, mas a criação de condições macroeconómicas estáveis que favoreçam o crescimento sustentável a longo prazo.
            </p>
            <p>
                Um ponto crucial mencionado na questão é a relação entre <strong>poupança nacional e ativos públicos</strong>. Quando o Estado gera um excedente fiscal (receitas > despesas correntes), ele está a realizar "Poupança Pública". Esta poupança é vital porque liberta recursos que podem ser canalizados para o Investimento Público (formação bruta de capital fixo) — construção de estradas, hospitais e escolas — sem a necessidade de contrair dívida externa excessiva. É a acumulação destes ativos produtivos que impulsiona o potencial de crescimento da economia.
            </p>
            <p>
                Contudo, a implementação de medidas de consolidação enfrenta sempre o desafio dos multiplicadores keynesianos. Cortar despesas ($G$) ou aumentar impostos ($T$) tem, no curto prazo, um efeito contracionista sobre a procura agregada. O sucesso da consolidação depende da "qualidade" do ajuste: cortes em despesas correntes improdutivas (desperdício) são geralmente menos prejudiciais ao crescimento do que cortes no investimento público ou aumentos excessivos de impostos que distorcem a iniciativa privada.
            </p>
        </div>
      </div>
    </div>
  );
};