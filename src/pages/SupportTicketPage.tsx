import React, { useState } from 'react';
import { createSupportTicket, TicketData } from '../services/ticketService';

const SupportTicketPage: React.FC = () => {
    const [formData, setFormData] = useState<TicketData>({
        name: '',
        phone: '',
        email: '',
        service: '',
        description: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await createSupportTicket(formData);
            setSubmitStatus({
                type: 'success',
                message: 'Your ticket is processed in the next 24 h',
            });
            setFormData({ name: '', phone: '', email: '', service: '', description: '' });
        } catch (error: any) {
            console.error(error);
            let errorMessage = 'Failed to raise ticket. Please try again later.';
            if (error.message === "You must be logged in to raise a ticket.") {
                errorMessage = "You must be logged in to raise a ticket. Please sign in first.";
            }
            setSubmitStatus({
                type: 'error',
                message: errorMessage,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="container mx-auto px-4 py-12 max-w-3xl">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-brown-900 mb-4">Support Center</h1>
                <p className="text-lg text-brown-700">
                    Need help with our services? Raise a ticket and we'll resolve it as soon as possible.
                </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-beige-200">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brown-800 mb-1">Full Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full pl-4 pr-4 py-3 bg-beige-50 border border-beige-300 text-brown-900 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-brown-600 focus:border-brown-600 transition-colors placeholder-brown-400"
                                placeholder="Enter your full name"
                            />
                        </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-brown-800 mb-1">Phone Number</label>
                        <div className="relative">
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full pl-4 pr-4 py-3 bg-beige-50 border border-beige-300 text-brown-900 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-brown-600 focus:border-brown-600 transition-colors placeholder-brown-400"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brown-800 mb-1">Email Address</label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full pl-4 pr-4 py-3 bg-beige-50 border border-beige-300 text-brown-900 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-brown-600 focus:border-brown-600 transition-colors placeholder-brown-400"
                                placeholder="Enter your email address"
                            />
                        </div>
                    </div>

                    {/* Service */}
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-brown-800 mb-1">Service Related To</label>
                        <div className="relative">
                            <select
                                name="service"
                                id="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full pl-4 pr-4 py-3 bg-beige-50 border border-beige-300 text-brown-900 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-brown-600 focus:border-brown-600 transition-colors appearance-none"
                            >
                                <option value="" disabled>Select a service</option>
                                <option value="delete_account">Delete Account</option>
                                <option value="others">Others</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-5 h-5 text-brown-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-brown-800 mb-1">Issue Description</label>
                        <div className="relative">
                            <textarea
                                name="description"
                                id="description"
                                rows={5}
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className="w-full pl-4 pr-4 py-3 bg-beige-50 border border-beige-300 text-brown-900 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-brown-600 focus:border-brown-600 transition-colors placeholder-brown-400"
                                placeholder="Please describe your issue in detail..."
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-brown-700 hover:bg-brown-800 text-beige-100 font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-opacity-75 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                        >
                            <span>{isSubmitting ? 'Submitting Ticket...' : 'Raise Ticket'}</span>
                        </button>
                    </div>

                    {/* Status Message */}
                    {submitStatus && (
                        <div
                            role="alert"
                            className={`p-4 rounded-lg text-sm text-center font-medium ${submitStatus.type === 'success'
                                ? 'bg-green-100 text-green-800 border border-green-200'
                                : 'bg-red-100 text-red-800 border border-red-200'
                                }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}
                </form>
            </div>
        </main>
    );
};

export default SupportTicketPage;
