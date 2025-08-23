import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {AboutMe} from "../components/AboutMe";
import {Skills} from "../components/Skills";


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <AboutMe />
            <Skills />
            <main>

            </main>
        </Layout>
    );
}
