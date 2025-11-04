import styles from "../style.module.css";
import Translate from "@docusaurus/Translate";

const SKILL = {
    label: "HTML",
    imagePath: "/img/html.png",
    title: "How I use it",
    list: [
        "Structured layouts with semantic HTML",
        "Fast-loading, accessible pages",
        "Forms, menus, and interactive sections that just work"
    ]
}

export function Skill(skill) {
    return (
        <>
            {/* HTML */}
            <div className={`${styles.skillContainer} ${styles.skillFlip}`}>
                <div className={styles.skillCard}>
                    {/* FRONT */}
                    <div className={styles.skillFront}>
                        <img src={`${skill.imagePath}`} alt={`${skill.label}_logo`} />
                        <span className={styles.text}>${skill.label}</span>
                    </div>
                    {/* BACK */}
                    <div className={styles.skillBack}>
                        <h3>
                            <Translate id="homepage.skills.html.title">
                                ${skill.title}
                            </Translate>
                        </h3>
                        <ul>
                            {
                                skill.list.map((listItem, index) => {
                                        return (
                                            <li key={index}>
                                                <Translate id="homepage.skills.html.list.1">
                                                    ${listItem}
                                                </Translate>
                                            </li>
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
