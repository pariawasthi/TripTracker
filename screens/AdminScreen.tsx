
import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line, CartesianGrid } from 'recharts';
import StatCard from '../components/StatCard';
import heat from '../assets/heat.jpeg';
import dash from '../assets/dash.jpeg';


const transportData = [
  { name: 'Car', value: 450 },
  { name: 'Bike', value: 300 },
  { name: 'Walk', value: 100 },
  { name: 'Train', value: 150 },
];
const COLORS = ['#F97316', '#14B8A6', '#FBBF24', '#3B82F6'];

const distanceData = [
  { name: 'Jan', avg_dist: 12 }, { name: 'Feb', avg_dist: 15 }, { name: 'Mar', avg_dist: 13 },
  { name: 'Apr', avg_dist: 17 }, { name: 'May', avg_dist: 18 }, { name: 'Jun', avg_dist: 21 },
];

const peakHoursData = [
    { hour: '6am', trips: 80 }, { hour: '7am', trips: 150 }, { hour: '8am', trips: 350 },
    { hour: '9am', trips: 420 }, { hour: '10am', trips: 250 }, { hour: '5pm', trips: 380 },
    { hour: '6pm', trips: 450 }, { hour: '7pm', trips: 320 },
];

const congestionHotspotsData = [
    { id: 1, location: 'Silk Board Junction', trips: 520, level: 'High' },
    { id: 2, location: 'Koramangala 5th Block', trips: 450, level: 'High' },
    { id: 3, location: 'Marathahalli Bridge', trips: 410, level: 'Medium' },
    { id: 4, location: 'Hebbal Flyover', trips: 380, level: 'Medium' },
];

const Dashboard: React.FC = () => (
  <div className="p-4 space-y-6  h-full overflow-y-auto" style={{backgroundImage: `url(${dash})`}}>
    <h1 className="text-3xl font-bold text-white ">NATPAC Dashboard</h1>
    <div className=" grid grid-cols-1 md:grid-cols-1 gap-4">
      <StatCard title="Total Trips Today" value="1,245" />
      <StatCard title="Total Distance" value="18,675 km" />
      <StatCard title="Peak Hour Trips" value="450" />
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 " >
       <div className="bg-brand-light  p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">User Density & Trip Heatmap</h2>
        <div className="relative w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
          <img src={heat}className="w-full h-full object-cover opacity-50"  alt="Map"/>
          <span className="absolute z-10 font-semibold">[Map Visualization]</span>
          {/* Simulated Hotspots */}
          <div className="absolute top-[25%] left-[30%] w-5 h-5 bg-red-500/50 rounded-full animate-pulse"></div>
          <div className="absolute top-[30%] left-[33%] w-8 h-8 bg-red-500/70 rounded-full animate-pulse"></div>
          <div className="absolute top-[50%] left-[60%] w-6 h-6 bg-red-500/60 rounded-full animate-pulse"></div>
          <div className="absolute top-[60%] left-[55%] w-4 h-4 bg-red-500/40 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="bg-brand-light p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-center">Mode of Transport</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={transportData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
              {transportData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
       <div className="bg-brand-light p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-center">Average Trip Distance (km)</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={distanceData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="avg_dist" fill="#14B8A6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
       <div className="bg-brand-light p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-center">Peak Travel Times</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={peakHoursData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="trips" stroke="#F97316" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="bg-brand-light p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Congestion Hotspots</h2>
      <div className="space-y-3">
        {congestionHotspotsData.map(spot => (
            <div key={spot.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <div>
                    <p className="font-bold">{spot.location}</p>
                    <p className="text-sm text-gray-500">{spot.trips} trips recorded</p>
                </div>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${spot.level === 'High' ? 'bg-red-200 text-red-800' : 'bg-yellow-200 text-yellow-800'}`}>
                    {spot.level}
                </span>
            </div>
        ))}
      </div>
    </div>

    <div className="flex justify-end space-x-4">
      <button className="bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm hover:bg-green-700">Export CSV</button>
      <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-sm hover:bg-blue-700">Export XLS</button>
    </div>
  </div>
);

const AdminScreen: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="h-full flex items-center justify-center " style={{backgroundImage: `url(${dash})`}}  >
        <div className="bg-white/50 backdrop-blur-sm  p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">NATPAC Admin Login</h2>
          <form onSubmit={() => setIsLoggedIn(true)}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Admin ID</label>
              <input type="text" defaultValue="admin@natpac.gov" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" defaultValue="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
            </div>
            <button type="submit" className="w-full bg-brand-orange text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <Dashboard />;
};

export default AdminScreen;