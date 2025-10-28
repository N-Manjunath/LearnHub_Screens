import React, { useState } from 'react';
import { Star, StarHalf } from 'lucide-react';

const testimonials = [
    {
        quote: "As a student, the platform has been a lifesaver. The course materials complement my university studies perfectly, and the certification has already helped me secure an internship.",
        name: "Rahul Verma",
        title: "Pharm D Student",
        image: 'https://i.pravatar.cc/100?img=45',
        rating: 4
    },
    {
        quote: "An absolutely essential tool for any healthcare professional. The content is top-notch and directly applicable to my daily work.",
        name: "Priya Sharma",
        title: "Registered Nurse",
        image: 'https://i.pravatar.cc/100?img=32',
        rating: 5
    }
];

const StarRating = ({ rating, totalStars = 5 }) => {
    const starArray = [...Array(totalStars).keys()].map(i => i + 1);

    return (
        <div className="flex items-center gap-1">
            {starArray.map((star) => {
                return (
                    <span key={star}>
                        {rating >= star ? (
                            <Star className="text-yellow-500" />
                        ) : rating >= star - 0.5 ? (
                            <StarHalf className="text-yellow-500" />
                        ) : (
                            <Star className="text-gray-300" />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

const StudentSay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const { quote, name, title, image, rating } = testimonials[currentIndex];

    return (
        <section className="font-sans text-center py-12 px-4 sm:px-6 bg-white overflow-x-hidden">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
                What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#11998D] to-[#0F6EB3]">
                    Students Say
                </span>
            </h2>
            <p className="text-lg md:text-xl text-[#00000066] font-medium tracking-[2%] mb-8">
                Join thousands of satisfied healthcare professionals
            </p>

            <div className="relative max-w-6xl my-8 mx-auto">
                <button
                    onClick={goToPrevious}
                    className="absolute top-1/2 -translate-y-1/2 left-0 bg-white border border-gray-200 rounded-full w-8 h-8 md:w-10 md:h-10 text-xl md:text-2xl font-extrabold text-gray-500 cursor-pointer shadow-md transition-all duration-200 ease-in-out z-10 hover:bg-gray-50 hover:shadow-lg"
                    aria-label="Previous testimonial"
                >
                    &lt;
                </button>
                <div
                    className="flex flex-col items-center md:flex-row md:items-start bg-[#F0FDFA] rounded-xl p-6 md:p-10 shadow-lg mx-10"
                >
                    <img
                        src={image}
                        alt={name}
                        // FIX: Removed a stray 't' character that was here
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-4 md:mb-0 md:mr-6 flex-shrink-0"
                    />
                    <div className="text-center pt-4 md:text-left">
                        <StarRating rating={rating} />
                        <p className="text-base md:text-2xl italic font-normal leading-snug md:leading-relaxed tracking-wide text-[#000000B2] mt-2 mb-4">
                            {/* FIX: Changed tracking-[6%] to tracking-wide. 6% is very wide and can be hard to read. 'tracking-wide' (0.025em) is more standard. */}
                            " {quote} "
                        </p>
                        <p className="text-lg md:text-xl leading-[30px] tracking-[2%] font-medium text-[#000000]">{name}</p>
                        {/* FIX: Made the title responsive and removed the rigid line-height */}
                        <p className="text-sm md:text-base leading-relaxed tracking-[2%] text-[#00000080] font-medium">{title}</p>
                    </div>
                </div>
                <button
                    onClick={goToNext}
                    className="absolute top-1/2 -translate-y-1/2 right-0 bg-white border border-gray-200 rounded-full w-8 h-8 md:w-10 md:h-10 text-xl md:text-2xl font-extrabold text-gray-500 cursor-pointer shadow-md transition-all duration-200 ease-in-out z-10 hover:bg-gray-50 hover:shadow-lg"
                    aria-label="Next testimonial"
                >
                    &gt;
                </button>
            </div>
            <div className="flex justify-center mt-6">
                {testimonials.map((_, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`w-2.5 h-2.5 rounded-full mx-1.5 cursor-pointer transition-colors duration-300 ${currentIndex === slideIndex ? 'bg-cyan-500' : 'bg-gray-300'
                            }`}
                    ></div>
                ))}
            </div>
            {/* FIX: Removed a stray 't' character that was here */}
            <a
                href="#all-stories"
                className="inline-block mt-6 text-[#11998D] font-normal text-base md:text-lg tracking-[2%] leading-[30px]"
            >
                View all success stories &gt;
            </a>
        </section>
    );
};

export default StudentSay;