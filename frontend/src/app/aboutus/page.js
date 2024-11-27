import Link from 'next/link';

function AboutUsPage() {
    return (
      <div className="bg-white text-gray-800 min-h-screen py-16">
  
        <main className="max-w-7xl mx-auto px-4">
        <div className=" py-6">
            <Link href="/">
              <div className="flex justify-center lg:justify-start mb-6">
                <img src="/images/auth/app-logo.svg" alt="Buzzer App Logo" className="" />
              </div>
            </Link>
        </div>
          <section className=" mt-12 px-4">
            <h2 className="text-3xl text-center font-bold mb-4">About Us</h2>
            <span className="flex justify-center mb-4">
              <img src="/images/home/underline.svg" alt="Curve" className="h-auto" />
            </span>
            <p className="text-gray-600 text-start leading-relaxed">
              Saloon services encompass a wide range of beauty and grooming treatments provided by professional salons. These
              establishments cater to individuals seeking to enhance their appearance and pamper themselves. Clients can expect a plethora
              of services designed to cater to their specific needs. These services include expert haircuts and styling, offering a
              personalized touch to transform one's hairstyle. Hair coloring and highlights provide options for clients to change or
              enhance their hair color, creating unique looks. Hair treatments, such as keratin straightening or smoothing, can
              Salons also offer various hair treatments to improve the health and vitality of the hair, such as deep conditioning and
              revitalizing masks. Nail care services like manicures and pedicures ensure well-groomed hands and feet, while facial
              treatments aim to cleanse, rejuvenate, and nourish the skin. Hair removal services, like waxing, threading, or sugaring,
              assist in achieving smooth and hair-free skin. Makeup services cater to special occasions, providing professional application
              and customized looks.
            </p>
          </section>
  
          {/* Contact Information */}
          <section className="text-start mt-10 px-2">
            <div className="flex flex-col justify-start items-start gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="flex justify-center items-center">
                    <img src="/images/aboutus/phone-icon.svg" alt="Phone Icon" />
                </span>
                <span className="font-bold text-xl">+966 0000 000</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex justify-center items-center">
                    <img src="/images/aboutus/location-icon.svg" alt="Phone Icon" />
                </span>
                <span>Main Market, Al-Ain, KSA</span>
              </div>
              <div className="flex justify-between items-center gap-4">
                <span className="flex justify-center items-center">
                    <img src="/images/aboutus/mail-icon.svg" alt="Phone Icon" />
                </span>
                <span>Contact@help.com</span>
              </div>
            </div>
          </section>
  
          {/* Social Media Links */}
          <section className="text-start mt-10 px-2">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-start gap-6">
              <a href="#" className="text-blue-600 text-2xl">
                <img src="/images/aboutus/instagram.svg" alt="Facebook Icon" />
              </a>
              <a href="#" className="text-pink-600 text-2xl">
              <img src="/images/aboutus/facebook.svg" alt="Facebook Icon" />
              </a>
              <a href="#" className="text-blue-400 text-2xl">
              <img src="/images/aboutus/twitter.svg" alt="Facebook Icon" />
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }

export default AboutUsPage;