import React from 'react';
import { Card } from '../ui/Card';
import { Users, Briefcase, AlertTriangle, TrendingUp, BookOpen } from 'lucide-react';

export const Exam2_Question5: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl shadow-sm">
        <h2 className="font-bold text-xl text-orange-900 mb-2">Prova 2 - Questão 5: Desemprego</h2>
        <p className="text-orange-800 text-sm">
          Tipologias e impactos socioeconómicos.
        </p>
      </div>

      {/* Part A: Distinction */}
      <h3 className="font-bold text-slate-800 pl-2 border-l-4 border-slate-300">a) Tipos de Desemprego</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Card className="bg-white border-t-4 border-t-blue-400">
            <div className="flex items-center gap-2 mb-3">
               <div className="bg-blue-100 p-2 rounded-lg">
                  <Briefcase className="w-5 h-5 text-blue-600" />
               </div>
               <h4 className="font-bold text-slate-800">Friccional (Natural)</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
               É o desemprego voluntário e temporário que ocorre durante o tempo em que os indivíduos "buscam" um novo emprego.
            </p>
            <div className="bg-slate-50 p-2 rounded text-xs text-slate-500 italic">
               Ex: Recém-licenciados à procura do 1º emprego ou pessoas a mudar de cidade.
            </div>
         </Card>

         <Card className="bg-white border-t-4 border-t-red-400">
            <div className="flex items-center gap-2 mb-3">
               <div className="bg-red-100 p-2 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
               </div>
               <h4 className="font-bold text-slate-800">Estrutural</h4>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
               Resulta de um desajuste profundo entre as competências dos trabalhadores e as necessidades das empresas (tecnologia, localização).
            </p>
            <div className="bg-slate-50 p-2 rounded text-xs text-slate-500 italic">
               Ex: Operários substituídos por máquinas ou extinção de indústrias obsoletas.
            </div>
         </Card>
      </div>

      {/* Part B: Impacts */}
      <h3 className="font-bold text-slate-800 pl-2 border-l-4 border-slate-300 mt-4">b) Impactos do Desemprego</h3>
      <Card>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
               <h4 className="font-bold text-indigo-700 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 rotate-180" /> Económicos
               </h4>
               <ul className="list-disc list-inside text-sm text-slate-700 space-y-2 marker:text-indigo-400">
                  <li>Perda de produção (PIB abaixo do potencial).</li>
                  <li>Erosão do capital humano (perda de qualificações por inatividade).</li>
                  <li>Aumento da despesa pública (subsídios) e queda da receita fiscal.</li>
               </ul>
            </div>

            <div className="space-y-3">
               <h4 className="font-bold text-orange-700 flex items-center gap-2">
                  <Users className="w-4 h-4" /> Sociais
               </h4>
               <ul className="list-disc list-inside text-sm text-slate-700 space-y-2 marker:text-orange-400">
                  <li>Aumento da pobreza e exclusão social.</li>
                  <li>Problemas de saúde mental e autoestima.</li>
                  <li>Aumento da criminalidade e instabilidade social.</li>
               </ul>
            </div>
         </div>
      </Card>

      {/* New Explanatory Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2 pb-2 border-b border-slate-100">
            <BookOpen className="w-5 h-5 text-orange-600" />
            Análise Teórica Aprofundada
        </h3>
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed text-justify columns-1 md:columns-1 lg:columns-1">
            <p>
                A distinção entre <strong>desemprego friccional e estrutural</strong> é essencial para o desenho de políticas públicas. O desemprego friccional é considerado "saudável" numa economia dinâmica, pois reflete a mobilidade dos trabalhadores em busca de melhores oportunidades. Já o desemprego estrutural é patológico e persistente; indica que, mesmo havendo vagas, os trabalhadores disponíveis não possuem as qualificações necessárias para as preencher. Resolver este tipo exige investimentos de longo prazo em educação e reconversão profissional, e não apenas estímulos de curto prazo à procura.
            </p>
            <p>
                Os impactos económicos do desemprego vão além da perda imediata de rendimento. O conceito de <strong>Lei de Okun</strong> estabelece uma relação empírica negativa entre desemprego e crescimento do PIB: cada ponto percentual de desemprego acima da taxa natural representa uma percentagem significativa de riqueza que o país deixou de produzir (Gap do Produto). Além disso, o desemprego de longa duração causa "histerese": a erosão das competências dos trabalhadores, tornando-os menos empregáveis no futuro e reduzindo o produto potencial da economia permanentemente.
            </p>
            <p>
                Na dimensão social, o desemprego atua como um catalisador de desigualdades. A perda do posto de trabalho não afeta apenas o consumo das famílias, mas corrói o tecido social, aumentando a dependência do Estado Social num momento em que as receitas fiscais diminuem (efeito tesoura nas contas públicas). A exclusão social resultante pode gerar ciclos intergeracionais de pobreza, onde os filhos de desempregados de longa duração têm menor mobilidade social, perpetuando o problema.
            </p>
        </div>
      </div>
    </div>
  );
};