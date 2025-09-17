
import React from 'react';
import dash from '../assets/dash.jpeg';



const ProfileScreen: React.FC = () => {
  
  const handleSOS = () => {
    alert('Emergency SOS Activated!\nLocation: 12.9716° N, 77.5946° E (Bengaluru)\nAuthorities have been notified.');
  };
  
  const handleAnimalHelp = () => {
    alert('Animal Help Requested!\nLocation: 12.9716° N, 77.5946° E (Bengaluru)\nNearby animal rescue services have been contacted.');
  }

  const handleDeleteData = () => {
    if (window.confirm('Are you sure you want to delete all your travel data? This action cannot be undone.')) {
        alert('All your data has been permanently deleted.');
    }
  }

  return (
    <div className="p-4 space-y-6 h-full" style={{backgroundImage: `url(${dash})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="flex flex-col items-center space-y-2">
        <div className="w-24 h-24 bg-brand-teal rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-md">
          U
        </div>
        <h1 className="text-2xl text-white font-bold">User#1243</h1>
        <p className="text-gray-500">Anonymous User</p>
      </div>

      <div className="bg-brand-light flex justify-center  p-4 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold  ">Emergency</h2>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={handleSOS} className="bg-red-500  text-white font-bold py-4 rounded-lg shadow-sm hover:bg-red-600">
            Emergency SOS
          </button>
          
        </div>
      </div>
      
      <div className="bg-brand-light p-4 rounded-xl shadow-md space-y-2">
        <h2 className="text-xl font-semibold">Settings</h2>
        <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg">
          Privacy Settings
        </button>
        <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg">
          Notification Settings
        </button>
         <button className="w-full text-left p-3 hover:bg-gray-100 rounded-lg">
          Account Information
        </button>
      </div>
      
       <div className="bg-brand-light p-4 rounded-xl shadow-md">
          <button onClick={handleDeleteData} className="w-full text-left p-3 text-red-600 font-semibold hover:bg-red-50 rounded-lg">
            Delete All Data
          </button>
       </div>
    </div>
  );
};

export default ProfileScreen;