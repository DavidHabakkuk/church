"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../public/Images/download.jpg";
import dynamic from 'next/dynamic';
const Gallery = dynamic(() => import('../Gallery/page'));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    office: '',
    occupation: '',
    gender: '',
    worshipPreference: '',
    reason: ''
  });
  const [formError, setFormError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsOpen(false);
        setIsMobileDropdownOpen(false); 
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, address, office, occupation, gender } = formData;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !phone || !email || !address || !office || !occupation || !gender) {
      setFormError('Please fill in all fields.');
    } else if (!emailRegex.test(email)) {
      setFormError('Please enter a valid email address.');
    } else {
      setFormError('');
      setFormSubmitted(true);

      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          office: '',
          occupation: '',
          gender: '',
          worshipPreference: '',
          reason: ''
        });
      }, 2000);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href={"/"}>
                <Image src={Logo} alt="Logo" width={50} height={50} />
              </Link>
            </div>
            <div className="hidden md:flex space-x-4 items-center justify-center mx-auto">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/Gallery" className="text-gray-600 hover:text-gray-900">Gallery</Link>
              <Link href="/Event" className="text-gray-600 hover:text-gray-900">Event</Link>
              <Link href="/messages" className="text-gray-600 hover:text-gray-900">Meassage</Link>

              <div className="relative dropdown">
                <button 
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Classes
                </button>
                {isOpen && (
                  <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                    <Link href="/class1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Family Class</Link>
                    <Link href="/class2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Responsibility Class</Link>
                    <Link href="/class3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Maturity Class</Link>
                    <Link href="/Bible" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Bible study</Link>
                  </div>
                )}
              </div>
              <Link href="/About" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>

            <button 
              className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse"
              onClick={() => setIsModalOpen(true)}
            >
              Join Us
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed inset-0 z-40 p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/Gallery" className="text-gray-600 hover:text-gray-900">Gallery</Link>
            <Link href="/Event" className="text-gray-600 hover:text-gray-900">Evemt</Link>
            <Link href="/messages" className="text-gray-600 hover:text-gray-900">messages</Link>

            <div className="relative">
              <button 
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              >
                Classes
              </button>
              {isMobileDropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-md z-50">
                  <Link href="/class1" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Family Class</Link>
                  <Link href="/class2" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Responsibility Class</Link>
                  <Link href="/class3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Maturity Class</Link>
                  <Link href="/Bible" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Bible study</Link>
                </div>
              )}
            </div>

            <Link href="/About" className="text-gray-600 hover:text-gray-900">About</Link>
            <button 
              className="w-full bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse" 
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
            >
              Join Us
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Join Us</h2>
            {formSubmitted ? (
              <p className="text-green-500 font-semibold">Form submitted successfully!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="overflow-y-auto max-h-80 mb-4">
                  <div className="mb-2">
                    <label className="block text-gray-700">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className="w-full px-4 py-2 border rounded-md text-black" 
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">Phone</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="+1234567890"
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className="w-full px-4 py-2 border rounded-md text-black" 
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="w-full px-4 py-2 border rounded-md text-black" 
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">Address</label>
                    <input 
                      type="text" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleInputChange} 
                      className="w-full px-4 py-2 border rounded-md text-black" 
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">Office</label>
                    <input 
                      type="text" 
                      name="office" 
                      value={formData.office} 
                      onChange={handleInputChange} 
                      className="w-full px-4 py-2 border rounded-md text-black" 
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">Occupation</label>
                    <input 
                      type="text" 
                      name="occupation" 
                      value={formData.occupation} 
                      onChange={handleInputChange} 
                      className="w-full px-4 py-2 border rounded-md text-black" 
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700">Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md text-black"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                {formError && <p className="text-red-500 text-sm">{formError}</p>}
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-600"
                >
                  Submit
                </button>
              </form>
            )}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
