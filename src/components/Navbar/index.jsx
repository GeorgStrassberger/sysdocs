import styles from './style.module.css';

export function Navbar() {

    return (
        <nav className="bg-blue">
            <div className="my_container">
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        {/*<img src="" alt="logo"/>*/}
                        <a className={styles.link} href="/docs/juice-shop">[GEST]DOCS</a>
                    </div>
                    <div className={styles.links}>
                        <a className={styles.link} href="#aboutMe">About Me</a>
                        <a className={styles.link} href="#mySkills">My skills</a>
                        <a className={styles.link} href="#myProjects">My projects</a>
                        <a className={styles.link} href="#contact">Contact</a>
                    </div>
                    {/*  Hamburger Btn  */}
                    <div>
                        <img className={styles.icon} src="/img/list.svg" alt="icon"/>
                    </div>
                </div>
            </div>
            {/* Mobile Menu  */}
            <div id="menu" className={styles.menu}>
                {/*<a className={styles.menuLink} href="/docs/juice-shop">[GEST]DOCS</a>*/}
                <a className={styles.menuLink} href="#aboutMe">About Me</a>
                <a className={styles.menuLink} href="#mySkills">My skills</a>
                <a className={styles.menuLink} href="#myProjects">My projects</a>
                <a className={styles.menuLink} href="#contact">Contact</a>
            </div>
        </nav>
    )
}