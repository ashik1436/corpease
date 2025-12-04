import React from 'react';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import AboutUsSection from './components/sections/AboutUsSection';
import ServiceShowcaseSlider from './components/sections/ServiceShowcaseSlider';
import ServiceSection from './components/sections/ServiceSection';
import ContactSection from './components/sections/ContactSection';
import AppDownloadSection from './components/sections/AppDownloadSection';
import Footer from './components/Footer';
import BackToTopButton from './components/ui/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-beige-100 text-brown-900 font-sans">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <ServiceShowcaseSlider className="mt-0" /> {/* Removed margin-top to eliminate space */}
        <ServiceSection /> {/* Service details section for Explore More */}
        {/* <AnimatedStatsSection /> */}
        <ContactSection />
        <AppDownloadSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;