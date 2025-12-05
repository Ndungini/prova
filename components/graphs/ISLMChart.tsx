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

interface ISLMChartProps {
  showShift: boolean;
}

export const ISLMChart: React.FC<ISLMChartProps> = ({ showShift }) => {
  const data = [];
  
  // Foreign Economy (USA)
  // Recessionary effect: IS shifts Left
  
  for (let x = 0; x <= 100; x += 5) {
    // LM* (Stable): Upward sloping
    const lm = 20 + 0.8 * x;

    // ISXM* (Original): Downward sloping
    const isxm = 100 - 0.5 * x;
    
    // ISXM*1 (Shifted Left/Down due to lower NX):
    const isxm1 = showShift ? 80 - 0.5 * x : null;

    data.push({ x, lm, isxm, isxm1 });
  }

  const renderLabel = (props: any, text: string, color: string, dx: number = 0, dy: number = 0) => {
    const { x, y, index } = props;
    if (index === 0 || index === 20) { 
      return <text x={x} y={y} dx={dx} dy={dy} fill={color} fontSize={14} fontWeight="bold">{text}</text>;
    }
    return null;
  };

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          
          <XAxis 
            dataKey="x" 
            type="number" 
            tick={false}
            domain={[0, 100]}
            label={{ value: 'Produto (y*)', position: 'bottom', offset: 0, fill: '#64748b' }} 
          />
          <YAxis 
            domain={[0, 120]} 
            tick={false}
            label={{ value: 'Taxa de Juros (i*)', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
          />
          <Tooltip 
             contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #e2e8f0' }}
             formatter={(value: number) => value.toFixed(1)}
             labelFormatter={() => ''}
          />

          {/* E*0: Intersection of ISXM* (100-0.5x) and LM* (20+0.8x) => 1.3x = 80 => x ≈ 61.5 */}
          <ReferenceLine x={61.5} strokeDasharray="3 3" stroke="#94a3b8" />
          <ReferenceLine x={61.5} y={0} label={{ value: "y*0", position: 'bottom', fill: '#64748b', fontWeight: 'bold' }} />
          <ReferenceLine y={69.2} strokeDasharray="3 3" stroke="#94a3b8" />
          <ReferenceLine y={69.2} x={0} label={{ value: "i*0", position: 'left', fill: '#64748b', fontWeight: 'bold' }} />

          {showShift && (
             <>
                {/* E*1: Intersection of ISXM*1 (80-0.5x) and LM* (20+0.8x) => 1.3x = 60 => x ≈ 46.1 */}
                <ReferenceLine x={46.1} strokeDasharray="3 3" stroke="#ef4444" />
                <ReferenceLine x={46.1} y={0} label={{ value: "y*1", position: 'bottom', fill: '#ef4444', fontWeight: 'bold', fontSize: 14 }} />
                
                <ReferenceLine y={56.9} strokeDasharray="3 3" stroke="#ef4444" />
                <ReferenceLine y={56.9} x={0} label={{ value: "i*1", position: 'left', fill: '#ef4444', fontWeight: 'bold' }} />
             </>
          )}

          {/* Curves */}
          <Line 
            type="linear" 
            dataKey="lm" 
            stroke="#64748b" 
            strokeWidth={2} 
            dot={false}
            name="LM*"
            label={(props) => {
               if (props.index === 20) return renderLabel(props, "LM*", "#64748b", -10, -10);
               return null;
            }}
          />

          <Line 
            type="linear" 
            dataKey="isxm" 
            stroke="#64748b" 
            strokeWidth={2} 
            dot={false} 
            name="ISXM*"
            label={(props) => {
               if (props.index === 0) return renderLabel(props, "ISXM*", "#64748b", 10, -5);
               return null;
            }}
          />
          
          {showShift && (
            <Line 
              type="linear" 
              dataKey="isxm1" 
              stroke="#000000" 
              strokeWidth={3} 
              dot={false} 
              name="ISXM*1"
              label={(props) => {
                 if (props.index === 0) return renderLabel(props, "ISXM*1", "#000000", 10, 15);
                 return null;
              }}
            />
          )}

        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};