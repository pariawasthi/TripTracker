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

  // Redirect if no active trip
  useEffect(() => {
    if (!currentTrip) navigate('/');
  }, [currentTrip, navigate]);

  // Timer + Distance simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((t) => t + 1);
      setDistance((d) => d + 0.015);
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
    navigate('/history');
  };
  
  const handlepauseTrip = () => {
    endTrip(distance, elapsedTime);
    
  };


  const handleAddInfo = () => {
    if (tripInfo.trim()) {
      alert(`Information saved: "${tripInfo}"`);
      setTripInfo('');
      setIsInfoBoxOpen(false);
    }
  };

  if (!currentTrip) {
    return (
      <div className="h-full flex items-center justify-center">
        <p>Loading trip details...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col relative max-w-[300px] mx-auto overflow-hidden bg-white shadow-lg rounded-xl">
      {/* Trip Stats */}
      <div className="absolute top-4 left-2 right-2 z-10 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg flex justify-around text-center">
        <div>
          <p className="text-xs text-gray-500">Time Elapsed</p>
          <p className="text-xl font-bold text-brand-dark">{formatTime(elapsedTime)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Distance</p>
          <p className="text-xl font-bold text-brand-dark">{distance.toFixed(2)} km</p>
        </div>
      </div>

      {/* Map Area */}
      <div
        className="flex-grow relative bg-cover bg-center"
        style={{ backgroundImage: `url(${map})` }}
      >
        {/* User Avatar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <span className="absolute -inset-2 block animate-ping rounded-full bg-brand-orange opacity-75"></span>
            <div className="w-8 h-8 bg-brand-orange rounded-full border-4 border-white shadow-lg"></div>
          </div>
        </div>

        {/* Landmarks */}
        <div className="absolute top-1/4 left-1/4 p-2 bg-white rounded-full shadow-md">💊</div>
        <div className="absolute bottom-1/3 right-1/4 p-2 bg-white rounded-full shadow-md">⛽️</div>
        <div className="absolute top-1/2 right-1/4 p-2 bg-white rounded-full shadow-md">🍔</div>
      </div>

      {/* End Trip Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex w-full justify-evenly  px-2">
        <button
          onClick={handleEndTrip}
          className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-full shadow-lg text-base transform hover:scale-105 transition-transform"
        >
          End Trip
        </button>
         <button
          onClick={handlepauseTrip}
          className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-full shadow-lg text-base transform hover:scale-105 transition-transform"
        >
          Pause
        </button>
      </div>

      {/* Add Info Floating Button */}
      <button
        onClick={() => setIsInfoBoxOpen(true)}
        className="absolute bottom-24 right-4 z-20 bg-brand-teal text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform"
        aria-label="Add Information"
      >
        <PlusIcon className="w-6 h-6" />
      </button>

      {/* Info Modal */}
      {isInfoBoxOpen && (
        <div className="absolute inset-0 bg-black/60 z-30 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-brand-light p-5 rounded-xl shadow-2xl w-full max-w-[260px]">
            <h2 className="text-lg font-bold text-brand-dark mb-3">Add Information</h2>
            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange text-sm"
              placeholder="e.g., Heavy traffic, road closed..."
              value={tripInfo}
              onChange={(e) => setTripInfo(e.target.value)}
            ></textarea>
            <div className="flex justify-end items-center mt-3 space-x-2">
              <button
                onClick={() => setIsInfoBoxOpen(false)}
                className="px-3 py-1 rounded-lg text-gray-600 hover:bg-gray-100 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddInfo}
                className="bg-brand-orange text-white font-bold py-2 px-3 rounded-lg shadow-md hover:bg-orange-600 flex items-center gap-1 text-sm"
              >
                <CheckIcon className="w-4 h-4" /> Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripScreen;
