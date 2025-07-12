import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ShoppingBag
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-slate-700 pt-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

        {/* Brand */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">StyleHub</h2>
          </div>
          <p className="text-sm text-gray-600">
            Discover your unique fashion with curated collections and pre-loved treasures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-orange-600">Home</a></li>
            <li><a href="#" className="hover:text-orange-600">Browse Products</a></li>
            <li><a href="#" className="hover:text-orange-600">About Us</a></li>
            <li><a href="#" className="hover:text-orange-600">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Mumbai, India
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              support@stylehub.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-orange-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

     
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-500">
        &copy; 2025 StyleHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
