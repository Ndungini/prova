import React, { useState } from 'react';
// Prova 1 Components
import { Question1 } from './components/questions/Question1';
import { Question2 } from './components/questions/Question2';
import { Question3 } from './components/questions/Question3';
import { Question4 } from './components/questions/Question4';
// Prova 2 Components
import { Exam2_Question1 } from './components/questions/Exam2_Question1';
import { Exam2_Question2 } from './components/questions/Exam2_Question2';
import { Exam2_Question3 } from './components/questions/Exam2_Question3';
import { Exam2_Question4 } from './components/questions/Exam2_Question4';
import { Exam2_Question5 } from './components/questions/Exam2_Question5';
// Prova 3 Components
import { Exam3_Question1 } from './components/questions/Exam3_Question1';
import { Exam3_Question2 } from './components/questions/Exam3_Question2';
import { Exam3_Question3 } from './components/questions/Exam3_Question3';
import { Exam3_Question4 } from './components/questions/Exam3_Question4';
// Prova 4 Components
import { Exam4_Question1 } from './components/questions/Exam4_Question1';
import { Exam4_Question2 } from './components/questions/Exam4_Question2';
import { Exam4_Question3 } from './components/questions/Exam4_Question3';

import { ChevronRight } from 'lucide-react';
import { QuestionId, ExamId } from './types';

const App: React.FC = () => {
  const [activeExam, setActiveExam] = useState<ExamId>(ExamId.EXAM4); // Default to newest exam (Exam 4)
  const [activeTab, setActiveTab] = useState<QuestionId>(QuestionId.Q1);

  const handleExamSwitch = (exam: ExamId) => {
    setActiveExam(exam);
    setActiveTab(QuestionId.Q1); // Reset to Q1 when switching exams
  };

  const renderContent = () => {
    if (activeExam === ExamId.EXAM1) {
      switch (activeTab) {
        case QuestionId.Q1: return <Question1 />;
        case QuestionId.Q2: return <Question2 />;
        case QuestionId.Q3: return <Question3 />;
        case QuestionId.Q4: return <Question4 />;
        default: return <Question1 />;
      }
    } else if (activeExam === ExamId.EXAM2) {
      switch (activeTab) {
        case QuestionId.Q1: return <Exam2_Question1 />;
        case QuestionId.Q2: return <Exam2_Question2 />;
        case QuestionId.Q3: return <Exam2_Question3 />;
        case QuestionId.Q4: return <Exam2_Question4 />;
        case QuestionId.Q5: return <Exam2_Question5 />;
        default: return <Exam2_Question1 />;
      }
    } else if (activeExam === ExamId.EXAM3) {
       switch (activeTab) {
        case QuestionId.Q1: return <Exam3_Question1 />;
        case QuestionId.Q2: return <Exam3_Question2 />;
        case QuestionId.Q3: return <Exam3_Question3 />;
        case QuestionId.Q4: return <Exam3_Question4 />;
        default: return <Exam3_Question1 />;
      }
    } else {
       // Exam 4
       switch (activeTab) {
        case QuestionId.Q1: return <Exam4_Question1 />;
        case QuestionId.Q2: return <Exam4_Question2 />;
        case QuestionId.Q3: return <Exam4_Question3 />;
        default: return <Exam4_Question1 />;
      }
    }
  };

  const getNavItems = () => {
    if (activeExam === ExamId.EXAM1) {
      return [
        { id: QuestionId.Q1, label: '1. Inflação: MF vs Keynes' },
        { id: QuestionId.Q2, label: '2. Choque Externo (EUA)' },
        { id: QuestionId.Q3, label: '3. Curva de Phillips' },
        { id: QuestionId.Q4, label: '4. OGE e Finanças Públicas' },
      ];
    } else if (activeExam === ExamId.EXAM2) {
      return [
        { id: QuestionId.Q1, label: '1. Inflação de Custos' },
        { id: QuestionId.Q2, label: '2. Procura de Moeda (Baumol)' },
        { id: QuestionId.Q3, label: '3. Velocidade da Moeda' },
        { id: QuestionId.Q4, label: '4. Consolidação Orçamental' },
        { id: QuestionId.Q5, label: '5. Desemprego' },
      ];
    } else if (activeExam === ExamId.EXAM3) {
       return [
        { id: QuestionId.Q1, label: '1. Abeconomics (M-F Flexível)' },
        { id: QuestionId.Q2, label: '2. Mercado Monetário' },
        { id: QuestionId.Q3, label: '3. Política Orçamental (Fixo)' },
        { id: QuestionId.Q4, label: '4. Dívida Pública (Angola)' },
      ];
    } else {
      // Exam 4
      return [
        { id: QuestionId.Q1, label: '1. Dívida Pública (45.8%)' },
        { id: QuestionId.Q2, label: '2. Inflação Cost Push' },
        { id: QuestionId.Q3, label: '3. Sistema Bancário (Baumol)' },
      ];
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full opacity-20 group-hover:opacity-40 transition duration-200 blur"></div>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Logo_UAN.png" 
                alt="Logo UAN FEC" 
                className="relative h-14 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight leading-none mb-1">
                MacroEco Solver
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                 <p className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md self-start">
                   FEC UAN
                 </p>
                 <p className="text-xs text-slate-500 font-medium">
                   Elaborado por <span className="text-slate-700">Ndungini Castelo</span>
                 </p>
              </div>
            </div>
          </div>
          
          {/* Exam Switcher (Desktop) */}
          <div className="hidden md:flex bg-slate-100 p-1 rounded-lg border border-slate-200 ml-4">
             <button
                onClick={() => handleExamSwitch(ExamId.EXAM1)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeExam === ExamId.EXAM1 ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
                Prova 1
             </button>
             <button
                onClick={() => handleExamSwitch(ExamId.EXAM2)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeExam === ExamId.EXAM2 ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
                Prova 2
             </button>
             <button
                onClick={() => handleExamSwitch(ExamId.EXAM3)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeExam === ExamId.EXAM3 ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
                Prova 3
             </button>
             <button
                onClick={() => handleExamSwitch(ExamId.EXAM4)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeExam === ExamId.EXAM4 ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
             >
                Prova 4
             </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full z-0">
        {/* Mobile Exam Switcher */}
        <div className="md:hidden mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-2">Selecionar Prova:</label>
          <select 
            value={activeExam}
            onChange={(e) => handleExamSwitch(e.target.value as ExamId)}
            className="w-full bg-white border border-slate-300 rounded-lg py-2 px-3 text-slate-700 focus:ring-2 focus:ring-indigo-500 shadow-sm"
          >
            <option value={ExamId.EXAM1}>Prova 1 (ISPTC 2015)</option>
            <option value={ExamId.EXAM2}>Prova 2 (Bancária)</option>
            <option value={ExamId.EXAM3}>Prova 3 (ISPTEC 2016)</option>
            <option value={ExamId.EXAM4}>Prova 4 (ISPTEC 2015)</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <nav className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-2 sticky top-24">
              <div className="flex items-center justify-between px-4 py-2 mb-2">
                 <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                   Menu de Questões
                 </div>
              </div>
              
              {getNavItems().map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 mb-1 flex items-center justify-between group ${
                    activeTab === item.id 
                      ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  {activeTab === item.id && <ChevronRight className="w-4 h-4 opacity-50" />}
                </button>
              ))}
            </div>
            
            {/* Context Info Box */}
            <div className="mt-6 bg-slate-100 rounded-xl p-4 text-xs text-slate-500 border border-slate-200 shadow-sm">
              <p className="font-semibold text-slate-700 mb-1">Contexto da Prova:</p>
              {activeExam === ExamId.EXAM1 && "Foco em modelos IS-LM, Curva de Phillips e Finanças Públicas básicas."}
              {activeExam === ExamId.EXAM2 && "Aborda inflação de oferta, otimização de custos bancários (Baumol-Tobin) e teoria quantitativa."}
              {activeExam === ExamId.EXAM3 && "Mundell-Fleming (Abeconomics), Sustentabilidade da Dívida e Mercado Monetário."}
              {activeExam === ExamId.EXAM4 && "Sustentabilidade da Dívida (45%), Inflação de Custos e Sistema Bancário."}
            </div>
          </nav>

          {/* Solution Area */}
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <div className="flex justify-center mb-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/82/Logo_UAN.png" 
                alt="Logo UAN" 
                className="h-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500" 
              />
           </div>
           
           <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Elaborado por Ndungini Castelo</h3>
           <p className="text-slate-400 text-sm mb-8">Faculdade de Economia da Universidade Agostinho Neto (FEC UAN)</p>
           
           <div className="max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
           
           <div className="text-xs text-slate-600">
             <p className="mb-2">Desenvolvido para fins educacionais e académicos.</p>
             <p>&copy; {new Date().getFullYear()} MacroEco Solver. Todos os direitos reservados.</p>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;