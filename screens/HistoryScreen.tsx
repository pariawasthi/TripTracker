import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
    <div className="p-3 space-y-4 bg-white/80 backdrop-blur-sm h-full overflow-y-auto text-xs w-full">
      {/* Title */}
      <h1 className="text-lg font-bold text-brand-dark">Travel History</h1>

      {/* Chart */}
      <div className="bg-brand-light p-3 rounded-lg shadow-md w-full overflow-hidden">
        <div className="flex justify-center mb-3">
          <button
            onClick={() => setView('weekly')}
            className={`px-3 py-1 text-xs rounded-l-md ${view === 'weekly' ? 'bg-brand-teal text-white' : 'bg-gray-200'}`}
          >
            Weekly
          </button>
          <button
            onClick={() => setView('monthly')}
            className={`px-3 py-1 text-xs rounded-r-md ${view === 'monthly' ? 'bg-brand-teal text-white' : 'bg-gray-200'}`}
          >
            Monthly
          </button>
        </div>
        <div className="w-full h-44"> {/* fixed height for chart */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={view === 'weekly' ? weeklyData : monthlyData} margin={{ left: 0, right: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" fontSize={10} interval={0} />
              <YAxis
                label={{ value: 'km', angle: -90, position: 'insideLeft', fontSize: 10 }}
                tick={{ fontSize: 10 }}
              />
              <Tooltip />
              <Bar dataKey="distance" fill="#14B8A6" barSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Trips */}
      <div>
        <h2 className="text-base font-semibold text-brand-dark mb-2">Recent Trips</h2>
        <div className="space-y-2 w-full">
          {trips.length > 0 ? (
            trips.map(trip => <TripCard key={trip.id} trip={trip} />)
          ) : (
            <div className="text-center py-4 bg-brand-light rounded-lg text-xs w-full overflow-hidden">
              <p className="text-gray-500">No trips yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryScreen;
