import styles from './style.module.css';

export function Footer() {

    function getCurrentYear(){
        return new Date().getFullYear();
    }

    return (
        <section id="footer" className="bg-black">
            <div className="my_container">
                <div className={styles.footer}>
                    <a href="#">
                        <img className={styles.arrowUp} src="/img/arrow_up.png" alt="arrow_up"/>
                    </a>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.text}>&#169;</span>
                            <span className={styles.text}>Georg Straßberger</span>
                            <span className={styles.text}>{ getCurrentYear() }</span>
                        </li>
                        <li>
                            <a className={styles.link} href="legalnotice">
                                Legal notice
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

