import styles from './style.module.css';

export function Skills() {
    return (
        <section id="mySkills" className="bg-black">
            <div className="my_container">
                <div className={styles.mySkills}>
                    <h2 className="title">My skills</h2>
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
                                    <h3>How i used this skill</h3>
                                    <ul>
                                        <li>User-friendly navigation menus</li>
                                        <li>Responsive web design</li>
                                        <li>Contact forms and login pages</li>
                                        <li>Transitions, animations and hover effect</li>
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
                                    <h3>How i used this skill</h3>
                                    <ul>
                                        <li>User-friendly navigation menus</li>
                                        <li>Responsive web design</li>
                                        <li>Contact forms and login pages</li>
                                        <li>Transitions, animations and hover effect</li>
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
                                    <h3>How i used this skill</h3>
                                    <ul>
                                        <li>search functionality</li>
                                        <li>static website and customization</li>
                                        <li>tags, categories and RSS feeds</li>
                                        <li>translation</li>
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
                                    <h3>How i used this skill</h3>
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
                                    <h3>How i used this skill</h3>
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
                                    <h3>How i used this skill</h3>
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
                                    <h3>How i used this skill</h3>
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
                                    <h3>How i used this skill</h3>
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
                                    <h3>How i used this skill</h3>
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