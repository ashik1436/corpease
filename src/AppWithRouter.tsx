import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/sections/HeroSection';
import AboutUsSection from '../components/sections/AboutUsSection';
import ServiceShowcaseSlider from '../components/sections/ServiceShowcaseSlider';
import ServiceSection from '../components/sections/ServiceSection';
import ContactSection from '../components/sections/ContactSection';
import AppDownloadSection from '../components/sections/AppDownloadSection';
import Footer from '../components/Footer';
import BackToTopButton from '../components/ui/BackToTopButton';

// Legal pages
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import RefundCancelPage from './pages/RefundCancelPage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import SupportTicketPage from './pages/SupportTicketPage';
import LegalPage from './pages/LegalPage';

// Scroll to top component to handle navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppWithRouter: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-beige-100 text-brown-900 font-sans">
        <Header />
        <main className="flex-grow">
          <ScrollToTop />
          <Routes>
            {/* Home page - shows all sections */}
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutUsSection />
                <ServiceShowcaseSlider className="mt-0" />
                <ServiceSection />
                <ContactSection />
                <AppDownloadSection />
              </>
            } />
            {/* Support Ticket page */}
            <Route path="/support-ticket" element={<SupportTicketPage />} />
            {/* Legal pages - standalone pages */}
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/refund-cancel" element={<RefundCancelPage />} />
            <Route path="/return" element={<ReturnPolicyPage />} />
            <Route path="/shipping" element={<ShippingPolicyPage />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
};

export default AppWithRouter;