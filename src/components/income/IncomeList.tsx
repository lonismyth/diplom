import React from 'react';
import { Wallet, Edit2, Trash2 } from 'lucide-react';
import type { Income } from '../../types/finance';

interface IncomeListProps {
  incomes: Income[];
  onEdit: (income: Income) => void;
  onDelete: (id: string) => void;
}

export function IncomeList({ incomes, onEdit, onDelete }: IncomeListProps) {
  return (
    <div className="space-y-4">
      {incomes.map((income) => (
        <div
          key={income.id}
          className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between"
        >
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-green-600" />
            </div>
            <div className="ml-3">
              <h3 className="font-medium">{income.source}</h3>
              <p className="text-sm text-gray-500">
                {income.amount.toLocaleString()} ₽ • {income.frequency}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onEdit(income)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Edit2 className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => onDelete(income.id)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}