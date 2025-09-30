import React from 'react';
import dash from '../assets/dash.jpeg';

const ProfileScreen: React.FC = () => {
  
  const handleSOS = () => {
    alert('Emergency SOS Activated!\nLocation: 12.9716° N, 77.5946° E (shahdol)\nAuthorities have been notified.');
  };
  
  const handleAnimalHelp = () => {
    alert('Live Location shared by userID 1234!\nLocation: 12.9716° N, 77.5946° E (shahdol)\n try to contact them.');
  }

  const handleDeleteData = () => {
    if (window.confirm('Are you sure you want to delete all your travel data? This action cannot be undone.')) {
        alert('All your data has been permanently deleted.');
    }
  }

  return (
    <div 
      className="p-3 space-y-4 h-full overflow-y-auto" 
      style={{backgroundImage: `url(${dash})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      {/* User Avatar */}
      <div className="flex flex-col items-center space-y-2">
        <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-md">
          U
        </div>
        <h1 className="text-xl text-white font-bold">User#1243</h1>
        <p className="text-gray-300 text-sm">Anonymous User</p>
      </div>

      {/* Emergency Section */}
      <div className="bg-white/70 backdrop-blur-sm flex flex-col items-center p-3 rounded-xl shadow-md space-y-3">
        <h2 className="text-lg font-semibold text-center">Emergency</h2>
        <button 
          onClick={handleSOS} 
          className="bg-red-500 w-full text-white font-semibold py-3 rounded-lg shadow-sm hover:bg-red-600 text-sm"
        >
          Emergency SOS
        </button>
        <button 
          onClick={handleAnimalHelp} 
          className="bg-green-500 w-full text-white font-semibold py-3 rounded-lg shadow-sm hover:bg-green-600 text-sm"
        >
         Live Location
        </button>
      </div>

      {/* Settings Section */}
      <div className="bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-md space-y-2">
        <h2 className="text-lg font-semibold">Settings</h2>
        <button className="w-full text-left p-2 hover:bg-gray-100 rounded-lg text-sm">Privacy Settings</button>
        <button className="w-full text-left p-2 hover:bg-gray-100 rounded-lg text-sm">Notification Settings</button>
        <button className="w-full text-left p-2 hover:bg-gray-100 rounded-lg text-sm">Account Information</button>
      </div>

      {/* Delete Data Section */}
      <div className="bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-md">
        <button 
          onClick={handleDeleteData} 
          className="w-full text-left p-2 text-red-600 font-semibold hover:bg-red-50 rounded-lg text-sm"
        >
          Delete All Data
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
