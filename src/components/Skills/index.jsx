import styles from './style.module.css';

export function Skills() {
    return (
        <section id="mySkills" className="bg-black">
            <div className="my_container">
                <div className={styles.mySkills}>
                    <h2 className={styles.title}>My skills</h2>
                    <div className={styles.skills}>
                        <div className={styles.skill}>
                            <img src="/img/html.png" alt="html_logo"/>
                            <span>HTML</span>
                        </div>
                        <div className={styles.skill}>
                            <img src="/img/css.png" alt="html_logo"/>
                            <span>CSS</span>
                        </div>
                        <div className={styles.skill}>
                            <img src="/img/docusaurus.png" alt="html_logo"/>
                            <span>Static Site generator</span>
                        </div>
                        <div className={styles.skill}>
                            <img src="/img/python.png" alt="html_logo"/>
                            <span>Python</span>
                        </div>
                        <div className={styles.skill}>
                            <img src="/img/shell.png" alt="html_logo"/>
                            <span>Shell scripting</span>
                        </div>
                        <div className={styles.skill}>
                            <img src="/img/yaml.png" alt="html_logo"/>
                            <span>Yaml</span>
                        </div>
                        <div className={styles.skill}>
                            <img src="/img/docker.png" alt="html_logo"/>
                            <span>Container</span>
                        </div>
                        <div className={styles.skill}>
                            <img src="/img/ci_cd.png" alt="html_logo"/>
                            <span>CI/CD with GitHub Actions</span>
                        </div>
                        <div className={styles.skill}>
                            <img src="/img/security.png" alt="html_logo"/>
                            <span>IT Security</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}