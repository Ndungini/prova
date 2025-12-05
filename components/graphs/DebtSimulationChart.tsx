import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

interface DebtSimulationChartProps {
  scenario: 'stable' | 'explosive';
  initialDebt?: number;
}

export const DebtSimulationChart: React.FC<DebtSimulationChartProps> = ({ scenario, initialDebt = 70 }) => {
  const data = [];
  let debt = initialDebt; 
  
  // Scenario A: Explosive (r > g)
  // Scenario B: Stable/Reducing (g > r or Primary Surplus)
  
  const r = scenario === 'explosive' ? 0.08 : 0.04;
  const g = scenario === 'explosive' ? 0.02 : 0.06;
  const primary_balance = 0; // Assuming balanced primary for simplicity of r vs g effect

  // Simulation period
  for (let t = 2015; t <= 2025; t++) {
    data.push({ year: t, debt: debt });
    // Dynamics: d(t) = d(t-1) * (1 + r - g) - s
    debt = debt * (1 + r - g) - primary_balance;
  }

  return (
    <div className="h-full w-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorDebt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={scenario === 'explosive' ? '#ef4444' : '#10b981'} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={scenario === 'explosive' ? '#ef4444' : '#10b981'} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="year" tick={{fontSize: 12}} />
          <YAxis label={{ value: 'Dívida / PIB (%)', angle: -90, position: 'insideLeft', fill: '#64748b' }} domain={[0, 'auto']} />
          <Tooltip 
             formatter={(value: number) => `${value.toFixed(1)}%`}
             contentStyle={{ borderRadius: '8px' }}
          />
          <Area 
            type="monotone" 
            dataKey="debt" 
            stroke={scenario === 'explosive' ? '#ef4444' : '#10b981'} 
            fillOpacity={1} 
            fill="url(#colorDebt)" 
          />
          <ReferenceLine y={100} label="Limite Crítico" stroke="red" strokeDasharray="3 3" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};