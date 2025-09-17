
import React from 'react';
import { Expense } from '../types';

const categoryIcons: Record<string, string> = {
  Food: '🍔',
  Fuel: '⛽️',
  Tickets: '🎟️',
  Other: '🛒'
};

interface ExpenseItemProps {
  expense: Expense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <div className="bg-brand-light p-4 rounded-xl shadow-md flex items-center space-x-4">
      <div className="text-3xl p-3 bg-gray-100 rounded-full">
        {categoryIcons[expense.category]}
      </div>
      <div className="flex-grow">
        <p className="font-bold">{expense.description}</p>
        <p className="text-sm text-gray-500">{expense.category} - {expense.date}</p>
      </div>
      <p className="text-lg font-semibold text-red-600">₹{expense.amount.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseItem;
