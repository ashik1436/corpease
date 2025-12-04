import React from 'react';
import AnimatedElement from '../../../ui/AnimatedElement';
import LazyImage from '../../../ui/LazyImage';

// Define interfaces for better type checking of categories data
interface RTEItem {
  id: string;
  name: string;
  src: string;
  alt: string;
  type?: 'veg' | 'non-veg';
}

interface RTECategory {
  id: string;
  title: string;
  description: string;
  items: RTEItem[];
}

// Data for the categories
const categories: RTECategory[] = [
  {
    id: 'salads',
    title: 'Fresh Salads',
    description: 'Crisp, vibrant, and packed with nutrients. Our salads are made with the freshest ingredients, offering a diverse range of delicious vegetarian and non-vegetarian options.',
    items: [
      // Vegetarian Salads (13)
      { id: 'Caesar', name: 'Classic Caesar Salad (Veg)', src: 'images/ready/Salads/veg/cesar.jpg', alt: 'Vegetarian Caesar Salad', type: 'veg' },
      { id: 'Sprouted Chickpea', name: 'Sprouted Chickpea Salad', src: 'images/ready/Salads/veg/Sprouted Chickpea.jpg', alt: 'Mediterranean Quinoa Bowl', type: 'veg' },
      { id: 'Sprouted Moong Beans', name: 'Sprouted Moong Beans,carrot,oinion salad', src: 'images/ready/Salads/veg/Sprouted Moong beans.jpg', alt: 'Vegetarian Asian Sesame Noodle Salad', type: 'veg' },
      { id: 'Quinoa', name: 'Quinoa Salad', src: 'images/ready/Salads/veg/Quinoa.jpg', alt: 'Garden Fresh Salad', type: 'veg' },
      { id: 'Asian Quinoa', name: 'Asian Quinoa  Barley Salad', src: 'images/ready/Salads/veg/Asian quinoa.jpg', alt: 'Berry Bliss Salad', type: 'veg' },
      { id: 'Russian', name: 'Russian Salad', src: 'images/ready/Salads/veg/Russian Salad.jpg', alt: 'Caprese Salad', type: 'veg' },
      { id: 'Ranch Pasta', name: 'Ranch Pasta Salad', src: 'images/ready/Salads/veg/Pasta.jpg', alt: 'Vegetarian Waldorf Salad', type: 'veg' },
      { id: 'Greek', name: 'Greek Salad', src: 'images/ready/Salads/veg/Greek.jpg', alt: 'Greek Salad', type: 'veg' },
      { id: 'Italian pasta', name: 'Italian Pasta Salad', src: 'images/ready/Salads/veg/Italian pasta.jpg', alt: 'Avocado Mango Salad', type: 'veg' },
      { id: 'Quinoa pepper', name: 'Quinoa Salad with olives & peppers', src: 'images/ready/Salads/veg/Quinoa olives.jpg', alt: 'Spinach Strawberry Salad', type: 'veg' },
      { id: 'Macroni roasted', name: 'Macaroni Veggie Salad with Corn,Mushrooms', src: 'images/ready/Salads/veg/Macaroni.jpg', alt: 'Lentil Salad', type: 'veg' },
      { id: 'soy', name: 'Soy & Sweet Potato Salad Salad', src: 'images/ready/Salads/veg/Soy.jpg', alt: 'Beetroot Feta Salad', type: 'veg' },
      { id: 'panner', name: 'Curried paneer sprout salad', src: 'images/ready/Salads/veg/panner.jpg', alt: 'panner', type: 'veg' },
       // Non-Vegetarian Salads (12)
      { id: 'Caesar roast chicken', name: 'Caesar Salad with Roast Chicken', src: 'images/ready/Salads/non/ceaser2.jpg', alt: 'Caesar Salad with Roast Chicken', type: 'non-veg' },
      { id: 'Asian chicken', name: 'Asian Chicken Salad', src: 'images/ready/Salads/non/ASIAN CHICKEN SALAD.jpg', alt: 'Asian Chicken ', type: 'non-veg' },
      { id: 'Russian Chicken', name: 'Russian Chicken Salad', src: 'images/ready/Salads/non/Russian Salad.jpg', alt: 'Russian Chicken ', type: 'non-veg' },
      { id: 'Egg', name: 'Spinach, Chickpeas, Roasted Potato & Egg Salad', src: 'images/ready/Salads/non/egg.jpg', alt: 'Egg Salad', type: 'non-veg' },
      { id: 'Smoked Salmon', name: 'Smoked Salmon and Fennel Salad', src: 'images/ready/Salads/non/salmon.jpg', alt: 'Smoked Salmon ', type: 'non-veg' },
      { id: 'Orange chicken', name: 'Orange Chicken Salad with Cherry Tomatoes', src: 'images/ready/Salads/non/orange chicken.jpg', alt: 'Orange Chicken', type: 'non-veg' },
      { id: 'Quinoa chicken', name: 'Sweet Potato, Pumpkin & Quinoa Salad with Grilled Chicken ', src: 'images/ready/Salads/non/potato.jpg', alt: 'Sweet Potato,Pumpkin & Quinoa', type: 'non-veg' },
      { id: 'Muskmelon', name: 'Muskmelon & Cucumber Salad and Grilled Chicken', src: 'images/ready/Salads/non/muskmelon.jpg', alt: 'Muskmelon & Cucumber ', type: 'non-veg' },
      { id: 'ceasar chicken', name: 'Caesar salad chicken', src: 'images/ready/Salads/non/ceaser2.jpg', alt: 'Caesar salad chicken', type: 'non-veg' },
      { id: 'Mushroom', name: 'Roasted Pepper, Mushroom, Minced Chicken & Corn Salad', src: 'images/ready/Salads/non/mushroom.jpg', alt: 'Roasted Pepper, Mushroom, Minced Chicken', type: 'non-veg' },
      { id: 'Greek non', name: 'Greek Salad with Prawns', src: 'images/ready/Salads/non/prawn.jpg', alt: 'Greek Salad with Prawns', type: 'non-veg' },
      { id: 'Millets', name: 'Black Rice, Millet & Chicken Salad', src: 'images/ready/Salads/non/black.jpg', alt: 'Black Rice, Millet & Chicken', type: 'non-veg' },
    ],
  },
  {
    id: 'snacks-chaats',
    title: 'Snacks & Chaats',
    description: 'A delightful array of savory treats, from classic chaats to modern bites. Perfect for a quick snack or a light meal. Explore options like burgers, sandwiches etc...',
    items: [
      { id: 'snack-1', name: 'Veggie Burger', src: 'images/ready/snacks/burger.jpg', alt: 'Veggie Burger' },
      { id: 'snack-2', name: 'Spicy Samosa ', src: 'images/ready/snacks/samosa.jpg', alt: 'Samosa ' },
      { id: 'snack-3', name: 'Cheese Sandwich', src: 'images/ready/snacks/cheese.jpg', alt: 'Cheese' },
      { id: 'snack-4', name: 'Paneer Tikka Sandwich', src: 'images/ready/snacks/panner.jpg', alt: 'Paneer Tikka' },
      { id: 'snack-5', name: 'Aloo Tikki Burger ', src: 'images/ready/snacks/aloo.jpg', alt: 'Aloo Tikki Chaat' },
      { id: 'snack-6', name: 'Dahi Puri', src: 'images/ready/snacks/dahi.jpg', alt: 'Dahi Puri' },
      { id: 'snack-7', name: 'Bhel Puri', src: 'images/ready/snacks/bhel.jpg', alt: 'Bhel Puri' },
      { id: 'snack-8', name: 'Veg sandwich', src: 'images/ready/snacks/veg.jpg', alt: 'Veg sandwich' },
      { id: 'snack-9', name: 'Onion samosa', src: 'images/ready/snacks/onion.jpg', alt: 'onion samosa' },
      { id: 'snack-10', name: 'puff', src: 'images/ready/snacks/puff.jpg', alt: 'All puff' },
      { id: 'snack-11', name: 'Kachori', src: 'images/ready/snacks/kachori.jpg', alt: 'Kachori' },
      { id: 'snack-12', name: 'Fried rice', src: 'images/ready/snacks/rice.jpg', alt: 'Fried rice' },
      { id: 'snack-13', name: 'Schezwan Noodles', src: 'images/ready/snacks/snoodles.jpg', alt: 'Schezwan Noodles' },
      { id: 'snack-14', name: ' Noodles', src: 'images/ready/snacks/noodles.jpg', alt: 'Noodles' },
      { id: 'snack-15', name: 'Pav bhaji', src: 'images/ready/snacks/pav.jpg', alt: 'Pav bhaji' },
      { id: 'snack-16', name: 'Vada pav', src: 'images/ready/snacks/vada.jpg', alt: 'Vada pav'},
      { id: 'snack-17', name: 'Medu Vada', src: 'images/ready/snacks/medu.jpg', alt: 'Medu Vada'},
      { id: 'snack-18', name: 'Bonda', src: 'images/ready/snacks/bonda.jpg', alt: 'Bonda'},
      { id: 'snack-19', name: 'Murukku', src: 'images/ready/snacks/muruku.jpg', alt: 'Murukku'},
      { id: 'snack-20', name: 'Gulab Jamun', src: 'images/ready/snacks/gulab.jpg', alt: 'Gulab Jamun'},
      { id: 'snack-21', name: 'Jalebi', src: 'images/ready/snacks/jalebi.jpg', alt: 'Jalebi'},
      { id: 'snack-22', name: 'Ladoo', src: 'images/ready/snacks/ladoo.jpg', alt: 'Ladoo'},
      { id: 'snack-23', name: 'Mysore Pak', src: 'images/ready/snacks/mysore.jpg', alt: 'Mysore Pak'},
      

    ],
  },
  {
    id: 'value-combos',
    title: 'Value Combos',
    description: 'Complete and satisfying meal boxes offering great taste and even better value. Ideal for a fulfilling lunch or dinner.',
    items: [
      { id: 'combo-1', name: 'Lasagna Delight', src: 'images/ready/combo/bread.jpg', alt: 'Lasagna Delight' },
      { id: 'combo-2', name: 'QuesaRanch Combo', src: 'images/ready/combo/salsa.jpg', alt: 'QuesaRanch Combo' },
      { id: 'combo-3', name: 'WRAP SALAD COMBO', src: 'images/ready/combo/wrap.jpg', alt: 'WRAP SALAD COMBO' },
      { id: 'combo-4', name: 'Green Wrap Combo', src: 'images/ready/combo/cheese.jpg', alt: 'Green Wrap Combo' },
      { id: 'combo-5', name: 'Wedge & Sip Combo', src: 'images/ready/combo/burger.jpg', alt: 'Wedge & Sip Combo' },

    ],
  },
  {
    id: 'meal-segments',
    title: 'Authentic Meal Segments',
    description: 'Experience the rich flavors of traditional Indian cuisine with our North & South Indian meal segments. Prepared with authentic recipes and fresh ingredients.',
    items: [
      { id: 'meal-1', name: 'North Indian Thali Special', src: 'images/ready/meal/north.jpg', alt: 'North Indian Thali' },
      { id: 'meal-2', name: 'South Indian Delight Platter', src: 'images/ready/meal/south.jpg', alt: 'South Indian Platter' },
    ],
  },
];

interface ReadyToEatDetailProps {
  onBack: () => void;
}

const ReadyToEatDetail: React.FC<ReadyToEatDetailProps> = ({ onBack }) => {
  return (
    <AnimatedElement animationType="fadeInDown" className="mb-6 text-center">
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
      <h3 className="text-4xl font-bold text-brown-800 mb-3">Ready to Eat Selections</h3>
      <p className="text-lg text-brown-700 max-w-3xl mx-auto">
        Freshly prepared, wholesome meals designed for your convenience and enjoyment. Explore our diverse categories below.
      </p>
      <div className="mt-8">
        {categories.map(category => (
          <div key={category.id} className="mb-12">
            <h4 className="text-2xl font-semibold text-brown-700 mb-2">{category.title}</h4>
            <p className="text-brown-600 mb-4">{category.description}</p>
            {/* Special handling for Salads: separate veg/non-veg */}
            {category.id === 'salads' ? (
              <>
                <div className="mb-2 text-lg font-medium text-green-700">Vegetarian</div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                  {category.items.filter(item => item.type === 'veg').map(item => (
                    <div key={item.id} className="bg-beige-100 rounded-lg shadow p-3 flex flex-col items-center">
                      <img src={item.src} alt={item.alt} className="w-24 h-24 object-cover rounded-full mb-2 border-2 border-brown-200" />
                      <span className="text-brown-800 font-medium text-center text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-2 text-lg font-medium text-red-700">Non-Vegetarian</div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.items.filter(item => item.type === 'non-veg').map(item => (
                    <div key={item.id} className="bg-beige-100 rounded-lg shadow p-3 flex flex-col items-center">
                      <img src={item.src} alt={item.alt} className="w-24 h-24 object-cover rounded-full mb-2 border-2 border-brown-200" />
                      <span className="text-brown-800 font-medium text-center text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map(item => (
                  <div key={item.id} className="bg-beige-100 rounded-lg shadow p-3 flex flex-col items-center">
                    <img src={item.src} alt={item.alt} className="w-24 h-24 object-cover rounded-full mb-2 border-2 border-brown-200" />
                    <span className="text-brown-800 font-medium text-center text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={onBack}
          className="px-6 py-2 bg-brown-700 text-beige-50 rounded-lg shadow hover:bg-brown-800 transition-colors font-semibold text-lg"
        >
          Back to Services
        </button>
      </div>
    </AnimatedElement>
  );
};

export default ReadyToEatDetail;
