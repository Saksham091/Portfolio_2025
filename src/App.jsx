import Navbar from "./components/NavBar.jsx";
import Contact from "./section/Contact.jsx";
import ExperienceSection from "./section/ExperienceSection.jsx";
import FeatureCards from "./section/FeatureCards.jsx";
import Footer from "./section/Footer.jsx";
import Hero from "./section/Hero.jsx";
import ShowcaseSection from "./section/ShowcaseSection.jsx";
import TechStack from "./section/TechStack.jsx";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Contact />
            <Footer />   
        </>
    )
}

export default App 