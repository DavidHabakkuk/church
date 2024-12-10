"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { database, ref, push } from "./firebaseConfig";

const Gallery = dynamic(() => import("../Gallery/page"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    office: "",
    occupation: "",
    gender: "",
    worshipPreference: "",
    reason: "",
    dateOfBirth: "",
    worshipInterest: "",
    departmentInterest: "",
    country: "",
  });
  const [formError, setFormError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formStep, setFormStep] = useState(1);

  const handleNextStep = () => {
    if (formStep < 4) setFormStep((prev) => prev + 1);
  };

  const handleBackStep = () => {
    if (formStep > 1) setFormStep((prev) => prev - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, phone, email, address, office, occupation, gender } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,15}$/;

    if (!name || !phone || !email || !address || !office || !occupation || !gender) {
      setFormError("Please fill in all required fields.");
      return false;
    }
    if (!emailRegex.test(email)) {
      setFormError("Please enter a valid email address.");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      setFormError("Please enter a valid phone number (10-15 digits).");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await push(ref(database, "submissions"), formData);
      setFormSubmitted(true);
      console.log(
        `Sending email to ${formData.email}: Thank you for joining us and we are glad to have you here.`
      );

      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          office: "",
          occupation: "",
          gender: "",
          worshipPreference: "",
          reason: "",
          dateOfBirth: "",
          worshipInterest: "",
          departmentInterest: "",
          country: "",
        });
        setFormStep(1);
      }, 2000);
    } catch (error) {
      setFormError("Failed to submit the form. Please try again.");
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/Images/download.jpg" alt="Logo" width={50} height={50} />
              </Link>
            </div>
            <div className="hidden md:flex space-x-4 items-center justify-center mx-auto">
              <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/Gallery" className="text-gray-600 hover:text-gray-900">Gallery</Link>
              <Link href="/Event" className="text-gray-600 hover:text-gray-900">Event</Link>
              <Link href="/messages" className="text-gray-600 hover:text-gray-900">Message</Link>
              <div className="relative dropdown">
                <button className="text-gray-600 hover:text-gray-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>Classes</button>
                {isOpen && (
                  <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-50">
                    <Link href="/Family" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Family Class</Link>
                    <Link href="/Responsibility" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Responsibility Class</Link>
                    <Link href="/class3" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Maturity Class</Link>
                    <Link href="/Bible" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Bible study</Link>
                  </div>
                )}
              </div>
              <Link href="/About" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <button className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse" onClick={() => setIsModalOpen(true)}>Join Us</button>
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-600">Join Us</h2>
            {formSubmitted ? (
              <p className="text-green-500 font-semibold">Form submitted successfully!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="overflow-y-auto max-h-80 mb-4">
                  {formStep === 1 && (
                    <>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black" placeholder="Full Name" />
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black" placeholder="Phone: +1234567890" />
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black" placeholder="Valid Email" />
                    </>
                  )}
                  {formStep === 2 && (
                    <>
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black" placeholder="Enter Home Address" />
                      <input type="text" name="office" value={formData.office} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black" placeholder="Enter Office Address" />
                      <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black" placeholder="Enter type of work" />
                    </>
                  )}
                  {formStep === 3 && (
                    <>
                      <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black">
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <select name="worshipPreference" value={formData.worshipPreference} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black">
                        <option value="">Select worship type</option>
                        <option value="Home">worship with us in the public field</option>
                        <option value="Home">worship with us in the house of worship</option>
                      </select>
                      <input type="text" name="reason" value={formData.reason} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black" placeholder="Type your reason" />
                    </>
                  )}
                  {formStep === 4 && (
                    <>
                      <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black" />
                      <select name="worshipInterest" value={formData.worshipInterest} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black">
                        <option value="">Select worship interest</option>
                        <option value="Worship">Worship</option>
                        <option value="Evangelism">Evangelism</option>
                        <option value="Discipleship">Discipleship</option>
                        <option value="Teaching">Teaching</option>
                        <option value="Prayer">Prayer</option>
                        <option value="Media">Media</option>
                      </select>
                      <select name="departmentInterest" value={formData.departmentInterest} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black">
                        <option value="">Select department of interest</option>
                        <option value="Youth">Youth</option>
                        <option value="Children">Children</option>
                        <option value="Music">Music</option>
                        <option value="Welfare">Welfare</option>
                        <option value="Evangelism">Evangelism</option>
                      </select>
                      <select name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md text-black">
                        <option value="">Select country</option>
                        <option value="Country1">Country 1</option>
                        <option value="Country2">Country 2</option>
                      </select>
                    </>
                  )}
                </div>
                {formError && <p className="text-red-500">{formError}</p>}
                <div className="flex justify-between">
                  <button type="button" onClick={handleBackStep} disabled={formStep === 1} className="text-gray-500 hover:text-gray-800">Back</button>
                  <button type="button" onClick={handleNextStep} disabled={formStep === 4} className="text-green-500 hover:text-green-800">Next</button>
                </div>
                {formStep === 4 && <button type="submit" className="w-full bg-green-500 text-white py-2 mt-4 rounded-md">Submit</button>}
              </form>
            )}
            <button className="mt-4 text-gray-500 hover:text-gray-800 w-full text-center" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 max-w-md">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">Home</Link>
            <Link href="/Gallery" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">Gallery</Link>
            <Link href="/Event" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">Event</Link>
            <Link href="/messages" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">Message</Link>
            <Link href="/About" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-600 hover:text-gray-900 py-2">About</Link>
            <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="bg-green-500 text-white px-4 py-2 mt-4 rounded-full shadow-lg animate-pulse">Join Us</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
