import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import TripScreen from './screens/TripScreen';
import HistoryScreen from './screens/HistoryScreen';
import UserScreen from './screens/UserScreen';
import AdminScreen from './screens/AdminScreen';
import ProfileScreen from './screens/ProfileScreen';
import ConsentScreen from './screens/ConsentScreen';
import Navbar from './components/Navbar';
import { TripProvider } from './contexts/TripContext';

interface AppRoutesProps {
  consentAccepted: boolean;
  onAccept: () => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ consentAccepted, onAccept }) => {
  return (
    <Routes>
      {/* Consent route always accessible */}
      <Route path="/consent" element={<ConsentScreen onAccept={onAccept} />} />

      {/* If consent not accepted, redirect everything else to /consent */}
      {!consentAccepted && <Route path="*" element={<Navigate to="/consent" replace />} />}

      {/* Main app routes */}
      {consentAccepted && (
        <>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/trip" element={<TripScreen />} />
          <Route path="/history" element={<HistoryScreen />} />
          <Route path="/user" element={<UserScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </>
      )}
    </Routes>
  );
};

const App: React.FC = () => {
  const [consentAccepted, setConsentAccepted] = useState(false);

  const handleConsentAccept = () => {
    setConsentAccepted(true);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div
        className="
          w-[300px] max-w-md 
          h-[90vh] max-h-[990px] 
          bg-white shadow-2xl 
          border-4 border-black 
          rounded-[40px] 
          flex flex-col relative overflow-hidden"
      >
        {/* Top notch bar */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 
          w-1/3 h-6 bg-black rounded-b-xl z-20"
          aria-hidden="true"
        ></div>

        <TripProvider>
          <HashRouter>
            <main className="flex-grow overflow-y-auto pb-16">
              <AppRoutes
                consentAccepted={consentAccepted}
                onAccept={handleConsentAccept}
              />
            </main>

            {consentAccepted && <Navbar position="absolute" />}
          </HashRouter>
        </TripProvider>
      </div>
    </div>
  );
};

export default App;
