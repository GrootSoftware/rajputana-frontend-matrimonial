import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./component/Layout/Navbar";
import Banner from "./component/Layout/Banner";
import Features from "./component/Layout/Features";
import About from "./component/Layout/About";
import Login from "./features/login";
import Register from "./features/Register";
import ForgotPassword from "./features/ForgetPassword";
import Profile from "./component/Profile/ProfileComp/Profile";
import Mydetails from "./component/Profile/BasicDetails/Mydetails";
import ProtectedRoute from "./component/Layout/ProtectedRoute";
import { AuthProvider } from "./component/Layout/AuthContext";
import Profilenavbar from "./component/Profile/ProfileComp/Profilenavbar";
import SearchPage from "./component/Layout/SearchPage";
import Home from "./component/Layout/Home";
import NewPassword from "./features/NewPassword";
import Stories from "./component/Layout/Stories";
import ContactUs from "./component/Layout/ContactUs";
import NotFoundPage from "./component/Layout/NotFoundPage";
import ChatApp from "./component/Layout/ChatApp";
import Verification from "./features/Verification";
import VerifyEmail from "./features/VerifyEmail";
import ViewImages from "./component/Profile/Forms/ViewImages";
import ViewPage from "./component/Profile/Forms/ViewPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <AuthProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="set-new-password" element={<NewPassword />} />
        <Route path="auth/emailverification" element={<Verification />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="about" element={<About />} />
        <Route path="stories" element={<Stories />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Protected Routes */}
        <Route
          path="search"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route index element={<Mydetails />} />
        </Route>
        <Route
          path="message"
          element={
            <ProtectedRoute>
              <ChatApp />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile/view/:profileId"
          element={
            <ProtectedRoute>
              <ViewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="search/view/:profileId"
          element={
            <ProtectedRoute>
              <ViewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="search/view/images/:profileId"
          element={
            <ProtectedRoute>
              <ViewImages />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile/view/images/:profileId"
          element={
            <ProtectedRoute>
              <ViewImages />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
