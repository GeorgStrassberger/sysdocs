import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {Footer} from "../components/Footer";
import {Navbar} from "../components/Navbar";
import {Imprint} from "../components/Imprint";


export default function LegalNotice() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <>
            <Navbar/>
            <Imprint/>
            <Footer/>
        </>
    );
}