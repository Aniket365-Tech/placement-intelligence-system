
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  notificationsCount: number;
  setNotificationsCount: (count: number) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
