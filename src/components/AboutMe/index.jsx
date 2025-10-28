import styles from './style.module.css';
import Translate from "@docusaurus/Translate";

export function AboutMe() {
    return (
        <section id="aboutMe" className="bg-blue">
            <div className="my_container">
                <div className={styles.aboutMe}>
                    <article className={styles.article}>
                        <p className={styles.intro}>
                            <Translate id="homepage.aboutMe.greeting">
                                Hey there,
                            </Translate>
                            <span className={styles.wave} role="img" aria-label="waving hand">👋</span>
                            <Translate id="homepage.aboutMe.iam">
                                I am
                            </Translate>
                        </p>
                        <h1 className={styles.name}>Georg Straßberger</h1>
                        <p className={styles.role}>
                            <Translate id="homepage.aboutMe.role">
                                Software developer
                            </Translate>
                        </p>
                        <picture>
                            <source srcSet="img/georg-emoji-md.png" media="(min-width: 768px)"/>
                            <img className={styles.portrait} src="img/georg-emoji-lg.png"
                                 alt="Foto von Georg Strassberger"
                                 fetchPriority="high"/>
                        </picture>
                        <p className={styles.desc}>
                            <Translate id="homepage.aboutMe.desc-1">
                                I love not only developing systems, but also understanding, automating, and optimizing
                                them—from web apps to sensor data analysis.
                            </Translate>
                        </p>
                        <p className={styles.desc}>
                            <Translate id="homepage.aboutMe.desc-2">
                                Currently, my focus is increasingly shifting toward containerization (Docker, k3s) and
                                scalable infrastructures, while I continue to use modern web technologies to turn ideas
                                into working solutions.
                            </Translate>
                        </p>
                        <p className={styles.desc}>
                            <Translate id="homepage.aboutMe.desc-3">
                                I love it when something works and is practical in the end—and I'm constantly learning
                                new things in the process.
                            </Translate>
                        </p>
                        <a href="#contact" className={styles.button}>
                            <Translate id="homepage.aboutMe.contact-link">
                                Contact me
                            </Translate>
                        </a>
                    </article>
                    {/* PHOTO */}
                    <aside className={styles.aside}>
                        <picture>
                            <source srcSet="img/georg-emoji-md.png" media="(min-width: 768px)"/>
                            <img className={styles.portrait} src="img/georg-emoji-lg.png"
                                 alt="Foto von Georg Strassberger"
                                 fetchPriority="high"/>
                        </picture>
                    </aside>
                </div>
            </div>
        </section>
    );
}