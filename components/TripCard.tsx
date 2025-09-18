import React from 'react';
import { Trip, TransportMode } from '../types';
import { CarIcon, BikeIcon, WalkIcon, TrainIcon, BusIcon } from '../assets/icons';

interface TripCardProps {
  trip: Trip;
}

const getModeIcon = (mode: TransportMode) => {
  const props = { className: "w-6 h-6 text-brand-teal" }; // slightly smaller for 300px layout
  switch (mode) {
    case TransportMode.CAR: return <CarIcon {...props} />;
    case TransportMode.BIKE: return <BikeIcon {...props} />;
    case TransportMode.WALK: return <WalkIcon {...props} />;
    case TransportMode.TRAIN: return <TrainIcon {...props} />;
    case TransportMode.BUS: return <BusIcon {...props} />;
    default: return null;
  }
};

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <div className="bg-brand-light p-3 rounded-lg shadow-md flex items-center space-x-2 w-[280px]">
      {/* Transport Icon */}
      <div className="p-2 bg-brand-teal/10 rounded-full flex items-center justify-center">
        {getModeIcon(trip.mode)}
      </div>

      {/* Trip Info */}
      <div className="flex-grow overflow-hidden">
        <p className="font-bold text-sm truncate">
          {trip.origin} → {trip.destination}
        </p>
        <p className="text-xs text-gray-500">{trip.date}</p>
      </div>

      {/* Stats */}
      <div className="text-right min-w-[60px]">
        <p className="font-semibold text-brand-dark text-sm">{trip.distance} km</p>
        <p className="text-xs text-gray-500">{trip.duration} min</p>
      </div>
    </div>
  );
};

export default TripCard;
