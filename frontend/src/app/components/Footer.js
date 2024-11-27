import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerStyle = {
    backgroundImage: 'url("/images/footer/footer-bg.png")', // Replace with your actual image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  };

  return (
    <footer style={footerStyle} className="relative text-white mt-auto">
      {/* Dark overlay */}
      <div style={overlayStyle} className="absolute inset-0"></div>

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
                <img src='/images/navbar/nav-icon.svg' className=''/>
            </div>
            <p className="text-gray-300 mb-6">
              These guys have been absolutely outstanding. When I needed them they came through in a big way! I know that if you buy this theme.
            </p>
            <div className="space-y-3">
              <h3 className="font-bold text-lg mb-4">CONTACT INFO</h3>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>+91 1234567891</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span>munasbas007@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Account Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6">ACCOUNT</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6">LEGALS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500">Terms & Condition</a></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-6">SUBSCRIBE</h3>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l focus:outline-none focus:border-yellow-500"
                />
                <button className="px-6 py-2 bg-transparent border border-yellow-500 text-yellow-500 rounded-r hover:bg-yellow-500 hover:text-black transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="rounded-full hover:bg-gray-700 transition-colors duration-300">
              <img src='/images/footer/twitter-icon.svg' className=''/>
              </a>
              <a href="#" className="rounded-full hover:bg-gray-700 transition-colors duration-300">
              <img src='/images/footer/facebook-icon.svg' className=''/>
              </a>
              <a href="#" className="rounded-full hover:bg-gray-700 transition-colors duration-300">
              <img src='/images/footer/youtube-icon.svg' className=''/>
              </a>
              <a href="#" className="rounded-full hover:bg-gray-700 transition-colors duration-300">
              <img src='/images/footer/instagram-icon.svg' className=''/>
              </a>
              <a href="#" className="rounded-full hover:bg-gray-700 transition-colors duration-300">
                <img src='/images/footer/linkedin-icon.svg' className=''/>
              </a>
            </div>
            <p className="md:absolute right-0 text-gray-400 text-sm">
              @2023 For Salone All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;