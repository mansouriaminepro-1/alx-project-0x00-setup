import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Landing Page</h1>
      
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;