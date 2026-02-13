import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsCount, setNotificationsCount] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <AppContext.Provider value={{ 
      sidebarOpen, 
      setSidebarOpen, 
      notificationsCount, 
      setNotificationsCount,
      isLoggedIn,
      setIsLoggedIn
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
