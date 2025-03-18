import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AuthContext = createContext();
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
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

  const register = async (route, data, navigate) => {
    try {
      const response = await axios.post(`${BASE_URL}/${route}`, data);
      const { message, token, success } = response.data;
      if (message) setMessage(message);
      if (success) {
        if (token) {
          setToken(token);
        }
        toast.success("Registration successful!", {
          position: "top-center",
          autoClose: 2000,
        });
        return response.data;
      } else {
        toast.error(message || "Registration failed. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
        return response.data;
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      setMessage(errorMessage);
      if (error.response?.status === 404) {
        toast.error("Email is not verified. Redirecting to verification...", {
          position: "top-center",
          autoClose: 3000,
        });
        navigate("/auth/emailverification");
      } else {
        toast.error(errorMessage, { position: "top-center", autoClose: 3000 });
      }
      return null;
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
      toast.error(errorMessage, { position: "top-center", autoClose: 3000 });
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
          withCredentials: true,
        }
      );
      removeToken();
      setIsAuthenticated(false);
      setUserData(null);
      toast.success("Logout successful!", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Logout error:", error);
      const errorMessage =
        error.response?.data?.message || "An error occurred during logout.";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const fetchUserData = async (route) => {
    setLoading(true);
    try {
      const token = getToken();
      const response = await axios.get(`${BASE_URL}/${route}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
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
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data?.message) {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
      }
      return response.data;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while updating the data.",
        { position: "top-center", autoClose: 3000 }
      );
    }
  };

  const fetchprofile = async () => {
    try {
      const Data = await fetchUserData("profile");
      const profileUrl = Data?.userProfile?.url || profile;
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
        email,
        setEmail,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
