import React from 'react';
import { Link } from "react-router-dom";

const SocialLink: React.FC<{ href: string; ariaLabel: string; children: React.ReactNode }> = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-beige-300 hover:text-beige-100 transition-colors duration-300"
  >
    {children}
  </a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-900 text-beige-200 py-10 md:py-12"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-brown-300">CORPEAS</h3>
            <p className="text-sm text-beige-300 mt-1">Curated Crafted, Delivered.</p>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold text-brown-300 mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-beige-300 hover:text-beige-100 transition-colors duration-300">Terms &amp; Conditions</Link></li>
              <li><Link to="/privacy" className="text-beige-300 hover:text-beige-100 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/refund-cancel" className="text-beige-300 hover:text-beige-100 transition-colors duration-300">Refund &amp; Cancellation Policy</Link></li>
              <li><Link to="/return" className="text-beige-300 hover:text-beige-100 transition-colors duration-300">Return Policy</Link></li>
              <li><Link to="/shipping" className="text-beige-300 hover:text-beige-100 transition-colors duration-300">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-6 my-6">
          <SocialLink href="https://www.facebook.com/share/1Bk5KGjtdw/" ariaLabel="Corpeas on Facebook">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </SocialLink>
          <SocialLink href="https://www.instagram.com/corpeas?igsh=MXVuMjl6MnEzZmM4OA==" ariaLabel="Corpeas on Instagram">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.001 1.802c-2.393 0-2.713.01-3.663.052-1.002.046-1.503.208-1.862.356-.423.168-.723.373-1.02.668-.297.297-.5.598-.668 1.02-.148.359-.31.86-.356 1.862-.043.95-.052 1.27-.052 3.663s.01 2.713.052 3.663c.046 1.002.208 1.503.356 1.862.168.423.373.723.668 1.02.297.297.598.5.98.668.359.148.86.31 1.862.356.95.043 1.27.052 3.663.052s2.713-.01 3.663-.052c1.002-.046 1.503-.208 1.862-.356.423-.168.723-.373 1.02-.668.297-.297.5-.598.668-1.02.148-.359.31-.86.356-1.862.043-.95.052-1.27.052-3.663s-.01-2.713-.052-3.663c-.046-1.002-.208-1.503-.356-1.862a3.097 3.097 0 00-.668-1.02 3.097 3.097 0 00-1.02-.668c-.359-.148-.86-.31-1.862-.356-.95-.043-1.27-.052-3.663-.052zM12 6.836a5.164 5.164 0 100 10.328 5.164 5.164 0 000-10.328zm0 8.528a3.364 3.364 0 110-6.728 3.364 3.364 0 010 6.728zM16.965 6.575a1.245 1.245 0 100 2.49 1.245 1.245 0 000-2.49z" clipRule="evenodd" />
            </svg>
          </SocialLink>
          <SocialLink href="https://x.com/corpeas2025?t=na7NIMbY-gvM20tDAfgFlg&s=09" ariaLabel="Corpeas on Twitter (X)">
             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/corp-eas-3b8b0436a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ariaLabel="Corpeas on LinkedIn">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
            </svg>
          </SocialLink>
        </div>

        <p className="text-sm text-beige-300 text-center">
          &copy; {currentYear} Corpeas Services. All rights reserved.
        </p>
         
      </div>
    </footer>
  );
};

export default Footer;