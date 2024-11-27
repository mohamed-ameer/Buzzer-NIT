import React from 'react';
import { Lock } from 'lucide-react';
const confirmLoginCode = () => {
  return (
    <div className="max-w-7xl mx-auto lg:mx-20 px-4">
      <div className="flex items-center justify-between h-screen">
        <div className="w-full max-w-md text-center lg:text-start">
          <div className="px-6 py-8 ">
            <div className="flex justify-center lg:justify-start mb-6">
              <img src="/images/auth/app-logo.svg" alt="Buzzer App Logo" className="" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Login Code</h2>
            <p className="text-gray-600 mb-8">
              Enter the authentication code we sent at **********896
            </p>
            <form>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    placeholder="0123456789"
                    className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                  />
                </div>
              </div>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="number"
                    id="logincode"
                    placeholder="Login Code"
                    className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-transparent border border-yellow-500 text-black-500 rounded-r hover:bg-yellow-500 hover:text-white transition-colors duration-300 py-3 px-6 rounded-lg transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="/images/auth/login-code-illustration.svg"
            alt="Buzzer App Illustration"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default confirmLoginCode;