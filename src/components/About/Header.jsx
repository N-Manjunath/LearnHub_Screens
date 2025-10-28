// import React, { useState } from 'react';

// export default function Header() {
//   // State for mobile menu
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen min-w-full bg-gray-50  font-sans">

//       {/* Header */}
//       <header className="bg-white border-b border-gray-200 py-4 sticky top-0 z-50">
//         <div className="container mx-auto px-6 flex justify-between items-center">

//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10">
//               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <circle cx="20" cy="20" r="18" stroke="#0891b2" strokeWidth="2" fill="white"/>
//                 <path d="M15 18 L18 21 L25 14" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
//                 <circle cx="20" cy="12" r="1.5" fill="#0891b2"/>
//                 <circle cx="13" cy="27" r="1.5" fill="#0891b2"/>
//                 <circle cx="27" cy="27" r="1.5" fill="#0891b2"/>
//               </svg>
//             </div>
//             <div className="flex flex-col">
//               <span className="text-lg font-normal italic text-gray-900 leading-tight">Errand Learn Hub</span>
//               <span className="text-[10px] font-semibold text-gray-500 tracking-wider">LEARN HUB</span>
//             </div>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a href="#home" className="text-base text-gray-500 no-underline font-normal transition-colors duration-300 hover:text-gray-900">
//               Home
//             </a>
//             <a href="#about" className="text-base text-gray-900 font-medium underline no-underline transition-colors duration-300 hover:text-gray-900">
//               About Us
//             </a>
//             <a href="#contact" className="text-base text-gray-500 no-underline font-normal transition-colors duration-300 hover:text-gray-900">
//               Contact Us
//             </a>
//             <button className="py-2.5 px-7 bg-cyan-600 text-white border-none rounded-md text-base font-medium cursor-pointer transition-all duration-300 hover:bg-cyan-700">
//               Login
//             </button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button 
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-700 focus:outline-none"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isMenuOpen && (
//           <nav className="md:hidden bg-white px-6 pt-4 pb-6 border-t border-gray-200">
//             <a href="#home" className="block py-2 text-base text-gray-600 hover:text-gray-900">Home</a>
//             <a href="#about" className="block py-2 text-base text-gray-900 font-medium hover:text-gray-900">About Us</a>
//             <a href="#contact" className="block py-2 text-base text-gray-600 hover:text-gray-900">Contact Us</a>
//             <button className="w-full mt-4 py-2.5 px-7 bg-cyan-600 text-white rounded-md text-base font-medium cursor-pointer transition-all duration-300 hover:bg-cyan-700">
//               Login
//             </button>
//           </nav>
//         )}
//       </header>

//       {/* Hero Section with Overlap Container */}
//       <div className="relative pb-96 md:pb-64">

//         {/* Hero Section */}
//         <section className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 pt-20 pb-44 md:pt-24 md:pb-56">
//           <div className="container mx-auto px-6 lg:px-20 text-white">
//             <h1 className="text-3xl md:text-4xl font-light leading-snug mb-6 text-center md:text-left max-w-2xl">
//               Welcome to <span className="font-bold">Errand Learn Hub</span>, your trusted partner as a education and empowerment.
//             </h1>
//             <p className="text-base font-light leading-relaxed text-gray-100 text-center md:text-left max-w-2xl">
//               At Errand Learn Hub, we are passionate about transforming the learning experience for Pharm D students, budding entrepreneurs, and visionaries looking to turn their dreams into impactful ventures. Our platform combines quality education, practical insights, and entrepreneurial mentorship to help you thrive in today's competitive world.
//             </p>
//           </div>
//         </section>

//         {/* Stats Section - Overlapping */}
//         <section className="bg-white rounded-3xl p-6 md:p-12 absolute -bottom-48 md:bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-5xl shadow-lg z-10 mb-5">
//           <div className="text-center">
//             <h2 className="text-3xl md:text-4xl font-normal text-cyan-600 mb-2">
//               Unlock Your Potential
//             </h2>
//             <p className="text-base text-gray-500 mb-12">
//               With India's Fastest- Growing Digital Skill Platform
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">

//               {/* Stat Card 1 */}
//               <div className="bg-cyan-600 rounded-3xl py-12 px-8 text-white shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-600/30">
//                 <div className="text-5xl md:text-6xl font-bold mb-3 leading-none">150K+</div>
//                 <div className="text-lg font-normal leading-snug">Students with us</div>
//               </div>

//               {/* Stat Card 2 */}
//               <div className="bg-cyan-600 rounded-3xl py-12 px-8 text-white shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-600/30">
//                 <div className="text-5xl md:text-6xl font-bold mb-3 leading-none">45+</div>
//                 <div className="text-lg font-normal leading-snug">Trainers Onboard</div>
//               </div>

//               {/* Stat Card 3 */}
//               <div className="bg-cyan-600 rounded-3xl py-12 px-8 text-white shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-600/30">
//                 <div className="text-5xl md:text-6xl font-bold mb-3 leading-none">100+</div>
//                 <div className="text-lg font-normal leading-snug">Skilled Offered</div>
//               </div>

//             </div>
//           </div>
//         </section>
//       </div>

//       {/* Adding extra space at the bottom, as the original component would be followed by more content */}
//       {/* <div className="h-48 bg-gray-50"></div>  */}
//     </div>
//   );
// }



import React, { useState } from 'react';

export default function Header() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // FIX 1: Removed min-h-screen and min-w-full
    <div className="bg-gray-50 font-sans">

      {/* Hero Section with Overlap Container */}
      <div className="relative pb-96 md:pb-64">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 pl-30 pt-20 pb-44 md:pt-24 md:pb-56">
          <div className="container mx-auto px-6 lg:px-20 text-white">
            <h1 className="text-3xl md:text-4xl font-medium leading-snug mb-6 text-center md:text-left max-w-2xl">
              Welcome to <span className="font-bold">Errand Learn Hub</span>, your trusted partner as a education and empowerment.
            </h1>
            <p className="text-base font-medium leading-relaxed text-gray-100 text-center md:text-left max-w-2xl">
              At Errand Learn Hub, we are passionate about transforming the learning experience for Pharm D students, budding entrepreneurs, and visionaries looking to turn their dreams into impactful ventures. Our platform combines quality education, practical insights, and entrepreneurial mentorship to help you thrive in today's competitive world.
            </p>
          </div>
        </section>

        {/* Stats Section - Overlapping */}
        {/*
          FIX 2: Changed "-bottom-48 md:bottom-0 ... mb-5"
          TO "bottom-5 md:bottom-12 ..."
          This brings the card INSIDE the parent container's padding, fixing the overlap.
        */}
        <section className="bg-white rounded-3xl p-6 md:p-12 absolute bottom-5 md:bottom-12 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-5xl shadow-lg z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-2 bg-gradient-to-r from-[#11998D] to-[#0F6EB3] bg-clip-text text-transparent">
  Unlock Your Potential
</h2>

            <p className="text-base text-black-500 mb-12">
              With India's Fastest- Growing Digital Skill Platform
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {/* Stat Card 1 */}
              <div className="bg-gradient-to-b from-[#11998D] to-[#0F6EB3] rounded-3xl py-12 px-8 text-white shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F6EB3]/30">

                <div className="text-5xl md:text-6xl font-bold mb-3 leading-none">150K+</div>
                <div className="text-lg font-normal leading-snug">Students with us</div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-gradient-to-b from-[#11998D] to-[#0F6EB3] rounded-3xl py-12 px-8 text-white shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F6EB3]/30">

                <div className="text-5xl md:text-6xl font-bold mb-3 leading-none">45+</div>
                <div className="text-lg font-normal leading-snug">Trainers Onboard</div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-gradient-to-b from-[#11998D] to-[#0F6EB3] rounded-3xl py-12 px-8 text-white shadow-lg transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0F6EB3]/30">

                <div className="text-5xl md:text-6xl font-bold mb-3 leading-none">100+</div>
                <div className="text-lg font-normal leading-snug">Skilled Offered</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}