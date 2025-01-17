import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';


function ParallaxHero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
                <source src="https://videos.pexels.com/video-files/2098989/2098989-sd_640_360_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-6xl font-bold mb-4 animate-fade-in-up">Journey Through Nandi’s Rich Heritage</h1>
                    <p className="text-2xl mb-8 animate-fade-in-up animation-delay-300">Taste. Explore. Celebrate Nandi</p>
                    <a
                        href="#culture"
                        className="inline-block bg-[#4CAF50] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#45a049] transition-colors duration-300 animate-fade-in-up animation-delay-600"
                    >
                        Explore now
                    </a>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ArrowDown size={32} color="white" />
            </div>
        </section>
    );
}

export default ParallaxHero;