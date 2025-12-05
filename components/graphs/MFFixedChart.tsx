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

interface MFFixedChartProps {
  contracted: boolean;
}

export const MFFixedChart: React.FC<MFFixedChartProps> = ({ contracted }) => {
  const data = [];
  
  // Model:
  // IS: y = 100 - x
  // LM: y = 20 + x
  // IS': y = 70 - x (Shift Left - Fiscal Contraction)
  // LM': y = -10 + x (Must Shift Left to maintain i*)
  
  for (let x = 0; x <= 100; x += 5) {
    const is_y = 100 - x;
    const lm_y = 20 + x;
    
    const is_prime = contracted ? 70 - x : null;
    const lm_prime = contracted ? 50 + x : null; // Adjusted intercept to cross at lower Y same i

    data.push({ x, is_y, lm_y, is_prime, lm_prime });
  }

  // E0: 100-x = 20+x => 2x=80 => x=40 (i*), Y=60
  // IS shifts left. Intersection IS'/LM is at x=25, Y=45 (i < i*).
  // Capital flight -> Reserves loss -> M drops -> LM shifts Left.
  // E_final: IS'/LM'. Intersection at x=40 (i* maintained).
  // 70-x = 40 => Y = 30.
  // 50+x = 90 (at x=40). Need 50+x = 40 ? No.
  // Let's force math visual:
  // i* = 60 (y axis). x axis is Y.
  // Wait, standard graph: Y axis is 'i', X axis is 'Y'.
  // IS: i = 100 - Y. LM: i = -20 + Y.
  // i* = 40.
  // IS': i = 70 - Y. At i*=40, Y=30.
  // LM must shift to intersect IS' at i*=40.
  // LM': i = 10 + Y. At Y=30, i=40. Correct.

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

          {/* i* Line */}
          <ReferenceLine y={60} stroke="#cbd5e1" strokeWidth={2} label={{ value: "i* (Mundial)", position: 'right', fill: '#94a3b8' }} />

          {/* E0 */}
          <ReferenceLine x={40} y={60} label={{ value: "E0", position: 'top', fill: '#475569', fontWeight: 'bold' }} />

          {contracted && (
             <>
                {/* E_final */}
                <ReferenceLine x={10} y={60} label={{ value: "E_final", position: 'top', fill: '#ef4444', fontWeight: 'bold' }} />
                <ReferenceLine x={10} strokeDasharray="3 3" stroke="#ef4444" />
                <ReferenceLine x={10} y={0} label={{ value: "Y_final", position: 'bottom', fill: '#ef4444', fontWeight: 'bold' }} />
             </>
          )}

          <Line type="monotone" dataKey="is_y" stroke="#000000" strokeWidth={2} name="IS" dot={false} />
          <Line type="monotone" dataKey="lm_y" stroke="#000000" strokeWidth={2} name="LM" dot={false} />
          
          {contracted && (
             <>
               <Line type="monotone" dataKey="is_prime" stroke="#ef4444" strokeWidth={3} name="IS'" dot={false} />
               <Line type="monotone" dataKey="lm_prime" stroke="#ef4444" strokeWidth={3} name="LM'" dot={false} strokeDasharray="5 5" />
             </>
          )}

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};