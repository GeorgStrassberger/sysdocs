import styles from './style.module.css';

export function Projects() {
    return (
        <section id="myProjects" className="bg-blue">
            <div className="my_container">
                <div className={styles.projects}>
                    <h2 className="title">My projects</h2>
                    <p className="description">Where I applied my skills</p>
                </div>
            </div>
        </section>
    )
}