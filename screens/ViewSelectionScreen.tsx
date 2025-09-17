
import React from 'react';

interface ViewSelectionScreenProps {
  onSelectView: (view: 'mobile' | 'webview') => void;
}

const ViewSelectionScreen: React.FC<ViewSelectionScreenProps> = ({ onSelectView }) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-brand-beige p-4 text-brand-dark">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-3">Smart Travel App</h1>
        <p className="text-xl text-gray-600">Choose your viewing experience</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <button
          onClick={() => onSelectView('mobile')}
          className="group bg-brand-light p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-center w-64"
          aria-label="Select Mobile View"
        >
          <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform" aria-hidden="true">📱</div>
          <h2 className="text-3xl font-bold">Mobile View</h2>
          <p className="text-gray-500 mt-1">For a phone-sized layout</p>
        </button>
        <button
          onClick={() => onSelectView('webview')}
          className="group bg-brand-light p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-center w-64"
          aria-label="Select Web View"
        >
          <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform" aria-hidden="true">💻</div>
          <h2 className="text-3xl font-bold">Web View</h2>
          <p className="text-gray-500 mt-1">For a full-screen layout</p>
        </button>
      </div>
    </div>
  );
};

export default ViewSelectionScreen;
