"use client";
import React, { useState } from 'react';
import Link from 'next/link';
const ContactUsPage = () => {
    
    // Form data state
    const [formData, setFormData] = useState({
        subject: '',
        fullname:'',
        email: '',
        details: '',
    });

    // Handle input changes for all form fields
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Combine form data with image
        const finalSubmissionData = {
            ...formData
        };

        console.log('Submitted Data:', finalSubmissionData);
    };

    return (
        <div className="max-w-7xl mx-auto lg:mx-20 px-4">
            <div className="flex items-center justify-center h-screen">
                <div className="w-full max-w-md text-center ">
                    <form onSubmit={handleSubmit}>
                                {/* Subject */}
                                <div className="mb-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-4 text-xl pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                        />
                                    </div>
                                </div>
                                {/* FullName */}
                                <div className="mb-6">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="fullname"
                                            placeholder="Full Name"
                                            value={formData.fullname}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-4 text-xl pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                        />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="mb-6">
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-4 text-xl pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                        />
                                    </div>
                                </div>
                                {/* Details */}
                                <div className="mb-6">
                                    <div className="relative">
                                    <textarea 
                                        rows="5" 
                                        cols="50" 
                                        id="details"
                                        value={formData.details}
                                        placeholder="Details"
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-4 text-xl pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                        >{formData.details}</textarea>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-1/2 bg-transparent border border-yellow-500 text-black-500 rounded-r hover:bg-yellow-500 hover:text-white text-center hover:cursor-pointer transition-colors duration-300 py-3 px-6 rounded-lg transition-colors"
                                >
                                    Submit
                                </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactUsPage;
