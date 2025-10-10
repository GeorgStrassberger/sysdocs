import {useState} from 'react';
import styles from './style.module.css';

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav id="nav" className="bg-blue">
            <div className="my_container">
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <a className={styles.link} href="/docs/da-projects/overview">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                 className={styles.linkIcon}>
                                <path
                                    d="M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
                            </svg>
                        </a>
                    </div>

                    {/* Desktop-Links (>= 992px) */}
                    <div className={styles.links}>
                        <a className={styles.link} href="#aboutMe">About Me</a>
                        <a className={styles.link} href="#mySkills">My skills</a>
                        <a className={styles.link} href="#myProjects">My projects</a>
                        <a className={styles.link} href="#contact">Contact</a>
                    </div>

                    {/* Hamburger (nur < 992px sichtbar) */}
                    <button
                        type="button"
                        className={styles.iconBtn}
                        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
                        aria-expanded={open}
                        onClick={(e) => {
                            e.stopPropagation();
                            setOpen(v => !v);
                        }}
                    >
                        <img
                            className={styles.icon}
                            src={open ? '/img/close_32.png' : '/img/menu_32.png'}
                            alt=""
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile-Menü */}
            <div
                id="menu"
                className={styles.menu}
                style={{
                    transform: open ? 'translateY(0)' : 'translateY(-100%)',
                    visibility: open ? 'visible' : 'hidden',
                    opacity: open ? 1 : 0
                }}
                onClick={() => setOpen(false)}
            >
                <a className={styles.menuLink} href="#aboutMe">About Me</a>
                <a className={styles.menuLink} href="#mySkills">My skills</a>
                <a className={styles.menuLink} href="#myProjects">My projects</a>
                <a className={styles.menuLink} href="#contact">Contact</a>
            </div>
        </nav>
    );
}
