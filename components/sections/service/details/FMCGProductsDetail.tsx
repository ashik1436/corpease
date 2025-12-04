
import React from 'react';
import AnimatedElement from '../../../ui/AnimatedElement';

const fmcgProducts = [
  { id: 'fmcg-1', name: 'Chips', src: 'images/fmcg/chips2.jpg', category: 'Snacks' },
  { id: 'fmcg-2', name: 'Cookies', src: 'images/fmcg/cookies.jpg', category: 'Biscuits' },
  { id: 'fmcg-3', name: 'Dry Fruits & Nuts', src: 'images/fmcg/dry.jpg', category: 'Dry Fruits' },
  { id: 'fmcg-4', name: 'Tea', src: 'images/fmcg/tea.jpg', category: 'Beverages' },
  { id: 'fmcg-5', name: 'Soft Drinks', src: 'images/fmcg/soft.jpg', category: 'Beverages' },
  { id: 'fmcg-6', name: 'Fruit juices', src: 'images/fmcg/juice.jpg', category: 'Beverages' },
  { id: 'fmcg-7', name: 'Coffee', src: 'images/fmcg/coffee.jpg', category: 'Beverages' },
  { id: 'fmcg-8', name: 'Instant Noodles', src: 'images/fmcg/noodles.jpg', category: 'Instant food' },
  { id: 'fmcg-9', name: 'Nutella Hazelnut Spread with Cocoa', src: 'images/fmcg/nutella.jpg', category: 'Sweeteners & Spreads' },
  { id: 'fmcg-10', name: 'Peanut Butter', src: 'images/fmcg/peanut.jpg', category: 'Spreads' },
];

interface FMCGProductsDetailProps {
  onBack: () => void;
}

const FMCGProductsDetail: React.FC<FMCGProductsDetailProps> = ({ onBack }) => {
  return (
    <AnimatedElement animationType="fadeIn" className="py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-8 bg-brown-700 hover:bg-brown-800 text-beige-100 font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 flex items-center"
          aria-label="Back to services"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Services
        </button>

        <AnimatedElement animationType="fadeInDown" className="mb-10 text-center">
          <h3 className="text-4xl font-bold text-brown-800 mb-3">FMCG Products</h3>
          <p className="text-lg text-brown-700 max-w-2xl mx-auto">
            Quality Fast-Moving Consumer Goods for your corporate and bulk purchasing needs. We offer a wide range of essentials.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {fmcgProducts.map((item, index) => (
            <AnimatedElement
              key={item.id}
              animationType="fadeInUp"
              delay={`delay-${index * 75}`} // Adjusted delay slightly for more items
              className="bg-white p-5 rounded-xl shadow-xl hover:shadow-brown-500/10 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 group"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"
                loading="lazy"
              />
              <h4 className="text-lg font-semibold text-brown-800 mb-1 group-hover:text-brown-700 transition-colors">{item.name}</h4>
              <p className="text-sm text-brown-600 group-hover:text-brown-700 transition-colors">{item.category}</p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </AnimatedElement>
  );
};

export default FMCGProductsDetail;
