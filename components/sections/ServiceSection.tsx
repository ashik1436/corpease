import React, { useState, useEffect } from 'react';
import AnimatedElement from '../ui/AnimatedElement';
// Removed ServiceCategory import as it's no longer used for listing here
// import { ServiceCategory } from '../../types'; 

// Import detail components
import ReadyToEatDetail from './service/details/ReadyToEatDetail';
import FMCGProductsDetail from './service/details/FMCGProductsDetail';
import CorporateGiftingDetail from './service/details/CorporateGiftingDetail';
import OfficeSuppliesDetail from './service/details/OfficeSuppliesDetail';
import LiveCounterDetail from './service/details/LiveCounterDetail';

// Removed placeholder icons and serviceCategories array as they are no longer displayed here.

const serviceDetailsMap: Record<string, React.FC<{ onBack: () => void }>> = {
  'ready-to-eat': ReadyToEatDetail,
  'fmcg-products': FMCGProductsDetail,
  'corporate-gifting': CorporateGiftingDetail,
  'office-supplies': OfficeSuppliesDetail,
  'live-counter': LiveCounterDetail,
};

const ServiceSection: React.FC = () => {
  const [selectedServiceKey, setSelectedServiceKey] = useState<string | null>(null);

  useEffect(() => {
    const handleNavigate = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail && customEvent.detail.serviceKey) {
        const serviceKey = customEvent.detail.serviceKey;
        if (serviceDetailsMap[serviceKey]) {
          setSelectedServiceKey(serviceKey);
          setTimeout(() => {
            document.getElementById('service-details-content')?.scrollIntoView({ behavior: 'smooth', block: 'start'});
          }, 0); // Reduced delay for faster scroll
        }
      }
    };

    const handleClearDetail = () => {
      setSelectedServiceKey(null);
      // Optional: If you want to scroll back up to the slider when a detail is cleared
      // This might be useful if the user is far down the page.
      // const coreOfferingsSection = document.getElementById('core-offerings');
      // if (coreOfferingsSection) {
      //    coreOfferingsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // }
    };

    document.addEventListener('navigateToServiceDetail', handleNavigate);
    document.addEventListener('clearServiceDetail', handleClearDetail); // Listen for the new event

    return () => {
      document.removeEventListener('navigateToServiceDetail', handleNavigate);
      document.removeEventListener('clearServiceDetail', handleClearDetail); // Cleanup
    };
  }, []); 


  const handleBack = () => {
    const previousSelectedKey = selectedServiceKey;
    setSelectedServiceKey(null);
    // Scroll back to the 'Our Core Offerings' slider section
    // or to the service in the slider that was just closed
    const targetId = previousSelectedKey || 'core-offerings';
    const elementToScrollTo = document.getElementById(targetId) || document.getElementById('core-offerings');

    setTimeout(() => {
        elementToScrollTo?.scrollIntoView({ behavior: 'smooth', block: 'center'});
    },0);
  };

  const DetailComponent = selectedServiceKey ? serviceDetailsMap[selectedServiceKey] : null;

  const baseSectionClasses = "bg-beige-100 transition-all duration-500 ease-in-out";
  // Reduced top padding (pt-6 md:pt-8) to minimize empty space when a service detail is active.
  const activeSectionClasses = "pt-6 pb-10 md:pt-8 md:pb-16 min-h-[60vh]"; 
  const inactiveSectionClasses = "py-10 md:py-16"; 

  const sectionClassName = DetailComponent
    ? `${baseSectionClasses} ${activeSectionClasses}`
    : `${baseSectionClasses} ${inactiveSectionClasses}`;

  return (
    <section id="service" className={sectionClassName}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" id="service-details-content">
        {DetailComponent && (
          <AnimatedElement animationType="fadeIn" key={selectedServiceKey}> {/* Key ensures re-animation on component change */}
             <DetailComponent onBack={handleBack} />
          </AnimatedElement>
        )}

        {/* The placeholder card that was previously here has been removed. */}
        {/* When !DetailComponent, this section will now be empty but retain its padding. */}
        {/* 
          Example of the removed content:
          !DetailComponent && (
            <AnimatedElement animationType="fadeIn" className="text-center">
                 <div className="flex flex-col items-center justify-center min-h-[30vh] bg-white/50 p-8 rounded-xl shadow-lg border border-beige-200">
                    <svg>...</svg>
                    <h3>Explore Our Services</h3>
                    <p>Select an offering...</p>
                 </div>
            </AnimatedElement>
          )
        */}
      </div>
    </section>
  );
};

export default ServiceSection;
