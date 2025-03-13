import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Conatct";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </>
    );
};

export default HomePage;