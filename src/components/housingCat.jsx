import React, { useState, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import door from "../assets/door.svg"
import filter from "../assets/filter.svg"
import hotel from "../assets/hotel.svg"
import house from "../assets/house.svg"
import space3 from "../assets/space.svg"

import house1 from "../assets/house1.webp"
import house2 from "../assets/house2.webp"
import house3 from "../assets/house3.webp"
import house4 from "../assets/house4.webp"
import house5 from "../assets/house5.webp"

const HousingCat = () => {
  const [activeCategory, setActiveCategory] = useState('New Apartments');
  const [likedProperties, setLikedProperties] = useState(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedProperties, setDisplayedProperties] = useState([]);
  const [showMoreExplore, setShowMoreExplore] = useState(false);

  const categories = [
    { id: 'new', name: 'New Apartments', icon: house },
    { id: 'studio', name: 'Studio Apartments', icon: door },
    { id: 'duplex', name: 'Duplex', icon: hotel },
    { id: 'bungalow', name: 'Bungalow', icon: space3 },
    { id: 'filter', name: 'Filter', icon: filter }
  ];

  // Mock data for properties
  const mockProperties = {
    'New Apartments': [
      {
        id: 1,
        images: [house1, house2, house3, house4, house5],
        type: '2 Bedroom Apartment',
        location: 'Gwarinpa, Abuja',
        posted: 'Posted 1 month ago',
        amount: 45000,
        rating: 4.8
      },
      {
        id: 2,
        images: [house1, house2, house3, house4, house5],
        type: '3 Bedroom Apartment',
        location: 'Maitama, Abuja',
        posted: 'Posted 3 weeks ago',
        amount: 65000,
        rating: 4.6
      },
      {
        id: 3,
        images: [house1, house2, house3, house4, house5],
        type: '1 Bedroom Apartment',
        location: 'Wuse 2, Abuja',
        posted: 'Posted 2 weeks ago',
        amount: 35000,
        rating: 4.5
      }
    ],
    'Studio Apartments': [
      {
        id: 4,
        images: [house1, house2, house3, house4, house5],
        type: 'Modern Studio',
        location: 'Garki, Abuja',
        posted: 'Posted 1 week ago',
        amount: 25000,
        rating: 4.3
      },
      {
        id: 5,
        images: [house1, house2, house3, house4, house5],
        type: 'Luxury Studio',
        location: 'Asokoro, Abuja',
        posted: 'Posted 2 months ago',
        amount: 40000,
        rating: 4.7
      },
      {
        id: 6,
        images: [house1, house2, house3, house4, house5],
        type: 'Cozy Studio',
        location: 'Kubwa, Abuja',
        posted: 'Posted 1 month ago',
        amount: 20000,
        rating: 4.2
      }
    ],
    'Duplex': [
      {
        id: 7,
        images: [house1, house2, house3, house4, house5],
        type: '4 Bedroom Duplex',
        location: 'Gwarinpa, Abuja',
        posted: 'Posted 2 months ago',
        amount: 85000,
        rating: 4.9
      },
      {
        id: 8,
        images: [house1, house2, house3, house4, house5],
        type: '5 Bedroom Duplex',
        location: 'Maitama, Abuja',
        posted: 'Posted 1 month ago',
        amount: 120000,
        rating: 4.8
      },
      {
        id: 9,
        images: [house1, house2, house3, house4, house5],
        type: '3 Bedroom Duplex',
        location: 'Jahi, Abuja',
        posted: 'Posted 3 weeks ago',
        amount: 70000,
        rating: 4.6
      }
    ],
    'Bungalow': [
      {
        id: 10,
        images: [house1, house2, house3, house4, house5],
        type: '3 Bedroom Bungalow',
        location: 'Lugbe, Abuja',
        posted: 'Posted 1 month ago',
        amount: 50000,
        rating: 4.4
      },
      {
        id: 11,
        images: [house1, house2, house3, house4, house5],
        type: '2 Bedroom Bungalow',
        location: 'Kuje, Abuja',
        posted: 'Posted 2 weeks ago',
        amount: 35000,
        rating: 4.1
      },
      {
        id: 12,
        images: [house1, house2, house3, house4, house5],
        type: '4 Bedroom Bungalow',
        location: 'Gwagwalada, Abuja',
        posted: 'Posted 3 months ago',
        amount: 60000,
        rating: 4.3
      }
    ],
    'Hotel': [
      {
        id: 13,
        images: [house1, house2, house3, house4, house5],
        type: 'Luxury Hotel Room',
        location: 'Central Area, Abuja',
        posted: 'Posted 1 week ago',
        amount: 15000,
        rating: 4.7
      },
      {
        id: 14,
        images: [house1, house2, house3, house4, house5],
        type: 'Business Hotel Suite',
        location: 'Garki, Abuja',
        posted: 'Posted 2 days ago',
        amount: 25000,
        rating: 4.5
      },
      {
        id: 15,
        images: [house1, house2, house3, house4, house5],
        type: 'Budget Hotel Room',
        location: 'Wuse, Abuja',
        posted: 'Posted 1 week ago',
        amount: 8000,
        rating: 4.0
      }
    ]
  };

  const exploreProperties = [
    {
      id: 16,
        images: [house1, house2, house3, house4, house5],
      type: '4 Bedroom Duplex',
      location: 'Gwarinpa, Abuja',
      posted: 'Posted 2 months ago',
      amount: 55000,
      rating: 6.0
    },
    {
      id: 17,
        images: [house1, house2, house3, house4, house5],
      type: '2 Bedroom Apartment',
      location: 'Maitama, Abuja',
      posted: 'Posted 1 month ago',
      amount: 75000,
      rating: 5.8
    },
    {
      id: 18,
        images: [house1, house2, house3, house4, house5],
      type: '3 Bedroom Bungalow',
      location: 'Asokoro, Abuja',
      posted: 'Posted 3 weeks ago',
      amount: 90000,
      rating: 5.9
    },
    {
      id: 19,
        images: [house1, house2, house3, house4, house5],
      type: 'Luxury Studio',
      location: 'Wuse 2, Abuja',
      posted: 'Posted 1 week ago',
      amount: 45000,
      rating: 5.7
    },
    {
      id: 20,
        images: [house1, house2, house3, house4, house5],
      type: '5 Bedroom Duplex',
      location: 'Jahi, Abuja',
      posted: 'Posted 2 weeks ago',
      amount: 110000,
      rating: 6.0
    },
    {
      id: 21,
        images: [house1, house2, house3, house4, house5],
      type: '3 Bedroom Apartment',
      location: 'Garki, Abuja',
      posted: 'Posted 1 month ago',
      amount: 52000,
      rating: 4.8
    },
    {
      id: 22,
        images: [house1, house2, house3, house4, house5],
      type: '2 Bedroom Duplex',
      location: 'Kubwa, Abuja',
      posted: 'Posted 3 weeks ago',
      amount: 38000,
      rating: 4.5
    },
    {
      id: 23,
        images: [house1, house2, house3, house4, house5],
      type: 'Executive Studio',
      location: 'Central Area, Abuja',
      posted: 'Posted 1 week ago',
      amount: 35000,
      rating: 4.6
    },
    {
      id: 24,
        images: [house1, house2, house3, house4, house5],
      type: '4 Bedroom Bungalow',
      location: 'Lugbe, Abuja',
      posted: 'Posted 2 weeks ago',
      amount: 65000,
      rating: 4.7
    },
    {
      id: 25,
        images: [house1, house2, house3, house4, house5],
      type: '1 Bedroom Apartment',
      location: 'Wuse, Abuja',
      posted: 'Posted 1 month ago',
      amount: 28000,
      rating: 4.3
    },
    {
      id: 26,
        images: [house1, house2, house3, house4, house5],
      type: '3 Bedroom Duplex',
      location: 'Maitama, Abuja',
      posted: 'Posted 2 months ago',
      amount: 85000,
      rating: 4.9
    },
    {
      id: 27,
        images: [house1, house2, house3, house4, house5],
      type: 'Penthouse Suite',
      location: 'Asokoro, Abuja',
      posted: 'Posted 1 week ago',
      amount: 150000,
      rating: 5.0
    }
  ];

  const toggleLike = (propertyId) => {
    const newLiked = new Set(likedProperties);
    if (newLiked.has(propertyId)) {
      newLiked.delete(propertyId);
    } else {
      newLiked.add(propertyId);
    }
    setLikedProperties(newLiked);
  };

  const PropertyCard = ({ property, showCarousel = true, index = 0 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);

    const nextImage = () => {
      setCurrentImageIndex((prev) => 
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => 
        prev === 0 ? property.images.length - 1 : prev - 1
      );
    };

    return (
      <div className="bg-white overflow-hidden transition-shadow duration-300 group">
        <div className="relative overflow-hidden">
          <div 
            className="relative w-full h-[350px] rounded-xl overflow-hidden"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            <div className="flex w-full h-full">
              {property.images.map((image, idx) => (
                <img 
                  key={idx}
                  src={image} 
                  alt={`${property.type} - Image ${idx + 1}`}
                  className="flex-shrink-0 w-full h-full object-cover"
                  onLoad={() => setImageLoading(false)}
                />
              ))}
            </div>
          </div>
          
          {/* Loading skeleton */}
          {imageLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          
          {showCarousel && property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
              
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-white/50 hover:bg-primary'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          

        </div>
        
        <div className="!relative p-3">
                      <button
            onClick={() => toggleLike(property.id)}
            className="absolute top-5 right-3 p-3 rounded-full bg-tertiary hover:bg-tertiary transition-all duration-200"
          >
            <Heart 
              className={`w-6 h-6 transition-colors duration-200 ${
                likedProperties.has(property.id) 
                  ? 'fill-orange-500 text-orange-500' 
                  : 'text-gray-600 hover:text-orange-400'
              }`}
            />
          </button>
          <h3 className="font-bold text-sm mb-2 text-gray-800">
            {property.type}
          </h3>
          <p className="text-gray-600 text-xs font-medium mb-1 flex items-center">
            <span className="w-2 h-2 bg-green-500 text-xs rounded-full mr-2"></span>
            {property.location}
          </p>
          <p className="text-gray-500 text-xs mb-3">{property.posted}</p>
          
          <div className="flex flex-col justify-between">
            <div className="flex items-center">
              <span className="text-ms font-bold text-gray-900">
                ₦{property.amount.toLocaleString()}
              </span>
              <span className="text-gray-500 text-xs ml-1">Per Night</span>
            </div>
           
            <div className="flex w-fit text-xs mt-1 items-center bg-tertiary px-3 py-1 rounded-full border border-tertiary">
              <span className="text-primary mr-1">Rating ★</span>
              <span className="text-sm font-semibold text-primary">{property.rating}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Handle category transitions with animation
  const handleCategoryChange = (categoryName) => {
    if (categoryName === activeCategory || categoryName === 'Filter') return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(categoryName);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  // Initialize and update displayed properties when activeCategory changes
  useEffect(() => {
    const currentProperties = mockProperties[activeCategory] || [];
    setDisplayedProperties(currentProperties);
  }, [activeCategory]);

  return (
    <>
      <section className='max-w-screen-2xl mx-auto px-4'>
        {/* Category Navigation */}
        <div className='flex items-center justify-center mb-12 relative'>
          <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 mt-[2.5rem]'>
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`${
                  category.name === 'Filter' 
                    ? 'flex items-center p-3 gap-2 bg-tertiary cursor-pointer transition-all duration-300 rounded-full group relative' 
                    : 'flex flex-col items-center cursor-pointer transition-all duration-300 pb-[5x] px-1 rounded-full group relative'
                } ${
                  activeCategory === category.name 
                    ? '' 
                    : ''
                }`}
                onClick={() => handleCategoryChange(category.name)} 
              >
                <div className="transition-transform duration-200 group-hover:scale-110">
                  <img 
                    src={category.icon} 
                    alt={category.name} 
                    className="w-6 h-6" 
                  />
                </div>
                <p className="text-xs font-normal mt-1">
                  {category.name}
                </p>
                
                {/* Active indicator */}
                {activeCategory === category.name && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[89px] h-[2px] bg-primary rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Top Picks Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-[24px] font-bold mb-1 text-left"> 
              Top Picks for your Unmatched comfort.
            </h2>
            <p className="text-gray-600 text-left text-xs mb-4">Stay in top-rated apartments loved by our guests for luxury, convenience, and prime locations.</p>
          </div>
          
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'
            }`}
          >
            {(isTransitioning ? [] : displayedProperties.slice(0, 3)).map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>
        </div>

        {/* Explore Listings Section */}
        <div className="mb-8">
          <h2 className="text-[24px] text-left font-bold mb-1">Explore Listings</h2>
          <p className="text-gray-600 text-xs mb-6">Explore top listings with premium amenities, great locations, and unmatched comfort.</p>
          
          {/* Desktop: 4 columns, 3 rows (12 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {exploreProperties.slice(0, 12).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          {/* Additional cards shown when "More" is clicked */}
          {showMoreExplore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 transition-all duration-500 ease-in-out">
              {exploreProperties.slice(12).map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
          
          {/* More Button */}
          <div className="text-center">
            <button 
              onClick={() => setShowMoreExplore(!showMoreExplore)}
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary transition-colors duration-200 flex items-center gap-2 mx-auto"
            >
              {showMoreExplore ? 'Show Less' : 'Show More'}
              {showMoreExplore ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4 !text-white !border-white" />
              )}
            </button>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default HousingCat;