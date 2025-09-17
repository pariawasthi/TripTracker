
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransportMode } from '../types';
import { CarIcon, BikeIcon, WalkIcon, TrainIcon } from '../assets/icons';
import trip from '../assets/back.jpg';
import travel from '../assets/travel.jpeg';

import { useTrips } from '../contexts/TripContext';


const HomeScreen: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [destination, setDestination] = useState('');
  const [mode, setMode] = useState<TransportMode>(TransportMode.CAR);
  const [companions, setCompanions] = useState(0);
    const { startTrip } = useTrips();

  const navigate = useNavigate();

  const handleStartTrip = () => {
    setIsFormVisible(true);
  };

  const handleBeginJourney = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
            startTrip('Shahdol, MP (Auto-detected)', destination, mode);

      navigate('/trip');
    }
  };

  const transportOptions = [
    { mode: TransportMode.CAR, icon: <CarIcon className="w-8 h-8"/>, label: 'Car' },
    { mode: TransportMode.BIKE, icon: <BikeIcon className="w-8 h-8"/>, label: 'Bike' },
    { mode: TransportMode.WALK, icon: <WalkIcon className="w-8 h-8"/>, label: 'Walk' },
    { mode: TransportMode.TRAIN, icon: <TrainIcon className="w-8 h-8"/>, label: 'Train' },
  ];
  
  return (
    <div 
      className="h-screen flex flex-col items-center justify-center p-4 bg-cover bg-center relative " 
      style={{backgroundImage: `url(${travel})`}}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 text-center text-white p-6  rounded-xl bg-black/30 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-2">Smart Travel</h1>
        <p className="text-lg mb-8">Your companion for seamless journeys.</p>
        
        {!isFormVisible && (
          <button
            onClick={handleStartTrip}
            className="bg-brand-orange text-white mt-6 font-bold py-4 px-10 rounded-full shadow-lg text-xl transform hover:scale-105 transition-transform duration-300"
          >
            Start New Trip
          </button>
        )}

        {isFormVisible && (
          <div className="bg-brand-light text-brand-dark p-6 rounded-lg shadow-2xl animate-fade-in w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Plan Your Trip</h2>
            <form onSubmit={handleBeginJourney}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 text-left">Origin</label>
                <input
                  type="text"
                  value="Shahdol, MP (Auto-detected)"
                  disabled
                  className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 text-left">Destination</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g., Jabalpur"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 text-left mb-2">Mode of Transport</label>
                <div className="flex justify-around">
                  {transportOptions.map(option => (
                    <button type="button" key={option.mode} onClick={() => setMode(option.mode)} className={`p-3 rounded-lg flex flex-col items-center w-20 transition-all ${mode === option.mode ? 'bg-brand-orange/20 text-brand-orange ring-2 ring-brand-orange' : 'bg-gray-100 hover:bg-gray-200'}`}>
                      {option.icon}
                      <span className="text-sm mt-1">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 text-left">Companions</label>
                <input
                  type="number"
                  min="0"
                  value={companions}
                  onChange={(e) => setCompanions(parseInt(e.target.value))}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-orange text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-orange-600 transition-colors"
              >
                Begin Journey
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
