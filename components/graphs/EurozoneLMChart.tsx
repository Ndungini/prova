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
  Label
} from 'recharts';

interface EurozoneLMChartProps {
  stage: number; // 0 = Initial, 1 = LM Shift (y0->y1), 2 = IS Shift (y1->y2)
}

export const EurozoneLMChart: React.FC<EurozoneLMChartProps> = ({ stage }) => {
  const data = [];
  
  // Mathematical Model
  // IS (Original): y = 110 - x
  // LM (Original): y = 10 + 0.8x
  // LM' (Shifted): y = -10 + 0.8x (Shift Right/Down)
  // IS' (Shifted): y = 130 - x (Shift Right/Up)

  for (let x = 0; x <= 100; x += 5) {
    const isxm = 110 - x;
    const lm = 10 + 0.8 * x;
    
    // Stage 1+: LM Shifts
    const lm1 = stage >= 1 ? -10 + 0.8 * x : null;
    
    // Stage 2+: IS Shifts
    const isxm1 = stage >= 2 ? 130 - x : null;

    data.push({ x, isxm, lm, lm1, isxm1 });
  }

  // Equilibrium Coordinates Calculation
  // E0 (Init): 110-x = 10+0.8x => 1.8x = 100 => x = 55.55
  const x0 = 55.5;
  const i0 = 54.4;

  // E1 (Intermediate): 110-x = -10+0.8x => 1.8x = 120 => x = 66.66
  const x1 = 66.6;
  // i1 is on the new LM curve: -10 + 0.8(66.6) = 43.3 (approx)
  const i1_intermediate = 43.3;

  // E2 (Final): 130-x = -10+0.8x => 1.8x = 140 => x = 77.77
  const x2 = 77.7;
  const i2 = 52.2;

  return (
    <div className="h-96 w-full relative">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 30, right: 30, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          
          <XAxis 
            dataKey="x" 
            type="number" 
            tick={false}
            domain={[0, 100]}
            label={{ value: 'Produto (y)', position: 'bottom', offset: 0, fill: '#64748b' }} 
          />
          <YAxis 
            domain={[0, 120]} 
            tick={false}
            label={{ value: 'Taxa de Juros (i)', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #e2e8f0', borderRadius: '8px' }}
            formatter={(value: number) => value ? value.toFixed(1) : ''}
            labelFormatter={() => ''}
          />

          {/* --- STAGE 0: INITIAL EQUILIBRIUM (E0) --- */}
          <ReferenceLine x={x0} strokeDasharray="3 3" stroke="#94a3b8" />
          <ReferenceLine x={x0} y={0} label={{ value: "y0", position: 'bottom', fill: '#475569', fontWeight: 'bold' }} />
          <ReferenceLine y={i0} strokeDasharray="3 3" stroke="#94a3b8" />
          <ReferenceLine y={i0} x={0} label={{ value: "i0", position: 'left', fill: '#475569', fontWeight: 'bold' }} />
          <ReferenceLine x={x0} y={i0} label={{ value: "E0", position: 'top', fill: '#475569', fontWeight: 'bold', dy: -5 }} />

          {/* --- STAGE 1: LM SHIFT (E0 -> E1) --- */}
          {stage >= 1 && (
            <>
              {/* Point y1 */}
              <ReferenceLine x={x1} strokeDasharray="3 3" stroke="#3b82f6" />
              <ReferenceLine x={x1} y={0} label={{ value: "y1", position: 'bottom', fill: '#3b82f6', fontWeight: 'bold', fontSize: 14 }} />
              
              {/* Arrow E0 -> E1 */}
              <ReferenceLine 
                segment={[{ x: x0, y: i0 }, { x: x1, y: i1_intermediate }]} 
                stroke="#3b82f6" 
                strokeWidth={2}
                strokeDasharray="3 3"
              />
              <ReferenceLine x={x1} y={i1_intermediate} label={{ value: "E1 (Curto Prazo)", position: 'right', fill: '#3b82f6', fontSize: 12 }} />
            </>
          )}

          {/* --- STAGE 2: IS SHIFT (E1 -> E2) --- */}
          {stage >= 2 && (
            <>
              {/* Point y2 */}
              <ReferenceLine x={x2} strokeDasharray="3 3" stroke="#10b981" />
              <ReferenceLine x={x2} y={0} label={{ value: "y2", position: 'bottom', fill: '#10b981', fontWeight: 'bold', fontSize: 16 }} />
              
              {/* Arrow E1 -> E2 */}
              <ReferenceLine 
                segment={[{ x: x1, y: i1_intermediate }, { x: x2, y: i2 }]} 
                stroke="#10b981" 
                strokeWidth={2}
                strokeDasharray="3 3"
              />
              <ReferenceLine x={x2} y={i2} label={{ value: "E2 (Final)", position: 'top', fill: '#10b981', fontWeight: 'bold', fontSize: 14 }} />
            </>
          )}

          {/* CURVES */}
          {/* Always show Original Curves in muted colors if shifted */}
          <Line 
            type="linear" 
            dataKey="lm" 
            stroke={stage >= 1 ? "#cbd5e1" : "#0f172a"} 
            strokeWidth={stage >= 1 ? 2 : 3} 
            dot={false}
            name="LM (Inicial)"
          />
          <Line 
            type="linear" 
            dataKey="isxm" 
            stroke={stage >= 2 ? "#cbd5e1" : "#0f172a"} 
            strokeWidth={stage >= 2 ? 2 : 3} 
            dot={false} 
            name="ISXM (Inicial)"
          />

          {/* Stage 1 Curve */}
          {stage >= 1 && (
            <Line 
              type="linear" 
              dataKey="lm1" 
              stroke="#3b82f6" // Blue for Monetary
              strokeWidth={3} 
              dot={false} 
              name="LM' (Expansão)"
            />
          )}

          {/* Stage 2 Curve */}
          {stage >= 2 && (
            <Line 
              type="linear" 
              dataKey="isxm1" 
              stroke="#10b981" // Green for Trade/IS
              strokeWidth={3} 
              dot={false} 
              name="ISXM' (Depreciação)"
            />
          )}

        </ComposedChart>
      </ResponsiveContainer>
      
      {/* Dynamic Legend / Context Helper */}
      <div className="absolute top-2 right-2 bg-white/90 p-3 rounded-lg border border-slate-100 shadow-sm text-xs space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
          <span>Equilíbrio Inicial ({x0.toFixed(0)}, {i0.toFixed(0)})</span>
        </div>
        {stage >= 1 && (
          <div className="flex items-center gap-2 text-blue-600 font-medium">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>1º Movimento: LM desloca (y0 &rarr; y1)</span>
          </div>
        )}
        {stage >= 2 && (
          <div className="flex items-center gap-2 text-green-600 font-bold">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>2º Movimento: IS desloca (y1 &rarr; y2)</span>
          </div>
        )}
      </div>
    </div>
  );
};