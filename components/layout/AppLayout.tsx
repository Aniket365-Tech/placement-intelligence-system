
import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:pl-64 transition-all duration-300">
        <Header />
        <main className="flex-1 px-4 md:px-6 py-6 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
