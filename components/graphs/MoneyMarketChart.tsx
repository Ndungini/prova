import React from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';

export const MoneyMarketChart: React.FC = () => {
  const data = [];
  
  // Demand: i = 100 / M
  // Supply: Fixed M
  
  for (let m = 1; m <= 10; m += 0.5) {
    const demand = 20 / m; 
    data.push({ m, demand });
  }

  const fixedM = 4;
  const equilibriumI = 20 / fixedM; // 5

  return (
    <div className="h-full w-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis 
            dataKey="m" 
            type="number" 
            label={{ value: 'Saldos Reais (M/P)', position: 'bottom', offset: 0, fill: '#64748b' }} 
            domain={[0, 10]}
            tick={false}
          />
          <YAxis 
            label={{ value: 'Taxa de Juros (i)', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
            domain={[0, 10]}
            tick={false}
          />
          <Tooltip contentStyle={{ borderRadius: '8px' }} />

          {/* Supply Curve (Vertical) */}
          <ReferenceLine x={fixedM} stroke="#ef4444" strokeWidth={3} label={{ value: "Ms/P", position: 'top', fill: '#ef4444', fontWeight: 'bold' }} />
          
          {/* Equilibrium */}
          <ReferenceLine y={equilibriumI} strokeDasharray="3 3" stroke="#94a3b8" />
          <ReferenceLine x={fixedM} y={equilibriumI} label={{ value: "E", position: 'right', fill: '#475569', fontWeight: 'bold' }} />
          <ReferenceLine y={equilibriumI} x={0} label={{ value: "i*", position: 'left', fill: '#475569', fontWeight: 'bold' }} />

          <Line type="monotone" dataKey="demand" stroke="#3b82f6" strokeWidth={3} name="L(i, Y)" dot={false} />

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};