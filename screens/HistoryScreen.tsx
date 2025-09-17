
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import TripCard from '../components/TripCard';
import { useTrips } from '../contexts/TripContext';




const weeklyData = [
  { name: 'Mon', distance: 8.7 }, { name: 'Tue', distance: 0 }, { name: 'Wed', distance: 25 }, 
  { name: 'Thu', distance: 2.1 }, { name: 'Fri', distance: 5.2 }, { name: 'Sat', distance: 12.5 }, { name: 'Sun', distance: 0 }
];

const monthlyData = [
  { name: 'Week 1', distance: 22 }, { name: 'Week 2', distance: 45 }, 
  { name: 'Week 3', distance: 53.5 }, { name: 'Week 4', distance: 15 }
];

const HistoryScreen: React.FC = () => {
  const [view, setView] = useState<'weekly' | 'monthly'>('weekly');
    const { trips } = useTrips();

  
  return (
    <div className="p-4 space-y-6 bg-white/80 backdrop-blur-sm  h-full overflow-y-auto">
      <h1 className="text-3xl font-bold text-brand-dark">Travel History</h1>
      
      <div className="bg-brand-light p-4 rounded-xl shadow-md">
        <div className="flex justify-center mb-4">
          <button onClick={() => setView('weekly')} className={`px-4 py-2 rounded-l-lg ${view === 'weekly' ? 'bg-brand-teal text-white' : 'bg-gray-200'}`}>Weekly</button>
          <button onClick={() => setView('monthly')} className={`px-4 py-2 rounded-r-lg ${view === 'monthly' ? 'bg-brand-teal text-white' : 'bg-gray-200'}`}>Monthly</button>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={view === 'weekly' ? weeklyData : monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Distance (km)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="distance" fill="#14B8A6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold text-brand-dark mb-4">Recent Trips</h2>
        <div className="space-y-4">
          {trips.length > 0 ? (
            trips.map(trip => <TripCard key={trip.id} trip={trip} />)
          ) : (
            <div className="text-center py-8 bg-brand-light rounded-xl">
                <p className="text-gray-500">You haven't completed any trips yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryScreen;