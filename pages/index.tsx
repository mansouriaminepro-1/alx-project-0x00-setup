import React from 'react';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Airbnb Application Clone</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
};

export default Home;