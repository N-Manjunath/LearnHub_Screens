import React, { useState } from 'react';

const faqData = [
    {
        question: "What are e-bundles and how do they work?",
        answer: "E-bundles are curated sets of learning materials that cover multiple related topics in one package. They help you learn step-by-step with video lessons, case studies, and assessments — all in one place."
    },
    {
        question: "Do I need to attend live classes?",
        answer: "No, our courses are designed to be self-paced and flexible. You can learn anytime, anywhere, at your own convenience. Live classes are optional and offered for specific programs."
    },
    {
        question: "Are there live sessions or mentorship programs?",
        answer: "Yes, we offer optional live Q&A sessions, webinars, and dedicated mentorship programs for certain premium e-bundles. Check the specific e-bundle details for availability."
    }, {
        question: "Who can enroll in the courses?",
        answer: "Our courses are designed for students and professionals in healthcare fields, including but not limited to Pharm D students, pharmacists, nurses, and other medical practitioners looking to upskill."
    }, {
        question: "How is this different from regular Pharm D classes?",
        answer: "Our e-bundles supplement regular Pharm D classes by providing specialized, hands-on, and practical learning modules not always covered in depth by traditional curricula. They focus on practical application and industry-relevant skills."
    }
];

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? -1 : index));
    };

    return (
        <section className="font-sans mb-48 px-4 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 text-center">
                Frequently Asked <span className="  text-transparent           
                                bg-clip-text               
                                bg-gradient-to-r           
                                from-[#11998D]             
                                to-[#0F6EB3]">Questions</span>
            </h2>

            <div className="w-full max-w-7xl">

                {faqData.map((item, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className={`rounded-xl border border-blue-50 overflow-hidden mb-4 shadow-lg ${isOpen
                                    ? "bg-[#F0FDFA]" // All on one line
                                    : "bg-[#F0FDFA]"
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full py-4 px-6 text-left cursor-pointer transition-colors duration-200"
                                aria-expanded={isOpen}
                            >
                                <span className="text-lg font-semibold">
                                    {item.question}
                                </span>
                                <span className="flex justify-center items-center w-8.5 h-8.5 text-xl font-bold bg-gradient-to-r from-[#11998D] to-[#0F6EB3] rounded-full text-white ml-4 flex-shrink-0">
                                    {isOpen ? '−' : '+'}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <p className="w-[65%] text-[17px] tracking-[0%]  text-[#00000066] font-medium leading-[25px] px-6 pb-8">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Questions;