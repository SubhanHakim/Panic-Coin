import Navbar from "../components/navbar"
import AboutSection from "../sections/AboutSection"
import PanicBanner from "../sections/Ctaaction"
import HeroSection from "../sections/HeroSection"
import Token from "../sections/Token"


function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <Token />
            <PanicBanner />
        </>
    )
}

export default HomePage