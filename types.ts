
export enum TransportMode {
  CAR = 'car',
  BIKE = 'bike',
  WALK = 'walk',
  TRAIN = 'train',
  BUS = 'bus'
}

export interface Trip {
  id: string;
  date: string;
  distance: number; // in km
  duration: number; // in minutes
  mode: TransportMode;
  origin: string;
  destination: string;
}

export interface Expense {
  id: string;
  category: 'Food' | 'Fuel' | 'Tickets' | 'Other';
  amount: number;
  description: string;
  date: string;
}

export interface Suggestion {
  id: string;
  title: string;
  description: string;
  budget: number;
  imageUrl: string;
}
