import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof window !== "undefined" && !!localStorage.getItem("authToken")
  );
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Utility: Store and retrieve token
  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  // Register User
  const register = async (route, data) => {
    try {
      const response = await axios.post(`http://localhost:5000/${route}`, data);
      const { message, token } = response.data;
      setMessage(message);
      if (token) {
        setToken(token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      setMessage(errorMessage);
      console.error("Registration error:", error);
    }
  };

  // Login User
  const login = async (token) => {
    setToken(token);
    setIsAuthenticated(true);
  };

  // Logout User
  const logout = async () => {
    removeToken();
    setIsAuthenticated(false);
    setUserData(null);
  };

  // Fetch User Data
  const fetchUserData = async () => {
    setLoading(true);
    try {
      const token = getToken();
      if (!token) throw new Error("No authentication token found");
      const response = await axios.get("http://localhost:5000/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Protected POST Request
  const postData = async (route, data) => {
    try {
      const token = getToken();
      const response = await axios.post(
        `http://localhost:5000/${route}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error(`Failed to POST to ${route}:`, error);
      throw error;
    }
  };

  // Protected GET Request
  const getData = async (route) => {
    try {
      const token = getToken();
      const response = await axios.get(`http://localhost:5000/${route}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Failed to GET from ${route}:`, error);
      throw error;
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        message,
        register,
        login,
        logout,
        loading,
        postData,
        getData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
