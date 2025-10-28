import React from 'react';
import ed1 from '../../assets/ed1.jpg';
import ed2 from '../../assets/ed2.jpg';
import ed3 from '../../assets/ed3.jpg';

const featuresData = [
  {
    title: 'Specialised Content',
    description: 'Our programs are tailored for the Pharm D community and aspiring entrepreneurs.',
    imageUrl: ed1,
  },
  {
    title: 'Community-Driven',
    description: 'Join a network of like-minded learners and professionals who inspire growth.',
    imageUrl: ed2,
  },
  {
    title: 'Affordable-Learning',
    description: 'Quality of our education shouldn\'t come at a premium—our courses are designed to be accessible to everyone.',
    imageUrl: ed3,
  },
  {
    title: 'Continuous Support',
    description: 'We\'re with you in every step of your way, offering mentorship and career guidance to help you succeed.',
    imageUrl: ed1,
  },
];

const FeatureCard = ({ title, description, imageUrl }) => {
  const stop1 = 'transparent 50%';
  const stop2 = '#11998D45 65%';
  const stop3 = '#0F6EB3 100%';

  return (
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, ${stop1}, ${stop2}, ${stop3})`,
        }}
      ></div>
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm font-medium text-gray-200 line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F0FDFA] pb-10 sm:pb-16">
      <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-3xl font-medium text-transparent bg-clip-text 
            bg-gradient-to-r  from-[#11998D]         
            to-[#0465aa]
             sm:text-4xl pt-12">
            Why Choose Us?
          </span>
          <p className="mt-4 text-base sm:text-lg max-w-3xl mx-auto text-center text-[#000000B2] font-medium leading-relaxed tracking-wide">
            Empowering the next generation of pharmacy professionals with specialized content,
            continuous guidance, and affordable access to quality education.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;