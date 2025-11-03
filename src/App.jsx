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
function App() {
  return (
    <GoogleOAuthProvider clientId="">
          <PropertyProvider>
            <CarProvider>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/car-rentals" element={<CarRentals />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/car/:id" element={<PropertyDetail />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/details/" element={<PersonalDetail />} />
          <Route path="/password-security/" element={<PasswordSecurity />} />
          <Route path="/manage-stays/" element={<ManageStays />} />
          {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
          <Route path="*" element={<NotFound />} />

        </Routes>
        </CarProvider>
    </PropertyProvider>
    </GoogleOAuthProvider>
  );
}




export default App;