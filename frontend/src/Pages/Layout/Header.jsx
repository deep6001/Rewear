import React from 'react';
import { ShoppingBag, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-sm border-b border-orange-100">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-orange-600">
              StyleHub
            </h1>
          </div>

          {/* User Profile Section */}
          <div className="flex items-center gap-6">

            <button className='bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl px-3 py-2 text-white cursor-pointer'
            onClick={() => navigate("/productlist")}>
              Product List</button>


            <button className="p-2 rounded-full bg-orange-50 hover:bg-orange-100 transition-colors duration-200 group">
              <User className="w-6 h-6 text-orange-600 group-hover:text-orange-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;