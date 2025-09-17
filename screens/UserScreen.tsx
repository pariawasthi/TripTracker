
import React, { useState } from 'react';
import { Expense, Suggestion } from '../types';
import SuggestionCard from '../components/SuggestionCard';
import ExpenseItem from '../components/ExpenseItem';
import { TrophyIcon, LeafIcon, MoonIcon, MapPinIcon, CarIcon } from '../assets/icons';
import travel from '../assets/travel.jpeg';

const mockExpenses: Expense[] = [
  { id: '1', category: 'Fuel', amount: 1500, description: 'Petrol for car', date: '2024-07-21' },
  { id: '2', category: 'Food', amount: 350, description: 'Lunch on the go', date: '2024-07-21' },
  { id: '3', category: 'Tickets', amount: 120, description: 'Metro ticket', date: '2024-07-18' },
  { id: '4', category: 'Food', amount: 800, description: 'Dinner with family', date: '2024-07-15' },
];

const mockSuggestions: Suggestion[] = [
  { id: '1', title: 'Weekend Getaway to Nandi Hills', description: 'Enjoy a scenic sunrise and pleasant weather.', budget: 2000, imageUrl: 'https://picsum.photos/seed/nandi/400/300' },
  { id: '2', title: 'Day Trip to Shivanasamudra Falls', description: 'Witness the majestic waterfalls.', budget: 2500, imageUrl: 'https://picsum.photos/seed/falls/400/300' },
  { id: '3', title: 'Explore Mysore Palace', description: 'A historical journey into royalty.', budget: 1800, imageUrl: 'https://picsum.photos/seed/mysore/400/300' },
];

const mockBadges = [
  { id: '1', title: 'Eco-Warrior', description: '10 eco-friendly trips.', unlocked: true, icon: <LeafIcon className="w-10 h-10 text-green-500" /> },
  { id: '2', title: 'Night Rider', description: '5 trips after 10 PM.', unlocked: true, icon: <MoonIcon className="w-10 h-10 text-indigo-500" /> },
  { id: '3', title: 'Explorer', description: 'Visited 5 new places.', unlocked: false, icon: <MapPinIcon className="w-10 h-10 text-blue-500" /> },
  { id: '4', title: 'Road Tripper', description: 'Trip over 100km.', unlocked: false, icon: <CarIcon className="w-10 h-10 text-gray-500" /> },
];

const UserScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'expenses' | 'suggestions' | 'rewards'>('expenses');

  return (
    <div className="p-4 space-y-6 h-full overflow-y-auto" style={{backgroundImage: `url(${travel})`}}>
      <h1 className="text-3xl font-bold text-brand-dark">User Dashboard</h1>
      
      <div className="flex border-b-2 border-gray-200">
        <button onClick={() => setActiveTab('expenses')} className={`flex-1 py-2 text-lg font-semibold ${activeTab === 'expenses' ? 'text-brand-orange border-b-4 border-brand-orange' : 'text-black'}`}>
          Expenses
        </button>
        <button onClick={() => setActiveTab('suggestions')} className={`flex-1 py-2 text-lg font-semibold ${activeTab === 'suggestions' ? 'text-brand-orange border-b-4 border-brand-orange' : 'text-black'}`}>
          Suggestions
        </button>
         <button onClick={() => setActiveTab('rewards')} className={`flex-1 py-2 text-lg font-semibold flex items-center justify-center gap-2 ${activeTab === 'rewards' ? 'text-brand-orange border-b-4 border-brand-orange' : 'text-black'}`}>
          <TrophyIcon /> Rewards
        </button>
      </div>

      {activeTab === 'expenses' && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-brand-light p-4 rounded-xl shadow-md bg-white/20  backdrop-blur-sm ">
            <h3 className="font-semibold text-lg mb-2">AI Insights</h3>
            <p className="text-sm text-gray-600">You've spent ₹2770 this week. Your highest spending is on Fuel. Consider using public transport for short trips to save money.</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-brand-dark">Recent Expenses</h2>
            <button className="bg-brand-teal text-white px-4 py-2 rounded-lg shadow-sm hover:bg-teal-600">+</button>
          </div>
          <div className="space-y-3 ">
            {mockExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense} />)}
          </div>
        </div>
      )}

      {activeTab === 'suggestions' && (
        <div className="space-y-4 animate-fade-in ">
           <h2 className="text-2xl font-semibold text-brand-dark">Recommended for You</h2>
           <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {mockSuggestions.map(suggestion => <SuggestionCard key={suggestion.id} suggestion={suggestion} />)}
           </div>
        </div>
      )}

      {activeTab === 'rewards' && (
        <div className="space-y-6 animate-fade-in">
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">Your Progress</h2>
            <div className="bg-brand-light p-6 rounded-xl shadow-md flex items-center justify-between text-green-600">
              <div>
                <p className="text-lg font-medium">Eco Points</p>
                <p className="text-4xl font-bold">1,250</p>
              </div>
              <LeafIcon className="w-16 h-16 opacity-20" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">My Badges</h2>
            <div className="grid grid-cols-2 gap-4">
              {mockBadges.map(badge => (
                <div key={badge.id} className={`bg-brand-light p-4 rounded-xl shadow-md text-center ${!badge.unlocked ? 'opacity-50' : ''}`}>
                  <div className="flex justify-center mb-2">{badge.icon}</div>
                  <h3 className="font-bold text-brand-dark">{badge.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserScreen;