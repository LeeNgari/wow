import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white bg-opacity-90 text-[#1D2D44] p-4 sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Tumdo!</Link>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li><Link to="/culture" className="hover:text-[#3E5C76]">Culture</Link></li>
                        <li><Link to="/history" className="hover:text-[#3E5C76]">History</Link></li>
                        <li><Link to="/food" className="hover:text-[#3E5C76]">Food</Link></li>
                        <li><Link to="/sports" className="hover:text-[#3E5C76]">Sports</Link></li>
                        <li><Link to="/tourism" className="hover:text-[#3E5C76]">Tourism</Link></li>
                    </ul>
                </nav>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden mt-4">
                    <ul className="flex flex-col space-y-2">
                        <li><Link to="/culture" className="block py-2 hover:bg-[#F0EBD8]" onClick={() => setIsMenuOpen(false)}>Culture</Link></li>
                        <li><Link to="/history" className="block py-2 hover:bg-[#F0EBD8]" onClick={() => setIsMenuOpen(false)}>History</Link></li>
                        <li><Link to="/food" className="block py-2 hover:bg-[#F0EBD8]" onClick={() => setIsMenuOpen(false)}>Food</Link></li>
                        <li><Link to="/sports" className="block py-2 hover:bg-[#F0EBD8]" onClick={() => setIsMenuOpen(false)}>Sports</Link></li>
                        <li><Link to="/tourism" className="block py-2 hover:bg-[#F0EBD8]" onClick={() => setIsMenuOpen(false)}>Tourism</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;