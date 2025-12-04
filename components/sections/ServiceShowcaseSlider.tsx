import React, { useState, useMemo, useEffect, useRef } from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { ShowcaseService } from '../../types';

const ServiceShowcaseSlider: React.FC<{ className?: string }> = ({ className }) => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [mobileExpandedServiceId, setMobileExpandedServiceId] = useState<string | null>(null);

  const services: ShowcaseService[] = useMemo(() => [
    {
      id: 'ready-to-eat',
      shortTitle: 'Corpeas FreshServe',
      imageUrl: '/images/ready/logo.jpg',
      altText: 'Assortment of ready-to-eat meals',
      title: 'Ready-to-Eat Food Solutions',
      content: (
        <>
          <p className="mb-2">Delicious Ready-to-Eat meals featuring fresh salads, global snacks, combo boxes, Indian snacks, Tasty Chats, and authentic South & North Indian cuisines perfectly crafted for taste, health, freshness, and ultimate convenience</p>
          <ul className="list-disc list-inside space-y-1 mb-2">
          </ul>
        </>
      ),
      cta: { text: 'Explore More', actionType: 'serviceDetail', target: 'ready-to-eat' },
    },
    {
      id: 'fmcg-products',
      shortTitle: 'Corpeas Market Connect',
      imageUrl: '/images/fmcg/1.jpg', // Updated
      altText: 'Various FMCG products',
      title: 'FMCG Procurement & Facilitation Services',
      content: (
        <>
          <p className="mb-2">Streamline your procurement with our comprehensive FMCG solutions. We specialize in bulk ordering for companies, offering a wide selection of essentials.</p>
        </>
      ),
      cta: { text: 'Explore More', actionType: 'serviceDetail', target: 'fmcg-products' },
    },
    {
      id: 'corporate-gifting',
      shortTitle: 'Corpeas Gifting Studio',
      imageUrl: '/images/gifts/corporate_gift.jpg', // Updated
      altText: 'Corporate gift items',
      title: 'Corporate Gifting Solutions',
      content: (
        <>
          <p className="mb-2">Strengthen business ties with our curated, customizable gifts, including branded bags and premium bottles, tailored to reflect your company’s unique identity</p>
        </>
      ),
      cta: { text: 'Explore More', actionType: 'serviceDetail', target: 'corporate-gifting' },
    },
    {
      id: 'office-housekeeping',
      shortTitle: 'Corpeas WorkEssentials',
      imageUrl: '/images/office/logo1.jpg', // Updated (Office pantry items)
      altText: 'Housekeeping & Office Supply Management',
      title: 'Housekeeping & Office Supply Management',
      content: (
        <>
          <p className="mb-2">Elevate your workplace with our high-quality stationery, pantry, and housekeeping essentials, designed for peak productivity and a clean, professional environment.</p>
        </>
      ),
      cta: { text: 'Explore More', actionType: 'serviceDetail', target: 'office-supplies' },
    },
    {
      id: 'live-counter',
      shortTitle: 'Corpeas LiveBite',
      imageUrl: '/images/live/live.jpg',  // Updated
      altText: 'On-Site Culinary Experiences for Corporate Spaces',
      title: 'On-Site Culinary Experiences for Corporate Spaces',
      content: (
        <>
          <p className="mb-2">Add a dynamic and engaging culinary experience to your events with our interactive live counters. Our professional chefs prepare fresh delicacies on-site, delighting your guests.</p>
        </>
      ),
      cta: { text: 'Explore More', actionType: 'scroll', target: 'contact' },
    },
    {
      id: 'techmotion',
      shortTitle: 'Corpeas TechMotion',
      imageUrl: '/images/techmotion/techmotion.png',
      altText: 'Intelligent robotic tugs for workplace logistics',
      title: 'Robotic Tug Solutions',
      content: (
        <>
          <p className="mb-2">Revolutionize workplace logistics with our intelligent robotic tugs, engineered to automate material movement across offices and campuses — delivering unmatched efficiency, safety, and precision in every motion.</p>
        </>
      ),
      cta: { text: 'Coming Soon', actionType: 'scroll', target: 'contact' },
    },
  ], []);

  useEffect(() => {
    if (services.length > 0 && !activeServiceId) { // Ensure it only sets on initial load if not already set
      setActiveServiceId(services[0].id); 
    }
  }, [services, activeServiceId]);

  const handleDesktopNavClick = (serviceId: string) => {
    if (activeServiceId !== serviceId) {
      setActiveServiceId(serviceId);
      const event = new CustomEvent('clearServiceDetail');
      document.dispatchEvent(event);
    }
  };

  const toggleMobileAccordion = (serviceId: string) => {
    const isOpeningNew = mobileExpandedServiceId !== serviceId && mobileExpandedServiceId !== null;
    const willBeOpen = mobileExpandedServiceId !== serviceId;

    setMobileExpandedServiceId(prevId => (prevId === serviceId ? null : serviceId));
    
    if (willBeOpen) { // If a service tab will be open (either a new one, or re-opening the same one)
      setActiveServiceId(serviceId); // Sync activeServiceId for potential content consistency
      if (isOpeningNew || mobileExpandedServiceId === null) { // If opening a new tab or opening a tab when none were open
        const event = new CustomEvent('clearServiceDetail');
        document.dispatchEvent(event);
      }
    }
  };
  
  const handleCtaClick = (cta: ShowcaseService['cta']) => {
    if (!cta) return;

    // Ensure the main slider view reflects the service whose "Explore More" was clicked
    if(activeServiceId !== cta.target && cta.actionType === 'serviceDetail') {
        setActiveServiceId(cta.target);
        if(mobileExpandedServiceId !== null && mobileExpandedServiceId !== cta.target) {
            setMobileExpandedServiceId(cta.target); // Also update mobile accordion if it's open on a different item
        }
    }


    if (cta.actionType === 'scroll') {
      document.getElementById(cta.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (cta.actionType === 'serviceDetail') {
      const event = new CustomEvent('navigateToServiceDetail', { detail: { serviceKey: cta.target } });
      document.dispatchEvent(event);
    }
  };

  const currentActiveService = services.find(s => s.id === activeServiceId);

  // Animation delays for staggered entrance
  const animationDelays = [
    'delay-100',
    'delay-200',
    'delay-300',
    'delay-400',
    'delay-500',
    'delay-600'
  ];

  return (
    <section id="core-offerings" className={`py-16 md:py-20 bg-beige-200 ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp" duration="duration-1000" className="text-center">
          <h2 className="text-4xl md:text-5xl font-pacifico font-bold text-brown-700 mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-brown-700 max-w-3xl mx-auto mb-10 md:mb-16">
            Discover the comprehensive suite of services CORPEAS provides, meticulously designed to cater to your culinary preferences, corporate requirements, and supply needs with unmatched quality and innovation.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4"> {/* Increased gap and padding */}
          {services.map((service, index) => (
            <AnimatedElement
              key={service.id}
              animationType="fadeInUp"
              delay={`delay-${index * 100}`}
              duration="duration-500"
              className="service-item group relative h-[300px] md:h-[350px] rounded-md shadow-md overflow-hidden cursor-pointer bg-brown-800 w-[90%] mx-auto" // Reduced height and increased width
            >
              {/* Image and Overlay */}
              <div className="absolute inset-0 service-img">
                <img
                  src={service.imageUrl}
                  alt={service.altText}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/70" aria-hidden="true"></div>
              </div>

              {/* Initial Content (Bottom) - Fades out on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-2 flex flex-col items-center justify-end text-center transition-all duration-300 ease-out group-hover:opacity-0 group-hover:-translate-y-4">
                <div className="bg-brown-700/80 backdrop-blur-sm text-center rounded-md py-2 px-3 mx-auto mb-1 shadow-md max-w-[75%]"> {/* Increased heading size below button */}
                  <h4 className="text-beige-100 text-lg font-semibold truncate" title={service.shortTitle}> {/* Increased font size for 'Our Services' headings */}
                    {service.shortTitle}
                  </h4>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleCtaClick(service.cta!); }}
                  className="bg-beige-100 text-brown-600 rounded-full py-2 px-4 text-lg font-semibold shadow-md hover:bg-beige-200 transition-colors" // Increased button text size
                  aria-label={`Explore ${service.shortTitle}`}
                >
                  Explore More
                </button>
              </div>

              {/* Hover Content (Centered) - Fades in on hover */}
              <div className="absolute inset-0 p-2 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out group-hover:translate-y-0 translate-y-4">
                <h4 className="text-beige-50 text-3xl font-bold mb-1" title={service.title}>
                  {service.title}
                </h4>
                <div className="text-beige-200 text-xs mb-1 max-h-[70px] overflow-y-auto scrollbar-hide line-clamp-3 leading-relaxed px-2"> {/* Adjusted padding */}
                  {service.content}
                </div>
                {service.cta && (
                  <button
                    onClick={(e) => { e.stopPropagation(); handleCtaClick(service.cta!); }}
                    className="bg-brown-500 hover:bg-brown-600 text-beige-100 rounded-full py-2 px-4 text-lg font-bold shadow-lg transition-colors"
                    aria-label={`Explore more about ${service.title}`}
                  >
                    {service.cta.text}
                  </button>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcaseSlider;