import React from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area
} from 'recharts';

interface OptimizationChartProps {
  showOptimal: boolean;
}

export const OptimizationChart: React.FC<OptimizationChartProps> = ({ showOptimal }) => {
  const data = [];
  
  // Constants for simulation
  const PY = 1000;
  const tripCost = 20; // x + pi
  
  // Formulas
  // TransCost = n * tripCost
  // OppCost = PY / (2*n)  (As per prompt formula)
  // Total = TransCost + OppCost

  // Optimal n = sqrt(PY / 2*tripCost) = sqrt(1000 / 40) = sqrt(25) = 5
  const optimalN = 5;

  for (let n = 1; n <= 10; n += 0.5) {
    const trans = n * tripCost;
    const opp = PY / (2 * n);
    const total = trans + opp;
    
    data.push({
      n,
      trans,
      opp,
      total
    });
  }

  return (
    <div className="h-full w-full min-h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis 
            dataKey="n" 
            type="number" 
            domain={[1, 10]}
            label={{ value: 'Número de idas ao banco (n)', position: 'bottom', offset: 0, fill: '#64748b' }} 
          />
          <YAxis 
            label={{ value: 'Custos (Kz)', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
            tickFormatter={(val) => `Kz ${val}`}
          />
          <Tooltip 
            formatter={(value: number) => value.toFixed(1)}
            labelFormatter={(label) => `n = ${label}`}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '8px' }}
          />

          <Line type="monotone" dataKey="trans" stroke="#3b82f6" strokeWidth={2} name="Custo de Deslocação (n(x+π))" dot={false} />
          <Line type="monotone" dataKey="opp" stroke="#10b981" strokeWidth={2} name="Custo Oportunidade (PY/2n)" dot={false} />
          <Line type="monotone" dataKey="total" stroke="#6366f1" strokeWidth={4} name="Custo Total" dot={false} />

          {showOptimal && (
             <>
               <ReferenceLine x={optimalN} stroke="#ef4444" strokeDasharray="3 3" />
               <ReferenceLine x={optimalN} label={{ value: "Ponto Mínimo (n*)", position: 'top', fill: '#ef4444', fontWeight: 'bold' }} />
               <div className="absolute top-0 right-0 p-2 bg-white rounded shadow text-xs">
                 n* = 5
               </div>
             </>
          )}

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};