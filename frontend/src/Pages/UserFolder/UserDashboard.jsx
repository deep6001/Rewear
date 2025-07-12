import React from 'react'
import donateimage from '../../assets/Donate.jpg'
import Caraousel from '../../Shared/Caraousel'

const UserDashboard = () => {

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


const clothingItems = [
    {
      id: 1,
      title: "Saree",
      image: "https://www.jollysilks.com/media/cache/1088x0/grid/kanchipuram-saree/kanch-evo-1_1603099341.webp"
    },
    {
      id: 2,
      title: "T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Shirt",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Jeans",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Gown",
      image: "https://images.pexels.com/photos/13461069/pexels-photo-13461069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 6,
      title: "Jacket",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop"
    },
    
  ];

  return (
    <div className=''>

       <div className="w-full relative">
  <img
    src={donateimage}
    className="h-[500px] w-full rounded-lg"
  />

      <div className="absolute bottom-[10%] left-[30%] right-[30%] flex justify-between px-7">
        <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-orange-500 hover:border-orange-600">
          Start Swapping
        </button>

        <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:bg-orange-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-orange-500 hover:border-orange-600">
          Browse Items
        </button>
      </div>
</div>


  <div className="w-full px-6 py-8">
      {/* Collection Title */}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Collection
      </h2>
      
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
        {clothingItems.map((item) => (
          <div
            key={item.id}
            className="relative h-48 w-full rounded-lg  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-300"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300"></div>
            
            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-xl font-semibold text-center">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>

        <div className='px-6'>
           <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Product List</h1>
        <Caraousel data={data}/>

        </div>
    </div>
  )
}

export default UserDashboard
