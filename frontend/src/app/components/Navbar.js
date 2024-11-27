"use client";
import { useState, useRef, useEffect } from 'react';
import { Menu, X, Bell, User, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import NotificationBox from './Notification';
import { useAuth } from './AuthProvider';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const { user } = useAuth(); 
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const notificationRef = useRef(null);
  const pathname = usePathname().toLowerCase();

  const menuItems = [
    { title: 'Offers', href: '#' },
    { title: 'Featured Products', href: '#' },
    { title: 'Suppliers', href: '#' },
    { title: 'Articles', href: '#' },
    { title: 'Image Gallery', href: '#' },
    { title: 'FAQs', href: '#' },
    { title: 'Settings', href: '#' },
    { title: 'About Us', href: '#' },
    { title: 'Mission & Vision', href: '#' },
    { title: 'Contact Us', href: '#' },
    { title: 'Privacy Policy', href: '#' },
    { title: 'Terms & Conditions', href: '#' }
  ];

    // Close notifications when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
            setIsNotificationsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

    useEffect(() => {
        const handleScroll = () => {
              setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
              window.removeEventListener('scroll', handleScroll);
        };
          }, []);

    const overlayStyle = {
        backgroundColor: (scrollPosition > 100 || pathname == '/aboutus' || pathname == '/contactus') ? 'rgba(0, 0, 0, 0.8)' : '',
      };
  return (
    <>
      {/* Main Navbar */}
      <nav style={overlayStyle} className="fixed top-0 left-0 right-0 z-40 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <Link href="/">
                <div className="flex-shrink-0 flex items-center">
                  <img src='/images/navbar/nav-icon.svg' className=''/>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={` ${pathname == '/' ? 'activate-nav-link':'hover:text-yellow-500'}`}>Home</Link>
              <Link href="/products" className={` ${pathname == '/products' ? 'activate-nav-link':'hover:text-yellow-500'}`}>Products</Link>
              <Link href="/aboutus" className={` ${pathname == '/aboutus' ? 'activate-nav-link':'hover:text-yellow-500'}`}>About Us</Link>
              <Link href="/contactus" className={` ${pathname == '/contactus' ? 'activate-nav-link':'hover:text-yellow-500'}`}>Contact US</Link>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2">
            <button className="p-1 hover:text-yellow-500">
              <img src='/images/navbar/user-icon.svg' className=''/>
              </button>
              <div className="relative" ref={notificationRef}>
                <button 
                  className="p-1 hover:text-yellow-500"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                  <img src='/images/navbar/bell-icon.svg' className=''/>
                </button>
                <NotificationBox 
                  isOpen={isNotificationsOpen} 
                  onClose={() => setIsNotificationsOpen(false)} 
                />
              </div>
              <button 
                onClick={() => setIsOpen(true)}
                className=" p-1 hover:text-yellow-500"
              >
                <img src='/images/navbar/burger-icon.svg' className=''/>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Side Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#5D0505] text-white transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Side Menu Header */}
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:text-yellow-500 position-absolute top-6 right-6"
            >
              <X className="h-6 w-6" />
            </button>
          <div className="flex items-center justify-center p-4 border-b border-gray-700">
            <div className="flex items-center">
              <img src='/images/navbar/side-menu-icon.svg' />
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-between px-4 py-3 hover:bg-[#4D0404] transition-colors duration-200"
              >
                <span>{item.title}</span>
                <ChevronRight className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Logout Button */}
          {!user && (
              <Link href="/login" className="p-4 text-center border border-white/20 mx-4 mb-4 rounded hover:bg-[#4D0404] transition-colors duration-200">
                Login
              </Link>
          )}
          {user && (
            <Link className="p-4 text-center border border-white/20 mx-4 mb-4 rounded hover:bg-[#4D0404] transition-colors duration-200">
             LogOut
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;