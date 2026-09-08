import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="tooltip-time">{label}</p>
      <p className="tooltip-value">{payload[0].value} kWh</p>
      {payload[1] && (
        <p className="tooltip-forecast">
          Forecast: {payload[1].value} kWh
        </p>
      )}
    </div>
  );
};

export default function ConsumptionChart({ data, showForecast = false }) {
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorKwh" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3687f0" stopOpacity={0.22} />
              <stop offset="95%" stopColor="#3687f0" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e6a323" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#e6a323" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e8eef4" />
          <XAxis
            dataKey="time"
            tick={{ fontSize: 10, fill: "#8c9ba9" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#8c9ba9" }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="kwh"
            stroke="#3381ea"
            strokeWidth={2.5}
            fill="url(#colorKwh)"
            dot={false}
            activeDot={{ r: 4, fill: "#3381ea" }}
          />
          {showForecast && (
            <Area
              type="monotone"
              dataKey="forecast"
              stroke="#e6a323"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="url(#colorForecast)"
              dot={false}
              connectNulls={false}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
