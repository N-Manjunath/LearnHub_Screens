//Login.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import signup from "../assets/Signup.png";
import logo from "../assets/logo.png";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // This is where you would handle the login logic
        console.log("Form submitted:", formData);
    };

    return (
        <div className="w-screen min-h-screen flex flex-col lg:flex-row overflow-x-hidden bg-white">
            {/* Logo - Top Left */}
            <div className="absolute top-4 left-4 lg:top-6 lg:left-10 z-20">
                <img
                    src={logo}
                    alt="LearnHub Logo"
                    // Matched the smaller logo size from the image
                    className="h-20 w-20 object-contain"
                />
            </div>

            {/* Left Section - Form */}
            {/* Updated this container to properly center the form */}
            <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center py-20 lg:py-0 lg:mt-10">
                <div
                    className="w-full max-w-[430px] bg-white rounded-2xl px-6 py-8 lg:px-10 lg:py-10 shadow-xl"
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.05)'
                    }}
                >
                    {/* Updated text styling to match image */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 text-base mb-8 text-center">
                        Login to continue your learning journey
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="abcd@email.com"
                                className="w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11998D] placeholder-gray-400"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-3 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#11998D] placeholder-gray-400"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
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

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 text-[#11998D] border-gray-300 rounded focus:ring-[#11998D]"
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
                            </label>
                            <Link to="/forgot-password" className="text-sm text-[#0F6EB3] font-medium hover:underline">
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-[#11998D] to-[#0F6EB3] text-white rounded-lg font-medium hover:opacity-90 transition mt-6 text-base"
                        >
                            Login
                        </button>

                        {/* Sign Up Link */}
                        <p className="text-center text-sm text-gray-600 pt-4">
                            Don't have an account?{" "}
                            {/* Updated text from "Create Account" to "Sign up" */}
                            <Link to="/signup" className="text-[#0F6EB3] font-medium hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right Section - Background Illustration */}
            {/* This assumes the 'signup' import is the illustration with the wave */}
            <div className="hidden lg:flex w-1/2 h-screen">
                <img
                    src={signup}
                    alt="Login Illustration"
                    className="w-auto h-auto scale-80"
                />
            </div>
        </div>
    );
}

