import AutoCarousel from '../components/Home/AutoCarousel';
import EducationBeyondBoundaries from '../components/Home/EducationBeyondBound';
import GrowthSection from '../components/Home/GrowthSection';
import StudentSay from '../components/Home/StudentSay';
import Questions from '../components/Home/Questions'
import PricingBundles from '../components/Home/PricingBundles';
import Navbar from '../components/Home/Navbar'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <AutoCarousel />
            <EducationBeyondBoundaries />
            <GrowthSection />
            <PricingBundles />
            <StudentSay />
            <Questions />
        </div>
    );
}