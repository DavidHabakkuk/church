"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 px-4 shadow-lg
      transform transition-transform duration-500 ease-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center">
          <FontAwesomeIcon icon={faPhone} className="text-green-500 text-3xl mb-2" />
          <p className="text-white">+234817699866</p > <p className="text-white">2348033000261</p>
        </div>

        <div className="text-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-green-500 text-3xl mb-2" />
          <p className="text-white">lffambassadorsassembly@gmail.com</p>
        </div>

        <div className="text-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-500 text-3xl mb-2" />
<p className="text-white">7, Fashe Street, by Omole Estate phase 2, Extension gate Isheri-Olowoora. lagos state, Nigeria. </p>
        </div>

        <div className="flex space-x-6">
          <Link href="https://web.facebook.com/profile.php?id=61554659567321" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl text-blue-600 hover:text-blue-800" />
          </Link>
          <Link href="https://www.instagram.com/theambassadorsassembly/?next=%2Faccounts%2Flogout%2F" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-600 hover:text-pink-800" />
          </Link>
          <Link href="https://chat.whatsapp.com/BIMZVEK4QKXA239FSxG3yb " target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl text-green-500 hover:text-green-700" />
          </Link>
          <Link href="https://call.whatsapp.com/video/dfHLj68vCEtRMzpq2cRwOa" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="text-2xl text-red-600 hover:text-red-800" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
