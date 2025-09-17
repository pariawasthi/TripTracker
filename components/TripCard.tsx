
import React from 'react';
import { Trip, TransportMode } from '../types';
import { CarIcon, BikeIcon, WalkIcon, TrainIcon, BusIcon } from '../assets/icons';

interface TripCardProps {
  trip: Trip;
}

const getModeIcon = (mode: TransportMode) => {
  const props = { className: "w-8 h-8 text-brand-teal" };
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
    <div className="bg-brand-light p-4 rounded-xl shadow-md flex items-center space-x-4">
      <div className="p-3 bg-brand-teal/10 rounded-full">
        {getModeIcon(trip.mode)}
      </div>
      <div className="flex-grow">
        <p className="font-bold text-lg">{trip.origin} to {trip.destination}</p>
        <p className="text-sm text-gray-500">{trip.date}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-brand-dark">{trip.distance} km</p>
        <p className="text-sm text-gray-500">{trip.duration} min</p>
      </div>
    </div>
  );
};

export default TripCard;
