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
                                            How I use this Skill
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
                                            Where I apply it
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
                                            Practical use
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
                                            Practical use
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>Build APIs</li>
                                        <li>spam filtering, recommendation systems</li>
                                        <li>automate software testing</li>
                                        <li>using libraries like Tkinter, PyQt or Kivy</li>
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
                                            How i used this skill
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>Adding new users and setting their permissions</li>
                                        <li>Performing calculations or running</li>
                                        <li>Conditional statements, loops and functions</li>
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
                                            How i used this skill
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>A Kubernetes deployment</li>
                                        <li>store settings like database connections</li>
                                        <li>environment-specific variables</li>
                                        <li>complex data structures represent lists and maps</li>
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
                                            How i used this skill
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>CI/CD piplines</li>
                                        <li>automate building, testing & deploying applications</li>
                                        <li>build microservices-based applications</li>
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
                                            How i used this skill
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>Automated builds and tests</li>
                                        <li>pre-build actions for common tasks</li>
                                        <li>push, pull request or schedule</li>
                                        <li>Automated deployments</li>
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
                                            In practice
                                        </Translate>
                                    </h3>
                                    <ul>
                                        <li>simulate attacks and identify vulnerabilities</li>
                                        <li>Setting up multi-factor authentication</li>
                                        <li>login security</li>
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