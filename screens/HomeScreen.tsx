import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransportMode } from '../types';
import { CarIcon, BikeIcon, WalkIcon, TrainIcon } from '../assets/icons';
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
    { mode: TransportMode.CAR, icon: <CarIcon className="w-6 h-6" />, label: 'Car' },
    { mode: TransportMode.BIKE, icon: <BikeIcon className="w-6 h-6" />, label: 'Bike' },
    { mode: TransportMode.WALK, icon: <WalkIcon className="w-6 h-6" />, label: 'Walk' },
    { mode: TransportMode.TRAIN, icon: <TrainIcon className="w-6 h-6" />, label: 'Train' },
  ];

  return (
    <div
      className="h-full flex flex-col items-center justify-center p-3 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${travel})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center text-white p-4 rounded-lg bg-black/40 backdrop-blur-sm w-full max-w-xs">
        <h1 className="text-xl font-bold mb-1">Smart Travel</h1>
        <p className="text-xs mb-4">Your companion for seamless journeys.</p>

        {!isFormVisible && (
          <button
            onClick={handleStartTrip}
            className="bg-brand-orange text-white mt-4 font-bold py-2 px-4 rounded-full shadow-md text-sm hover:scale-105 transition-transform duration-300"
          >
            Start New Trip
          </button>
        )}

        {isFormVisible && (
          <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md w-full">
            <h2 className="text-lg font-bold mb-3 text-center">Plan Your Trip</h2>
            <form onSubmit={handleBeginJourney}>
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 text-left">Origin</label>
                <input
                  type="text"
                  value="Shahdol, MP (Auto-detected)"
                  disabled
                  className="mt-1 block w-full px-2 py-1 text-sm bg-gray-100 border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 text-left">Destination</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g., Jabalpur"
                  required
                  className="mt-1 block w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange"
                />
              </div>

              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-700 text-left mb-1">Mode of Transport</label>
                <div className="flex justify-around gap-1">
                  {transportOptions.map((option) => (
                    <button
                      type="button"
                      key={option.mode}
                      onClick={() => setMode(option.mode)}
                      className={`p-2 rounded-md flex flex-col items-center w-14 text-xs transition-all ${
                        mode === option.mode
                          ? 'bg-brand-orange/20 text-brand-orange ring-1 ring-brand-orange'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {option.icon}
                      <span className="mt-1">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 text-left">Companions</label>
                <input
                  type="number"
                  min="0"
                  value={companions}
                  onChange={(e) => setCompanions(parseInt(e.target.value))}
                  className="mt-1 block w-full px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-orange focus:border-brand-orange"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white font-bold py-2 px-3 rounded-md text-sm hover:bg-orange-600 transition-colors"
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
