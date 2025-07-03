import React, { useState, useEffect, useCallback } from 'react';
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

import house6 from "../assets/house02.webp"
import house7 from "../assets/house03.webp"
import house8 from "../assets/house04.webp"
import house9 from "../assets/house05.webp"
import house10 from "../assets/house6.webp"
import house11 from "../assets/house7.webp"
import house12 from "../assets/house8.webp"
import house13 from "../assets/house10.webp"
import house14 from "../assets/house11.webp"
import house15 from "../assets/house12.webp"
import { useProperty } from '../context/PropertyContext';

const HousingCat = () => {
  const { allProperties, exploreProperties, toggleLike, isPropertyLiked } = useProperty();
  
  const [activeCategory, setActiveCategory] = useState('New Apartments');
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

  // Create image arrays for properties that don't have them
  const imageArrays = {
    1: [house1, house2, house3, house4, house5],
    2: [house7, house2, house3, house4, house5],
    3: [house6, house2, house3, house4, house5],
    4: [house7, house2, house3, house4, house5],
    5: [house2, house2, house3, house4, house5],
    6: [house8, house2, house3, house4, house5],
    7: [house9, house2, house3, house4, house5],
    8: [house3, house2, house3, house4, house5],
    9: [house10, house2, house3, house4, house5],
    10: [house11, house2, house3, house4, house5],
    11: [house15, house2, house3, house4, house5],
    12: [house12, house2, house3, house4, house5],
    13: [house5, house2, house3, house4, house5],
    14: [house14, house2, house3, house4, house5],
    15: [house13, house2, house3, house4, house5],
    16: [house5, house2, house3, house4, house5],
    17: [house15, house2, house3, house4, house5],
    18: [house13, house2, house3, house4, house5],
    19: [house12, house2, house3, house4, house5],
    20: [house11, house2, house3, house4, house5],
    21: [house10, house2, house3, house4, house5],
    22: [house9, house2, house3, house4, house5],
    23: [house8, house2, house3, house4, house5],
    24: [house7, house2, house3, house4, house5],
    25: [house6, house2, house3, house4, house5],
    26: [house4, house2, house3, house4, house5],
    27: [house2, house2, house3, house4, house5]
  };

  const handleToggleLike = useCallback((propertyId, e) => {
    e.stopPropagation();
    e.preventDefault();
    toggleLike(propertyId);
  }, [toggleLike]);

  const handleTouchStart = (e) => {
    if (e.target.closest('.property-images') && e.target.closest('.property-images').children.length <= 1) return;
    e.target.closest('.image-container')?.setAttribute('data-drag-start', e.touches[0].clientX);
    e.target.closest('.image-container')?.setAttribute('data-dragging', 'true');
  };

  const PropertyCard = ({ property, showCarousel = true, index = 0 }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageLoading, setImageLoading] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState(0);
    const [dragOffset, setDragOffset] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Use context to check if property is liked
    const isLiked = isPropertyLiked(property.id);
    
    // Get images for this property
    const propertyImages = imageArrays[property.id] || [house1, house2, house3, house4, house5];

    const nextImage = useCallback((e) => {
      e?.preventDefault();
      e?.stopPropagation();
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentImageIndex((prev) => 
        prev === propertyImages.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsAnimating(false), 300);
    }, [propertyImages.length, isAnimating]);

    const prevImage = useCallback((e) => {
      e?.preventDefault();
      e?.stopPropagation();
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentImageIndex((prev) => 
        prev === 0 ? propertyImages.length - 1 : prev - 1
      );
      setTimeout(() => setIsAnimating(false), 300);
    }, [propertyImages.length, isAnimating]);

    const handleTouchMove = (e) => {
      if (!isDragging || propertyImages.length <= 1) return;
      e.preventDefault();
      const currentX = e.touches[0].clientX;
      const diff = currentX - dragStart;
      setDragOffset(diff);
    };

    const handleTouchEnd = (e) => {
      if (!isDragging || propertyImages.length <= 1) return;
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      
      const threshold = 50;
      if (Math.abs(dragOffset) > threshold) {
        if (dragOffset > 0) {
          prevImage();
        } else {
          nextImage();
        }
      }
      setDragOffset(0);
    };

    const handleMouseDown = (e) => {
      if (propertyImages.length <= 1) return;
      e.preventDefault();
      setIsDragging(true);
      setDragStart(e.clientX);
      setDragOffset(0);
    };

    const handleMouseMove = (e) => {
      if (!isDragging || propertyImages.length <= 1) return;
      e.preventDefault();
      const currentX = e.clientX;
      const diff = currentX - dragStart;
      setDragOffset(diff);
    };

    const handleMouseUp = (e) => {
      if (!isDragging || propertyImages.length <= 1) return;
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      
      const threshold = 50;
      if (Math.abs(dragOffset) > threshold) {
        if (dragOffset > 0) {
          prevImage();
        } else {
          nextImage();
        }
      }
      setDragOffset(0);
    };

    const handleMouseLeave = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    const handleIndicatorClick = (index, e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentImageIndex(index);
        setTimeout(() => setIsAnimating(false), 300);
      }
    };

    return (
      <div className="bg-white overflow-hidden transition-shadow duration-300 group">
        <Link to={`/property/${property.id}`} className="block">
          <div className="relative overflow-hidden">
            <div 
              className="relative w-full h-[350px] rounded-xl overflow-hidden cursor-grab select-none image-container"
              style={{
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="flex w-full h-full transition-transform duration-300 ease-out property-images"
                style={{
                  transform: `translateX(calc(-${currentImageIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
              >
                {property.isNew && (
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow-md z-20">
                    ★ New
                  </div>
                )}
                {propertyImages.map((image, idx) => (
                  <img 
                    key={idx}
                    src={image} 
                    alt={`${property.type} - Image ${idx + 1}`}
                    className="flex-shrink-0 w-full h-full object-cover pointer-events-none"
                    onLoad={() => setImageLoading(false)}
                    draggable={false}
                  />
                ))}
              </div>
            </div>
            
            {/* Loading skeleton */}
            {imageLoading && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
            )}
            
            {showCarousel && propertyImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  disabled={isAnimating}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-50 z-10"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  disabled={isAnimating}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100 disabled:opacity-50 z-10"
                >
                  <ChevronRight className="w-4 h-4 text-gray-700" />
                </button>
                
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {propertyImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => handleIndicatorClick(index, e)}
                      disabled={isAnimating}
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
        </Link>

 <div className="!relative p-3">
          <button
            onClick={(e) => handleToggleLike(property.id, e)}
            className={`absolute top-5 right-3 p-3 rounded-full bg-tertiary hover:bg-tertiary transition-all duration-300 transform hover:scale-110 z-20 ${
              isLiked ? 'animate-bounce' : ''
            }`}
            style={{
              animation: isLiked ? 'heartBeat 0.6s ease-in-out' : 'none'
            }}
          >
            <Heart 
              className={`w-6 h-6 transition-all duration-300 transform ${
                isLiked
                  ? 'fill-primary text-primary scale-110' 
                  : 'text-gray-600 hover:text-primary hover:scale-105'
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
    
    // Fade out current content
    setTimeout(() => {
      setActiveCategory(categoryName);
      // Fade in new content after a brief delay
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };

  // Initialize and update displayed properties when activeCategory changes
  useEffect(() => {
    const currentProperties = allProperties[activeCategory] || [];
    setDisplayedProperties(currentProperties);
  }, [activeCategory, allProperties]);

  return (
    <>
      <section className='max-w-screen-2xl mx-auto'>
        {/* Category Navigation */}
<div className='flex items-center justify-center mb-12 relative'>
  <div className='w-full overflow-x-auto scrollbar-hide'>
    <div className='flex justify-center md:space-y-0 md:space-x-8 space-x-4 relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 mt-[2.5rem] min-w-max mx-auto'>
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`${
            category.name === 'Filter' 
              ? 'flex items-center p-3 gap-2 bg-tertiary justify-center cursor-pointer transition-all duration-300 rounded-full group relative flex-shrink-0' 
              : 'flex flex-col items-center cursor-pointer transition-all justify-center duration-300 pb-[5x] px-1 rounded-full group relative flex-shrink-0'
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
          <p className="text-xs font-normal mt-1 whitespace-nowrap">
            {category.name}
          </p>
          
          {/* Active indicator */}
          {activeCategory === category.name && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-[72px] h-[2px] bg-primary rounded-full"></div>
          )}
        </div>
      ))}
    </div>
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
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-out ${
              isTransitioning 
                ? 'opacity-0 transform translate-y-12 scale-95' 
                : 'opacity-100 transform translate-y-0 scale-100'
            }`}
            style={{
              transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {displayedProperties.slice(0, 3).map((property, index) => (
              <div
                key={property.id}
                className={`transition-all duration-500 ease-out ${
                  isTransitioning 
                    ? 'opacity-0 transform translate-y-8' 
                    : 'opacity-100 transform translate-y-0'
                }`}
                style={{
                  transitionDelay: isTransitioning ? '0ms' : `${index * 100}ms`,
                  transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <PropertyCard property={property} index={index} />
              </div>
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
              className="bg-primary text-xs text-white px-8 py-3 rounded-full font-medium hover:bg-primary transition-colors duration-200 flex items-center gap-2 mx-auto"
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
        
        @keyframes heartBeat {
          0% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1.1); }
          75% { transform: scale(1.25); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default HousingCat;