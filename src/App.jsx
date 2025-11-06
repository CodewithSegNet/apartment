import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useRef } from 'react';
import { GoogleOAuthProvider } from "@react-oauth/google";
import HomePage from "./pages/homePage";
import CarRentals from "./pages/carRentals"
import PropertyDetail from './components/PropertyDetail'; 
import { PropertyProvider } from './context/PropertyContext';
import { CarProvider } from './context/CarContext';
import Dashboard from './components/Dashboard';
import PersonalDetail from './components/PersonalDetails';
import PasswordSecurity from './components/PasswordSecurity';
import NotFound from './components/NotFound';
import ManageStays from './components/ManageStays';
import { WizardProvider } from './context/WizardContext';
import Basic from './pages/upload/Basic';
import Location from './pages/upload/Location';
import Photos from './pages/upload/Photos';
import Features from './pages/upload/Features';
import Review from './pages/upload/Review';
import Complete from './pages/upload/Complete';
import Success from './pages/upload/Success';
function App() {
  return (
    <GoogleOAuthProvider clientId="">
          <PropertyProvider>
            <CarProvider>
        <WizardProvider>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/car/:id" element={<PropertyDetail />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/details/" element={<PersonalDetail />} />
          <Route path="/password-security/" element={<PasswordSecurity />} />
          <Route path="/manage-stays/" element={<ManageStays />} />
          <Route path="/upload/basic" element={<Basic />} />
          <Route path="/upload/location" element={<Location />} />
          <Route path="/upload/photos" element={<Photos />} />
          <Route path="/upload/features" element={<Features />} />
          <Route path="/upload/review" element={<Review />} />
          <Route path="/upload/complete" element={<Complete />} />
          <Route path="/upload/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        </WizardProvider>
        </CarProvider>
    </PropertyProvider>
    </GoogleOAuthProvider>
  );
}




export default App;