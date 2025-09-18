import React, { useState } from 'react';
import { Expense, Suggestion } from '../types';
import SuggestionCard from '../components/SuggestionCard';
import ExpenseItem from '../components/ExpenseItem';
import { TrophyIcon, LeafIcon } from '../assets/icons';
import travel from '../assets/travel.jpeg';

const mockExpenses: Expense[] = [
  { id: '1', category: 'Fuel', amount: 1500, description: 'Petrol for car', date: '2024-07-21' },
  { id: '2', category: 'Food', amount: 350, description: 'Lunch on the go', date: '2024-07-21' },
  { id: '3', category: 'Tickets', amount: 120, description: 'Metro ticket', date: '2024-07-18' },
  { id: '4', category: 'Food', amount: 800, description: 'Dinner with family', date: '2024-07-15' },
];

const mockSuggestions: Suggestion[] = [
  { id: '1', title: 'Weekend Getaway', description: 'Enjoy a scenic sunrise.', budget: 2000, imageUrl: 'https://picsum.photos/seed/nandi/400/300' },
  { id: '2', title: 'Day Trip to Falls', description: 'Witness majestic waterfalls.', budget: 2500, imageUrl: 'https://picsum.photos/seed/falls/400/300' },
];

const mockBadges = [
  { id: '1', title: 'Eco-Warrior', description: '10 eco-friendly trips.', unlocked: true, icon: <LeafIcon className="w-8 h-8 text-green-500" /> },
  { id: '2', title: 'Night Rider', description: '5 trips after 10 PM.', unlocked: true, icon: <TrophyIcon className="w-8 h-8 text-indigo-500" /> },
];

const UserScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'expenses' | 'suggestions' | 'rewards'>('expenses');

  return (
    <div
      className="h-full w-full max-w-[300px] mx-auto p-3 space-y-4 overflow-y-auto bg-white/70 backdrop-blur-sm rounded-xl overflow-y-auto"
      style={{ backgroundImage: `url(${travel})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1 className="text-xl font-bold text-brand-dark text-center">User Dashboard</h1>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 text-xs">
        <button
          onClick={() => setActiveTab('expenses')}
          className={`flex-1 py-1 font-semibold ${activeTab === 'expenses' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-600'}`}
        >
          Expenses
        </button>
        <button
          onClick={() => setActiveTab('suggestions')}
          className={`flex-1 py-1 font-semibold ${activeTab === 'suggestions' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-600'}`}
        >
          Suggestions
        </button>
        <button
          onClick={() => setActiveTab('rewards')}
          className={`flex-1 py-1 font-semibold ${activeTab === 'rewards' ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-600'}`}
        >
          Rewards
        </button>
      </div>

      {/* Content */}
      <div className="space-y-2">
        {activeTab === 'expenses' && (
          <div className="space-y-2 animate-fade-in overflow-y-auto max-h-[500px]">
            <div className="bg-brand-light p-2 rounded-lg shadow-md text-xs">
              <p className="font-semibold">AI Insights</p>
              <p className="text-gray-600 text-[10px]">You've spent ₹2770 this week. Highest spending is Fuel. Consider public transport for short trips.</p>
            </div>
            <div className="space-y-1">
              {mockExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
            </div>
          </div>
        )}

        {activeTab === 'suggestions' && (
          <div className="space-y-2 animate-fade-in overflow-y-auto max-h-[500px]">
            {mockSuggestions.map(suggestion => (
              <SuggestionCard key={suggestion.id} suggestion={suggestion} />
            ))}
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="space-y-2 animate-fade-in overflow-y-auto max-h-[500px]">
            <div className="flex justify-between items-center bg-brand-light p-3 rounded-lg shadow-md text-sm">
              <div>
                <p className="font-medium">Eco Points</p>
                <p className="font-bold text-lg">1,250</p>
              </div>
              <LeafIcon className="w-10 h-10 opacity-20" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {mockBadges.map(badge => (
                <div key={badge.id} className={`bg-brand-light p-2 rounded-lg shadow-md text-center ${!badge.unlocked ? 'opacity-50' : ''}`}>
                  <div className="flex justify-center mb-1">{badge.icon}</div>
                  <p className="font-bold text-xs">{badge.title}</p>
                  <p className="text-[9px] text-gray-500">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserScreen;
