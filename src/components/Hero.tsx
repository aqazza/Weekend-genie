import React from "react";

interface HeroProps {
  onGenerateClick: () => void;
  activity: string | null;
}

const Hero: React.FC<HeroProps> = ({ onGenerateClick, activity }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] bg-gray-100 text-center p-5">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Stuck on what to do this weekend?
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Let us help you discover exciting activities!
      </p>
      <button
        onClick={onGenerateClick}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        Find Activities
      </button>
      {activity && (
        <div className="mt-8 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">
            Your Activity:
          </h2>
          <p className="text-xl text-gray-600 mt-2">{activity}</p>
        </div>
      )}
    </div>
  );
};

export default Hero;
