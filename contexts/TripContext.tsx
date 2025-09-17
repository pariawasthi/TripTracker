import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Trip, TransportMode } from '../types';

// Initial mock trips to populate the history for demonstration
const initialMockTrips: Trip[] = [
  { id: '1', date: '2024-07-21', distance: 12.5, duration: 45, mode: TransportMode.CAR, origin: 'Home', destination: 'Office' },
  { id: '2', date: '2024-07-20', distance: 5.2, duration: 25, mode: TransportMode.BIKE, origin: 'Office', destination: 'Gym' },
];

interface CurrentTripData {
    origin: string;
    destination: string;
    mode: TransportMode;
}

interface TripContextType {
  trips: Trip[];
  currentTrip: CurrentTripData | null;
  startTrip: (origin: string, destination: string, mode: TransportMode) => void;
  endTrip: (distance: number, duration: number) => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const TripProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [trips, setTrips] = useState<Trip[]>(initialMockTrips);
  const [currentTrip, setCurrentTrip] = useState<CurrentTripData | null>(null);

  const startTrip = (origin: string, destination: string, mode: TransportMode) => {
    setCurrentTrip({
      origin,
      destination,
      mode,
    });
  };

  const endTrip = (distance: number, duration: number) => {
    if (!currentTrip) return;

    const newTrip: Trip = {
      id: new Date().toISOString(), // Unique ID based on timestamp
      date: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD
      distance: parseFloat(distance.toFixed(2)),
      duration: Math.round(duration / 60), // Convert seconds to minutes for storage
      mode: currentTrip.mode,
      origin: currentTrip.origin,
      destination: currentTrip.destination,
    };
    
    // Add the new trip to the beginning of the history list
    setTrips(prevTrips => [newTrip, ...prevTrips]);
    setCurrentTrip(null); // Clear the current trip
  };

  return (
    <TripContext.Provider value={{ trips, currentTrip, startTrip, endTrip }}>
      {children}
    </TripContext.Provider>
  );
};

export const useTrips = () => {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTrips must be used within a TripProvider');
  }
  return context;
};
