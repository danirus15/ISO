import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css"
// Import images
import heroImage1 from "./assets/images/hero/1.png";
import heroImage2 from "./assets/images/hero/2.png";
import heroImage3 from "./assets/images/hero/3.png";

const heroImages = [heroImage1, heroImage2, heroImage3];

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true, // Optional: for fade transition
  };

  return (
    <>
      <nav className="bg-navy p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            EnergyCorp
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="relative text-white overflow-hidden">
        <Slider {...settings} className="w-full h-[50vh]">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Leading the Future of Energy
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Innovative solutions for a sustainable tomorrow.
            </p>
            <a
              href="#"
              className="bg-white text-navy py-2 px-6 rounded-lg font-semibold hover:bg-gray-200"
            >
              Get Started
            </a>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-navy text-white py-2 overflow-hidden opacity-75">
            <div className="whitespace-nowrap animate-marquee backdrop-blur-sm">
              <p className="inline-block px-4">
                Breaking News: New energy solutions unveiled! | Breaking News:
                Major renewable energy breakthrough! | Breaking News:
                Industry-leading innovations coming soon!
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real-Time Data Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Insight 1</h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tincidunt, nunc vel laoreet scelerisque, quam velit euismod
                  risus.
                </p>
                <a href="#" className="text-navy font-semibold hover:underline">
                  Learn More
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Insight 2</h3>
                <p className="text-gray-700 mb-4">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className="text-navy font-semibold hover:underline">
                  Learn More
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Insight 3</h3>
                <p className="text-gray-700 mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <a href="#" className="text-navy font-semibold hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row bg-navy items-center py-16 px-4 h-[55vh]">
        {/* Text and Button */}
        <div className="lg:w-1/2 lg:pr-8 mb-8 flex flex-col gap-4 lg:mb-0 text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Empower Your Business with Our Solutions
          </h2>
          <p className="text-lg mb-6">
            Discover innovative tools and strategies designed to elevate your
            business performance. Our solutions are tailored to meet your unique
            needs and help you achieve your goals effectively.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white py-5 px-6 w-[20%] text-center rounded-lg font-semibold hover:bg-blue-600"
          >
            Learn More
          </a>
        </div>
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={heroImage2}
            alt="Business Solutions"
            className="w-full h-[50vh] object-cover rounded-lg shadow-lg"
          />
        </div>
          </section>
          

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Real-Time Data Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Insight 1"
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Insight 1</h3>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  tincidunt, nunc vel laoreet scelerisque, quam velit euismod
                  risus.
                </p>
                <a href="#" className="text-navy font-semibold hover:underline">
                  Learn More
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Insight 2"
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Insight 2</h3>
                <p className="text-gray-600 mb-4">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#" className="text-navy font-semibold hover:underline">
                  Learn More
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/400x250"
                alt="Insight 3"
                className="w-full h-32 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Insight 3</h3>
                <p className="text-gray-600 mb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
                <a href="#" className="text-navy font-semibold hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy text-white py-12">
        <div className="container mx-auto text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <p className="text-lg mb-4">
              &copy; 2024 EnergyCorp. All rights reserved.
            </p>
            <p className="text-sm mb-4">
              1234 Energy Drive, Suite 100, Metropolis, CA 90001
            </p>
            <p className="text-sm mb-4">
              Email:{" "}
              <a href="mailto:info@energycorp.com" className="underline">
                info@energycorp.com
              </a>
            </p>
            <p className="text-sm mb-4">
              Phone:{" "}
              <a href="tel:+1234567890" className="underline">
                (123) 456-7890
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>{" "}
              {/* Add your icon library */}
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"></i> {/* Add your icon library */}
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>{" "}
              {/* Add your icon library */}
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i> {/* Add your icon library */}
            </a>
          </div>

          {/* Sitemap */}
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
