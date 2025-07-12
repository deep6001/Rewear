import React, { useRef } from 'react'

// ProductCard Component
const ProductCard = ({ product }) => {
  return (
     <div className="bg-white rounded-xl shadow-lg overflow-hidden w-72 h-96 hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-100 group">
     
      <div className="h-48 overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      
        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
          {product.age}
        </div>
      </div>
     
      {/* Product Details */}
      <div className="p-4 flex flex-col justify-between h-48">
        <div>
          {/* Product Type */}
          <h3 className="text-sm font-bold text-gray-800 mb-2 truncate bg-orange-50 px-2 py-1 rounded-md text-orange-700">
            {product.productType}
          </h3>
         
          {/* Product Name */}
          <p className="text-base text-gray-700 mb-3 line-clamp-2 leading-relaxed font-medium">
            {product.name}
          </p>
        </div>
       
        {/* Bottom Section - Seller and Price */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Seller</span>
            <span className="text-sm text-gray-700 truncate max-w-24 font-semibold">
              {product.seller}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500 font-medium">Price</span>
            <span className="text-lg font-bold text-orange-600">
              ₹{product.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
