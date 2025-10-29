import {useState} from 'react';
import styles from './style.module.css';
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';

export function Navbar() {
    const [open, setOpen] = useState(false);

    // Holt Infos wie currentLocale
    const {i18n} = useDocusaurusContext();
    const currentLocale = i18n?.currentLocale;

    // Holt Helper-Funktionen für Locale-Wechsel
    const alternatePageUtils = useAlternatePageUtils();

    // Sicher bauen: wenn alternatePageUtils leer ist (z. B. nur 1 Locale), dann fallback auf "#"
    const enUrl = alternatePageUtils
        ? alternatePageUtils.createUrl({locale: 'en'})
        : '#';

    const deUrl = alternatePageUtils
        ? alternatePageUtils.createUrl({locale: 'de'})
        : '#';
    return (
        <nav id="nav" className="bg-blue">
            <div className="my_container">
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <a className={styles.link} href="/docs/da-projects/overview">
                            <img className={styles.logoImg} src="img/georg-emoji-md.png" alt="georg"/>
                            GS
                        </a>
                    </div>

                    {/* Desktop-Links (>= 992px) */}
                    <div className={styles.links}>
                        <a className={styles.link} href="/#aboutMe">
                            <Translate id="homepage.navbar.aboutMe">About Me</Translate>
                        </a>
                        <a className={styles.link} href="/#mySkills">
                            <Translate id="homepage.navbar.skills">My skills</Translate>
                        </a>
                        <a className={styles.link} href="/#myProjects">
                            <Translate id="homepage.navbar.projects">My projects</Translate>
                        </a>
                        <a className={styles.link} href="/#contact">
                            <Translate id="homepage.navbar.contact">Contact</Translate>
                        </a>
                        {/* Language Switcher */}
                        <div className={styles.localeSwitch}>
                            <a
                                className={
                                    currentLocale === 'en'
                                        ? styles.localeActive
                                        : styles.localeBtn
                                }
                                href={enUrl}
                            >
                                EN
                            </a>
                            <a
                                className={
                                    currentLocale === 'de'
                                        ? styles.localeActive
                                        : styles.localeBtn
                                }
                                href={deUrl}
                            >
                                DE
                            </a>
                        </div>
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
                <a className={styles.menuLink} href="/#aboutMe">
                    <Translate id="homepage.navbar.aboutMe">About Me</Translate>
                </a>
                <a className={styles.menuLink} href="/#mySkills">
                    <Translate id="homepage.navbar.skills">My skills</Translate>
                </a>
                <a className={styles.menuLink} href="/#myProjects">
                    <Translate id="homepage.navbar.projects">My projects</Translate>
                </a>
                <a className={styles.menuLink} href="/#contact">
                    <Translate id="homepage.navbar.contact">Contact</Translate>
                </a>
                {/* Sprachauswahl auch mobil */}
                <div className={styles.menuLocaleSwitch}>
                    <a
                        className={
                            currentLocale === 'en'
                                ? styles.localeActive
                                : styles.localeBtn
                        }
                        href={enUrl}
                    >
                        EN
                    </a>
                    <a
                        className={
                            currentLocale === 'de'
                                ? styles.localeActive
                                : styles.localeBtn
                        }
                        href={deUrl}
                    >
                        DE
                    </a>
                </div>
            </div>
        </nav>
    );
}
