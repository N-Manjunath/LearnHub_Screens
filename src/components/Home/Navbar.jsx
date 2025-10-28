import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Logo = ({ className }) => (
    <img
        src={logo}
        alt="Errand Learn Hub Logo"
        className={className}
    />
);

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'About', path: '/about' }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="py-2 px-6 md:px-12 shadow-md bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo and Title Section (link to home route) */}
                <Link to="/" className="flex items-center cursor-pointer">
                    <Logo className="w-15 h-15 object-contain" />
                    <div className="text-xl md:text-2xl text-black font-serif ml-2">
                        Errand Learn Hub
                    </div>
                </Link>

                {/* desktop view if >md */}
                <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center text-gray-700 font-medium">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`
                                    text-gray-700 hover:text-black hover:underline hover:decoration-2 hover:decoration-[#259F94] underline-offset-4 transition duration-200
                                    ${isActive ? 'font-bold text-black underline decoration-2 decoration-[#259F94]' : ''}
                                `}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                    <Link
                        to="/login"
                        className="bg-[#11998d] hover:bg-[#0f6eb3] text-white px-5 py-2 rounded-lg text-sm font-semibold transition duration-300 whitespace-nowrap"
                        style={{ background: `linear-gradient(90deg, #11998d 0%, #0f6eb3 100%)` }}

                    >
                        Login
                    </Link>
                </nav>

                {/* mobile view button  */}
                <button
                    className="md:hidden text-gray-700 p-2 rounded-md hover:bg-gray-100 transition duration-150"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    )}
                </button>

            </div>

            {/* Mobile Menu Content */}
            <nav
                className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-2 border-t border-gray-200`}
            >
                <div className="flex flex-col space-y-3 px-2">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={toggleMenu}
                                className={`
                                    text-lg text-gray-700 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-md transition duration-200
                                    ${isActive ? 'font-bold text-black bg-gray-100' : ''}
                                `}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                    <Link
                        to="#login"
                        className="text-center bg-[#11998d] hover:bg-[#0f6eb3] text-white px-5 py-2 rounded-lg text-base font-semibold transition duration-300 mt-2"
                        onClick={toggleMenu}
                    >
                        Login
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;