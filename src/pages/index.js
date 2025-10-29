import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {AboutMe} from "../components/AboutMe";
import {Contact} from "../components/ContactMe";
import {Footer} from "../components/Footer";
import {Projects} from "../components/Projects";
import {Skills} from "../components/Skills";
import {Navbar} from "../components/Navbar";


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <>
            <Navbar/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
}
