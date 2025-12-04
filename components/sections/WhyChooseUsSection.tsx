import React, { useState, useEffect } from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { WhyChooseUsItem } from '../../types';

// Placeholder SVG Icons - using existing ones
const QualityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ReliabilityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CustomizationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93s.844-.064 1.19-.41c.346-.345.856-.436 1.286-.233l.785.38c.43.203.684.679.597 1.128l-.138.693c-.096.479.03.981.358 1.333.328.353.81.533 1.275.466l.888-.128c.466-.068.897.187.994.648l.122.591c.098.47-.07.96-.428 1.287-.357.327-.825.468-1.275.372l-.888-.128c-.465-.068-.933.188-1.02.648l-.138-.693c-.086.43-.542.808-1.03.808H12.99c-.488 0-.944-.378-1.03-.808l-.138-.693c-.086-.46-.555-.716-1.02-.648l-.888.128c-.465-.068-.947-.098-1.275-.372s-.504-.9-.428-1.287l.122-.59c.098-.47.536-.718.994-.648l.888.128c.465.068.947-.098 1.275-.466s.453-.854.358-1.333l-.138-.693c-.086-.43-.06-.925.088-1.317l.785-.38c.43-.203.94-.112 1.286.233s.71.806.78.93c.397.166.71.506.78.93l.149.894z" />
  </svg>
);

const InnovationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.055 15.055 0 01-4.5 0m3.75-10.036C12 6.172 9.879 3.95 7.021 3.012A15.003 15.003 0 002.25 10.5c0 7.732 5.962 14.012 13.519 14.822A15.013 15.013 0 0021.75 10.5c0-2.74-.734-5.273-2.021-7.488S14.828 6.172 12 6.172z" />
  </svg>
);

const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 'quality',
    title: 'Uncompromising Quality',
    description: 'We source the freshest ingredients and finest products to ensure an exceptional experience every time. Our commitment to quality is unwavering, from farm to your table, setting the gold standard for culinary excellence.',
    Icon: QualityIcon,
  },
  {
    id: 'reliability',
    title: 'Reliable & Timely Service',
    description: 'Count on us for punctual delivery and consistent service. We value your time and strive to be a partner you can always depend on, ensuring smooth operations and peace of mind for all your needs.',
    Icon: ReliabilityIcon,
  },
  {
    id: 'customization',
    title: 'Flexible & Customizable',
    description: 'From bespoke meal plans to uniquely branded corporate gifting, we offer hyper-personalized solutions. Your vision is our blueprint, meticulously crafted to meet your specific requirements.',
    Icon: CustomizationIcon,
  },
  {
    id: 'innovation',
    title: 'Innovative Approach',
    description: 'We continuously integrate cutting-edge ideas and technologies, such as our T! Ai smart solutions, to elevate your experience and deliver the future of service, today.',
    Icon: InnovationIcon,
  },
];

interface NexusGraphicProps {
  selectedIcon?: React.ElementType;
  iconKey?: string; // To trigger animation on icon change
}

const NexusGraphic: React.FC<NexusGraphicProps> = ({ selectedIcon, iconKey }) => {
  const IconComponent = selectedIcon;
  return (
    <div className="relative w-full h-64 md:h-full flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px]">
      <style>{`
        .nexus-glow-1 {
          animation: nexus-pulse 8s infinite ease-in-out, nexus-rotate 25s infinite linear;
        }
        .nexus-glow-2 {
          animation: nexus-pulse 7s infinite ease-in-out reverse, nexus-rotate 30s infinite linear reverse;
        }
        .nexus-core {
           animation: nexus-core-pulse 5s infinite ease-in-out;
        }
        .nexus-ring {
            animation: nexus-rotate 40s infinite linear;
        }
        .nexus-particle {
            position: absolute;
            background-color: #A37B5F; /* brown-500, was beige-100 */
            border-radius: 50%;
            animation: nexus-drift 10s infinite ease-in-out;
        }
        @keyframes nexus-pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes nexus-core-pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        @keyframes nexus-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes nexus-drift {
            0%, 100% { transform: translate(0,0) scale(1); opacity: 0.1; }
            25% { transform: translate(10px, -15px) scale(0.8); opacity: 0.3; }
            50% { transform: translate(-5px, 10px) scale(1.1); opacity: 0.5; }
            75% { transform: translate(5px, 5px) scale(0.9); opacity: 0.2; }
        }
        @keyframes fadeInScaleUp {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.7) rotate(-10deg); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        }
        .animate-fadeInScaleUp {
          animation: fadeInScaleUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%); 
        }
      `}</style>
      {/* Particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="nexus-particle"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 5 + 8}s`,
          }}
        />
      ))}
      <div className="absolute w-4/5 h-4/5 md:w-3/4 md:h-3/4 rounded-full bg-gradient-to-br from-brown-700 via-brown-800 to-brown-700 opacity-50 nexus-glow-1"></div>
      <div className="absolute w-3/5 h-3/5 md:w-2/3 md:h-2/3 rounded-full bg-gradient-to-tl from-brown-600 via-brown-700 to-brown-600 opacity-60 nexus-glow-2"></div>
      <div className="absolute w-1/2 h-1/2 md:w-1/2 md:h-1/2 rounded-full border-2 border-beige-200/30 nexus-ring"></div>
      <div className="absolute w-1/3 h-1/3 md:w-2/5 md:h-2/5 rounded-full bg-gradient-radial from-beige-100/30 via-beige-200/10 to-transparent nexus-core flex items-center justify-center">
         <div className="w-1/2 h-1/2 bg-beige-50/20 rounded-full blur-sm"></div>
      </div>
      
      {IconComponent && (
        <div key={iconKey} className="animate-fadeInScaleUp">
          <IconComponent 
            className="h-16 w-16 md:h-24 md:w-24 text-brown-700 opacity-90" // Changed text color
            style={{ filter: 'drop-shadow(0px 2px 4px rgba(74, 50, 36, 0.2)) drop-shadow(0px 0px 8px rgba(122, 89, 68, 0.15))' }} // Adjusted drop shadow
          />
        </div>
      )}
    </div>
  );
};


const WhyChooseUsSection: React.FC = () => {
  const [selectedItemId, setSelectedItemId] = useState<string>(whyChooseUsData[0].id);

  const selectedItem = whyChooseUsData.find(item => item.id === selectedItemId)!;

  const handleSelectItem = (itemId: string) => {
    if (itemId !== selectedItemId) {
      setSelectedItemId(itemId);
    }
  };

  return (
    <section id="why-choose-us" className="py-16 md:py-20 bg-beige-100 text-brown-900 overflow-hidden"> {/* Changed bg and text */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold text-brown-700 mb-4 tracking-tight">Why Choose CORPEAS?</h2> {/* Changed text */}
          <p className="text-lg text-brown-600 max-w-3xl mx-auto"> {/* Changed text */}
            Pioneering Excellence. Engineered for You.
          </p>
        </AnimatedElement>

        <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-16 min-h-[500px] md:min-h-[550px]">
          {/* Left Column: Nexus Graphic */}
          <AnimatedElement animationType="fadeInLeft" duration="duration-1000" className="md:w-1/2 lg:w-7/12 flex items-center justify-center">
            <NexusGraphic selectedIcon={selectedItem.Icon} iconKey={selectedItem.id} />
          </AnimatedElement>

          {/* Right Column: Interactive Content - Only Buttons */}
          <div className="md:w-1/2 lg:w-5/12 flex flex-col justify-center">
            <AnimatedElement animationType="fadeInRight" duration="duration-1000" delay="delay-200" className="space-y-3">
              {whyChooseUsData.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleSelectItem(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg text-left transition-all duration-300 ease-in-out group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-beige-100 focus-visible:ring-brown-600
                              ${selectedItemId === item.id
                                ? 'bg-brown-700 text-beige-100 shadow-xl scale-[1.02]' // Selected button style
                                : 'bg-white hover:bg-beige-200 text-brown-700 hover:text-brown-800' // Inactive button style
                              }`}
                  aria-pressed={selectedItemId === item.id}
                >
                  <item.Icon 
                    className={`h-6 w-6 mr-3 flex-shrink-0 transition-colors duration-300 
                                ${selectedItemId === item.id ? 'text-beige-100' : 'text-brown-600 group-hover:text-brown-700'}`} // Icon color change
                  />
                  <span className="text-base font-semibold">{item.title}</span>
                </button>
              ))}
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;