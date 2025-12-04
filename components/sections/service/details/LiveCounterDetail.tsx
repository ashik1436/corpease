import React from 'react';
import AnimatedElement from '../../../ui/AnimatedElement';

interface LiveCounterDetailProps {
  onBack: () => void;
}

const LiveCounterDetail: React.FC<LiveCounterDetailProps> = ({ onBack }) => {
  return (
    <AnimatedElement animationType="fadeIn" className="py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-8 bg-brown-700 hover:bg-brown-800 text-beige-100 font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300" // Changed coral to brown, text to beige-100
        >
          &larr; Back to Services
        </button>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl flex flex-col justify-center items-center text-center min-h-[40vh]">
          <AnimatedElement animationType="zoomIn" delay="delay-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mb-6 text-brown-600 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> {/* Changed text-coral-500 to text-brown-600 */}
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </AnimatedElement>
          <AnimatedElement animationType="fadeInUp" delay="delay-200">
            <h3 className="text-4xl font-bold text-brown-800 mb-4">Live Counter</h3> {/* Changed text-black to text-brown-800 */}
          </AnimatedElement>
          <AnimatedElement animationType="fadeInUp" delay="delay-300">
            <p className="text-2xl font-semibold animate-blink text-brown-800">Coming Soon!</p>
          </AnimatedElement>
          <AnimatedElement animationType="fadeInUp" delay="delay-400">
            <p className="text-lg text-brown-700 mt-4 max-w-md">
              Exciting features for interactive live event catering and food stations are currently under development. Stay tuned!
            </p>
          </AnimatedElement>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default LiveCounterDetail;