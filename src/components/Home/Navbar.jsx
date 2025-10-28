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
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' }
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="py-2 px-6 md:px-12 md:pl-10 shadow-md bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo and Title Section (link to home route) */}
                <Link to="/" className="flex items-center cursor-pointer">
                    <Logo className="w-15 h-15 object-contain scale-125" />
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
                                    relative text-gray-700 transition-colors duration-200
                                    after:content-[''] after:absolute after:left-0 after:-bottom-1 
                                    after:h-[2px] after:bg-[#259F94] 
                                    after:transition-all after:duration-300
                                    ${isActive
                                        ? 'font-bold text-black after:w-full'
                                        : 'hover:text-black after:w-0 hover:after:w-full'
                                    }
                                `}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                    <Link
                        to="/login"
                        className="
                            text-white px-5 py-2 rounded-lg text-sm font-semibold 
                            transition-all duration-300 whitespace-nowrap
                            bg-gradient-to-r from-[#11998d] to-[#0f6eb3] 
                            hover:from-[#0f6eb3] hover:to-[#11998d]
                        "
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
                        to="/login"
                        className="
                            text-center text-white px-5 py-2 rounded-lg text-base font-semibold 
                            transition-all duration-300 mt-2
                            bg-gradient-to-r from-[#11998d] to-[#0f6eb3] 
                            hover:from-[#0f6eb3] hover:to-[#11998d]
                        "
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