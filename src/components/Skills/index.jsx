import styles from './style.module.css';

export function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <h2>My skills</h2>
            <div className={styles.skills__container}>
                <div className={styles.skill}>HTML</div>
                <div className={styles.skill}>CSS</div>
                <div className={styles.skill}>Python</div>
                <div className={styles.skill}>Container</div>
            </div>
        </section>
    )
}