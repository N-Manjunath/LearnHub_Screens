import Header from '../components/About/Header';
import OurMission from '../components/About/OurMission';
import WhyChooseUs from '../components/About/WhyChooseUs';
import WhatWeOffer from '../components/About/WhatWeOffer';
import JoinTheMovement from '../components/About/JoinTheMovement';
import Navbar from '../components/Home/Navbar'


export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Header />
            <OurMission />
            <WhyChooseUs />
            <WhatWeOffer />
            <JoinTheMovement />
        </div>
    );
}