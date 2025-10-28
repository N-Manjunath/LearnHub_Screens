//SignUp.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import signup from "../assets/Signup.png";
import logo from "../assets/Logo.png";

export default function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otp, setOtp] = useState("");
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Reset verification if email changes
        if (e.target.name === "email" && isEmailVerified) {
            setIsEmailVerified(false);
        }
    };

    const handleVerifyEmail = () => {
        if (!formData.email) {
            alert("Please enter your email address");
            return;
        }
        // Here you would send OTP to email
        console.log("Sending OTP to:", formData.email);
        setShowOtpModal(true);
    };

    const handleVerifyOtp = () => {
        // Here you would verify the OTP with backend
        if (otp.length === 6) {
            setIsEmailVerified(true);
            setShowOtpModal(false);
            setOtp("");
            alert("Email verified successfully!");
        } else {
            alert("Please enter a valid 6-digit OTP");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmailVerified) {
            alert("Please verify your email before registering");
            return;
        }
        console.log("Form submitted:", formData);
    };

    return (
        <div className="w-screen min-h-screen flex flex-col lg:flex-row overflow-x-hidden bg-white">
            {/* Logo - Top Left */}
            <div className="absolute top-4 left-4 lg:top-0 lg:left-6 z-20">
                <img
                    src={logo}
                    alt="LearnHub Logo"
                    className="h-24 w-24 "
                />
            </div>

            {/* Left Section - Form */}
            <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-4 py-20 lg:px-6 lg:py-0">
                <div
                    className="w-full max-w-[450px] lg:max-w-[550px] bg-white rounded-[20px] px-6 py-6 lg:px-10 lg:py-8 lg:ml-60 shadow-sm"
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}
                >
                    <h2 className="text-[24px] lg:text-[30px] font-medium text-gray-600 mb-2 text-center">Create Account</h2>
                    <p className="text-gray-500 text-xs lg:text-sm mb-4 lg:mb-6 text-center">Join thousands of learners today</p>

                    <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-3.5">
                        {/* Username */}
                        <div>
                            <label className="block text-sm font-small text-gray-900 mb-1.5">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Enter your username"
                                className="w-full px-4 py-2.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11998D] placeholder-gray-300"
                                required
                            />
                        </div>

                        {/* Email with Verify Button */}
                        <div>
                            <label className="block text-sm font-small text-gray-900 mb-1.5">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="abcd@email.com"
                                    className="w-full px-4 py-2.5 pr-20 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11998D] placeholder-gray-300"
                                    required
                                    disabled={isEmailVerified}
                                />
                                <button
                                    type="button"
                                    onClick={handleVerifyEmail}
                                    disabled={isEmailVerified}
                                    className={`absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 underline cursor-pointer text-xs font-medium rounded transition ${isEmailVerified
                                        ? 'bg-green-100 text-green-700 cursor-not-allowed'
                                        : 'text-[#0F6EB3] hover:text-[#0F6EB3]/80'
                                        }`}
                                >
                                    {isEmailVerified ? '✓ Verified' : 'Verify'}
                                </button>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-small text-gray-900 mb-1.5">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-2.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11998D] placeholder-gray-300"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-small text-gray-900 mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11998D] placeholder-gray-400"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                                >
                                    {showPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-small text-gray-900 mb-1.5">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11998D] placeholder-gray-400"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
                                >
                                    {showConfirmPassword ? (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        {/* Terms and conditions */}
                        <p className="text-center text-xs text-gray-600">
                            I agree to the <Link to="/terms" className="text-[#0F6EB3] font-medium">Terms of Service</Link> and <Link to="/privacy" className="text-[#0F6EB3] font-medium">Privacy Policy</Link>
                        </p>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-[#11998D] to-[#0F6EB3] text-white rounded-lg font-medium hover:opacity-90 transition mt-5 text-base"
                        >
                            Register
                        </button>

                        {/* Login Link */}
                        <p className="text-center text-sm text-gray-600 mt-4">
                            Already have an account?{" "}
                            <Link to="/login" className="text-[#0F6EB3] font-medium">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right Section - Background Illustration */}
            <div className="hidden lg:flex w-1/2 h-screen items-center justify-end">
                <img
                    src={signup}
                    alt="Registration Illustration"
                    className="h-full w-[80%] object-cover"
                    style={{ objectPosition: 'left center' }}
                />
            </div>

            {/* OTP Modal */}
            {showOtpModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl">
                        <h3 className="text-xl font-medium text-gray-800 mb-2">Verify Your Email</h3>
                        <p className="text-sm text-gray-600 mb-6">
                            We've sent a 6-digit OTP to <span className="font-medium text-gray-800">{formData.email}</span>
                        </p>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                Enter OTP
                            </label>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                placeholder="000000"
                                maxLength={6}
                                className="w-full px-4 py-3 text-center text-lg font-medium tracking-widest bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11998D] focus:border-transparent"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setShowOtpModal(false);
                                    setOtp("");
                                }}
                                className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleVerifyOtp}
                                className="flex-1 py-2.5 bg-gradient-to-r from-[#11998D] to-[#0F6EB3] text-white rounded-lg font-medium hover:opacity-90 transition"
                            >
                                Verify
                            </button>
                        </div>

                        <button
                            onClick={handleVerifyEmail}
                            className="w-full mt-4 text-sm text-[#0F6EB3] hover:underline"
                        >
                            Resend OTP
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}