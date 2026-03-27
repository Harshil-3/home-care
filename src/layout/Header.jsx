import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"


function Header() {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="size-15">
          <img className='' src={logo} alt="" />
        </div>

        <div className="hidden md:flex gap-8 text-gray-600 font-medium text-center">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/Find_care" className="hover:text-blue-600">
          Find Caregiver
          </Link>
          <Link to="/Services" className="hover:text-blue-600">
          Services
          </Link>
        </div>


        <div className="flex gap-3">
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50">
            Become a Caregiver
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Link to={"/Loginpage"}>Login</Link>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header