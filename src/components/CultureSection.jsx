import React from 'react';
import Section from './Section';
import Trad from "../assets/trad.png";

function CultureSection({ userContent }) {
    return (
        <Section id="culture" title="Nandi Culture" bgColor="bg-[#F1F3F4]">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
                <img src={Trad} alt="Nandi traditional practice" className="rounded-lg w-full md:w-1/2 h-64 object-cover" />
                <div className="w-full md:w-1/2">
                    <p className="text-[#3E5C76] mb-4">
                        The Nandi people have a rich cultural heritage, including traditional practices, art, and crafts that reflect their deep connection to their roots.
                    </p>
                    <a href="/culture" className="inline-block bg-[#4CAF50] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#45a049] transition-colors duration-300">
                        Learn More
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default CultureSection;