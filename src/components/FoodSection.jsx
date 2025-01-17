import React from 'react';
import Section from './Section';

function FoodSection({ userContent }) {
    return (
        <Section id="food" title="Nandi Cuisine" bgColor="bg-[#F1F3F4]">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
                <img src="https://www.kenyabuzz.com/media/images/traditional_food_in_kenya_1.width-800.jpg" alt="Nandi traditional dishes" className="rounded-lg w-full md:w-1/2 h-64 object-cover" />
                <div className="w-full md:w-1/2">
                    <p className="text-[#3E5C76] mb-4">
                        Nandi cuisine is characterized by hearty traditional dishes and unique culinary practices that have been passed down through generations.
                    </p>
                    <a href="/food" className="inline-block bg-[#4CAF50] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#45a049] transition-colors duration-300">
                        Learn More
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default FoodSection;