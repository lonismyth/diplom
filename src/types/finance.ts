export interface Transaction {
  id: string;
  amount: number;
  category: string;
  date: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  budget?: number;
}

export interface MonthlyReport {
  month: string;
  totalSpent: number;
  categories: {
    [key: string]: number;
  };
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline?: string;
  color: string;
}

export interface Income {
  id: string;
  source: string;
  amount: number;
  frequency: 'monthly' | 'yearly' | 'one-time';
  date: string;
}

export interface Credit {
  id: string;
  name: string;
  totalAmount: number;
  remainingAmount: number;
  monthlyPayment: number;
  interestRate: number;
  endDate: string;
}