import React from 'react';
import { Home, ShoppingCart, CreditCard, Bus, Coffee, Plus } from 'lucide-react';

const icons = {
  home: Home,
  shopping: ShoppingCart,
  credit: CreditCard,
  transport: Bus,
  cafe: Coffee,
};

interface CategoryListProps {
  categories: {
    id: string;
    name: string;
    amount: number;
    icon: keyof typeof icons;
    color: string;
  }[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="space-y-4 p-4">
      {categories.map((category) => {
        const Icon = icons[category.icon];
        return (
          <div key={category.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: category.color + '20' }}
              >
                <Icon className="w-5 h-5" style={{ color: category.color }} />
              </div>
              <span className="ml-3 text-gray-800">{category.name}</span>
            </div>
            <span className="font-medium">{category.amount.toLocaleString()} ₽</span>
          </div>
        );
      })}
      <button className="flex items-center text-blue-600 mt-4">
        <Plus className="w-5 h-5 mr-2" />
        Добавить расходы
      </button>
    </div>
  );
}