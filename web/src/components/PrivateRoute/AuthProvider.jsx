
import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      login(storedToken);
    }
  }, []);

  const login = (userToken) => {
    setToken(userToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


