import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import MySkills from "../MySkills/MySkills";
import Project from "../Project/Project";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <Project></Project>
            <Contact></Contact>
        </>
    );
};

export default Home;