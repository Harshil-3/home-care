import React from 'react'
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 pt-10 pb-6 px-6 md:px-16">

      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <img className='size-25' src={logo} alt="" />
          <p className="text-sm mt-4">
            Providing trusted and professional caregiving services to ensure
            comfort, safety, and peace of mind for families.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Elderly Care</li>
            <li className="hover:text-white cursor-pointer">Post-Op Nursing</li>
            <li className="hover:text-white cursor-pointer">Babysitting</li>
            <li className="hover:text-white cursor-pointer">Dementia Care</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm">📍 Ahmedabad, India</p>
          <p className="text-sm mt-2">📞 +91 99999 99999</p>
          <p className="text-sm mt-2">✉️ support@homecare.com</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2026 HomeCare Connect. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer;