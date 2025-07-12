import React, { useRef, useState } from 'react';
import { User, Phone, Mail, Edit3, Package, ShoppingBag, History, Star, Calendar, MapPin } from 'lucide-react';





const UserProfilePage = () => {
    const [activeTab, setActiveTab] = useState('listings');

    // Mock user data
    const userData = {
        firstName: 'Sarah',
        lastName: 'Johnson',
        email: 'sarah.johnson@email.com',
        phone: '+1 (555) 123-4567',
        joinDate: 'March 2023',
        location: 'New York, NY'
    };


    const mockProducts = [
        {
            id: '1',
            name: 'Vintage Denim Jacket',
            price: 89.99,
            image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300',
            status: 'active',
            date: '2024-01-15',
            category: 'Jackets'
        },
        {
            id: '2',
            name: 'Designer Handbag',
            price: 299.99,
            image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=300',
            status: 'sold',
            date: '2024-01-10',
            category: 'Accessories'
        },
        {
            id: '3',
            name: 'Summer Floral Dress',
            price: 65.00,
            image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=300',
            status: 'active',
            date: '2024-01-12',
            category: 'Dresses'
        },
        {
            id: '4',
            name: 'Leather Boots',
            price: 150.00,
            image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=300',
            status: 'purchased',
            date: '2024-01-08',
            category: 'Shoes',
            rating: 5
        },
        {
            id: '5',
            name: 'Cashmere Sweater',
            price: 120.00,
            image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=300',
            status: 'purchased',
            date: '2024-01-05',
            category: 'Sweaters',
            rating: 4
        },
        {
            id: '6',
            name: 'Silk Scarf',
            price: 45.00,
            image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=300',
            status: 'sold',
            date: '2024-01-03',
            category: 'Accessories'
        }
    ];

    const getFilteredProducts = () => {
        switch (activeTab) {
            case 'listings':
                return mockProducts.filter(p => p.status === 'active');
            case 'sold':
                return mockProducts.filter(p => p.status === 'sold');
            case 'purchases':
                return mockProducts.filter(p => p.status === 'purchased');
            default:
                return [];
        }
    };

    const getTabIcon = (tab) => {
        switch (tab) {
            case 'listings':
                return <Package className="w-5 h-5" />;
            case 'sold':
                return <ShoppingBag className="w-5 h-5" />;
            case 'purchases':
                return <History className="w-5 h-5" />;
            default:
                return null;
        }
    };

    const getTabCount = (tab) => {
        return getFilteredProducts().length;
    };
     const fileInputRef = useRef();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profileImage", file); // key name should match backend

    try {
      const res = await fetch("http://localhost:5000/api/upload-profile", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log("Upload response:", data);

      // Optional: update profile photo URL in user state here
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

    

    return (
        <>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 p-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Left Side - User Profile */}
                        <div className="lg:col-span-1">
                            <div className="bg-white shadow-lg rounded-2xl p-6 border border-slate-100">

                                {/* Profile Header */}
                                <div className="text-center mb-6">
                                    <div className="relative inline-block">
                                        <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto overflow-hidden">
                                            {userData?.profileUrl ? (
                                                <img
                                                    src={userData.profileUrl}
                                                    alt="profile"
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            ) : (
                                                <User className="w-12 h-12 text-white" />
                                            )}
                                        </div>

                                        {/* Hidden file input */}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            ref={fileInputRef}
                                            onChange={handleFileChange}
                                        />

                                        <button
                                            onClick={() => fileInputRef.current.click()}
                                            className="absolute bottom-2 right-0 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-orange-100 hover:border-orange-300 transition-colors"
                                        >
                                            <Edit3 className="w-4 h-4 text-orange-600" />
                                        </button>
                                    </div>

                                    <h2 className="text-2xl font-bold text-slate-800 mb-1">
                                        {userData.firstName} {userData.lastName}
                                    </h2>
                                    <p className="text-slate-500 text-sm">StyleHub Member</p>
                                </div>

                                {/* User Information */}
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
                                        <Mail className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-slate-700">Email</p>
                                            <p className="text-sm text-slate-600 truncate">{userData.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
                                        <Phone className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-medium text-slate-700">Phone</p>
                                            <p className="text-sm text-slate-600">{userData.phone}</p>
                                        </div>
                                    </div>




                                </div>

                                {/* Stats */}
                                <div className="mt-6 pt-6 border-t border-slate-200">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <p className="text-2xl font-bold text-orange-600">{mockProducts.filter(p => p.status === 'active').length}</p>
                                            <p className="text-xs text-slate-500">Active Listings</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-green-600">{mockProducts.filter(p => p.status === 'sold').length}</p>
                                            <p className="text-xs text-slate-500">Items Sold</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-blue-600">{mockProducts.filter(p => p.status === 'purchased').length}</p>
                                            <p className="text-xs text-slate-500">Purchases</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Edit Profile Button */}
                                <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2">
                                    <Edit3 className="w-4 h-4" />
                                    <span>Edit Profile</span>
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Product Sections */}
                        <div className="lg:col-span-2">
                            <div className="bg-white shadow-lg rounded-2xl border border-slate-100 overflow-hidden">

                                {/* Tab Navigation */}
                                <div className="border-b border-slate-200">
                                    <nav className="flex">
                                        {[
                                            { key: 'listings', label: 'My Listings', color: 'orange' },
                                            { key: 'sold', label: 'Sold Items', color: 'green' },
                                            { key: 'purchases', label: 'Purchase History', color: 'blue' }
                                        ].map((tab) => (
                                            <button
                                                key={tab.key}
                                                onClick={() => setActiveTab(tab.key)}
                                                className={`flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-colors flex items-center justify-center space-x-2 ${activeTab === tab.key
                                                        ? `border-${tab.color}-500 text-${tab.color}-600 bg-${tab.color}-50`
                                                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                                                    }`}
                                            >
                                                {getTabIcon(tab.key)}
                                                <span>{tab.label}</span>
                                                <span className={`px-2 py-1 text-xs rounded-full ${activeTab === tab.key
                                                        ? `bg-${tab.color}-100 text-${tab.color}-700`
                                                        : 'bg-slate-100 text-slate-600'
                                                    }`}>
                                                    {getTabCount(tab.key)}
                                                </span>
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                {/* Product Grid */}
                                <div className="p-6">
                                    {getFilteredProducts().length === 0 ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                {getTabIcon(activeTab)}
                                            </div>
                                            <h3 className="text-lg font-medium text-slate-800 mb-2">
                                                No {activeTab === 'listings' ? 'active listings' : activeTab === 'sold' ? 'sold items' : 'purchases'} yet
                                            </h3>
                                            <p className="text-slate-500">
                                                {activeTab === 'listings'
                                                    ? 'Start selling by creating your first listing!'
                                                    : activeTab === 'sold'
                                                        ? 'Your sold items will appear here.'
                                                        : 'Your purchase history will be displayed here.'
                                                }
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {getFilteredProducts().map((product) => (
                                                <div key={product.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                                                    <div className="aspect-square overflow-hidden">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                    <div className="p-4">
                                                        <h4 className="font-semibold text-slate-800 mb-1 truncate">{product.name}</h4>
                                                        <p className="text-sm text-slate-500 mb-2">{product.category}</p>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-lg font-bold text-orange-600">${product.price}</span>
                                                            {product.status === 'purchased' && product.rating && (
                                                                <div className="flex items-center space-x-1">
                                                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                                    <span className="text-sm text-slate-600">{product.rating}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="mt-3 flex items-center justify-between">
                                                            <span className="text-xs text-slate-500">
                                                                {new Date(product.date).toLocaleDateString()}
                                                            </span>
                                                            <span className={`px-2 py-1 text-xs rounded-full ${product.status === 'active'
                                                                    ? 'bg-orange-100 text-orange-700'
                                                                    : product.status === 'sold'
                                                                        ? 'bg-green-100 text-green-700'
                                                                        : 'bg-blue-100 text-blue-700'
                                                                }`}>
                                                                {product.status === 'active' ? 'Active' : product.status === 'sold' ? 'Sold' : 'Purchased'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfilePage;