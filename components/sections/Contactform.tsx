 import React from 'react';

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  submitStatus: { type: 'success' | 'error'; message: string } | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, onChange, onSubmit, isSubmitting, submitStatus }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brown-800 mb-1">Full Name</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brown-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={onChange}
            required
            className="w-full pl-10 pr-4 py-3 bg-beige-50 border border-beige-300 text-brown-900 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-brown-600 focus:border-brown-600 transition-colors placeholder-brown-400"
            placeholder="John Doe"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brown-800 mb-1">Email Address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brown-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={onChange}
            required
            className="w-full pl-10 pr-4 py-3 bg-beige-50 border border-beige-300 text-brown-900 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-brown-600 focus:border-brown-600 transition-colors placeholder-brown-400"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brown-800 mb-1">Message</label>
        <div className="relative">
          <div className="absolute top-3.5 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brown-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zm-4 0H9v2h2V9z" clipRule="evenodd" />
            </svg>
          </div>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={onChange}
            required
            className="w-full pl-10 pr-4 py-3 bg-beige-50 border border-beige-300 text-brown-900 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-brown-600 focus:border-brown-600 transition-colors placeholder-brown-400"
            placeholder="Your message..."
          />
        </div>
      </div>

      {/* Button & Status */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brown-700 hover:bg-brown-800 text-beige-100 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-opacity-75 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 16.571V11.691l4.066 4.066a1 1 0 001.414-1.414l-4.066-4.066V4.286a1 1 0 00-1.429-1.169L10.894 2.553z" />
          </svg>
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>
      </div>

      {submitStatus && (
        <div
          role="alert"
          className={`p-3 rounded-md text-sm text-center ${
            submitStatus.type === 'success'
              ? 'bg-green-100 text-green-700 border border-green-300'
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
