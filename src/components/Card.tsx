import React from 'react';

type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-6 bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default Card;
