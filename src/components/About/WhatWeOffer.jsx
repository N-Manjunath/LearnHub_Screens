// import React from 'react';
// import ed1 from '../../assets/ed3.jpg';
// import ed4 from '../../assets/ed2.jpg';
// import ed2 from '../../assets/ed1.jpg';
// import ed3 from '../../assets/ed3.jpg';

// const offersData = [
//   {
//     title: 'Expert-Led Courses',
//     description: 'Learn from industry leaderEntrepreneurial Insights: Receive expert guidance on launching, growing, and expanding your business with proven strategies.',
//     imageUrl: ed1,
//   },
//   {
//     title: 'Entrepreneurial Insights',
//     description: 'Entrepreneurial Insights: Receive expert guidance on launching, growing, and expanding your business with proven strategies.',
//     imageUrl: ed2
//   },
//   {
//     title: 'Skill-Development',
//     description: 'E-Learning Flexibility: Enjoy flexible learning with interactive, easy-to-follow content available 24/7. Access courses anytime, anywhere, and progress at your own pace to fit your schedule.',
//     imageUrl: ed3,
//   },
//   {
//     title: 'E-Learning Flexibility',
//     description: 'Learn from industry leaderEntrepreneurial Insights: Receive expert guidance on launching, growing, and expanding your business with proven strategies.',
//     imageUrl: ed4,
//   },
// ];

// const OfferCard = ({ title, description, imageUrl }) => {

//   const stop1 = 'transparent 50%';
//   const stop2 = '#11998D60 60%';
//   const stop3 = '#0F6EB3 100%';
//   const words = title.split(' ');
//   const firstWord = words[0];
//   const restOfTitle = words.slice(1).join(' ');
//   return (
//     <div
//       className="group relative 
//         // RESPONSIVE FIX:
//         // Use 'w-full' and 'max-w-sm' for mobile.
//         // Let height be 'auto' for mobile content.
//         w-full max-w-sm h-auto
//         // RESPONSIVE FIX:
//         // Your original fixed sizes and hover animation are now applied
//         // ONLY on small screens (sm:) and up.
//         sm:w-[275px] sm:h-[513px] sm:hover:w-96 
//         overflow-hidden shadow-lg cursor-pointer
//         transition-all duration-800 ease-in"
//     >
//       <img
//         src={imageUrl}
//         alt={title}
//         className="absolute inset-0 h-full w-full object-cover"
//       ></img>
//       <div
//         className="absolute inset-0 z-10"
//         style={{
//           backgroundImage: `linear-gradient(to bottom, ${stop1}, ${stop2}, ${stop3})`,
//         }}
//       ></div>

//       <div className="relative z-20 h-full flex flex-col mb-6 justify-end p-6 text-white">

//         <h3 className="
//           text-lg font-bold
//           // RESPONSIVE FIX:
//           // Use a smaller margin for mobile (mb-2).
//           // Apply your original 'mb-12' ONLY on sm: screens and up.
//           mb-2 sm:mb-12 
//           opacity-100 max-h-40
//           // RESPONSIVE FIX:
//           // Apply the 'group-hover' animation ONLY on sm: screens and up.
//           sm:group-hover:opacity-0 sm:group-hover:max-h-0
//           transition-all duration-800 linear
//         ">
//           {firstWord}
//           {restOfTitle && (
//             <>
//               <br />
//               {restOfTitle}
//             </>
//           )}
//         </h3>
//         <p className="
//           text-[16px] text-white/90 font-medium tracking-[4%] leading-6
//           opacity-100 max-h-40 
//           sm:opacity-0 sm:max-h-0
//           sm:group-hover:opacity-100 sm:group-hover:max-h-40
//           transition-all duration-800 linear
//         ">
//           <strong className="text-[17.5px] font-bold ">{title}:</strong> {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// const WhatWeOffer = () => {
//   return (
//     <section className='mt-16 mb-20'>
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <span className="text-[35px] font-medium sm:text-4xl text-center tracking-[4%] leading-[50px]
//           text-transparent          
//             bg-clip-text              
//           bg-gradient-to-r          
//           from-[#11998D]            
//             to-[#0465aa]">What We Offer
//           </span>
//           <p className="mt-4 text-lg max-w-3xl mx-auto text-[17.5px] text-center text-[#000000B2]  font-medium  leading-[30px] tracking-[4%]0">
//             From specialized pharmacy courses to hands-on learning resources, we provide
//             everything you need to strengthen your knowledge and skills.
//           </p>
//         </div>
//         {/* NO CHANGE: Your 'flex-wrap' container is already responsive. */}
//         {/* It will stack the cards on mobile and place them side-by-side on desktop. */}
//         <div className="mt-10 flex flex-wrap justify-center">
//           {offersData.map((offer) => (
//             <OfferCard
//               key={offer.title}
//               title={offer.title}
//               description={offer.description}
//               imageUrl={offer.imageUrl}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default WhatWeOffer;







import React from 'react';
// 1. CLEANED UP IMPORTS
import sc1 from '../../assets/sc1.png';
import sc2 from '../../assets/sc2.png';
import sc3 from '../../assets/sc3.png';
import sc4 from '../../assets/sc4.png'; // Re-using ed2 as ed4, you can change this

const offersData = [
  {
    title: 'Expert-Led Courses',
    // 2. FIXED BROKEN DESCRIPTION
    description: 'Learn from industry leaders and seasoned professionals who bring real-world experience and insights directly to your screen.',
    imageUrl: sc1,
  },
  {
    title: 'Entrepreneurial Insights',
    // 2. FIXED BROKEN DESCRIPTION
    description: 'Receive expert guidance on launching, growing, and expanding your business with proven strategies for success.',
    imageUrl: sc2,
  },
  {
    title: 'Skill-Development',
    // 2. FIXED BROKEN DESCRIPTION
    description: 'Focus on practical, hands-on skills that you can immediately apply in your career, from clinical knowledge to business management.',
    imageUrl: sc3,
  },
  {
    title: 'E-Learning Flexibility',
    // 2. FIXED BROKEN DESCRIPTION
    description: 'Enjoy flexible learning with interactive, easy-to-follow content available 24/7. Access courses anytime, anywhere, and progress at your own pace.',
    imageUrl: sc4,
  },
];

const OfferCard = ({ title, description, imageUrl }) => {

  const stop1 = 'transparent 50%';
  const stop2 = '#11998D60 60%';
  const stop3 = '#0F6EB3 100%';
  const words = title.split(' ');
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(' ');
  
  return (
    <div
      className="group relative 
        w-full max-w-sm h-auto
        sm:w-[275px] sm:h-[513px] sm:hover:w-96 
        overflow-hidden shadow-lg cursor-pointer
        // 4. ADJUSTED ANIMATION
        transition-all duration-1000 linear"
    >
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      ></img>
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${stop1}, ${stop2}, ${stop3})`,
        }}
      ></div>

      <div className="relative z-20 h-full flex flex-col mb-6 justify-end p-6 text-white">

        <h3 className="
          text-lg font-bold
          mb-2 sm:mb-12 
          opacity-100 max-h-40
          sm:group-hover:opacity-0 sm:group-hover:max-h-0
          // 4. ADJUSTED ANIMATION
          transition-all duration-800 linear
        ">
          {firstWord}
          {restOfTitle && (
            <>
              <br />
              {restOfTitle}
            </>
          )}
        </h3>
        <p className="
          text-[16px] text-white/90 font-medium tracking-[4%] leading-[30px]
          opacity-100 max-h-40 
          sm:opacity-0 sm:max-h-0
          sm:group-hover:opacity-100 sm:group-hover:max-h-40
          // 4. ADJUSTED ANIMATION
          transition-all duration-800 linear
        ">
          <strong className="text-[17.5px] font-bold ">{title}:</strong> {description}
        </p>
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
    <section className='mt-16 mb-20'>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-[35px] font-medium sm:text-4xl text-center tracking-[4%] leading-[50px]
          text-transparent          
            bg-clip-text              
          bg-gradient-to-r          
          from-[#11998D]            
            to-[#0465aa]">What We Offer
          </span>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-[17.5px] text-center text-[#000000B2]  font-medium  leading-[30px] 
            // 3. FIXED TYPO
            tracking-[4%]">
            From specialized pharmacy courses to hands-on learning resources, we provide
            everything you need to strengthen your knowledge and skills.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center">
          {offersData.map((offer) => (
            <OfferCard
              key={offer.title}
              title={offer.title}
              description={offer.description}
              imageUrl={offer.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhatWeOffer;