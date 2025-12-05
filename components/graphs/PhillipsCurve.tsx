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

interface PhillipsCurveProps {
  showLongRun: boolean;
  expectationsShift: boolean;
}

export const PhillipsCurve: React.FC<PhillipsCurveProps> = ({ showLongRun, expectationsShift }) => {
  const data = [];
  
  // Generating hyperbolic curves for Phillips Curve: Inflation = a/Unemployment
  for (let u = 1; u <= 10; u += 0.5) {
    // Original SRPC
    const pi_sr1 = (15 / u) - 1; 
    
    // Shifted SRPC (Higher expected inflation)
    const pi_sr2 = expectationsShift ? ((15 / u) + 2) : null;

    data.push({
      u: u,
      srpc1: pi_sr1 > 0 ? pi_sr1 : 0,
      srpc2: pi_sr2 && pi_sr2 > 0 ? pi_sr2 : 0,
    });
  }

  // Natural Rate of Unemployment
  const un = 4; // Arbitrary Un

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="u" 
            type="number" 
            domain={[0, 10]} 
            label={{ value: 'Taxa de Desemprego (u)', position: 'bottom', offset: 0 }} 
          />
          <YAxis 
            domain={[0, 12]} 
            label={{ value: 'Inflação (π)', angle: -90, position: 'insideLeft' }} 
          />
          <Tooltip 
            formatter={(value: number) => `${value.toFixed(1)}%`}
            labelFormatter={(label) => `Desemprego: ${label}%`}
          />

          {/* Long Run Phillips Curve (Vertical at Un) */}
          {showLongRun && (
            <ReferenceLine x={un} stroke="#ef4444" strokeWidth={2} label="LRPC (Longo Prazo)" />
          )}

          {/* Short Run PC 1 */}
          <Line 
            type="basis" 
            dataKey="srpc1" 
            stroke="#3b82f6" 
            strokeWidth={3} 
            name="SRPC (Curto Prazo)" 
            dot={false} 
          />

          {/* Short Run PC 2 (Shift) */}
          {expectationsShift && (
            <Line 
              type="basis" 
              dataKey="srpc2" 
              stroke="#8b5cf6" 
              strokeWidth={3} 
              strokeDasharray="5 5" 
              name="SRPC' (Expectativas ↑)" 
              dot={false} 
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};