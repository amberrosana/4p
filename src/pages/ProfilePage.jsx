import React from 'react';

function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-gray-900 items-center justify-center py-12 px-6">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* User Avatar */}
        <div className="flex justify-center mb-6">
          <img 
            src="https://i.pinimg.com/originals/53/7f/e0/537fe02726aca7adba01bce85492d22e.gif" 
            alt="User Avatar" 
            className="h-32 w-32 rounded-full border-4 border-indigo-600"
          />
        </div>

        {/* User Information */}
        <div className="text-center text-white mb-6">
          <h2 className="text-2xl font-extrabold">Juan Dela Cruz</h2>
          <div className="mt-2 bg-indigo-500 text-white py-1 px-3 rounded-xl inline-block shadow-md">
          <h3 className="text-lg font-semibold">Current Rank: #1</h3>
        </div>
        </div>

        {/* Level Progress */}
        <div className="mb-6">
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div className="bg-indigo-600 h-2.5 w-[10%] rounded-full"></div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-1">Progress Status: 10%</p>
        </div>

        {/* User Info */}
        <div className="space-y-4">
          {/* Email Address */}
          <div className="flex justify-between text-white">
            <p className="text-sm text-gray-400">Email Address:</p>
            <p className="text-sm">juandelacruz@gmail.com</p>
          </div>

          {/* Other Info */}
          <div className="flex justify-between text-white">
            <p className="text-sm text-gray-400">Joined:</p>
            <p className="text-sm">December 14, 2024</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-6 text-center">
          <a href="/"><button
            type="button"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Home
          </button></a>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
