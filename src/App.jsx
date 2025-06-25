import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useRef } from 'react';
import { GoogleOAuthProvider } from "@react-oauth/google";
import HomePage from "./pages/homePage";
import CarRentals from "./pages/carRentals"


function App() {
  return (
    <GoogleOAuthProvider clientId="">

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/car-rentals" element={<CarRentals />} />

        </Routes>

    </GoogleOAuthProvider>
  );
}




export default App;