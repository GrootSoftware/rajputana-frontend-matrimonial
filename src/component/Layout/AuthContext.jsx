import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof window !== "undefined" && !!localStorage.getItem("authToken")
  );
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (token) => {
    console.log("Logging in with token:", token);
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = async() => {
    console.log("Logging out");
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setUserData(null);
  };

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("authToken");
      console.log("Fetching user data with token:", token);
      const response = await axios.get("https://api.example.com/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      // logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
