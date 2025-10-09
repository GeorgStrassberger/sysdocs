import styles from './style.module.css';

export function AboutMe() {
    return (
        <section id="aboutMe" className="bg-blue">
            <div className="my_container">
                <div className={styles.aboutMe}>
                    <article className={styles.article}>
                        <p className={styles.intro}>Hey there,<span className={styles.wave} role="img" aria-label="waving hand">👋</span> I am</p>
                        <h1 className={styles.name}>Georg Straßberger</h1>
                        <p className={styles.role}>Security operations developer</p>
                        <picture>
                            <source srcSet="img/georg-emoji-md.png" media="(min-width: 768px)"/>
                            <img className={styles.portrait} src="img/georg-emoji-lg.png" alt="Foto von Georg Strassberger"
                                 fetchPriority="high"/>
                        </picture>
                        <p className={styles.desc}>
                            Write some information about yourself that is IT related.
                            <br/> For example:
                            <br/> Why are you passionate about coding? Do you habe a deep interest in games? What is
                            your programming skills? Are you constantly learning and keeping up to date?
                        </p>
                        <a href="#contact" className={styles.button}>Contact me</a>
                        <a href="/docs/juice-shop" className={styles.button}>DOCS</a>
                    </article>
                    {/* PHOTO */}
                    <aside className={styles.aside}>
                        <picture>
                            <source srcSet="img/georg-emoji-md.png" media="(min-width: 768px)"/>
                            <img className={styles.portrait} src="img/georg-emoji-lg.png" alt="Foto von Georg Strassberger"
                                 fetchPriority="high"/>
                        </picture>
                    </aside>
                </div>
            </div>
        </section>
    );
}