import React, { useState } from 'react'

const ProductDetail = () => {
  // Static single product
  const product = {
    id: '1',
    name: 'Classic Leather Jacket',
    images: ['https://images-cdn.ubuy.co.in/65a92b391ffd8a68a7381298-crysully-men-39-s-bomber-jacket-fall.jpg','https://gokyo.in/cdn/shop/files/k2_downfill_jacket.jpg?v=1711966418',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7393AkJlMVfEdT9cyQMkzGQSkoR05Xntf-w&s',
    ],
    age: '2 months',
    description: `Elevate your style with this timeless leather jacket, perfect for all seasons. 
It’s been barely worn and maintained in excellent condition. Soft leather, durable stitching, and a classic fit make it a wardrobe essential.

Features:
- 100% Genuine Leather
- Zipper pockets and cuffs
- Comfortable inner lining
- Fits true to size

Originally bought for ₹4,500. Selling as I upgraded to another style.`,
    price: 1200,
    seller: 'John Doe'
  }

const [mainImage, setMainImage] = useState(product.images[0])

  return (
    <div className="w-full mx-auto p-6 flex justify-between items-center">
        {/* Left Side - Images */}
      <div className="w-full lg:w-1/2">
        <img
          src={mainImage}
          alt={product.name}
          className="w-full max-w-[400px] rounded-xl mb-4 shadow-lg  "
        />

        <div className="flex gap-3 overflow-x-auto">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setMainImage(img)}
              className={`w-24 h-24 object-cover rounded-md border cursor-pointer transition-all ${
                img === mainImage ? 'border-orange-500 ring-2 ring-orange-500' : 'border-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className='max-w-2xl'>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-sm text-gray-500">Condition: {product.condition}</p>
                <p className="text-sm text-gray-500 mb-4">Uploaded: {product.age} ago</p>

                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                    {product.description}
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <span className="text-xl font-semibold text-orange-600">₹{product.price}</span>
                    <span className="text-gray-700 font-medium">Seller: {product.seller}</span>
                </div>

                <div>
                    <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-colors">
                       Redeem Product 
                    </button>
                    <button className="mt-4 ml-4 px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors border border-orange-500">
                        Swap Product
                    </button>
                </div>
      </div>
    </div>
  )
}

export default ProductDetail
