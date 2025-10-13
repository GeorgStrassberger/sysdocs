import styles from './style.module.css';

export function Projects() {
    return (
        <section id="myProjects" className="bg-blue">
            <div className="my_container">
                <div className={styles.projectsContainer}>
                    <header>
                        <h2 className="title">My projects</h2>
                        {/*<p className="description">Where I applied my skills</p>*/}
                    </header>
                    <div className={styles.projects}>
                        {/* vSERVER */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>vServer</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Yaml */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/yaml.png" alt="yaml_icon"/>
                                    <span>Yaml</span>
                                </div>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* IT Security */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>IT Security</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="yaml_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/terminal.png" alt="vServer"/>
                            <article className={styles.description}>
                                Write some information about the project.
                                For example: What are you proud of?
                                What were you able to implement here?
                                What different algorithms, server architecture did you use?
                                Why did you find this project so interesting?
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/vserver">Documentation</a>
                                <a className={styles.link} href="https://gitlab.com/geeser/vserver" target="_blank">GitLab</a>
                            </div>
                        </div>
                        {/* BABY TOOLS */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>Baby Tools Shop</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Yaml */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/yaml.png" alt="yaml_icon"/>
                                    <span>Yaml</span>
                                </div>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* IT Security */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>IT Security</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="yaml_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/baby_toy.png" alt="Wordpress"/>
                            <article className={styles.description}>
                                Write some information about the project.
                                For example: What are you proud of?
                                What were you able to implement here?
                                What different algorithms, server architecture did you use?
                                Why did you find this project so interesting?
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/baby-tools">Documentation</a>
                                <a className={styles.link} href="https://gitlab.com/geeser/baby_tool_shop" target="_blank">GitLab</a>
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
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* IT Security */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>IT Security</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="yaml_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/truck_signs_api.png" alt="Wordpress"/>
                            <article className={styles.description}>
                                Write some information aout the project.
                                For examle: What are you proud of?
                                What were you able to implement here?
                                What different algorithms, server atchitecture did you use?
                                Why did you find this project so interesting?
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/truck-signs-api">Documentation</a>
                                <a className={styles.link} href="https://gitlab.com/geeser/truck_signs_api" target="_blank">GitLab</a>
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
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* IT Security */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>IT Security</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="yaml_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/minecraft.png" alt="Minecraft"/>
                            <article className={styles.description}>
                                Write some information aout the project.
                                For examle: What are you proud of?
                                What were you able to implement here?
                                What different algorithms, server atchitecture did you use?
                                Why did you find this project so interesting?
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/minecraft">Documentation</a>
                                <a className={styles.link} href="https://github.com/GeorgStrassberger/minecraft_server_hosting" target="_blank">Github</a>
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
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* IT Security */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>IT Security</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="yaml_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/wordpress.png" alt="Wordpress"/>
                            <article className={styles.description}>
                                Write some information about the project.
                                For example: What are you proud of?
                                What were you able to implement here?
                                What different algorithms, server architecture did you use?
                                Why did you find this project so interesting?
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/wordpress">Documentation</a>
                                <a className={styles.link} href="https://github.com/GeorgStrassberger/wordpress_example" target="_blank">Github</a>
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
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* IT Security */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>IT Security</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="yaml_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/c_docker.png" alt="Conduit"/>
                            <article className={styles.description}>
                                Write some information aout the project.
                                For examle: What are you proud of?
                                What were you able to implement here?
                                What different algorithms, server atchitecture did you use?
                                Why did you find this project so interesting?
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/da-projects/conduit">Documentation</a>
                                <a className={styles.link} href="https://github.com/GeorgStrassberger/conduit" target="_blank">Github</a>
                            </div>
                        </div>
                        {/* JUICE SHOP */}
                        <div className={styles.project}>
                            <header>
                                <h3 className={styles.projectTitle}>Juice Shop</h3>
                            </header>
                            <div className={styles.skills}>
                                {/* Yaml */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/yaml.png" alt="yaml_icon"/>
                                    <span>Yaml</span>
                                </div>
                                {/* Shell */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>Shell</span>
                                </div>
                                {/* IT Security */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/shell.png" alt="yaml_icon"/>
                                    <span>IT Security</span>
                                </div>
                                {/* Container */}
                                <div className={styles.skill}>
                                    <img className={styles.skillIcon} src="/img/docker.png" alt="yaml_icon"/>
                                    <span>Container</span>
                                </div>
                            </div>
                            <img className={styles.image} src="/img/juice_shop.png" alt="Wordpress"/>
                            <article className={styles.description}>
                                Write some information aout the project.
                                For examle: What are you proud of?
                                What were you able to implement here?
                                What different algorithms, server atchitecture did you use?
                                Why did you find this project so interesting?
                            </article>
                            <div className={styles.linkGroup}>
                                <a className={styles.link} href="/docs/juice-shop">Documentation</a>
                                <a className={styles.link} href="https://github.com/juice-shop/juice-shop" target="_blank">Github</a>
                            </div>
                        </div>
                         {/*ADD MORE */}
                    </div>
                </div>
            </div>
        </section>
    )
}