import React from 'react';
import AnimatedElement from '../../../ui/AnimatedElement';
import { OfficeSupplyItem } from '../../../types';

const officeSupplies: OfficeSupplyItem[] = [
  // Stationery
  { id: 'supply-1', name: 'Premium Notebooks ', imageUrl: 'images/office/books.jpg', category: 'Stationery' },
  { id: 'supply-2', name: 'Pens ', imageUrl: 'images/office/pens.jpg', category: 'Stationery' },
  { id: 'supply-5', name: 'Whiteboard Markers', imageUrl: 'images/office/marker.jpg', category: 'Stationery'},
  { id: 'supply-6', name: 'Printing Paper (A4)', imageUrl: 'images/office/A4.jpg', category: 'Stationery'},
  { id: 'supply-7', name: 'Sticky Notes ', imageUrl: 'images/office/notes.jpg', category: 'Stationery'},
  { id: 'supply-8', name: 'Organizer Set', imageUrl: 'images/office/files.jpg', category: 'Stationery'},
  { id: 'supply-9', name: 'Stappler', imageUrl: 'images/office/stappers.jpg', category: 'Stationery'},


  { id: 'supply-10', name: 'Eco-Friendly Paper Cups ', imageUrl: 'images/office/paper.jpg', category: 'Breakroom & Kitchen'},
  { id: 'supply-11', name: ' Tissues', imageUrl: 'images/office/tissues.jpg', category: 'Hygiene '},

  // Cleaning & Hygiene
  { id: 'supply-3', name: 'Eco-Friendly Detergent (Lizol)', imageUrl: 'images/office/lizol.jpg', category: 'Cleaning & Hygiene' },
  { id: 'supply-4', name: 'Heavy-Duty Mop ', imageUrl: 'images/office/broom.jpg', category: 'Cleaning & Hygiene' },
  { id: 'supply-12', name: 'Hand Sanitizer Bottles ', imageUrl: 'images/office/sanitizer.jpg', category: 'Cleaning & Hygiene'},
  { id: 'supply-13', name: 'Trash bags', imageUrl: 'images/office/trash.jpg', category: 'Cleaning & Hygiene'},

  // Office Tech & Ergonomics
  { id: 'supply-14', name: 'Freshners', imageUrl: 'images/office/odo.jpg', category: 'Hygiene'},
  { id: 'supply-15', name: 'Glass cleaner', imageUrl: 'images/office/cleaner.jpg', category: 'Cleaning & Hygiene'},
];

interface OfficeSuppliesDetailProps {
  onBack: () => void;
}

const OfficeSuppliesDetail: React.FC<OfficeSuppliesDetailProps> = ({ onBack }) => {
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
          <h3 className="text-4xl font-bold text-brown-800 mb-3">Office Supplies</h3>
          <p className="text-lg text-brown-700 max-w-2xl mx-auto">
            All the essentials to keep your workspace productive, clean, and efficient. High-quality supplies delivered to your office.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {officeSupplies.map((item, index) => (
            <AnimatedElement
              key={item.id}
              animationType="fadeInUp" // Consistent animation for all cards
              delay={`delay-${index * 50}`} // Staggered delay
              className="bg-white p-5 rounded-xl shadow-xl hover:shadow-brown-500/10 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300 group"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity"
                loading="lazy"
              />
              <h4 className="text-lg font-semibold text-brown-800 mb-1 group-hover:text-brown-700 transition-colors flex-grow flex items-center justify-center">{item.name}</h4>
              <p className="text-sm text-brown-600 group-hover:text-brown-700 transition-colors">{item.category}</p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </AnimatedElement>
  );
};

export default OfficeSuppliesDetail;