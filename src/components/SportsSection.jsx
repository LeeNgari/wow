import React from 'react';
import Section from './Section';

function SportsSection({ userContent }) {
    return (
        <Section id="sports" title="Nandi Sports" bgColor="bg-[#F1F3F4]">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-8">
                <img src="https://media.gettyimages.com/id/1332938390/photo/sapporo-japan-eliud-kipchoge-of-team-kenya-crosses-the-finish-line-during-the-mens-marathon.jpg?s=612x612&w=0&k=20&c=6kHJvqnVrpaGIWSaZMQwDB30it3B1AH6MjDLDbqhXAc=" alt="Nandi modern sports" className="rounded-lg w-full md:w-1/2 h-64 object-cover" />
                <div className="w-full md:w-1/2">
                    <p className="text-[#3E5C76] mb-4">
                        The Nandi are renowned for their excellence in sports, from traditional games to modern athletics, producing world-class athletes.
                    </p>
                    <a href="/sports" className="inline-block bg-[#4CAF50] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#45a049] transition-colors duration-300">
                        Learn More
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default SportsSection;