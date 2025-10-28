import { Check, UserCogIcon, ChevronRight } from 'lucide-react';


const bundles = [
    {
        name: 'Standard',
        price: '99',
        originalPrice: '499',
        features: [
            { text: 'Name Brand & Generic' },
            { text: 'Drug Classification' },
            { text: 'Pharmaceutical Category' },
            { text: 'Mechanism Of Action' },
            { text: 'Indications' },
            { text: 'Dosage & ROA' },
            { text: 'Contraindications' },
            { text: 'Precautions' },
            { text: 'Adverse Effects' },
            { text: 'Drug Interactions' },
            { text: 'Patient Counselling' },
        ],
    },
    {
        name: 'Basic',
        price: '2499',
        originalPrice: 4499,
        features: [
            { text: '250+ Summarized Classes' },
            { text: '250+ Study Materials' },
            { text: 'Project & Internship Support' },
            { text: 'Pharma News Letters' },
            { text: 'Previous Year Question Papers' },
            { text: 'SOAP Format' },
            { text: 'Certification', free: true }, // Added 'free' flag
            { text: '60+ Textbooks' },
            { text: 'Hand Written Notes' },
            { text: 'Drug Index' },
        ],
    },
    {
        name: 'Pro',
        price: '7999',
        originalPrice: '9999', // Image shows 99990, but 9999 seems more likely
        features: [
            { text: 'Clinical Research' },
            { text: 'Pharmacovigilance' },
            { text: 'Clinical Data Management' },
            { text: 'Study Materials' },
            { text: 'Course Completion Certificate' },
            { text: 'Internship Certificate' },
            { text: 'Mock Interviews' },
            { text: 'Resume Building' },
            { text: 'Job Portal Updates' },
            { text: 'Like Minded Membership' },
        ],
    },
    {
        name: 'Elite',
        price: '9999',
        originalPrice: '9999', // Image shows 99990, but 9999 seems more likely
        features: [
            { text: 'Clinical Research' },
            { text: 'Pharmacovigilance' },
            { text: 'Clinical Data Management' },
            { text: 'Study Materials' },
            { text: 'Course Completion Certificate' },
            { text: 'Internship Certificate' },
            { text: 'Mock Interviews' },
            { text: 'Resume Building' },
            { text: 'Job Portal Updates' },
            { text: 'Like Minded Membership' },
        ],
    },
];

const primaryTeal = '#11998D';
const primaryBlue = '#0F6EB3';
const radius = 44;
const circumference = 2 * Math.PI * radius;
const arcLength = circumference * 0.8; // 80% arc
const dashArray = `${arcLength} ${circumference}`;

export const BundleSection = () => {
    return (
        <div className="min-h-screen w-full max-w-full overflow-hidden flex flex-col items-center bg-white py-12 sm:py-16 px-4">
            {/* 1. Digital Enterpreneurship Bundles Section */}
            <div className="w-full max-w-6xl relative">
                {/* Header */}
                <div className="text-left mb-16 sm:mb-28">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900">
                        Digital <span
                            style={{
                                background: 'linear-gradient(90deg, rgba(17,153,141,1) 0%, rgba(15,110,179,1) 84%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 'bold',
                            }}
                            >
                            Entrepreneurship Bundles
                            </span>

                            </h1>
                            <p
                            style={{
                                fontFamily: 'Neue Montreal',
                                fontWeight: 500,
                                fontStyle: 'normal',
                                fontSize: '22px',
                                lineHeight: '100%',
                                letterSpacing: '2%',
                                color: '#00000066'
                            }}
                            className="mt-2 max-w-5xl"
                            >
                            Choose the perfect course bundle to accelerate your career growth and master in-demand technologies.
                            </p>

                </div>

                {/* Pricing Cards Grid */}
                {/* Changed to grid-cols-1 by default, sm:grid-cols-2, lg:grid-cols-3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {bundles.map((bundle, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-2xl shadow-xl p-6 pt-24 sm:pt-32 transition duration-300 ease-in-out w-full max-w-sm hover:shadow-2xl hover:-translate-y-1 flex flex-col items-between"
                        >
                            {/* Circle Price Tag - Scaled down slightly for mobile */}
                            <div className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48">
                                <svg className="w-full h-full" viewBox="0 0 192 192" style={{ transform: 'rotate(135deg)' }}>
                                    <circle cx="96" cy="96" r={radius} stroke="#e5e7eb" strokeWidth="8" fill="none" />
                                    <div
                                        className="w-36 h-36 rounded-full flex flex-col items-center justify-center p-2 text-white shadow-xl"
                                        style={{ backgroundImage: 'linear-gradient(135deg, #11998D 10%, #0F6EB3 90%)' }}
                                    ></div>
                                </svg>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-teal-500 to-sky-600 text-white flex flex-col items-center justify-center text-center shadow-lg">
                                    <div className="text-2xl sm:text-3xl font-bold">₹{bundle.price}</div>
                                    {bundle.originalPrice && (
                                        <div className="line-through opacity-80 text-xs sm:text-sm">₹{bundle.originalPrice}</div>
                                    )}
                                    <div className="mt-1 sm:mt-2 font-semibold text-base sm:text-lg">{bundle.name}</div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-6 space-y-2 flex-grow">
                                {bundle.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-gray-700">
                                        <Check className="text-teal-600 w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span className="text-sm leading-snug">{feature.text}</span>
                                        {feature.free && (
                                            <span className="ml-auto text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                                                FREE
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <button
                                className="w-full mt-auto py-3 border-2 font-semibold rounded-lg text-sm sm:text-base transition duration-300 ease-in-out"
                                style={{
                                    borderColor: primaryTeal,
                                    color: primaryTeal,
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = primaryTeal;
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.color = primaryTeal;
                                }}
                            >
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Navigation Button (Hidden on small screens) */}
                <button className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white shadow-md rounded-full p-2 text-teal-600 hover:bg-gray-100 hidden lg:block">
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: primaryTeal }}></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                </div>
            </div>
        </div>
    );
}
export default function PricingBundles() {

    const upskillingTracks = [
        { title: 'Clinical Research Essentials', description: 'Learn protocols, trial phases, and ethical guidelines', views: '2,473 Views', image: 'https://res.cloudinary.com/dexxxmvgm/image/upload/v1761556245/amico_mgmezj.png' },
        { title: 'Pharmacovigilance Mastery', description: 'Understand ADR reporting, case studies, and WHO forms', views: '1,892 Views', image: 'https://res.cloudinary.com/dexxxmvgm/image/upload/v1761556457/amico1_xvzxt2.png' },
        { title: 'Hospital & Clinical Practice Skills', description: 'Learn prescription interpretation, patient counseling', views: '3,124 Views', image: 'https://res.cloudinary.com/dexxxmvgm/image/upload/v1761556543/character-1_cmmqae.png' },
    ];


    return (
        <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col items-center bg-gradient-to-br from-gray-50 to-blue-50 pb-16">

            <BundleSection />

            {/* 2. Recommended Upskilling Tracks Section */}
            <div className="w-full max-w-6xl px-4 mt-16 sm:mt-24">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-3 text-gray-800">
                        Recommended <span
  className="font-medium bg-gradient-to-r from-[#11998D] to-[#0F6EB3] bg-clip-text text-transparent"
>
  Upskilling Tracks
</span>

                    </h1>
                    <p className="text-sm sm:text-base text-gray-500">Master essential skills with our curated learning paths</p>
                </div>

                {/* Course Cards Container */}
                {/* Changed to grid-cols-1 by default, md:grid-cols-2, lg:grid-cols-3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {upskillingTracks.map((track, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 sm:p-8 shadow-md transition duration-300 ease-in-out relative hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Card Icon */}
                            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 w-5 h-5 sm:w-6 sm:h-6">
                                <UserCogIcon style={{ color: '#11998d' }} />
                            </div>

                            {/* Card Image */}
                            <div className="w-full h-32 sm:h-40 mb-4 sm:mb-6 flex items-center justify-center">
                                <img src={track.image} alt={track.title} className="max-w-[150px] sm:max-w-[200px] max-h-32 sm:max-h-40 object-contain" />
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 leading-snug text-center">
                                {track.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-5 leading-relaxed min-h-[40px] text-center">
                                {track.description}
                            </p>

                            {/* Views */}
                            <div className="text-xs sm:text-sm text-cyan-700 font-medium mb-3 sm:mb-5 text-center">
                                {track.views}
                            </div>

                            {/* Button */}
                            <button
                                className="w-full py-2 sm:py-3 px-6 bg-gradient-to-r from-cyan-700 to-cyan-800 text-white border-none rounded-lg text-sm sm:text-base font-semibold cursor-pointer transition duration-300 ease-in-out hover:from-cyan-800 hover:to-cyan-900 hover:scale-[1.02] active:scale-[0.98]"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(17, 153, 141, 0.9) 0%, rgba(15, 110, 179, 0.85) 84%)'
                                }}
                            >
                                View More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}