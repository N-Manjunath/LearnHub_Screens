import React, { useState, useEffect } from 'react';
import logo from '../../assets/logowhite.png'


const CircleSection = ({ title, link, delay = 0, index, logoUrl }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLogoSection = !!logoUrl;

    const mainTealBorder = '#BCEAE5'; // The light outer solid circle
    const dashedTealBorder = '#BCEAE5'; // The inner dashed circle
    const connectorLine = '#BCEAE5'; // The connector line
    const connectorDot = '#11998D'; // The dot on the connector line

    return (
        <div
            // --- MODIFIED ---
            // Scaled down circles slightly for a better mobile fit
            className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* --- MODIFIED: RESPONSIVE CONNECTORS --- */}
            {/* This logic now renders different lines for mobile (vertical) and desktop (horizontal) */}
            {index > 0 && (
                <>
                    {/* Horizontal Connector (Desktop) */}
                    <div
                        className="absolute z-0 hidden lg:block" // 'hidden lg:block'
                        style={{
                            width: '100%',
                            height: '3px',
                            backgroundColor: connectorLine,
                            top: '50%',
                            right: '41%', // Pulls it from the center to the left edge
                            transform: 'translateY(-50%)'
                        }}
                    >
                        <div
                            className="absolute w-2 h-2 rounded-full"
                            style={{ backgroundColor: connectorDot, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                    </div>

                    {/* Vertical Connector (Mobile) */}
                    <div
                        className="absolute z-0 lg:hidden" // 'lg:hidden'
                        style={{
                            width: '2px',
                            height: '100%', // Spans the gap created by negative margin
                            backgroundColor: connectorLine,
                            left: '50%',
                            bottom: '70%', // Pulls it from the center to the top edge
                            transform: 'translateX(-50%)'
                        }}
                    >
                        <div
                            className="absolute w-2 h-2 rounded-full"
                            style={{ backgroundColor: connectorDot, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                        />
                    </div>
                </>
            )}
            {/* --- END MODIFIED --- */}


            {/* Outer solid circle */}
            <div
                className="absolute w-full h-full rounded-full z-10"
                style={{
                    border: `2px solid ${mainTealBorder}`,
                }}
            />

            {/* Inner rotating dashed circle */}
            <div
                className="absolute rounded-full z-10"
                style={{
                    width: '75%',
                    height: '75%',
                    border: `2px dashed ${dashedTealBorder}`,
                    animation: `spin ${20 + index * 5}s linear infinite`,
                    animationDelay: `${delay}s`,
                }}
            />

            {/* Inner clickable circle */}
            <a
                href={link}
                className={`relative rounded-full flex items-center justify-center text-white font-medium text-base text-center shadow-2xl transition-all duration-300 z-10 cursor-pointer overflow-hidden`}
                style={{
                    width: '45%',
                    height: '45%',
                    background: 'linear-gradient(135deg, rgba(17, 153, 141, 0.9) 0%, rgba(15, 110, 179, 0.9) 100%)',
                    transform: isHovered ? 'scale(1.3)' : 'scale(1)',
                    boxShadow: isHovered ? '0 20px 40px rgba(17, 153, 141, 0.5)' : '0 10px 25px rgba(17, 153, 141, 0.3)'
                }}
            >
                {/* Content: Title or Logo */}
                {isLogoSection ? (
                    <img
                        src={logoUrl}
                        alt="Learn Hub Logo"
                        className="w-full h-full object-contain scale-135 pb-2"
                    />
                ) : (
                    <span className="relative z-10 px-3 drop-shadow-lg tracking-wider text-sm md:text-lg">
                        {title}
                    </span>
                )}
            </a>
        </div>
    );
};

// --- App Component (Modified) ---
const App = () => {

    const sections = [
        { title: 'Think', link: '/think', delay: 0 },
        { title: 'Learn', link: '/learn', delay: -5 },
        { title: 'Grow', link: '/grow', delay: -10 },
        { title: 'Learn Hub', link: '/learnhub', delay: -15, logoUrl: logo }
    ];

    return (
        <div
            className="flex flex-col items-center justify-center relative overflow-hidden bg-white min-h-screen py-16 md:py-24"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 z-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(17, 153, 141, 0.05) 35px, rgba(17, 153, 141, 0.05) 70px)'
                }} />
            </div>

            <div className="max-w-7xl w-full z-10 px-4">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl text-center text-gray-800 mb-4 font-semibold">
                    The Journey of <span className='text-[#0F6EB3] font-semibold'>Growth</span>
                </h1>
                <p className='text-gray-700 text-base md:text-lg text-center mb-16 md:mb-20'>
                    Master essential skills with our curated learning paths
                </p>

                {/* --- Animation Container (MODIFIED) --- */}
                {/* This flex container now handles responsive layout AND overlap */}
                <div className="flex flex-col lg:flex-row items-center justify-center">

                    {sections.map((section, index) => (
                        <div
                            key={section.title}
                            // --- MODIFIED: RESPONSIVE OVERLAP ---
                            // On mobile (default), applies a negative TOP margin
                            // On desktop (lg), resets top margin and applies negative LEFT margin
                            className={`transition-all duration-300 ease-out ${index > 0 ? '-mt-10 lg:-mt-0 lg:-ml-12' : ''
                                }`}
                        >
                            <CircleSection
                                title={section.title}
                                link={section.link}
                                delay={section.delay}
                                index={index}
                                logoUrl={section.logoUrl}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom animation styles */}
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default App;
