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
                                <Translate id="homepage.projects.vserver.description">
                                    vServer Setup Guide is a hands-on
                                    tutorial for setting up your own virtual server.
                                    It walks you through creating a secure SSH connection, configuring an Nginx web
                                    server, and integrating GitHub for deployments.
                                    The guide covers common tasks such as user management, permissions, and SSL setup.
                                    It’s designed for beginners who want to build and manage their own development or
                                    testing environment – with examples for both Linux and Windows.
                                </Translate>
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/vserver">
                                    <Translate id="homepage.projects.vserver.link">
                                        Documentation
                                    </Translate>
                                </a>
                                <a className={styles.link} href="https://gitlab.com/geeser/vserver"
                                   target="_blank">
                                    GitLab
                                </a>
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
                            <img className={styles.image} src="/img/baby_toy.png" alt="BabyToolsShop"/>
                            <article className={styles.description}>
                                <Translate id="homepage.projects.babytools.description">
                                    Baby Tools Shop is a sample project demonstrating how to build, containerize, and
                                    deploy a Django web application using Docker.
                                    The repository includes a complete step-by-step guide for creating the Docker image,
                                    running the containers, and managing the app through the Django admin interface.
                                    The goal was to create a scalable and reproducible setup that can easily be adapted
                                    to different systems – ideal for learning purposes and small web projects.
                                </Translate>
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/baby-tools">
                                    <Translate id="homepage.projects.link.documentation">
                                        Documentation
                                    </Translate>
                                </a>
                                <a className={styles.link} href="https://gitlab.com/geeser/baby_tool_shop"
                                   target="_blank">
                                    GitLab
                                </a>
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
                                <Translate id="homepage.projects.trucksignsapi.description">
                                    Truck Signs API is a Django-based web application serving as the backend for an
                                    online shop offering truck decals — both pre-made and custom designs.
                                    The project demonstrates how to build a containerized application using Docker,
                                    consisting of a PostgreSQL database, a Django REST API, and an admin dashboard for
                                    managing products and orders.
                                    The goal was to create a modular, maintainable, and reproducible infrastructure that
                                    can easily run both locally and on a server.
                                </Translate>
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/truck-signs-api">
                                    <Translate id="homepage.projects.link.documentation">
                                        Documentation
                                    </Translate>
                                </a>
                                <a className={styles.link} href="https://gitlab.com/geeser/truck_signs_api"
                                   target="_blank">
                                    GitLab
                                </a>
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
                                <Translate id="homepage.projects.minecraft.description">
                                    Minecraft Server Hosting (Java Edition) is a fully Docker-based server setup built
                                    without using pre-made images.
                                    The server is generated directly from Mojang’s official server.jar using its SHA1
                                    hash, ensuring full transparency and control.
                                    All settings — such as version, ports, memory limits, and whitelist — are configured
                                    centrally via an .env file.
                                    The project serves as a template for running a Minecraft server in containers that
                                    is automated, reproducible, and secure.
                                </Translate>
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/minecraft">
                                    <Translate id="homepage.projects.link.documentation">
                                        Documentation
                                    </Translate>
                                </a>
                                <a className={styles.link}
                                   href="https://github.com/GeorgStrassberger/minecraft_server_hosting"
                                   target="_blank">
                                    GitHub
                                </a>
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
                                <Translate id="homepage.projects.wordpress.description">
                                    WordPress Docker Example is a simple Docker Compose project that demonstrates how to
                                    run a complete WordPress environment inside containers.
                                    The setup includes WordPress, a MariaDB database, and the Adminer interface for
                                    database management.
                                    All key parameters such as users, passwords, and ports are configured via
                                    environment variables.
                                    The project serves as an easy-to-use template for hosting and testing WordPress
                                    instances in an isolated container environment.
                                </Translate>
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/wordpress">
                                    <Translate id="homepage.projects.link.documentation">
                                        Documentation
                                    </Translate>
                                </a>
                                <a className={styles.link} href="https://github.com/GeorgStrassberger/wordpress_example"
                                   target="_blank">
                                    GitHub
                                </a>
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
                                <Translate id="homepage.projects.conduit.description">
                                    Conduit is a complete full-stack web application featuring an Angular frontend and a
                                    Django backend, fully deployed in Docker containers.
                                    The project demonstrates how multiple services – frontend, backend, and database –
                                    can be orchestrated using Docker Compose.
                                    This separation of components provides a clean, modular architecture that is easy to
                                    extend, test, and deploy across different environments.
                                    Conduit serves as a practical example of modern web development with a containerized
                                    infrastructure.
                                </Translate>
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/conduit">
                                    <Translate id="homepage.projects.link.documentation">
                                        Documentation
                                    </Translate>
                                </a>
                                <a className={styles.link} href="https://github.com/GeorgStrassberger/conduit"
                                   target="_blank">
                                    GitHub
                                </a>
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
                                <Translate id="homepage.projects.juiceshop.description">
                                    OWASP Juice Shop is an intentionally vulnerable web application created for learning
                                    and testing purposes in the field of web security.
                                    In this project, I run Juice Shop in an isolated environment to explore security
                                    mechanisms, vulnerabilities, and attack vectors in a realistic setup.
                                    Docker containers and shell scripts are used to automate the setup and reset process
                                    completely.
                                    The project serves as a hands-on platform to practice penetration testing, security
                                    analysis, and hardening techniques.
                                </Translate>
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/juice-shop">
                                    <Translate id="homepage.projects.link.documentation">
                                        Documentation
                                    </Translate>
                                </a>
                                <a className={styles.link} href="https://github.com/juice-shop/juice-shop"
                                   target="_blank">
                                    GitHub
                                </a>
                            </div>
                        </div>
                        {/*ADD MORE */}
                    </div>
                </div>
            </div>
        </section>
    )
}