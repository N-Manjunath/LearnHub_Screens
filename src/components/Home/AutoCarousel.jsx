import React, { useState, useEffect } from 'react';
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/carousel3.jpg'

export default function AutoCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: carousel1,
            title: 'Master Every Year Of',
            subtitle: 'Pharm-D',
            description: 'From basics to clinical practice — explore structured lessons designed to make your pharmacy foundation stronger.',
            buttonText: 'Explore Courses'
        },
        {
            id: 2,
            image: carousel2,
            title: 'Upgrade Your Skills,',
            subtitle: 'Stay Ahead',
            description: 'Enhance your pharmaceutical knowledge with cutting-edge courses and learning materials that help you stay competitive.',
            buttonText: 'Explore Skills'
        },
        {
            id: 3,
            image: carousel3,
            title: 'More Learning.',
            subtitle: 'Less Spending.',
            description: 'Get access to premium educational content at affordable prices. Quality education that fits your budget.',
            buttonText: 'View Bundles'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="w-full md:h-screen ">
            <div className="relative overflow-hidden sm:h-80 md:h-full">
                {/* Carousel Wrapper */}
                <div
                    className="flex transition-transform duration-700 ease-in-out sm:h-80 md:h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full sm:h-80 md:h-full relative">
                            {/* Background Image */}
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full sm:h-80 md:h-full object-cover"
                            />

                            {/* Gradient Overlay on top of image */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(17, 153, 141, 0.9) 0%, rgba(15, 110, 179, 0.85) 84%)'
                                }}
                            >
                                {/* Content */}
                                <div className="h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
                                    <div className="text-white max-w-2xl">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 sm:mb-2">
                                            {slide.title}
                                        </h2>
                                        <h3 className="ext-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 md:mb-6">
                                            {slide.subtitle}
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium opacity-90 mb-4 sm:mb-6 md:mb-8 leading-relaxed w-full lg:w-[70%]">
                                            {slide.description}
                                        </p>
                                        <button className="bg-white text-[#228F9E] px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors duration-300">
                                            {slide.buttonText}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}