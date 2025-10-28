import React from 'react';
import ed1 from '../../assets/ed1.jpg'
import ed2 from '../../assets/ed2.jpg'
import ed3 from '../../assets/ed3.jpg'

const FeatureCard = ({ title, description, image, content }) => (
    <div className={`relative w-full h-full min-h-[300px] md:min-h-[350px] lg:min-h-[400px] rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]`}>
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
        />

        <div
            className={`absolute inset-0 opacity-85`}
            style={{
                background: 'linear-gradient(180deg, rgba(15, 110, 179, 0.95) 0%, rgba(17, 153, 141, 0.95) 100%)'
            }}
        ></div>

        {/* Text Content */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
            {/* Title */}
            <div className="flex flex-col mb-6">
                <span className="text-2xl font-semibold tracking-wider border-l-4 border-white pl-2 leading-none">
                    {/* Render title line by line */}
                    {title.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </span>
            </div>

            {/* Content Text (The main point) */}
            <p className="text-sm font-light leading-relaxed opacity-95">
                {content}
            </p>

            {/* Small Description Text (The sub-point) */}
            <p className="mt-4 text-sm font-light opacity-70">
                {description}
            </p>
        </div>
    </div>
);

// Main Component
export default function EducationBeyondBoundaries() {
    const cardData = [
        {
            title: "Learn Without\nLimits",
            content: "Access structured Pharm D modules and resources anytime, anywhere.",
            description: "From clinical pharmacy to patient care, explore topics that enhance your real-world understanding.",
            image: ed1
        },
        {
            title: "Career-Ready\nKnowledge",
            content: "Each course is designed by industry experts to prepare you for the evolving healthcare landscape.",
            description: "Gain practical insights, develop confidence, and become job-ready in every module you complete.",
            image: ed2
        },
        {
            title: "Connected\nLearning",
            content: "Be a part of a growing network of learners, mentors, and professionals.",
            description: "Share ideas, learn collaboratively, and experience education that extends beyond textbooks.",
            image: ed3
        },
    ];

    return (
        <section className="bg-white py-8 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

                {/* Left Text Block */}
                <div className="lg:w-2/5 xl:w-1/3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-tight">
                        Education <span className="text-[#11998d] font-normal">Beyond Boundaries</span>
                    </h2>
                    <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
                        <p>
                            We believe pharmacy education shouldn't be limited by classrooms or rigid schedules.
                        </p>
                        <p>
                            Our platform helps learners explore, grow, and specialize through flexible, hands-on learning experiences — built to match the pace of modern healthcare.
                        </p>
                    </div>
                </div>

                {/* Right Cards Section */}
                <div className="lg:w-3/5 xl:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cardData.map((card, index) => (
                        <FeatureCard
                            key={index}
                            {...card}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}