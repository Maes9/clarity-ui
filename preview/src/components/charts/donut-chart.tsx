"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { chartColors } from "@/lib/chart-config";

interface DonutChartProps {
  data: { name: string; value: number }[];
  height?: number;
}

export function DonutChartComponent({ data, height = 256 }: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          paddingAngle={2}
          dataKey="value"
          strokeWidth={0}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={chartColors[i % chartColors.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--bg-elevated)",
            border: "1px solid var(--border-color)",
            borderRadius: "6px",
            fontSize: 12,
            color: "var(--fg-primary)",
          }}
          formatter={(value: number, name: string) => [`${value}%`, name]}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
