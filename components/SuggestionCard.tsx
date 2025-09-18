import React from 'react';
import { Suggestion } from '../types';

interface SuggestionCardProps {
  suggestion: Suggestion;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestion }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden w-full max-w-[300px]">
      <img
        src={suggestion.imageUrl}
        alt={suggestion.title}
        className="w-full h-24 sm:h-28 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-sm sm:text-base text-brand-dark truncate">
          {suggestion.title}
        </h3>
        <p className="text-xs text-gray-600 mt-1 mb-1 truncate">
          {suggestion.description}
        </p>
        <div className="text-right font-semibold text-brand-teal text-sm">
          Budget: ₹{suggestion.budget}
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
