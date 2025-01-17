import React from 'react';

function Section({ id, title, children, bgColor = 'bg-[#F1F3F4]' }) {
    return (
        <section id={id} className={`py-16 ${bgColor} african-pattern`}>
            <div className="container mx-auto">
                <h2 className="section-title">{title}</h2>
                {children}
            </div>
        </section>
    );
}

export default Section;

