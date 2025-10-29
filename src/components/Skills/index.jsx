import styles from './style.module.css';
import Translate from "@docusaurus/Translate";

export function Skills() {
    return (
        <section id="mySkills" className="bg-black">
            <div className="my_container">
                <div className={styles.mySkills}>
                    <h2 className="title">
                        <Translate id="homepage.skills.title">
                            My skills
                        </Translate>
                    </h2>
                    <div className={styles.skills}>
                        {/* HTML */}
                        <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                            <div className={styles.skillCard}>
                                {/* FRONT */}
                                <div className={styles.skillFront}>
                                    <img src="/img/html.png" alt="html_logo"/>
                                    <span className={styles.text}>HTML</span>
                                </div>
                                {/* BACK */}
                                <div className={styles.skillBack}>
                                    <h3>
                                        <Translate id="homepage.skills.html.title">
                                            How I use it
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>
                                            <Translate id="homepage.skills.html.list.1">
                                                Structured layouts with semantic HTML
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.html.list.2">
                                                Fast-loading, accessible pages
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.html.list.3">
                                                Forms, menus, and interactive sections that just work
                                            </Translate>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* CSS */}
                        <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                            <div className={styles.skillCard}>
                                {/* FRONT */}
                                <div className={styles.skillFront}>
                                    <img src="/img/css.png" alt="html_logo"/>
                                    <span className={styles.text}>CSS</span>
                                </div>
                                {/* BACK */}
                                <div className={styles.skillBack}>
                                    <h3>
                                        <Translate id="homepage.skills.css.title">
                                            How I style it
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>
                                            <Translate id="homepage.skills.css.list.1">
                                                Modern layouts with Flexbox and Grid
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.css.list.2">
                                                Simple, consistent styles that just work
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.css.list.3">
                                                Smooth animations and transitions
                                            </Translate>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* DOCUSAURUS */}
                        <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                            <div className={styles.skillCard}>
                                {/* FRONT */}
                                <div className={styles.skillFront}>
                                    <img src="/img/docusaurus.png" alt="html_logo"/>
                                    <span className={styles.text}>Static Site generator</span>
                                </div>
                                {/* BACK */}
                                <div className={styles.skillBack}>
                                    <h3>
                                        <Translate id="homepage.skills.docusaurus.title">
                                            How I build with it
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>
                                            <Translate id="homepage.skills.docusaurus.list.1">
                                                Custom static sites with React
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.docusaurus.list.2">
                                                Search, tags, and i18n configuration
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.docusaurus.list.3">
                                                Flexible layouts and content structure
                                            </Translate>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* PYTHON */}
                        <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                            <div className={styles.skillCard}>
                                {/* FRONT */}
                                <div className={styles.skillFront}>
                                    <img src="/img/python.png" alt="html_logo"/>
                                    <span className={styles.text}>Python</span>
                                </div>
                                {/* BACK */}
                                <div className={styles.skillBack}>
                                    <h3>
                                        <Translate id="homepage.skills.python.title">
                                            What I build with Python
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>
                                            <Translate id="homepage.skills.python.list.1">
                                                IoT Microcontroller
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.python.list.1">
                                                Prototyping CLI tools and security utilities
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.python.list.1">
                                                APIs with Flask/Django
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.python.list.1">
                                                Lightweight automation scripts and system tooling
                                            </Translate>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* SHELL */}
                        <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                            <div className={styles.skillCard}>
                                {/* FRONT */}
                                <div className={styles.skillFront}>
                                    <img src="/img/shell.png" alt="html_logo"/>
                                    <span className={styles.text}>Shell scripting</span>
                                </div>
                                {/* BACK */}
                                <div className={styles.skillBack}>
                                    <h3>
                                        <Translate id="homepage.skills.shell.title">
                                            How I automate with shell
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>
                                            <Translate id="homepage.skills.shell.list.1">
                                                Writing entrypoint.sh to start and configure docker
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.shell.list.2">
                                                Adjusting config files (e.g. permissions, variables, services)
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.shell.list.3">
                                                Automating deployment and runtime setup on Linux systems
                                            </Translate>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* YAML */}
                        <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                            <div className={styles.skillCard}>
                                {/* FRONT */}
                                <div className={styles.skillFront}>
                                    <img src="/img/yaml.png" alt="html_logo"/>
                                    <span className={styles.text}>Yaml</span>
                                </div>
                                {/* BACK */}
                                <div className={styles.skillBack}>
                                    <h3>
                                        <Translate id="homepage.skills.yaml.title">
                                            How I use YAML
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>Kubernetes deployments and services in YAML</li>
                                        <li>Storing configuration values such as database connections and credentials
                                        </li>
                                        <li>Managing environment-specific variables for different stages (dev, test,
                                            prod)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* CONTAINER */}
                        <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                            <div className={styles.skillCard}>
                                {/* FRONT */}
                                <div className={styles.skillFront}>
                                    <img src="/img/docker.png" alt="html_logo"/>
                                    <span className={styles.text}>Container</span>
                                </div>
                                {/* BACK */}
                                <div className={styles.skillBack}>
                                    <h3>
                                        <Translate id="homepage.skills.container.title">
                                            How I work with containers
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>
                                            <Translate id="homepage.skills.container.list.1">
                                                Building and running services in containers (Docker)
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.container.list.2">
                                                Managing lightweight clusters and workloads with k3s
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.container.list.3">
                                                Using containers in deployment and automation workflows
                                            </Translate>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* CI/CD */}
                        <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                            <div className={styles.skillCard}>
                                {/* FRONT */}
                                <div className={styles.skillFront}>
                                    <img src="/img/ci_cd.png" alt="html_logo"/>
                                    <span className={styles.text}>CI/CD with GitHub Actions</span>
                                </div>
                                {/* BACK */}
                                <div className={styles.skillBack}>
                                    <h3>
                                        <Translate id="homepage.skills.cicd.title">
                                            How I implement CI/CD
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>
                                            <Translate id="homepage.skills.cicd.list.1">
                                                Automating builds, tests, and deployments through CI/CD pipelines
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.cicd.list.2">
                                                Running pre-build and validation steps for consistent results
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.cicd.list.3">
                                                Triggering workflows on push, pull requests, or scheduled events
                                            </Translate>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* SECURITY */}
                        <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                            <div className={styles.skillCard}>
                                {/* FRONT */}
                                <div className={styles.skillFront}>
                                    <img src="/img/security.png" alt="html_logo"/>
                                    <span className={styles.text}>IT Security</span>
                                </div>
                                {/* BACK */}
                                <div className={styles.skillBack}>
                                    <h3>
                                        <Translate id="homepage.skills.security.title">
                                            How I apply security
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>
                                            <Translate id="homepage.skills.security.list.1">
                                                Simulating attacks to identify and understand vulnerabilities
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.security.list.2">
                                                Hardening login and access control mechanisms
                                            </Translate>
                                        </li>
                                        <li>
                                            <Translate id="homepage.skills.security.list.3">
                                                Using security tools to analyze configurations and permissions
                                            </Translate>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}