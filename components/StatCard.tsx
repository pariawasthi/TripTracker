
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-brand-light p-6 rounded-xl shadow-md text-center">
      <p className="text-gray-500 text-sm font-medium uppercase">{title}</p>
      <p className="text-3xl font-bold text-brand-dark mt-1">{value}</p>
    </div>
  );
};

export default StatCard;
