'use client'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

interface Props {
    data: { date: string; count: number }[];
}

export default function CommitChart({ data }: Props) {
    return (
        <div className="w-full h-80">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="date" tickFormatter={(d) => d.slice(5)} />
                    <YAxis />
                    <Tooltip labelFormatter={(l) => l} />
                    <Line
                        type="monotone"
                        dataKey="count"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
