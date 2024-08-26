import { useState, useEffect } from "react";
import logoSite from "../assets/images/logo/logo-site.png";


const Header = () => {
  return (
    <>
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            <img 
                src={logoSite}
                className="h-14"
            />
          </a>
          <ul className="flex space-x-6 font-title text-xl">
            <li>
              <a href="#" className="text-blue-800 hover:text-blue-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Contact
              </a>
            </li>
          </ul>
          <a href="#" className="transition btn-quote hover:bg-orange-500">Request a Quote</a>
        </div>
        
      </nav>

    </>
  );
};

export default Header;
