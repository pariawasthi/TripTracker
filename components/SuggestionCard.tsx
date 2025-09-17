
import React from 'react';
import { Suggestion } from '../types';

interface SuggestionCardProps {
  suggestion: Suggestion;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ suggestion }) => {
  return (
    <div className="bg-brand-light rounded-xl shadow-md overflow-hidden">
      <img src={suggestion.imageUrl} alt={suggestion.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg text-brand-dark">{suggestion.title}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-2">{suggestion.description}</p>
        <div className="text-right font-semibold text-brand-teal">
          Budget: ₹{suggestion.budget}
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
