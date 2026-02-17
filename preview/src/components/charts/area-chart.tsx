"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartColors } from "@/lib/chart-config";

interface AreaChartProps {
  data: Record<string, string | number>[];
  dataKeys: string[];
  xAxisKey?: string;
  height?: number;
  formatY?: (value: number) => string;
}

export function AreaChartComponent({
  data,
  dataKeys,
  xAxisKey = "month",
  height = 256,
  formatY = (v) => `$${(v / 1000).toFixed(0)}k`,
}: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: -12 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
        <XAxis
          dataKey={xAxisKey}
          tick={{ fontSize: 12, fill: "var(--fg-muted)" }}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "var(--fg-muted)" }}
          tickLine={false}
          axisLine={false}
          tickFormatter={formatY}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--bg-elevated)",
            border: "1px solid var(--border-color)",
            borderRadius: "6px",
            fontSize: 12,
            color: "var(--fg-primary)",
          }}
        />
        {dataKeys.map((key, i) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stroke={chartColors[i]}
            fill={chartColors[i]}
            fillOpacity={0.1}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
