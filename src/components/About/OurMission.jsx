import React from 'react';
const OurMission = () => {
  return (
    <section className="bg-white py-8 mt-4 sm:py-6">

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <span className="text-3xl leading-tight tracking-wide 
            font-medium 
            sm:text-4xl 
            text-transparent bg-clip-text
            bg-gradient-to-r from-[#11998D] to-[#0465aa]">

            Our Mission
          </span>

          {/* Body Text */}
          <p className="mt-4 max-w-7xl mx-auto text-base 
            sm:text-lg 
            leading-relaxed 
            tracking-wide 
            text-center 
            text-[#000000B2] 
            font-medium">
            Our mission is to bridge the gap between academic knowledge and real-world
            application. By offering curated courses and resources, we aim to empower
            individuals to excel in their professional journeys, foster innovation,
            and become leaders in their respective fields.
          </p>

        </div>
      </div>
    </section>
  );
};

export default OurMission;