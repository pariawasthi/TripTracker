import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="bg-brand-light p-3 rounded-xl shadow-md text-center w-full">
      <p className="text-gray-500 text-xs font-medium uppercase">{title}</p>
      <p className="text-xl font-bold text-brand-dark mt-1 truncate">{value}</p>
    </div>
  );
};

export default StatCard;
