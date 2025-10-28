import React, { useState, useEffect } from 'react';
import logo from '../../assets/logowhite.png';

const CircleSection = ({ title, link, delay = 0, index, logoUrl }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isLogoSection = !!logoUrl;

    const mainTealBorder = '#BCEAE5';
    const dashedTealBorder = '#BCEAE5';

    return (
        <div
            className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Outer solid circle */}
            <div
                className="absolute w-full h-full rounded-full z-10"
                style={{ border: `2px solid ${mainTealBorder}` }}
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
                    boxShadow: isHovered
                        ? '0 20px 40px rgba(17, 153, 141, 0.5)'
                        : '0 10px 25px rgba(17, 153, 141, 0.3)',
                }}
            >
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

// ✅ Animated Line connecting inner circles
const AnimatedLine = () => {
    return (
        <div className="relative flex items-center justify-center" style={{ width: '45px', margin: '-10px 0' }}>
            {/* Line */}
            <div
                className="absolute h-0.5"
                style={{
                    width: '100%',
                    backgroundColor: '#C8E8E5',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
            />
            {/* Animated moving dot */}
            <div
                className="absolute w-2 h-2 rounded-full"
                style={{
                    backgroundColor: '#11998D',
                    animation: 'moveDot 2s ease-in-out infinite',
                    boxShadow: '0 0 10px rgba(17, 153, 141, 0.6)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
            />
        </div>
    );
};

const App = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 15;
            setMousePosition({ x, y });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const sections = [
        { title: 'Think', link: '/think', delay: 0 },
        { title: 'Learn', link: '/learn', delay: -5 },
        { title: 'Grow', link: '/grow', delay: -10 },
        { title: 'Learn Hub', link: '/learnhub', delay: -15, logoUrl: logo },
    ];

    return (
        <div className="flex flex-col items-center justify-center relative overflow-hidden bg-white min-h-screen py-16 md:py-24">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 z-0">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(17, 153, 141, 0.05) 35px, rgba(17, 153, 141, 0.05) 70px)',
                    }}
                />
            </div>

            <div className="max-w-7xl w-full z-10 px-4">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl text-center text-gray-800 mb-4 font-semibold">
                    The Journey of <span className="text-[#0F6EB3] font-semibold">Growth</span>
                </h1>
                <p className="text-gray-700 text-base md:text-lg text-center mb-16 md:mb-20">
                    Master essential skills with our curated learning paths
                </p>

                {/* Circles + Animated lines */}
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    {sections.map((section, index) => (
                        <React.Fragment key={section.title}>
                            <div
                                style={{
                                    transform: `translate(${mousePosition.x * (index + 1) * 0.08}px, ${mousePosition.y * (index + 1) * 0.08
                                        }px)`,
                                    transition: 'transform 0.3s ease-out',
                                }}
                                // 👇 Overlap by 10% of each circle width (both desktop + mobile)
                                className={`transition-all duration-300 ease-out ${index > 0 ? '-mt-10 lg:-mt-0 lg:-ml-[6%]' : ''
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

                            {/* Line between circles (Desktop only) */}
                            {index < sections.length - 1 && (
                                <div className="hidden lg:flex items-center justify-center">
                                    <AnimatedLine />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes moveDot {
          0% {
            left: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default App;