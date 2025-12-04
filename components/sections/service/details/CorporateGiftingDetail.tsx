import React from 'react';
import AnimatedElement from '../../../ui/AnimatedElement';
import { GiftItem } from '../../../../types'; // Adjusted path to types

const giftItems: GiftItem[] = [
  { id: 'gift-1', name: 'Laptop Bag', category: 'Bags', imageUrl: 'images/gifts/laptop.jpg', description: 'Durable and stylish bag, Perfect for eco-conscious brands.' },
  { id: 'gift-2', name: 'Cap', category: 'Accessories', imageUrl: 'images/gifts/cap.jpg', description: 'Comfortable and trendy cap, great for casual wear or promotions.' },
  { id: 'gift-3', name: 'Executive Diary ', category: 'Diaries ', imageUrl: 'images/gifts/dairy.jpg', description: 'Elegant diary for daily notes, planning, or corporate gifting.' },
  { id: 'gift-4', name: 'Backpack', category: 'Bag', imageUrl: 'images/gifts/bag.jpg', description: 'Spacious and durable backpack, perfect for work, travel, or daily use.' },
  { id: 'gift-5', name: 'Bottle', category: 'Drinkware', imageUrl: 'images/gifts/bottle.jpg', description: 'Reusable water bottle, ideal for staying hydrated on the go.' },
];

interface CorporateGiftingDetailProps {
  onBack: () => void;
}

const CorporateGiftingDetail: React.FC<CorporateGiftingDetailProps> = ({ onBack }) => {
  return (
    <AnimatedElement animationType="fadeIn" className="py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-8 bg-brown-700 hover:bg-brown-800 text-beige-100 font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 flex items-center" // Changed coral to brown, text to beige-100
          aria-label="Back to services"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Services
        </button>

        <AnimatedElement animationType="fadeInDown" className="mb-10 text-center">
          <h3 className="text-4xl font-bold text-brown-800 mb-3">Corporate Gifting</h3> {/* Changed text-black to text-brown-800 */}
          <p className="text-lg text-brown-700 max-w-2xl mx-auto">
            Thoughtful and customizable gifts to strengthen your business relationships. Make a lasting impression with our curated selection.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
          {giftItems.map((item, index) => (
            <AnimatedElement
              key={item.id}
              animationType="fadeInUp"
              delay={`delay-${index * 100}`}
              className="bg-white rounded-xl shadow-xl overflow-hidden group transform hover:scale-105 transition-all duration-300 flex flex-col hover:shadow-brown-500/10"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  loading="lazy"
                />
              </div>
              <div className="p-5 text-center flex flex-col flex-grow">
                <h4 className="text-lg font-semibold text-brown-800 mb-1 group-hover:text-brown-700 transition-colors">{item.name}</h4> {/* Changed text-xl to text-lg, group-hover:text-coral-500 to group-hover:text-brown-700 */}
                <p className="text-sm text-brown-600 mb-2 group-hover:text-brown-700 transition-colors">{item.category}</p> {/* Changed text-coral-600 and hover */}
                <p className="text-xs text-brown-600 flex-grow line-clamp-3">{item.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </AnimatedElement>
  );
};

export default CorporateGiftingDetail;