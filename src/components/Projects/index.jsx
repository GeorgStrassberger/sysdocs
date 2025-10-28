import styles from './style.module.css';
import Translate from "@docusaurus/Translate";

export function Projects() {
    return (
        <section id="myProjects" className="bg-blue">
            <div className="my_container">
                <div className={styles.projectsContainer}>
                    <header>
                        <h2 className="title">
                            <Translate id="homepage.projects.title">
                                My projects
                            </Translate>
                        </h2>
                        {/*<p className="description">Where I applied my skills</p>*/}
                    </header>
                    <div className={styles.projects}>
                        {/* vSERVER */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>vServer</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* HTML */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/html.png" alt="html_icon"/>
                                    <span>HTML</span>
                                </div>
                                {/* CSS */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/css.png" alt="css_icon"/>
                                    <span>CSS</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/terminal.png" alt="vServer"/>
                            <article className={styles.description}>
                                vServer Setup Guide ist eine kompakte Anleitung zur Einrichtung eines virtuellen
                                Servers mit SSH-Zugang, Nginx-Webserver und GitHub-Integration.
                                Der Guide führt Schritt für Schritt durch die sichere Serverkonfiguration – von der
                                Schlüsselverwaltung bis zur Bereitstellung eigener Projekte – und enthält Befehle
                                für Linux und Windows.
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/vserver">Documentation</a>
                                <a className={styles.link} href="https://gitlab.com/geeser/vserver"
                                   target="_blank">GitLab</a>
                            </div>
                        </div>
                        {/* BABY TOOLS */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>Baby Tools Shop</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* Python */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/python.png" alt="python_icon"/>
                                    <span>Python</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="yaml_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/baby_toy.png" alt="Wordpress"/>
                            <article className={styles.description}>
                                Babyshop ist ein Beispielprojekt, das zeigt, wie eine Django-Webanwendung mithilfe von
                                Docker containerisiert und bereitgestellt wird.
                                Das Repository enthält eine vollständige Anleitung zum Erstellen eines Docker-Images,
                                Starten eines Containers und Verwalten der Anwendung über das Django-Admin-Dashboard.
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/baby-tools">Documentation</a>
                                <a className={styles.link} href="https://gitlab.com/geeser/baby_tool_shop"
                                   target="_blank">GitLab</a>
                            </div>
                        </div>
                        {/* TRUCK SIGNS API */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>Truck Signs API</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Yaml */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/yaml.png" alt="yaml_icon"/>
                                    <span>Yaml</span>
                                </div>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="shell_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* Python */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/python.png" alt="python_icon"/>
                                    <span>Python</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="container_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/truck_signs_api.png" alt="Wordpress"/>
                            <article className={styles.description}>
                                Truck Signs API ist eine Django-basierte Webanwendung für einen Online-Shop, der
                                vorgefertigte und personalisierte Vinyl-Aufkleber für Lkw anbietet. Das Projekt
                                demonstriert den vollständigen Aufbau einer containerisierten Anwendung mit Docker,
                                bestehend aus einer PostgreSQL-Datenbank und einer Django-API, die über ein
                                Admin-Dashboard verwaltet wird.
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/truck-signs-api">Documentation</a>
                                <a className={styles.link} href="https://gitlab.com/geeser/truck_signs_api"
                                   target="_blank">GitLab</a>
                            </div>
                        </div>
                        {/* Minecraft */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>Minecraft</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Yaml */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/yaml.png" alt="yaml_icon"/>
                                    <span>Yaml</span>
                                </div>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="shell_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="docker_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/minecraft.png" alt="Minecraft"/>
                            <article className={styles.description}>
                                Minecraft Server Hosting (Java Edition) bietet eine vollständige, Docker-basierte
                                Serverlösung für die Minecraft Java Edition, ohne auf vorgefertigte Images
                                zurückzugreifen. Der Server wird direkt aus der offiziellen server.jar von Mojang über
                                den SHA1-Hash erstellt und lässt sich vollständig über eine .env-Datei konfigurieren.
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/minecraft">Documentation</a>
                                <a className={styles.link}
                                   href="https://github.com/GeorgStrassberger/minecraft_server_hosting"
                                   target="_blank">Github</a>
                            </div>
                        </div>
                        {/* WORDPRESS */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>Wordpress</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Yaml */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/yaml.png" alt="yaml_icon"/>
                                    <span>Yaml</span>
                                </div>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="shell_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="docker_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/wordpress.png" alt="Wordpress"/>
                            <article className={styles.description}>
                                WordPress Docker Example ist ein einfaches Docker-Compose-Beispiel, das zeigt, wie eine
                                WordPress-Installation zusammen mit einer MariaDB-Datenbank und dem Adminer-Interface
                                gestartet werden kann. Das Projekt dient als leicht verständliche Vorlage für das
                                Hosting einer WordPress-Umgebung in Containern mit vollständig konfigurierbaren
                                Umgebungsvariablen.
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/wordpress">Documentation</a>
                                <a className={styles.link} href="https://github.com/GeorgStrassberger/wordpress_example"
                                   target="_blank">Github</a>
                            </div>
                        </div>
                        {/* CONDUIT */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>Conduit</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Yaml */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/yaml.png" alt="yaml_icon"/>
                                    <span>Yaml</span>
                                </div>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="shell_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="docker_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/c_docker.png" alt="Conduit"/>
                            <article className={styles.description}>
                                Conduit ist eine vollständige Fullstack-Webanwendung mit Angular-Frontend und
                                Django-Backend, die vollständig Dockerisiert bereitgestellt wird. Das Projekt
                                demonstriert, wie Frontend und Backend über docker compose orchestriert und über
                                separate Container gemeinsam betrieben werden können.
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/conduit">Documentation</a>
                                <a className={styles.link} href="https://github.com/GeorgStrassberger/conduit"
                                   target="_blank">Github</a>
                            </div>
                        </div>
                        {/* JUICE SHOP */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>Juice Shop</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* IT Security */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/security.png" alt="yaml_icon"/>
                                    <span>IT Security</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/juice_shop.png" alt="Wordpress"/>
                            <article className={styles.description}>
                                Write some information about the project.
                                For example: What are you proud of?
                                What were you able to implement here?
                                What different algorithms, server architecture did you use?
                                Why did you find this project so interesting?
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/juice-shop">Documentation</a>
                                <a className={styles.link} href="https://github.com/juice-shop/juice-shop"
                                   target="_blank">Github</a>
                            </div>
                        </div>
                        {/*ADD MORE */}
                    </div>
                </div>
            </div>
        </section>
    )
}