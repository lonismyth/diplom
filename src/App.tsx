import React, { useState } from 'react';
import { Header } from './components/Header';
import { MonthSelector } from './components/MonthSelector';
import { SpendingChart } from './components/SpendingChart';
import { CategoryList } from './components/CategoryList';
import { GoalCard } from './components/goals/GoalCard';
import { IncomeList } from './components/income/IncomeList';
import { CreditCard } from './components/credits/CreditCard';
import type { FinancialGoal, Income, Credit } from './types/finance';

const mockData = {
  categories: [
    { id: '1', name: 'Платежи за дом', amount: 33217, icon: 'home', color: '#FF5733' },
    { id: '2', name: 'Продукты', amount: 7187, icon: 'shopping', color: '#FFC300' },
    { id: '3', name: 'Платеж по кредиту', amount: 0, icon: 'credit', color: '#808080' },
    { id: '4', name: 'Транспорт', amount: 192, icon: 'transport', color: '#C70039' },
    { id: '5', name: 'Кафе и рестораны', amount: 15032, icon: 'cafe', color: '#FF33FF' },
  ],
  total: 85647,
  goals: [
    {
      id: '1',
      name: 'Новый автомобиль',
      targetAmount: 2000000,
      currentAmount: 500000,
      deadline: '2024-12-31',
      color: '#4CAF50',
    },
  ],
  incomes: [
    {
      id: '1',
      source: 'Зарплата',
      amount: 150000,
      frequency: 'monthly',
      date: '2024-03-01',
    },
  ],
  credits: [
    {
      id: '1',
      name: 'Ипотека',
      totalAmount: 5000000,
      remainingAmount: 4500000,
      monthlyPayment: 45000,
      interestRate: 7.5,
      endDate: '2034-03-01',
    },
  ],
};

function App() {
  const [currentMonth] = useState('Март');
  const [goals, setGoals] = useState<FinancialGoal[]>(mockData.goals);
  const [incomes, setIncomes] = useState<Income[]>(mockData.incomes);
  const [credits, setCredits] = useState<Credit[]>(mockData.credits);

  const handleMonthChange = (direction: 'prev' | 'next') => {
    console.log('Month changed:', direction);
  };

  const handleEditGoal = (goal: FinancialGoal) => {
    console.log('Edit goal:', goal);
  };

  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const handleEditIncome = (income: Income) => {
    console.log('Edit income:', income);
  };

  const handleDeleteIncome = (id: string) => {
    setIncomes(incomes.filter(income => income.id !== id));
  };

  const handleEditCredit = (credit: Credit) => {
    console.log('Edit credit:', credit);
  };

  const handleDeleteCredit = (id: string) => {
    setCredits(credits.filter(credit => credit.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Отчет по категориям" />
      
      <div className="max-w-2xl mx-auto pb-8">
        <MonthSelector
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />

        <div className="bg-white rounded-lg shadow-sm p-6 m-4">
          <SpendingChart
            data={mockData.categories.map(cat => ({
              category: cat.name,
              amount: cat.amount,
              color: cat.color,
            }))}
            total={mockData.total}
          />
          
          <CategoryList categories={mockData.categories} />
        </div>

        <div className="m-4">
          <h2 className="text-xl font-semibold mb-4">Финансовые цели</h2>
          {goals.map(goal => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onEdit={handleEditGoal}
              onDelete={handleDeleteGoal}
            />
          ))}
        </div>

        <div className="m-4">
          <h2 className="text-xl font-semibold mb-4">Доходы</h2>
          <IncomeList
            incomes={incomes}
            onEdit={handleEditIncome}
            onDelete={handleDeleteIncome}
          />
        </div>

        <div className="m-4">
          <h2 className="text-xl font-semibold mb-4">Кредиты</h2>
          {credits.map(credit => (
            <CreditCard
              key={credit.id}
              credit={credit}
              onEdit={handleEditCredit}
              onDelete={handleDeleteCredit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;