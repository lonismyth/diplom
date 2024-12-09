import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthSelectorProps {
  currentMonth: string;
  onMonthChange: (direction: 'prev' | 'next') => void;
}

export function MonthSelector({ currentMonth, onMonthChange }: MonthSelectorProps) {
  return (
    <div className="flex items-center justify-center space-x-4 py-2">
      <button onClick={() => onMonthChange('prev')} className="p-1">
        <ChevronLeft className="w-5 h-5 text-gray-500" />
      </button>
      <span className="text-lg font-medium">{currentMonth}</span>
      <button onClick={() => onMonthChange('next')} className="p-1">
        <ChevronRight className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
}