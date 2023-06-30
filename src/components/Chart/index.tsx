"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface IChartProps {
  data: any;
}

export const Chart = ({ data }: IChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="linear" dataKey="customer_quantity" stroke="#2382A0" />
      </LineChart>
    </ResponsiveContainer>
  );
};
