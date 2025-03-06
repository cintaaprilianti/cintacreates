import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="w-full fixed top-0 left-0 bg-gray-400 bg-opacity-80 backdrop-blur-md shadow-lg px-4 py-2 transition-all duration-300">
            <div className="sm:hidden w-full px-4">
                <label htmlFor="Tab" className="sr-only">Tab</label>
                <select
                    id="Tab"
                    className="w-full rounded-md border-gray-200 bg-gray-800 text-white focus:ring focus:ring-blue-800"
                    onChange={(e) => {
                        window.location.href = e.target.value; 
                    }}
                >
                    <option value="/home">Home</option>
                    <option value="/about">About</option>
                    <option value="/hobby">Hobby</option>
                    <option value="/design">Design</option>
                    <option value="/contact">Contact</option>
                </select>
            </div>

            <div className="hidden sm:flex items-center justify-between w-full px-4">
                <div className="flex items-center">
                    <img 
                        src="/logo baru.jpg"
                        alt="Logo" 
                        className="h-10 w-10 border-2 border-white rounded-full mr-4" 
                    />
                    <h1 className="text-black text-xl font-bold">cintacreates.</h1>
                </div>
                <nav className="flex space-x-6">
                    <Link
                        to="/home"
                        className="text-black hover:text-blue-700 font-semibold transition duration-300"
                    >Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-black hover:text-blue-700 font-semibold transition duration-300"
                    >About
                    </Link>
                    <Link
                        to="/hobby"
                        className="text-black hover:text-blue-700 font-semibold transition duration-300"
                    >Hobby
                    </Link>
                    <Link
                        to="/design"
                        className="text-black hover:text-blue-700 font-semibold transition duration-300"
                    >Design
                    </Link>
                    <Link
                        to="/contact"
                        className="text-black hover:text-blue-700 font-semibold transition duration-300"
                    >Contact
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;