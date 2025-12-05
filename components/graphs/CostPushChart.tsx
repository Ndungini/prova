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

interface CostPushChartProps {
  showShock: boolean;
}

export const CostPushChart: React.FC<CostPushChartProps> = ({ showShock }) => {
  const data = [];
  
  // Model:
  // AD: P = 200 - Y (Negative Slope)
  // AS0: P = 20 + Y (Positive Slope)
  // AS1: P = 60 + Y (Shift Up/Left due to cost)
  
  for (let y = 0; y <= 140; y += 5) {
    const ad = 200 - y;
    const as0 = 20 + y;
    const as1 = showShock ? 60 + y : null; // Higher intercept = Higher Cost
    
    // Only push logical positive price points
    if (ad > 0) {
       data.push({ y, ad, as0, as1 });
    }
  }

  // Equilibrium 0: 200-Y = 20+Y => 2Y = 180 => Y=90, P=110
  const eq0 = { y: 90, p: 110 };
  
  // Equilibrium 1: 200-Y = 60+Y => 2Y = 140 => Y=70, P=130
  const eq1 = { y: 70, p: 130 };

  return (
    <div className="h-full w-full min-h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis 
            dataKey="y" 
            type="number" 
            label={{ value: 'Produto Real (Y)', position: 'bottom', offset: 0, fill: '#64748b' }} 
            domain={[0, 140]}
            tick={false}
          />
          <YAxis 
            label={{ value: 'Nível de Preços (P)', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
            domain={[0, 200]}
            tick={false}
          />
          <Tooltip 
            formatter={(value: number) => value.toFixed(0)}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '8px' }}
          />

          {/* Equilibrium 0 */}
          <ReferenceLine x={eq0.y} strokeDasharray="3 3" stroke="#94a3b8" />
          <ReferenceLine x={eq0.y} y={0} label={{ value: "Y0", position: 'bottom', fill: '#475569', fontWeight: 'bold' }} />
          <ReferenceLine y={eq0.p} strokeDasharray="3 3" stroke="#94a3b8" />
          <ReferenceLine y={eq0.p} x={0} label={{ value: "P0", position: 'left', fill: '#475569', fontWeight: 'bold' }} />
          <ReferenceLine x={eq0.y} y={eq0.p} label={{ value: "E0", position: 'top', fill: '#475569', fontWeight: 'bold' }} />

          {/* Equilibrium 1 (Shock) */}
          {showShock && (
             <>
               <ReferenceLine x={eq1.y} strokeDasharray="3 3" stroke="#ef4444" />
               <ReferenceLine x={eq1.y} y={0} label={{ value: "Y1", position: 'bottom', fill: '#ef4444', fontWeight: 'bold' }} />
               
               <ReferenceLine y={eq1.p} strokeDasharray="3 3" stroke="#ef4444" />
               <ReferenceLine y={eq1.p} x={0} label={{ value: "P1", position: 'left', fill: '#ef4444', fontWeight: 'bold' }} />
               <ReferenceLine x={eq1.y} y={eq1.p} label={{ value: "E1 (Stagflation)", position: 'top', fill: '#ef4444', fontWeight: 'bold' }} />
               
               {/* Arrow */}
               <ReferenceLine 
                    segment={[{ x: eq0.y, y: eq0.p }, { x: eq1.y, y: eq1.p }]} 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    markerEnd="url(#arrowhead)"
               />
             </>
          )}

          <Line type="monotone" dataKey="ad" stroke="#3b82f6" strokeWidth={3} name="AD (Demanda)" dot={false} />
          <Line type="monotone" dataKey="as0" stroke="#10b981" strokeWidth={3} name="AS (Inicial)" dot={false} />
          
          {showShock && (
            <Line type="monotone" dataKey="as1" stroke="#ef4444" strokeWidth={3} name="AS' (Choque Custos)" dot={false} />
          )}

          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
            </marker>
          </defs>

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};