"use client";
import { useState, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import RestaurantCard from './components/RestaurantCard';
import ServiceCard from './components/ServiceCard';
import {auth} from "../../firebase";
import {useAuth} from "../app/components/AuthProvider";
export default function Home() {
  const { user } = useAuth(); 
  const iframeUrl = `https://www.google.com/maps/d/u/0/embed?mid=1-VlXsvMWMr8EotfMcIwYKt-1SrI`;
  const restaurants = [
    {
      name: 'The Skye',
      type: 'Restaurant',
      rating: 4,
      location: 'Main Market Riyadh, KSA',
      imageUrl: '/images/home/welcome1.png'
    },
    {
      name: 'Al Nakheel',
      type: 'Cafe',
      rating: 4,
      location: 'Main Market Riyadh, KSA',
      imageUrl: '/images/home/restaurant.png'
    },
    {
      name: 'Le Cie',
      type: 'Cafe',
      rating: 4,
      location: 'Main Market Riyadh, KSA',
      imageUrl: '/images/home/restaurant.png'
    },
    {
      name: 'Holiday Inn',
      type: 'Restaurant',
      rating: 4,
      location: 'Main Market Riyadh, KSA',
      imageUrl: '/images/home/restaurant.png'
    }
  ];
  const services = [
    {
      icon: <img src="/images/home/service-icon-1.svg" alt="Special Menu" className="" />,
      title: 'Special Menu',
      description: 'Explore our unique and delectable menu offerings.'
    },
    {
      icon: <img src="/images/home/service-icon-2.svg" alt="Tasty Food" className="" />,
      title: 'Tasty Food',
      description: 'Indulge in our mouthwatering culinary creations.'
    },
    {
      icon: <img src="/images/home/service-icon-3.svg" alt="Tasty Food" className="" />,
      title: 'Free Wi-Fi',
      description: 'Stay connected with our complimentary high-speed internet.'
    },
    {
      icon: <img src="/images/home/service-icon-4.svg" alt="Tasty Food" className="" />,
      title: 'Special Offer',
      description: 'Take advantage of our exclusive deals and discounts.'
    }
  ];
  const gallery = [
    {
      imageUrl: '/images/home/gallery-1.png'
    },
    {
      imageUrl: '/images/home/gallery-2.png'
    },
    {
      imageUrl: '/images/home/gallery-3.png'
    },
    {
      imageUrl: '/images/home/gallery-4.png'
    },
  ]
  return (
    <>
    {/* Header */}
    <div className="relative w-full h-full lg:h-screen bg-black overflow-hidden pb-16">
      
    <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{
        backgroundImage: `url('/images/home/header-bg.png')` // Replace with your actual image path
      }}
    />

    {/* Content container */}
    <div className="relative z-20 pt-32 lg:pt-32 max-w-7xl mx-auto px-4">
      <div className="max-w-xl">
        <div className="flex items-center gap-2 mb-4">
          <img src="/images/home/food-mood.png" alt="Logo" className="h-45" />
        </div>       
        <p className="text-gray-300 text-lg mb-8 max-w-lg">
          Welcome to our exquisite salon, where beauty meets expertise.
          Step into a world of luxury and indulgence, where we are
          dedicated to enhancing your natural beauty and leaving
          you feeling radiant.
        </p>

        {/* Search bar */}
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-3 pl-6 rounded-full bg-white/10 text-white placeholder-gray-400 backdrop-blur-sm border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
    </div>
    </div>
    {/* End of Header */}

    {/* Home content */}
    <div className="max-w-7xl mx-auto px-4 py-12 lg:h-screen flex flex-col lg:flex-row items-center">
      {/* Welcome Section */}
      <div className="relative">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Images with curved line */}
          <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative z-10">
              <img
                src="/images/home/welcome1.png"
                alt="Chef 1"
                className="w-80 h-auto object-cover rounded-lg"
              />
              <img
                src="/images/home/welcome2.png"
                alt="Chef 2"
                className="absolute -bottom-12 right-0 w-80 h-auto object-cover"
              />
            </div>
            {/* SVG curved line */}
            <img src="/images/home/welcome-vector.svg" alt="Curve" className="absolute lg:-bottom-1/4 -bottom-0 left-0 z-[-1]  h-auto" />
          </div>
          
          {/* Welcome text */}
          <div className="lg:w-1/2 text-center lg:text-center">
            <h2 className="text-3xl lg:text-center font-bold mb-4">
              Welcome TO Our<br />
              Luxury Restaurant
            </h2>
            <span className="flex justify-center">
              <img src="/images/home/underline.svg" alt="Curve" className="h-auto" />
            </span>
            <p className="text-gray-600 mb-6 px-2 lg:px-4">
              Welcome to our exquisite salon, where beauty meets expertise.
              Step into a world of luxury and indulgence, where we are
              dedicated to enhancing your natural beauty and leaving
              you feeling radiant.
            </p>
            <button className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-white transition-colors">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* End of Home content */}
    {/* Restaurants Section */}
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Restaurants</h2>
        <span className="flex justify-center">
              <img src="/images/home/underline.svg" alt="Curve" className="h-auto" />
        </span>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} {...restaurant} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <button className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-white transition-colors">
          View All
        </button>
      </div>
    </div>
    {/* End of Restaurants Section */}
    {/* Services Section */}
    <div className="relative ">
      <div className="absolute inset-0 bg-cover bg-center -z-10 md:block hidden">
        <img src="/images/home/service-bg-image.svg" alt="Services Background" className=" object-cover" />
      </div>
      <div className="absolute right-0 bg-cover bg-center -z-10 md:block hidden">
        <img src="/images/home/service-bg-image-right.svg" alt="Services Background" className=" object-cover" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <span className="flex justify-center  mb-8">
                <img src="/images/home/underline.svg" alt="Curve" className="h-auto" />
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
    {/* End of Services Section */}
    {/* nearest restaurant */}
    <div className="mb-12">
      <div className="max-w-7xl mx-auto lg:px-0 px-6 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Nearest Restaurants</h2>
        <span className="flex justify-center  mb-8">
                <img src="/images/home/underline.svg" alt="Curve" className="h-auto" />
        </span>
        {/* Restaurant search */}
        <div className="col-span-1 mb-8">
            <div className="space-y-2">
              <div className="flex">
              <div className="relative w-full">
                <input
                    type="search"
                    placeholder="Search by location"
                    className="w-full pl-12 px-4 py-2 bg-white-800 border border-gray-400 rounded-l focus:outline-none focus:border-yellow-500"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
                {/* <input
                  type="search"
                  placeholder="Search by location"
                  className="w-full px-4 py-2 bg-white-800 border border-gray-400 rounded-l focus:outline-none focus:border-yellow-500"
                /> */}
                <button className="px-8 py-2 bg-transparent border border-yellow-500  rounded-r bg-yellow-500 text-white transition-colors duration-300">
                  Search
                </button>
              </div>
            </div>
        </div>
        {/* Restaurant Location Map */}
        <div className="w-full h-[600px] border-2 border-gray-300 rounded-lg overflow-hidden">
          <iframe
            src={iframeUrl}
            className="w-full h-full"
            title="Restaurant Location Map"
          />
        </div>
        {/* Restaurant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
    {/* End of nearest restaurant */}
    {/* Gallery Section */}
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <span className="flex justify-center">
              <img src="/images/home/underline.svg" alt="Curve" className="h-auto" />
        </span>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {gallery.map((gallery, index) => (
            <div key={index}>
                <img src={gallery.imageUrl}  className="w-full h-full object-cover rounded-lg" />
            </div>
        ))}
      </div>
    </div>
    {/* End of Gallery Section */}
    </>
  );
}
