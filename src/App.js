// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// // import Login from "./features/login";
// import HeroBanner from "./component/Layout/HeroBanner";
// import Features from "./component/Layout/Features";
// import About from "./component/Layout/About";
// // import Footer from "./component/Layout/Footer";
// // import ForgotPassword from "./features/ForgetPassword";
// import Profile from "./component/Profile/ProfileComp/Profile";
// import Mydetails from "./component/Profile/BasicDetails/Mydetails";
// import Register from "./features/Register";
// import Profilenavbar from "./component/Profile/ProfileComp/Profilenavbar";
// // import About from './pages/About';
// // import Stories from './pages/Stories';
// // import Contact from './pages/Contact';
// // import Profile from './pages/Profile';

// function Hero() {
//   return (
//     <>
//       {/* <Profilenavbar /> */}
//       {/* <Login /> */}
//       <HeroBanner />
//       {/* <Features /> */}
//       <About />
//       {/* <Footer /> */}
//       {/* <ForgotPassword /> */}
//       {/* <Register /> */}
//       {/* <Profile /> */}
//       {/* <Mydetails/> */}

//       <Routes>
//         <Route path="/about" element={<About />} />
//         {/* <Route path="/stories" element={<Stories />} /> */}
//         {/* <Route path="/contact" element={<Contact />} /> */}

//         <Route path="/profile" element={<Profile />}>
//           <Route index element={<Mydetails />} />
//           {/* <Route path="/shortlisted" element={<ShortlistedProfile />} />
//           <Route path="/blocked" element={<BlockedProfile />} />
//           <Route path="/viewed" element={<ViewedProfile />} />
//           <Route path="/visited" element={<PeopleVisited />} />
//           <Route path="/interest" element={<MyInterest />} />
//           <Route path="/photo" element={<PhotoRequest />} /> */}
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default Hero;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import Home from "./component/Layout/Home"; // Assuming you have a Home component
import NewPassword from "./features/NewPassword";
import Stories from "./component/Layout/Stories";
import ContactUs from "./component/Layout/ContactUs";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="set-new-password" element={<NewPassword />} />

        <Route path="about" element={<About />} />
        <Route path="stories" element={<Stories />} />
        <Route path="contact-us" element={<ContactUs />} />

        <Route path="*" element={<Home />} />

        {/* Protected Routes */}
        {/* <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          <Route index element={<Mydetails />} />
        </Route>
        {/* Fallback Route */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
