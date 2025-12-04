import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import useCountUp from '../ui/useCountUp';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const HeroSection: React.FC = () => {
  const heroRef = React.useRef<HTMLElement>(null);
  const isInView = useIntersectionObserver(heroRef);

  const customersCount = useCountUp(isInView ? 2000000 : 0, 3000);
  const reviewsCount = useCountUp(isInView ? 20000 : 0, 3000);
  const clientsCount = useCountUp(isInView ? 50 : 0, 3000);
  const ordersCount = useCountUp(isInView ? 500000 : 0, 3000);
  const experienceCount = useCountUp(isInView ? 5 : 0, 3000);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${Math.floor(num / 1000000)}M+`;
    if (num >= 100000) return `${Math.floor(num / 100000)}L+`;
    if (num >= 1000) return `${Math.floor(num / 1000)}K+`;
    return `${num}+`;
  };

  const scrollToCoreOfferings = () => {
    document.getElementById('core-offerings')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="flex flex-col lg:flex-row min-h-screen bg-beige-100 text-brown-900 overflow-hidden"
    >
      {/* Background Image */}
      <div className="w-full lg:w-1/3 h-64 lg:h-auto">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('images/header.jpg')" }}
          aria-hidden="true"
        ></div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-2/3 flex flex-col items-center justify-center px-4 sm:px-10 py-12 text-center">
        <AnimatedElement animationType="fadeInUp" delay="delay-200" duration="duration-1000">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 tracking-tight text-brown drop-shadow-xl leading-tight">
            Curated, Crafted, <span className="text-brown-800">Delivered</span>.
          </h1>
        </AnimatedElement>

        {/* Counter Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-10">
          {[
            { value: customersCount, label: 'Customers', from: '#FDFBF5', to: '#F5EADC', text: 'text-brown-700' },
            { value: reviewsCount, label: 'Reviews', from: '#F5EADC', to: '#EFE0CE', text: 'text-brown-700' },
            { value: clientsCount, label: 'Corporate Clients', from: '#EFE0CE', to: '#A37B5F', text: 'text-beige-100' },
            { value: ordersCount, label: 'Orders', from: '#EFE0CE', to: '#A37B5F', text: 'text-beige-100' },
            { value: experienceCount, label: 'Years of Experience', from: '#7A5944', to: '#FDFBF5', text: 'text-beige-100' },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center rounded-2xl shadow-lg p-4 sm:p-6 w-full bg-gradient-to-br from-[${card.from}] to-[${card.to}]`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brown-800 mb-1 animate-pulse">
                {formatNumber(card.value)}
              </div>
              <div className={`text-sm sm:text-base font-semibold ${card.text}`}>{card.label}</div>
            </div>
          ))}
        </div>

        <AnimatedElement animationType="fadeInUp" delay="delay-400" duration="duration-1000">
          <button
            onClick={scrollToCoreOfferings}
            className="bg-brown-700 hover:bg-brown-800 text-beige-100 font-semibold py-3 px-6 sm:py-4 sm:px-10 rounded-lg text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-opacity-75"
          >
            Explore Our Services
          </button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default HeroSection;