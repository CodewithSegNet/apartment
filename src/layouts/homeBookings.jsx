import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import homeImg from "../assets/home.webp"
import { div } from 'framer-motion/client';

const HomeBookings = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: ''
  });

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search data:', searchData);
    // Add your search logic here
  };

  return (

    <>
    
    <div 
      className="relative bg-cover bg-center mx-auto max-w-screen-2xl bg-no-repeat mx-auto rounded-2xl overflow-hidden"
      style={{
        height: '476px',
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${homeImg})`
      }}
    >
      {/* Content Container */}
      <div className="h-full flex mt-[2.8rem] flex-col justify-center px-6 md:px-12">
        
        {/* Header Text - Center Left */}
        <div className="mb-8 max-w-[600px] ">
          <h1 className="text-[40px] font-bold text-white leading-[45px] mb-4">
Find Your Perfect Stay with Smash Apartments
          </h1>
          <p className="text-md text-white/90">
Book luxury apartments and short-let stays with ease. Experience comfort, convenience, and premium hospitality—whether for a getaway, business trip, or extended stay.
          </p>
        </div>

        {/* Search Filter */}
        <div className="hidden bg-white text-xs whitespace-nowrap rounded-full mx-auto md:flex items-center shadow-lg">
          
          {/* Destination */}
          <div className="flex-1 px-4 py-3 border-r border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">
                  Where are you going?
                </label>
                <input
                  type="text"
                  placeholder="Search your destination"
                  value={searchData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className="w-full border-none outline-none text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Check In */}
          <div className="flex-1 px-4 py-3 border-r border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">
                  Check in
                </label>
                <input
                  type="date"
                  placeholder="Select date"
                  value={searchData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  className="w-full border-none outline-none text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Check Out */}
          <div className="flex-1 px-4 py-3 border-r border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">
                  Check out
                </label>
                <input
                  type="date"
                  placeholder="Select date"
                  value={searchData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  className="w-full border-none outline-none text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Guests */}
          <div className="flex-1 px-4 py-3 border-r border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-1">
                  Guests
                </label>
                <input
                  type="number"
                  placeholder="Add number of guests"
                  value={searchData.guests}
                  onChange={(e) => handleInputChange('guests', e.target.value)}
                  className="w-full border-none outline-none text-gray-900 placeholder-gray-400"
                  min="1"
                />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="px-2">
            <button
              onClick={handleSearch}
              className="bg-tertiary text-white p-4 rounded-full transition-colors duration-200 flex items-center justify-center"
            >
              <Search className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>

    
    </>


  );
};

export default HomeBookings;