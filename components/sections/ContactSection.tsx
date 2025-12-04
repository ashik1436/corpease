import React, { useState, FormEvent } from 'react';
import AnimatedElement from '../ui/AnimatedElement';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields.' });
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call (for iframe communication)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We\'ll be in touch soon.' });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-beige-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp" className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl font-bold text-brown-700 mb-4 tracking-tight">Let's Connect</h2>
          <p className="text-lg text-brown-700 max-w-2xl mx-auto">
            Have a question in mind? We're here to help. Reach out and let's start a conversation.
          </p>
        </AnimatedElement>

        <AnimatedElement animationType="fadeInUp" delay="delay-200">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border border-beige-200">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column: Contact Info */}
              <div className="text-brown-800">
                <h3 className="text-2xl font-semibold text-brown-700 mb-4">Contact Information</h3>
                <p className="mb-6 text-brown-700 leading-relaxed">
                  Our team is ready to assist you with any inquiries. Whether you're planning an event, looking for corporate solutions, or just want to know more, feel free to get in touch.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brown-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Email Us</h4>
                      <a href="mailto:info@corpeasfoods.com" className="text-brown-700 hover:text-brown-600 transition-colors">business@corpeas.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brown-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.031 11.031 0 005.516 5.516l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Call Us</h4>
                      <a href="tel:+1234567890" className="text-brown-700 hover:text-brown-600 transition-colors">+91 9916198492</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brown-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Our Office</h4>
                      <p className="text-brown-700">#392. 2nd Floor, 7th Main Rd, BTM 2nd stage. Bengaluru 580076</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Iframe */}
              <div className="space-y-5">
                <iframe
                  src="/contact-form.html"
                  title="Contact Form"
                  className="w-full h-[600px] border-none rounded-lg"
                />
                {submitStatus && (
                  <div 
                    role="alert"
                    className={`p-3 rounded-md text-sm text-center ${
                      submitStatus.type === 'success' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default ContactSection;