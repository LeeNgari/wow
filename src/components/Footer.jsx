import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-[#3E5C76] text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-xl font-bold mb-4">Nandi Cultural Heritage</p>
                <nav className="mb-4">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="#culture" className="hover:text-[#F0EBD8]">Culture</a></li>
                        <li><a href="#history" className="hover:text-[#F0EBD8]">History</a></li>
                        <li><a href="#food" className="hover:text-[#F0EBD8]">Food</a></li>
                        <li><a href="#sports" className="hover:text-[#F0EBD8]">Sports</a></li>
                        <li><a href="#tourism" className="hover:text-[#F0EBD8]">Tourism</a></li>
                    </ul>
                </nav>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="hover:text-[#F0EBD8]"><Facebook /></a>
                    <a href="#" className="hover:text-[#F0EBD8]"><Twitter /></a>
                    <a href="#" className="hover:text-[#F0EBD8]"><Instagram /></a>
                </div>
                <p>&copy; 2025 Nandi Cultural Heritage. All rights reserved.</p>
                <p className="mt-2">Designed with respect for Nandi culture and traditions.</p>
            </div>
        </footer>
    );
}

export default Footer;

