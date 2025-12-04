import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';

// Icons (using existing ones or slight adaptations)
const QualityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ServiceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => ( // Using ReliabilityIcon as a base for "Dedicated Service"
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const InnovationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.354a15.055 15.055 0 01-4.5 0m3.75-10.036C12 6.172 9.879 3.95 7.021 3.012A15.003 15.003 0 002.25 10.5c0 7.732 5.962 14.012 13.519 14.822A15.013 15.013 0 0021.75 10.5c0-2.74-.734-5.273-2.021-7.488S14.828 6.172 12 6.172z" />
  </svg>
);

const storyData = {
  title: "Our Story",
  paragraphs: [
    "CORPEAS was founded with a passion for culinary excellence and a mission to deliver fresh meals, essential products, and reliable services to the modern workplace. Through continuous growth, innovation, and client-focused solutions, CORPEAS has built a reputation for exceeding expectations and fostering long-term partnerships rooted in trust and quality."
  ],
  // imageUrl and imageAlt are kept in data structure but not used in rendering
  imageUrl: "https://picsum.photos/seed/corpeasOfficeCulture/800/650", 
  imageAlt: "A representation of CORPEAS's dedication to quality and service"
};

const corePhilosophies = [
  { 
    id: 'quality', 
    title: 'Unwavering Quality', 
    description: 'From the freshest ingredients to meticulous preparation, excellence is our standard in every offering.', 
    Icon: QualityIcon 
  },
  { 
    id: 'service', 
    title: 'Dedicated Service', 
    description: 'Your needs are our priority. We deliver reliable, personalized experiences with every interaction.', 
    Icon: ServiceIcon 
  },
  { 
    id: 'innovation', 
    title: 'Innovative Spirit', 
    description: 'Embracing creativity and modern solutions to continuously enhance your culinary and service journey.', 
    Icon: InnovationIcon 
  },
];

const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us" className="py-16 md:py-20 bg-beige-100 text-brown-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedElement animationType="fadeInUp" duration="duration-700" className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brown-700 mb-3 tracking-tight">
            About CORPEAS
          </h2>
          <p className="text-lg md:text-xl text-brown-700 max-w-3xl mx-auto">
            Crafting Culinary Experiences with Passion and Precision.
          </p>
        </AnimatedElement>

        {/* Our Story Section */}
        <AnimatedElement animationType="fadeInUp" duration="duration-700" className="mb-16 md:mb-20">
          <div className="flex flex-col">
            <div className="w-full">
              <h3 className="text-4xl font-semibold text-brown-800 mb-6 text-center">{storyData.title}</h3>
              {storyData.paragraphs.map((paragraph, index) => (
                <AnimatedElement
                  key={`story-p-${index}`}
                  animationType="fadeInUp"
                  delay={`delay-${(index + 1) * 150}`} // Staggered delay (150ms, 300ms, etc.)
                  duration="duration-500" // Duration for each paragraph's animation
                  className="mb-4" // Keep margin bottom on the AnimatedElement
                >
                  <p className="text-md md:text-lg text-brown-700 leading-relaxed text-justify md:text-left">
                    {paragraph}
                  </p>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Our Core Philosophy Section */}
        <AnimatedElement animationType="fadeInUp" duration="duration-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {corePhilosophies.map((philosophy, index) => (
              <AnimatedElement 
                key={philosophy.id} 
                animationType="fadeInUp" 
                delay={`delay-${100 + index * 100}`} 
                duration="duration-500"
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <philosophy.Icon className="h-12 w-12 text-brown-600" />
                </div>
                <h4 className="text-2xl font-semibold text-brown-700 mb-2">{philosophy.title}</h4>
                <p className="text-brown-600 leading-relaxed text-base max-w-xs mx-auto">{philosophy.description}</p>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
        
      </div>
    </section>
  );
};

export default AboutUsSection;
