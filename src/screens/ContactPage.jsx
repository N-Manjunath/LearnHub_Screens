import React, { useState } from 'react';
import { Mail, Globe, MapPin } from 'lucide-react';
import ed2 from '../assets/ed2.jpg';
import Navbar from '../components/Home/Navbar';

const ContactInfoCard = () => {
    const primaryTeal = '#11998d';
    const primaryBlue = '#0f6eb3';

    const infoItems = [
        {
            icon: Mail,
            label: 'Email Address',
            value: 'learnhubcareers@gmail.com',
            href: 'mailto:learnhubcareers@gmail.com',
        },
        {
            icon: Globe,
            label: 'Website',
            value: 'www.ErrandLearnHub.com',
            href: 'https://www.errandlearnhub.com',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Rajam, Vizianagaram, Andhra Pradesh, India, 532127',
            href: 'https://maps.app.goo.gl/rajam',
        },
    ];

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between h-[550px] w-full">
            <div>
                {/* Header / Badge */}
                <div
                    className="inline-block px-4 py-1.5 rounded-md text-white font-medium text-sm mb-6"
                    style={{
                        background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)`,
                    }}
                >
                    Contact Us
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Need More Information?
                </h3>
                <h4 className="text-xl font-semibold text-gray-700 mb-6">
                    Get in Touch
                </h4>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    Need help with our courses or bundles? Our team is here to assist you anytime.
                </p>

                <div className="space-y-6">
                    {infoItems.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <div
                                className="p-3 mr-4 rounded-full bg-gray-100 flex-shrink-0"
                                style={{ color: primaryTeal }}
                            >
                                <item.icon size={20} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">{item.label}</p>
                                <a
                                    href={item.href}
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
        </div>
    );
};

const ContactForm = () => {
    const primaryTeal = '#11998d';
    const primaryBlue = '#0f6eb3';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Message Sent! (Check console for data)');
        setFormData({ name: '', email: '', message: '' });
    };

    const InputField = ({
        label,
        name,
        type = 'text',
        placeholder,
        isTextArea = false,
    }) => (
        <div className="mb-5">
            <label
                htmlFor={name}
                className="block text-gray-700 font-medium mb-2"
            >
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    rows="5"
                    placeholder={placeholder}
                    className="w-full p-3 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200"
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
                    className="w-full p-3 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none transition duration-200"
                    required
                />
            )}
        </div>
    );

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between h-[550px] w-full"
        >
            <div>
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
                    isTextArea
                    placeholder="Write your message here"
                />
            </div>

            <div className="mt-4 flex justify-center">
                <button
                    type="submit"
                    className="flex items-center justify-center px-16 py-3 rounded-xl text-[17px] font-semibold text-white transition duration-300 hover:opacity-90"
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

export default function ContactPage() {
    const primaryTeal = '#11998d';
    const primaryBlue = '#0f6eb3';
    const gradientText = {
        background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <>
            <Navbar />

            <div className="font-sans bg-gray-50 min-h-screen">
                {/* Header Section */}
                <div
                    className="relative w-full h-[600px] flex items-center justify-center text-center overflow-hidden"
                    style={{
                        backgroundImage: `url(${ed2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div
                        className="absolute inset-0 opacity-80"
                        style={{
                            background: `linear-gradient(90deg, ${primaryTeal} 0%, ${primaryBlue} 100%)`,
                        }}
                    ></div>

                    <div className="relative z-10 max-w-2xl px-4">
                        <h1 className="text-4xl font-semibold text-white mb-3">
                            We'd Love to Hear from You!
                        </h1>
                        <p className="text-lg text-white opacity-90 font-light">
                            Your thoughts matter to us! Reach out and let's make learning even better together.
                        </p>
                    </div>
                </div>

                {/* Contact Grid Section */}
                <div className="relative -mt-[300px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ContactInfoCard />
                        <ContactForm />
                    </div>
                </div>

                {/* Footer */}
                <footer className="w-full py-6 text-center font-semibold text-md border-t border-gray-200 mt-12">
                    <span style={gradientText}>
                        ©{new Date().getFullYear()} ERRANDLEARNHUB | All Rights Reserved.
                    </span>
                </footer>
            </div>
        </>
    );
}
