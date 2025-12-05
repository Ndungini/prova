import React from 'react';
import { Card } from '../ui/Card';
import { XCircle, CheckCircle } from 'lucide-react';

export const Question4: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
        <h2 className="font-bold text-lg text-blue-900 mb-2">Questão 4</h2>
        <p className="text-blue-800">
          Verdadeiro (V) ou Falso (F) sobre a discussão do OGE 2016.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Alínea A */}
        <Card className="border-l-4 border-l-red-500">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-red-100 p-3 rounded-full shrink-0">
              <span className="text-2xl font-bold text-red-600">F</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Alínea a)</h3>
              <p className="italic text-slate-600 mb-4 border-l-2 border-slate-200 pl-3">
                "A necessidade de financiamento do sector público é igual ao saldo orçamental corrente menos saldo orçamental de capital."
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-bold text-slate-700 text-sm mb-2">Explicação:</h4>
                <p className="text-slate-600 text-sm">
                  A afirmação é falsa do ponto de vista contábil padrão. A necessidade de financiamento é o simétrico do <strong>Saldo Global</strong>.
                  O Saldo Global é a <strong>SOMA</strong> do saldo corrente com o saldo de capital, não a subtração.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-500 bg-white p-2 border rounded">
                  Necessidade Financiamento = -(Saldo Corrente + Saldo Capital)
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Alínea B */}
        <Card className="border-l-4 border-l-red-500">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="bg-red-100 p-3 rounded-full shrink-0">
              <span className="text-2xl font-bold text-red-600">F</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Alínea b)</h3>
              <p className="italic text-slate-600 mb-4 border-l-2 border-slate-200 pl-3">
                "A poupança pública é igual as receitas correntes menos despesas de Capital."
              </p>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="font-bold text-slate-700 text-sm mb-2">Explicação:</h4>
                <p className="text-slate-600 text-sm">
                  A afirmação é falsa. A definição econômica de <strong>Poupança Pública (S_gov)</strong> refere-se ao excesso de receitas correntes sobre despesas <strong>correntes</strong>, não de capital.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-500 bg-white p-2 border rounded">
                  Poupança Pública = Receitas Correntes - Despesas Correntes
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};