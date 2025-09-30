import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ConsentScreenProps {
  onAccept: () => void;
}

const ConsentScreen: React.FC<ConsentScreenProps> = ({ onAccept }) => {
  const navigate = useNavigate();

  const handleAccept = () => {
    onAccept();        // ✅ notify parent
    navigate('/');     // ✅ go to home after accept
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white p-6 text-sm space-y-6">
      <h1 className="text-2xl font-bold text-brand-dark text-center">Data Consent</h1>

      <div className="bg-brand-light p-4 rounded-lg shadow-md w-full max-w-md space-y-3">
        <p>
          To provide personalized travel insights, our app collects the following data:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Trip origin and destination</li>
          <li>Travel mode (bus, car, walk, etc.)</li>
          <li>Time of travel</li>
          <li>Companions (if any)</li>
        </ul>
        <p>
          All personal data is stored locally on your device. Before sending any information to government servers, it will be <strong>anonymized</strong>, ensuring your privacy.
        </p>
      </div>

      <button
        onClick={handleAccept}
        className="px-6 py-2 rounded-md text-white font-semibold bg-brand-teal hover:bg-teal-700"
      >
        I Understand & Accept
      </button>
    </div>
  );
};

export default ConsentScreen;
