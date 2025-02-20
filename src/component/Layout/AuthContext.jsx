import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const AuthProvider = ({ children }) => {
  const [userId, setuserId] = useState("");
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState(
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  );
  const [formData, setFormData] = useState({
    HeightFeetfrom: "",
    HeightFeetto: "",
    gender: "",
    maritalStatus: "",
    maxAge: "",
    minAge: "",
    name: "",
    occupation: "",
    class: "",
  });

  const [isAuthenticated, setIsAuthenticated] = useState(
    typeof window !== "undefined" && !!localStorage.getItem("authToken")
  );
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);

  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const register = async (route, data) => {
    try {
      console.log(data);
      const response = await axios.post(`${BASE_URL}/${route}`, data);
      console.log(response.data);
      const { message, token } = response.data;
      setMessage(message);
      if (token) {
        setToken(token);
        setIsAuthenticated(true);
        toast.success("Registration successful!", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      setMessage(errorMessage);
      console.error("Registration error:", error);
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const login = async (route, data) => {
    try {
      const response = await axios.post(`${BASE_URL}/${route}`, data);
      const { message, token } = response.data;
      setMessage(message);
      if (token) {
        setToken(token);
        setIsAuthenticated(true);
        toast.success("Login successful!", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      setMessage(errorMessage);
      console.error("Login error:", error);
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const logout = async () => {
    removeToken();
    setIsAuthenticated(false);
    setUserData(null);
  };

  const fetchUserData = async (route) => {
    setLoading(true);
    try {
      const token = getToken();
      if (!token) {
        console.log("No authentication token found");
      }
      const response = await axios.get(`${BASE_URL}/${route}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data?.user;
    } catch (error) {
      console.log("Failed to fetch user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (route, data) => {
    try {
      const token = getToken();
      const response = await axios.put(
        `${BASE_URL}/${route}`,
        { data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response);

      if (response.data?.message) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
      }
      return response.data;
    } catch (error) {
      console.error(`${error.response?.data} || ${error.message}`);
      toast.error(
        error.response?.data?.message ||
          "An error occurred while updating the data.",
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    }
  };

  const fetchprofile = async () => {
    try {
      const route = "profile";
      const Data = await fetchUserData(route);

      console.log("Fetched profile Data:", JSON.stringify(Data));

      const profileUrl = Data?.userProfile?.url
        ? Data.userProfile.url
        : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=";

      console.log("Constructed Profile URL:", profileUrl);
      setProfile(profileUrl);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      setUserData(fetchUserData("user"));
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        message,
        userData,
        formData,
        profile,
        fetchprofile,
        setUserData,
        setFormData,
        updateData,
        fetchUserData,
        register,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
