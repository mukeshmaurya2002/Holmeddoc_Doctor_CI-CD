import React, { createContext, useEffect, useContext, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import NoInternetScreen from '../components/no-internet-connection/no-internet-connection';
interface NetworkContextType {
  isConnected: boolean;
}
const NetworkContext = createContext<NetworkContextType>({
  isConnected: false,
});

export const NetworkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: any) => {
      setIsConnected(state.isConnected ? false : true);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <NetworkContext.Provider value={{ isConnected }}>
      {children}
      <NoInternetScreen />
    </NetworkContext.Provider>
  );
};

export const useNetwork = (): NetworkContextType => useContext(NetworkContext);