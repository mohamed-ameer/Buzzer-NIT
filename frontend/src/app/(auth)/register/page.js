"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const BuzzerAppRegister = () => {
    const [nextStep, setNextStep] = useState(false);
    const [image, setImage] = useState(null);
    
    // Form data state
    const [formData, setFormData] = useState({
        type: 'cafe',
        fullName: '',
        email: '',
        phone: '',
        password: '',
        address: '',
        city: ''
    });

    // Handle input changes for all form fields
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const uploadedImage = e.target.files[0];
        setImage(uploadedImage);
    };
  
    // Remove uploaded image
    const removeImage = () => {
        setImage(null);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Combine form data with image
        const finalSubmissionData = {
            ...formData,
            image: image
        };

        // Here you would typically send the data to your backend
        console.log('Submitted Data:', finalSubmissionData);
        
        // Example of how you might send data (replace with your actual API call)
        // sendRegistrationData(finalSubmissionData);
    };

    return (
        <div className="max-w-7xl mx-auto lg:mx-20 px-4">
            <div className="flex items-center justify-between h-screen">
                <div className="w-full max-w-md text-center lg:text-start">
                    <div className="px-6 py-8 pb-0 ">
                        <Link href="/">
                            <div className="flex justify-center lg:justify-start mb-6">
                                <img src="/images/auth/app-logo.svg" alt="Buzzer App Logo" className="" />
                            </div>
                        </Link>
                        <h2 className="text-2xl font-bold mb-4">Register As Cafe/Restaurant</h2>
                        <p className="text-gray-600 mb-4">
                            Register Now
                        </p>
                        <form onSubmit={handleSubmit}>
                            {!nextStep && (
                                <>
                                    {/* Type */}
                                    <div className="mb-6">
                                        <div className="relative">
                                            <select
                                                id="type"
                                                value={formData.type}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                            >
                                                <option value="cafe">Cafe</option>
                                                <option value="restaurant">Restaurant</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* Full Name */}
                                    <div className="mb-6">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="fullName"
                                                placeholder="Full Name"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
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
                                                className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    {/* Phone */}
                                    <div className="mb-6">
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className="mb-6">
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="password"
                                                placeholder="Password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="w-full bg-transparent border border-yellow-500 text-black-500 rounded-r hover:bg-yellow-500 hover:text-white text-center hover:cursor-pointer transition-colors duration-300 py-3 px-6 rounded-lg transition-colors"
                                        onClick={() => setNextStep(true)}
                                    >
                                        Next
                                    </div>
                                </>
                            )}

                            {nextStep && (
                                <>
                                    {/* Address */}
                                    <div className="mb-6">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="address"
                                                placeholder="Address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    {/* City */}
                                    <div className="mb-6">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="city"
                                                placeholder="City"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    {/* Image Upload */}
                                    <label 
                                        htmlFor="uploadFile1"
                                        className="mb-6 bg-white text-gray-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                                            <path
                                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                                data-original="#000000" 
                                            />
                                            <path
                                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                                data-original="#000000" 
                                            />
                                        </svg>
                                        {image ? image.name : 'Upload file'}
                                        <input 
                                            type="file" 
                                            id='uploadFile1' 
                                            className="hidden" 
                                            onChange={handleImageUpload}
                                            accept=".png,.jpg,.svg,.webp,.gif"
                                        />
                                        <p className="text-xs font-medium text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
                                    </label>
                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-transparent border border-yellow-500 text-black-500 rounded-r hover:bg-yellow-500 hover:text-white text-center hover:cursor-pointer transition-colors duration-300 py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Submit
                                    </button>
                                </>
                            )}
                        </form>
                        <div className="px-6 py-4 text-center">
                            <p className="text-gray-600">Already have an Account? <Link href="/login" passHref className="text-red-400 font-medium">Login</Link></p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    {nextStep
                    ?
                    <img
                    src="/images/auth/register-next-illustration.svg"
                    alt="Buzzer App Illustration"
                    className=""
                    />
                    :
                    <img
                    src="/images/auth/register-illustration.svg"
                    alt="Buzzer App Illustration"
                    className=""
                    />
                    }  
                </div>
            </div>
        </div>
    );
};

export default BuzzerAppRegister;