import React from 'react';

const ProductsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="relative w-full h-[400px] bg-black overflow-hidden pb-16">
        <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/images/products/product-bg.png')` // Replace with your actual image path
        }}
       />
       <div className="absolute inset-0 bg-black opacity-80"></div>
       <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="text-gray-400">Home / Products</p>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-1/4 bg-white p-6 rounded shadow">
            <div>
              <h3 className="font-bold mb-4">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center space-x-2">
                    <input type="checkbox" id={`star-${star}`} />
                    <label htmlFor={`star-${star}`} className="flex">
                      {Array.from({ length: star }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.785.57-1.84-.197-1.54-1.118l1.287-3.962a1 1 0 00-.364-1.118l-3.357-2.44c-.783-.57-.381-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.287-3.962z" />
                        </svg>
                      ))}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-4">Category</h3>
              <ul className="space-y-2">
                {['Italian', 'American', 'Asian', 'Fast Food'].map((category) => (
                  <li key={category}>
                    <input type="checkbox" id={category} />
                    <label htmlFor={category} className="ml-2">
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-4">Price Range</h3>
              <input type="range" min="10" max="100" className="w-full" />
              <p className="text-sm text-gray-600 mt-2">Price: $10 - $50</p>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="md:w-3/4">
            <div className="flex items-center mb-6">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 border border-gray-300 p-2 rounded-l"
              />
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-r">Search</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded shadow hover:shadow-lg transition"
                >
                  <div className="relative">
                    <img
                      src="https://via.placeholder.com/200"
                      alt="Product"
                      className="w-full h-48 object-cover rounded"
                    />
                    <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                      Featured
                    </span>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-lg">Butter Sandwich</h4>
                    <p className="text-gray-500 text-sm">Park Lank Hotel</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.962c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.785.57-1.84-.197-1.54-1.118l1.287-3.962a1 1 0 00-.364-1.118l-3.357-2.44c-.783-.57-.381-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.287-3.962z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-yellow-500 text-lg font-bold">SAR 89</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
