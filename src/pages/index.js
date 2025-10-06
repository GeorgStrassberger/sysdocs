import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {AboutMe} from "../components/AboutMe";
import {Skills} from "../components/Skills";
import {Navbar} from "../components/Navbar";


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <>
            {/*<Navbar />*/}
                <AboutMe />
                <Skills />
        </>
    );
}
