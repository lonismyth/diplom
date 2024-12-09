import React from 'react';
import { Target, Edit2, Trash2 } from 'lucide-react';
import type { FinancialGoal } from '../../types/finance';

interface GoalCardProps {
  goal: FinancialGoal;
  onEdit: (goal: FinancialGoal) => void;
  onDelete: (id: string) => void;
}

export function GoalCard({ goal, onEdit, onDelete }: GoalCardProps) {
  const progress = (goal.currentAmount / goal.targetAmount) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${goal.color}20` }}
          >
            <Target className="w-5 h-5" style={{ color: goal.color }} />
          </div>
          <div className="ml-3">
            <h3 className="font-medium">{goal.name}</h3>
            <p className="text-sm text-gray-500">
              {goal.currentAmount.toLocaleString()} ₽ из {goal.targetAmount.toLocaleString()} ₽
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(goal)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Edit2 className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => onDelete(goal.id)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Trash2 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${progress}%`,
            backgroundColor: goal.color,
          }}
        />
      </div>
      {goal.deadline && (
        <p className="text-sm text-gray-500 mt-2">
          Срок: {new Date(goal.deadline).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}