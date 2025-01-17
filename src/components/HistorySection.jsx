import React from 'react';
import Section from './Section';

function HistorySection({ userContent }) {
    return (
        <Section id="history" title="Nandi History" bgColor="bg-[#F1F3F4]">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Nandi_warriors_from_the_LOC.jpg/220px-Nandi_warriors_from_the_LOC.jpg" alt="Nandi origins" className="rounded-lg w-full md:w-1/2 h-64 object-cover" />
                <div className="w-full md:w-1/2">
                    <p className="text-[#3E5C76] mb-4">
                        The Nandi people trace their origins to the Nile Valley and have a rich history of notable events and cultural milestones.
                    </p>
                    <a href="/history" className="inline-block bg-[#4CAF50] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#45a049] transition-colors duration-300">
                        Learn More
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default HistorySection;