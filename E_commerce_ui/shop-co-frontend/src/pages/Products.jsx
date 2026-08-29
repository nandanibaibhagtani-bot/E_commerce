import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Railway live backend URL update kar diya hai
    axios.get('https://ecommerce-production-7cb1.up.railway.app/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-black mb-8">Casual / All Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`} 
            className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition block cursor-pointer"
          >
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4 bg-gray-100" />
            <h3 className="font-bold text-lg mb-1 text-black">{product.name}</h3>
            <div className="flex items-center mb-2 text-yellow-500 text-sm">
              <span>⭐ {product.rating}/5</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-black">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full font-medium">{product.discount}</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}