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

interface ADASChartProps {
  inflationScenario: boolean;
}

export const ADASChart: React.FC<ADASChartProps> = ({ inflationScenario }) => {
  // Generate curve data with smoother transitions
  const data = [];
  const fullCapacity = 85;

  for (let x = 0; x <= 100; x += 2) {
    // AS Curve Logic (Synthesis)
    // 1. Keynesian Range (Flat): 0 to 40
    // 2. Intermediate Range (Sloping): 40 to 80
    // 3. Classical Range (Vertical): Approaching 85
    
    let asY = 0;
    if (x < 40) {
      asY = 20 + (x * 0.1); // Very flat
    } else if (x < 75) {
      // Exponential curve up
      asY = 24 + Math.pow((x - 40) / 4, 1.8); 
    } else {
      // Steep ascent to simulate vertical line at 85
      // We limit x visual rendering effectively by spiking Y
      asY = 80 + Math.pow((x - 75), 2.5);
    }
    
    // Cap AS visually at top of chart
    if (asY > 140) asY = 140;

    // AD Curves (Hyperbolic: P * Y = Constant)
    // AD1: Lower demand
    const ad1Y = (3500 / (x + 20)) - 10;
    
    // AD2: Higher demand (Shift Right)
    // Only rendered if scenario is active
    const ad2Y = inflationScenario ? (5500 / (x + 20)) - 5 : null;

    data.push({
      x: x,
      as: asY,
      ad1: ad1Y > 0 ? ad1Y : null,
      ad2: ad2Y > 0 ? ad2Y : null,
    });
  }

  const renderLabel = (props: any, text: string, color: string, dx: number = 0, dy: number = 0) => {
    const { x, y, index } = props;
    if (index === 0) { // Start of line
       return <text x={x} y={y} dx={dx} dy={dy} fill={color} fontSize={14} fontWeight="bold">{text}</text>;
    }
    return null;
  };

  return (
    <div className="h-full w-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis 
            dataKey="x" 
            type="number" 
            domain={[0, 100]} 
            label={{ value: 'Produto Real (Y)', position: 'bottom', offset: 0, fill: '#64748b' }} 
            tick={false}
            axisLine={{ stroke: '#cbd5e1' }}
          />
          <YAxis 
            domain={[0, 140]} 
            label={{ value: 'Nível de Preços (P)', angle: -90, position: 'insideLeft', fill: '#64748b' }} 
            tick={false}
            axisLine={{ stroke: '#cbd5e1' }}
          />
          <Tooltip 
            formatter={(value: number) => value.toFixed(0)}
            labelFormatter={() => ''}
            contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          
          {/* Full Capacity Vertical Line Indicator */}
          <ReferenceLine 
            x={fullCapacity} 
            stroke="#ef4444" 
            strokeDasharray="4 4" 
            strokeWidth={1.5}
            label={{ 
              value: "Y* (Pleno Emprego)", 
              position: 'insideTopLeft', 
              fill: '#ef4444', 
              fontSize: 12,
              fontWeight: 'bold',
              className: 'bg-white'
            }} 
          />

          {/* AS Curve */}
          <Line 
            type="monotone" 
            dataKey="as" 
            stroke="#10b981" 
            strokeWidth={4} 
            name="AS (Oferta Agregada)" 
            dot={false} 
            animationDuration={1000}
          />
          {/* AS Label manually placed at end of curve roughly */}
          <ReferenceLine x={82} y={130} label={{ value: "AS", fill: "#10b981", fontWeight: "bold" }} stroke="none" />
          
          {/* AD Curve 1 */}
          <Line 
            type="monotone" 
            dataKey="ad1" 
            stroke="#3b82f6" 
            strokeWidth={3} 
            name="AD (Demanda Inicial)" 
            dot={false} 
            label={(props) => renderLabel(props, "AD", "#3b82f6", 10, -10)}
          />

          {/* AD Curve 2 (Shift) */}
          {inflationScenario && (
            <>
                <Line 
                  type="monotone" 
                  dataKey="ad2" 
                  stroke="#ef4444" 
                  strokeWidth={3} 
                  strokeDasharray="6 6" 
                  name="AD' (Expansão)" 
                  dot={false} 
                  animationDuration={800}
                  label={(props) => renderLabel(props, "AD'", "#ef4444", 10, -10)}
                />
                
                {/* Arrow indicating Inflation Gap */}
                {/* Visual approximation of the Price jump at Y* */}
                <ReferenceLine 
                    segment={[{ x: 82, y: 75 }, { x: 82, y: 110 }]} 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    markerEnd="url(#arrowhead)"
                />
            </>
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