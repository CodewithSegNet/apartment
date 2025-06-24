import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useRef } from 'react';
import { GoogleOAuthProvider } from "@react-oauth/google";
import HomePage from "./pages/homePage";


function App() {
  return (
    <GoogleOAuthProvider clientId="">

        <Routes>

          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}

        </Routes>

    </GoogleOAuthProvider>
  );
}




export default App;