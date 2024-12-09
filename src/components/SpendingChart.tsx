import React from 'react';

interface SpendingChartProps {
  data: {
    category: string;
    amount: number;
    color: string;
  }[];
  total: number;
}

export function SpendingChart({ data, total }: SpendingChartProps) {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <span className="text-2xl font-bold">{total.toLocaleString()} ₽</span>
        <span className="text-gray-500">Всего</span>
      </div>
      <svg viewBox="0 0 100 100" className="transform -rotate-90">
        {data.map((item, index) => {
          const previousTotal = data
            .slice(0, index)
            .reduce((sum, curr) => sum + curr.amount, 0);
          const percentage = (item.amount / total) * 100;
          const offset = (previousTotal / total) * 100;
          
          return (
            <circle
              key={item.category}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={item.color}
              strokeWidth="20"
              strokeDasharray={`${percentage} ${100 - percentage}`}
              strokeDashoffset={-offset}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>
    </div>
  );
}