import { useState, useEffect } from "react";
import logoSite from "../assets/images/logo/logo-site.png";


const Footer = () => {
  return (
    <>
      <footer className="bg-[#003366] text-white py-20">
        <div className="container mx-auto text-center">
          <div className="flex flex-row justify-between">
            <div className="basis-1/3 justify-items-center">
                <img src={logoSite} className="h-20 ml-20"/>
            </div>
            <div className="basis-1/3 text-left font-title">
                 <div className="text-xl font-bold">Reach Us</div>
                <div className="pt-6 flex flex-row">
                    <div>
                    <img className="mr-6" src="/src/assets/images/icons/bxs_phone-call.png" alt="" style={{height:20}}/>
                    </div><div>+254 768 794629</div>
                </div>
                <div className="pt-2 flex flex-row">
                    <div>
                    <img className="mr-6" src="/src/assets/images/icons/ic_sharp-email.png" alt="" style={{height:20}}/>
                    </div><div>info@pentonenergy.com</div>
                </div>
                <div className="pt-2 flex flex-row">
                    <div>
                    <img className="mr-6" src="/src/assets/images/icons/carbon_location-filled.png" alt="" style={{height:20}}/>
                    </div><div>Ruiru, Kenya</div>
                </div>
            </div>
            <div className="basis-1/3 text-left">
            <div className="text-xl font-bold font-title mb-6">Quick Links</div>
                <a href="#" className="block">Home</a>
                <a href="#" className="block">Services</a>
                <a href="#" className="block">Contact</a>
                <a href="#" className="block">Projects</a>
            </div>
          </div>
        </div>


      </footer>

    </>
  );
};

export default Footer;
