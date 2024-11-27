import { MapPin, Star } from 'lucide-react';

// Restaurant Card Component
const RestaurantCard = ({ name, type, rating, location, imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg text-center border border-gray-300 ">
      {/* Curved image container */}
      <div className="relative w-full h-[250px] aspect-square  mb-4">
        <img
          src={imageUrl || '/api/placeholder/400/400'}
          alt={name}
          className="w-full h-full object-cover rounded-bl-full rounded-br-full "
        />
      </div> 
      
      <div className="p-4">
      {/* Rating stars */}
      <div className="flex justify-center gap-1 mb-2">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
      {/* Restaurant details */}
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-red-500 text-sm mb-2">{type}</p>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <img src="/images/home/location.svg" alt="Location" className="w-5 h-5" />
        <span>{location}</span>
      </div>
      </div>
    </div>
  );
};

export default RestaurantCard;