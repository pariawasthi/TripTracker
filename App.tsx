import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import TripScreen from './screens/TripScreen';
import HistoryScreen from './screens/HistoryScreen';
import UserScreen from './screens/UserScreen';
import AdminScreen from './screens/AdminScreen';
import ProfileScreen from './screens/ProfileScreen';
import Navbar from './components/Navbar';
import { TripProvider } from './contexts/TripContext';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeScreen />} />
    <Route path="/trip" element={<TripScreen />} />
    <Route path="/history" element={<HistoryScreen />} />
    <Route path="/user" element={<UserScreen />} />
    <Route path="/admin" element={<AdminScreen />} />
    <Route path="/profile" element={<ProfileScreen />} />
  </Routes>
);

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="
          w-[300px] max-w-md 
          h-[90vh] max-h-[990px] 
          bg-white shadow-2xl 
          border-4 border-black 
          rounded-[40px] 
          flex flex-col relative overflow-hidden">
        
        {/* Top notch bar */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 
          w-1/3 h-6 bg-black rounded-b-xl z-20" 
          aria-hidden="true"
        ></div>

        <TripProvider>
          <HashRouter>
            {/* Scrollable content above navbar */}
            <main className="flex-grow overflow-y-auto pb-16">
              <AppRoutes />
            </main>

            {/* Navbar inside the screen container */}
            <Navbar position="absolute" />
          </HashRouter>
        </TripProvider>
      </div>
    </div>
  );
};

export default App;
