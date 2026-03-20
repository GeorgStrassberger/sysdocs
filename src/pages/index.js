import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { AboutMe } from "../components/AboutMe";
import { Contact } from "../components/ContactMe";
import { Footer } from "../components/Footer";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Navbar } from "../components/Navbar";
import Layout from '@theme/Layout';


export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <>
            <Layout title='GS' description='Sysdocs - Georg Straßberger'>
                {/* <Navbar /> */}
                <AboutMe />
                <Skills />
                <Projects />
                {/* <Contact /> */}
                {/* <Footer /> */}
            </Layout>
        </>
    );
}
