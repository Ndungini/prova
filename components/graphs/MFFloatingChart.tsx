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

interface MFFloatingChartProps {
  expanded: boolean;
}

export const MFFloatingChart: React.FC<MFFloatingChartProps> = ({ expanded }) => {
  const data = [];
  
  // Model:
  // IS: y = 100 - x (Original)
  // LM: y = 20 + x  (Original)
  // LM': y = -10 + x (Shift Right - Money Expansion)
  // IS': y = 130 - x (Shift Right - Depreciation/NX increase)
  
  for (let x = 0; x <= 120; x += 5) {
    const is_y = 100 - x;
    const lm_y = 20 + x;
    
    // Stage 1: LM Shifts Down/Right
    const lm_prime = expanded ? -10 + x : null;
    
    // Stage 2: IS Shifts Up/Right (due to depreciation)
    const is_prime = expanded ? 130 - x : null;

    data.push({ x, is_y, lm_y, lm_prime, is_prime });
  }

  // Equilibrium Calculation
  // E0: 100-x = 20+x => 2x=80 => x=40, y=60
  // E_int: 100-x = -10+x => 2x=110 => x=55, y=45 (Interest drops)
  // E1: 130-x = -10+x => 2x=140 => x=70, y=60 (Interest restored, Output higher)

  return (
    <div className="h-full w-full min-h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis 
            dataKey="x" 
            type="number" 
            label={{ value: 'Produto (Y)', position: 'bottom', offset: 0, fill: '#64748b' }} 
            domain={[0, 100]}
            tick={false}
          />
          <YAxis 
            label={{ value: 'Taxa de Juros (i)', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
            domain={[0, 100]}
            tick={false}
          />
          <Tooltip contentStyle={{ borderRadius: '8px' }} />

          {/* E0 */}
          <ReferenceLine x={40} strokeDasharray="3 3" stroke="#94a3b8" />
          <ReferenceLine y={60} strokeDasharray="3 3" stroke="#94a3b8" />
          <ReferenceLine x={40} y={60} label={{ value: "E0", position: 'top', fill: '#475569', fontWeight: 'bold' }} />

          {expanded && (
             <>
               {/* E_final */}
               <ReferenceLine x={70} strokeDasharray="3 3" stroke="#10b981" />
               <ReferenceLine x={70} y={0} label={{ value: "Y**", position: 'bottom', fill: '#10b981', fontWeight: 'bold' }} />
               <ReferenceLine x={70} y={60} label={{ value: "E_final", position: 'top', fill: '#10b981', fontWeight: 'bold' }} />
               
               {/* Arrow */}
               <ReferenceLine 
                    segment={[{ x: 40, y: 60 }, { x: 55, y: 45 }, { x: 70, y: 60 }]} 
                    stroke="#10b981" 
                    strokeWidth={2}
               />
             </>
          )}

          <Line type="monotone" dataKey="is_y" stroke="#000000" strokeWidth={2} name="IS" dot={false} />
          <Line type="monotone" dataKey="lm_y" stroke="#000000" strokeWidth={2} name="LM" dot={false} />
          
          {expanded && (
            <>
               <Line type="monotone" dataKey="lm_prime" stroke="#3b82f6" strokeWidth={3} name="LM'" dot={false} strokeDasharray="5 5" />
               <Line type="monotone" dataKey="is_prime" stroke="#10b981" strokeWidth={3} name="IS'" dot={false} />
            </>
          )}

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};