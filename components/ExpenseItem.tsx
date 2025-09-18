import React from 'react';
import { Expense } from '../types';

const categoryIcons: Record<string, string> = {
  Food: '🍔',
  Fuel: '⛽️',
  Tickets: '🎟️',
  Other: '🛒',
};

interface ExpenseItemProps {
  expense: Expense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow flex items-center space-x-2 text-sm">
      <div className="text-xl p-2 bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">
        {categoryIcons[expense.category] || '🛒'}
      </div>
      <div className="flex-grow">
        <p className="font-semibold truncate">{expense.description}</p>
        <p className="text-xs text-gray-500 truncate">{expense.category} - {expense.date}</p>
      </div>
      <p className="font-bold text-red-600 text-sm">₹{expense.amount.toFixed(0)}</p>
    </div>
  );
};

export default ExpenseItem;
