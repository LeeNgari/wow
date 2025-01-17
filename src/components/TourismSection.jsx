import React from 'react';
import Section from './Section';

function TourismSection({ userContent }) {
    return (
        <Section id="tourism" title="Visit Nandi Land" bgColor="bg-[#F1F3F4]">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
                <img src="https://twendesasa.com/wp-content/uploads/2023/08/List-Of-Best-Places-To-Visit-In-Nandi-County.jpg" alt="Nandi attractions" className="rounded-lg w-full md:w-1/2 h-64 object-cover" />
                <div className="w-full md:w-1/2">
                    <p className="text-[#3E5C76] mb-4">
                        Discover the breathtaking landscapes, cultural sites, and warm hospitality of Nandi Land, a hidden gem in Kenya.
                    </p>
                    <a href="/tourism" className="inline-block bg-[#4CAF50] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#45a049] transition-colors duration-300">
                        Learn More
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default TourismSection;