
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, CheckIcon } from '../assets/icons';
import { useTrips } from '../contexts/TripContext';
import map from '../assets/map.jpg';


const TripScreen: React.FC = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [isInfoBoxOpen, setIsInfoBoxOpen] = useState(false);
  const [tripInfo, setTripInfo] = useState('');
   
    const { currentTrip, endTrip } = useTrips();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!currentTrip) {
      // If the user lands here without an active trip, redirect to home.
      navigate('/');
    }
  }, [currentTrip, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
      setDistance(prevDist => prevDist + 0.015); // Simulate distance increase
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };
  
  const handleEndTrip = () => {
        endTrip(distance, elapsedTime);

    // In a real app, you would save the trip data here
    navigate('/history');
  }

  const handleAddInfo = () => {
    if (tripInfo.trim()) {
      alert(`Information saved: "${tripInfo}"`);
      setTripInfo('');
      setIsInfoBoxOpen(false);
    }
  }
if (!currentTrip) {
    // Render a loading state or null while redirecting
    return (
      <div className="h-full flex items-center justify-center">
        <p>Loading trip details...</p>
      </div>
    );
  }


  return (
    <div className="h-full flex flex-col relative">
      <div className="absolute top-4 left-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg flex justify-around text-center">
        <div>
          <p className="text-sm text-gray-500">Time Elapsed</p>
          <p className="text-2xl font-bold text-brand-dark">{formatTime(elapsedTime)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Distance Covered</p>
          <p className="text-2xl font-bold text-brand-dark">{distance.toFixed(2)} km</p>
        </div>
      </div>

      <div className="flex-grow bg-gray-300 relative bg-cover bg-center" style={{backgroundImage: `url(${map})`}}>
        {/* User Avatar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
             <span className="absolute -inset-2 block animate-ping rounded-full bg-brand-orange opacity-75"></span>
             <div className="w-8 h-8 bg-brand-orange rounded-full border-4 border-white shadow-lg"></div>
          </div>
        </div>

        {/* Nearby Stores */}
        <div className="absolute top-1/4 left-1/4 p-2 bg-white rounded-full shadow-md">💊</div>
        <div className="absolute bottom-1/3 right-1/4 p-2 bg-white rounded-full shadow-md">⛽️</div>
        <div className="absolute top-1/2 right-1/4 p-2 bg-white rounded-full shadow-md">🍔</div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 w-full px-4">
        <button 
          onClick={handleEndTrip}
          className="w-full max-w-sm mx-auto bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg transform hover:scale-105 transition-transform"
        >
          End Trip
        </button>
      </div>

       {/* Add Info FAB */}
      <button 
        onClick={() => setIsInfoBoxOpen(true)}
        className="absolute bottom-28 right-4 z-20 bg-brand-teal text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
        aria-label="Add Information"
      >
        <PlusIcon className="w-8 h-8"/>
      </button>

      {/* Add Info Modal */}
      {isInfoBoxOpen && (
        <div className="absolute inset-0 bg-black/60 z-30 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-brand-light p-6 rounded-xl shadow-2xl w-full max-w-sm">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Add Information</h2>
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
              placeholder="e.g., Heavy traffic, road closed, etc."
              value={tripInfo}
              onChange={(e) => setTripInfo(e.target.value)}
            ></textarea>
            <div className="flex justify-end items-center mt-4 space-x-2">
               <button
                 onClick={() => setIsInfoBoxOpen(false)}
                 className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
               >
                 Cancel
               </button>
               <button
                onClick={handleAddInfo}
                className="bg-brand-orange text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-orange-600 flex items-center gap-2"
              >
                <CheckIcon className="w-5 h-5"/> Agree & Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripScreen;