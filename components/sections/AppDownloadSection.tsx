import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';

const AppDownloadSection: React.FC = () => {
  return (
    <section id="app-download" className="py-16 md:py-20 bg-beige-50 border-t border-beige-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Text Content and Buttons */}
          <AnimatedElement 
            animationType="fadeInUp" // Changed from fadeInRight
            duration="duration-1000" 
            className="w-full max-w-2xl mx-auto text-center" // Adjusted for centering
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brown-700 mb-6 tracking-tight">
              Take CORPEAS With You!
            </h2>
            <p className="text-lg text-brown-700 mb-8 leading-relaxed">
              Get our app for the best experience. Order your favorite meals, manage subscriptions, and discover exclusive offers on the go.
              (coming soon!)
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on Google Play"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  alt="Download on Google Play"
                  className="h-12 md:h-14"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on App Store"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  alt="Download on App Store"
                  className="h-12 md:h-14"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                />
              </a>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;