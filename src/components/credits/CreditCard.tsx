import React from 'react';
import { CreditCard as CreditCardIcon, Edit2, Trash2 } from 'lucide-react';
import type { Credit } from '../../types/finance';

interface CreditCardProps {
  credit: Credit;
  onEdit: (credit: Credit) => void;
  onDelete: (id: string) => void;
}

export function CreditCard({ credit, onEdit, onDelete }: CreditCardProps) {
  const progress = ((credit.totalAmount - credit.remainingAmount) / credit.totalAmount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <CreditCardIcon className="w-5 h-5 text-purple-600" />
          </div>
          <div className="ml-3">
            <h3 className="font-medium">{credit.name}</h3>
            <p className="text-sm text-gray-500">
              Остаток: {credit.remainingAmount.toLocaleString()} ₽
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(credit)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => onDelete(credit.id)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Trash2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full">
        <div
          className="h-full bg-purple-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Ежемесячный платеж</p>
          <p className="font-medium">{credit.monthlyPayment.toLocaleString()} ₽</p>
        </div>
        <div>
          <p className="text-gray-500">Процентная ставка</p>
          <p className="font-medium">{credit.interestRate}%</p>
        </div>
      </div>
    </div>
  );
}