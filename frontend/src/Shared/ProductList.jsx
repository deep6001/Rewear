import { useState } from "react"
import { Search } from 'lucide-react'
import ProductCard from "./ProductCard"


const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
 const data = [{
      id: 1,
      image: "https://www.jollysilks.com/media/cache/1088x0/grid/kanchipuram-saree/kanch-evo-1_1603099341.webp",
      productType: "Saree",
      age: "2 months old",
      name: "Beautiful Silk Saree with Golden Border",
      seller: "Priya Sharma",
      price: 1200
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop",
      productType: "T-Shirt",
      age: "6 months old",
      name: "Cotton Casual T-Shirt",
      seller: "Rahul Kumar",
      price: 350
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=200&fit=crop",
      productType: "Shirt",
      age: "1 year old",
      name: "Formal White Shirt",
      seller: "Amit Patel",
      price: 800
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=200&fit=crop",
      productType: "Jeans",
      age: "8 months old",
      name: "Blue Denim Jeans",
      seller: "Sneha Gupta",
      price: 950
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/13461069/pexels-photo-13461069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      productType: "Gown",
      age: "4 months old",
      name: "Gown",
      seller: "Vikash Singh",
      price: 450
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop",
      productType: "Jacket",
      age: "3 months old",
      name: "Winter Leather Jacket",
      seller: "Ravi Verma",
      price: 2500
    },
     {
      id: 7,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=200&fit=crop",
      productType: "Jeans",
      age: "8 months old",
      name: "Blue Denim Jeans",
      seller: "Sneha Gupta",
      price: 950
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=200&fit=crop",
      productType: "Gown",
      age: "4 months old",
      name: "Sports Track Pants",
      seller: "Vikash Singh",
      price: 450
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop",
      productType: "Jacket",
      age: "3 months old",
      name: "Winter Leather Jacket",
      seller: "Ravi Verma",
      price: 2500
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-400 to-blue-500 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
            alt="Sustainable clothing"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Reuse the Clothes
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Make the Environment Friendly by Giving Your Clothes a Second Life
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Reduce Waste</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span>Save Money</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span>Help Others</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Products Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Search Bar Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Find Your Perfect Match
            </h2>
            <p className="text-gray-600 text-lg">
              Search through thousands of preloved items waiting for a new home
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for clothes, accessories, or anything you need..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-14 text-lg border-2 border-gray-300 rounded-full focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all duration-300"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 font-medium">
                Search
              </button>
            </div>
          </div>
        </div>

           <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 max-w-7xl px-4">
                {data.slice(0, 9).map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
            </div>


        

        {/* Additional Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 mt-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Every item you swap helps reduce textile waste and protect our planet.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Save Money</h3>
              <p className="text-gray-600">Get quality clothes at a fraction of the cost while making smart choices.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">Join a community of conscious consumers making a positive impact.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  export default ProductList