import React, { useState } from 'react';
import { Mail, Globe, MapPin, Send } from 'lucide-react'; // Using lucide-react for icons
import ed2 from '../assets/ed2.jpg'
import Navbar from '../components/Home/Navbar'

const ContactInfoCard = () => {
    const primaryTeal = '#11998d';
    const primaryBlue = '#0f6eb3';


    const infoItems = [
        {
            icon: Mail,
            label: 'Email Address',
            value: '@learnhubcareers@gmail.com',
            href: 'mailto:learnhubcareers@gmail.com'
        },
        {
            icon: Globe,
            label: 'Website',
            value: 'www.ErrandLearnHub.com',
            href: 'https://www.errandlearnhub.com'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Rajam, Vizianagaram, Andhra Pradesh, India, 532127',
            href: 'https://maps.app.goo.gl/rajam'
        }
    ];

    return (
        // DECREASED HEIGHT: Reduced padding from p-5/sm:p-6/lg:p-8 to p-4/sm:p-5/lg:p-6
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-5 lg:p-6 h-full w-full">
            {/* Header / Contact Us Badge */}
            <div
                className="inline-block px-4 py-1.5 rounded-md text-white font-medium text-sm mb-6"
                style={{ background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)` }}
            >
                Contact Us
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Need More Information?
            </h3>
            <h4 className="text-xl font-semibold text-gray-700 mb-6">
                Get in Touch
            </h4>

            {/* DECREASED HEIGHT: Reduced vertical margin from mb-10 to mb-4 */}
            <p className="text-gray-600 mb-4 leading-relaxed">
                Need help with our courses or bundles? Our team is here to assist you anytime.
            </p>

            {/* Contact Details List */}
            <div className="space-y-6">
                {infoItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <div className="p-3 mr-4 rounded-full bg-gray-100 flex-shrink-0" style={{ color: primaryTeal }}>
                            <item.icon size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{item.label}</p>
                            <a
                                href={item.href || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base text-gray-800 hover:text-blue-600 transition duration-200"
                            >
                                {item.value}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Component for the Contact Form
const ContactForm = () => {
    const primaryTeal = '#11998d';
    const primaryBlue = '#0f6eb3';
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Message Sent! (Check console for data)');
        setFormData({ name: '', email: '', message: '' });
    };

    // Custom Input Field Component
    const InputField = ({ label, name, type = 'text', placeholder, isTextArea = false }) => (
        // DECREASED HEIGHT: Reduced vertical margin from mb-6 to mb-4
        <div className="mb-4">
            <label htmlFor={name} className="block text-gray-700 font-medium mb-2">{label}</label>
            {isTextArea ? (
                <textarea
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    rows="4" // Reduced rows from 6 to 4 to decrease textarea height
                    placeholder={placeholder}
                    className="w-full p-3 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-opacity-50 transition duration-200"
                    style={{ minHeight: '100px', focusRingColor: primaryTeal }} // Reduced minHeight from 150px to 100px
                    required
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full p-3 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-opacity-50 transition duration-200" // Reduced padding from p-4 to p-3
                    style={{ focusRingColor: primaryTeal }}
                    required
                />
            )}
        </div>
    );


    return (
        // DECREASED HEIGHT: Reduced padding from p-5/sm:p-6/lg:p-8 to p-4/sm:p-5/lg:p-6
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-4 sm:p-5 lg:p-6 h-full w-full ">
            <InputField
                label="Your Name"
                name="name"
                placeholder="Enter your name"
            />
            <InputField
                label="Your Email"
                name="email"
                type="email"
                placeholder="Enter your email"
            />
            <InputField
                label="Your Message"
                name="message"
                placeholder="Write your message here"
                isTextArea={true}
            />

            <div className="mt-8 flex justify-center">
                <button
                    type="submit"
                    className="flex items-center justify-center px-20 py-3 rounded-xl text-[17px] font-semibold text-white transition duration-300 hover:opacity-90"
                    style={{
                        background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)`,
                    }}
                >
                    Send Message
                </button>
            </div>
        </form>
    );
};


export default function App() {
    // Styling the top banner with the blue/teal gradient and image overlay
    const primaryTeal = '#11998d';
    const primaryBlue = '#0f6eb3';

    // Tailwind CSS classes for the gradient text color (using a CSS hack)
    const gradientTextColorStyle = {
        background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        MozBackgroundClip: 'text',
        MozTextFillColor: 'transparent',
    };

    return (
        <>
            <Navbar />

            <div className="font-sans bg-gray-50 min-h-screen">

                {/* 1. Header/Banner Section */}
                <div
                    className="relative inset-0 w-full md:h-[500px] py-24 sm:py-32 md:py-20 flex items-center justify-center text-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${ed2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Gradient Overlay for Text Readability */}
                    <div
                        className="absolute inset-0 opacity-80"
                        style={{ background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)` }}
                    ></div>

                    {/* Text Content */}
                    <div className="relative z-10 max-w-2xl px-4 md:-mt-14">
                        <h1 className="text-3xl sm:text-3xl md:text-4xl font-medium text-white mb-3">
                            We'd Love to Hear from You!
                        </h1>
                        <p className="text-lg text-white opacity-90 font-light pb-5">
                            Your thoughts matter to us! Reach out and let's make learning even better together.
                        </p>
                    </div>
                </div>

                {/* 2. Main Contact Grid */}
                {/* The max-w-7xl is kept as requested to maintain the same width */}
                <div className="relative -mt-12 md:-mt-24 lg:-mt-[200px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {/* Left Column: Contact Info */}
                        <ContactInfoCard />

                        {/* Right Column: Contact Form */}
                        <ContactForm />
                    </div>
                </div>

                {/* Footer of Copyright */}
                <footer className="w-full py-6 text-center font-semibold text-md border-t border-gray-200 mt-12">
                    <span style={gradientTextColorStyle}>
                        ©{new Date().getFullYear()} ERRANDLEARNHUB | All Rights Reserved.
                    </span>
                </footer>
            </div>
        </>
    );
}







// import React, { useState } from "react";
// import { Mail, Globe, MapPin } from "lucide-react";
// import ed2 from "../assets/ed2.jpg";
// import Navbar from "../components/Home/Navbar";

// const ContactInfoCard = () => {
//   const primaryTeal = "#11998d";
//   const primaryBlue = "#0f6eb3";

//   const infoItems = [
//     {
//       icon: Mail,
//       label: "Email Address",
//       value: "@learnhubcareers@gmail.com",
//       href: "mailto:learnhubcareers@gmail.com",
//     },
//     {
//       icon: Globe,
//       label: "Website",
//       value: "www.ErrandLearnHub.com",
//       href: "https://www.errandlearnhub.com",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Rajam, Vizianagaram, Andhra Pradesh, India, 532127",
//       href: "https://maps.app.goo.gl/rajam",
//     },
//   ];

//   return (
//     <div className="bg-white rounded-2xl shadow-lg p-10 h-[600px] w-full flex flex-col justify-between">
//       {/* Header */}
//       <div>
//         <div
//           className="inline-block px-5 py-1.5 rounded-md text-white font-semibold text-sm mb-8 tracking-wide"
//           style={{
//             background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)`,
//           }}
//         >
//           Contact Us
//         </div>

//         <h3 className="text-[26px] font-bold text-gray-800 mb-1">
//           Need More Information?
//         </h3>
//         <h4 className="text-[20px] font-semibold text-gray-700 mb-5">
//           Get in Touch
//         </h4>

//         <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
//           Need help with our courses or bundles? Our team is here to assist you
//           anytime.
//         </p>

//         {/* Info Items */}
//         <div className="space-y-6">
//           {infoItems.map((item, i) => (
//             <div key={i} className="flex items-start">
//               <div
//                 className="p-3 mr-4 rounded-full bg-gray-100 flex-shrink-0"
//                 style={{ color: primaryTeal }}
//               >
//                 <item.icon size={22} />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-0.5">
//                   {item.label}
//                 </p>
//                 <a
//                   href={item.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[16px] text-gray-800 hover:text-blue-600 transition"
//                 >
//                   {item.value}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ContactForm = () => {
//   const primaryTeal = "#11998d";
//   const primaryBlue = "#0f6eb3";
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Message Sent! (Check console for data)");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const InputField = ({
//     label,
//     name,
//     type = "text",
//     placeholder,
//     isTextArea = false,
//   }) => (
//     <div className="mb-6">
//       <label
//         htmlFor={name}
//         className="block text-gray-700 font-semibold text-[15px] mb-2"
//       >
//         {label}
//       </label>
//       {isTextArea ? (
//         <textarea
//           id={name}
//           name={name}
//           value={formData[name]}
//           onChange={handleChange}
//           rows="5"
//           placeholder={placeholder}
//           className="w-full p-4 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-opacity-50 transition duration-200"
//           style={{ minHeight: "140px", focusRingColor: primaryTeal }}
//           required
//         />
//       ) : (
//         <input
//           id={name}
//           name={name}
//           type={type}
//           value={formData[name]}
//           onChange={handleChange}
//           placeholder={placeholder}
//           className="w-full p-4 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-opacity-50 transition duration-200"
//           style={{ focusRingColor: primaryTeal }}
//           required
//         />
//       )}
//     </div>
//   );

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-white rounded-2xl shadow-lg p-10 h-[600px] w-full flex flex-col justify-between"
//     >
//       <div>
//         <InputField label="Your Name" name="name" placeholder="Enter your name" />
//         <InputField
//           label="Your Email"
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//         />
//         <InputField
//           label="Your Message"
//           name="message"
//           placeholder="Write your message here"
//           isTextArea
//         />
//       </div>

//       <div className="mt-8 flex justify-center">
//         <button
//           type="submit"
//           className="flex items-center justify-center px-12 py-3 rounded-xl text-[17px] font-semibold text-white transition duration-300 hover:opacity-90"
//           style={{
//             background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)`,
//           }}
//         >
//           Send Message
//         </button>
//       </div>
//     </form>
//   );
// };

// export default function App() {
//   const primaryTeal = "#11998d";
//   const primaryBlue = "#0f6eb3";

//   const gradientTextColorStyle = {
//     background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)`,
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="font-sans bg-gray-50 min-h-screen">
//         {/* HERO */}
//         <div
//           className="relative w-full h-[600px] flex items-center justify-center text-center overflow-hidden"
//           style={{
//             backgroundImage: `url(${ed2})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div
//             className="absolute inset-0 opacity-85"
//             style={{
//               background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)`,
//             }}
//           ></div>

//           <div className="relative z-10 max-w-2xl px-4">
//             <h1 className="text-4xl font-semibold text-white mb-4">
//               We&apos;d Love to Hear from You!
//             </h1>
//             <p className="text-[18px] text-white opacity-90 font-light leading-relaxed">
//               Your thoughts matter to us! Reach out and let&apos;s make learning even
//               better together.
//             </p>
//           </div>
//         </div>

//         {/* MAIN CONTACT SECTION */}
//         <div className="relative -mt-[300px] max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 z-20 pb-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12">
//             <ContactInfoCard />
//             <ContactForm />
//           </div>
//         </div>

//         {/* FOOTER */}
//         <footer className="w-full py-6 text-center font-semibold text-md border-t border-gray-200 mt-12">
//           <span style={gradientTextColorStyle}>
//             ©{new Date().getFullYear()} ERRANDLEARNHUB | All Rights Reserved.
//           </span>
//         </footer>
//       </div>
//     </>
//   );
// }
