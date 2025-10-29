import styles from './style.module.css';

export function Imprint() {
    return (
        <section id="imprint" className={`bg-blue`} style={{ flex: 1 }}>
            <div className={`my_container`}>
                <article className={styles.imprint}>
                    <h1>Impressum</h1>
                    <h2>Diensteanbieter</h2>
                    <p>Georg Straßberger</p>
                    <p>Gartenstraße 3</p>
                    <p>73650 Winterbach</p>
                    <p>Deutschland</p>
                    <h2>Kontaktmöglichkeiten</h2>
                    <p>E-Mail-Adresse: <a className={styles.imprintLink}
                    href="mailto:georg.strassberger@hotmail.de">georg.strassberger@hotmail.de</a></p>
                    <p>Telefon: 017696477716</p>
                    <p>
                        <a className={styles.imprintLink} href="https://datenschutz-generator.de/"
                           title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken."
                           target="_blank" rel="noopener noreferrer nofollow">Erstellt mit kostenlosem
                            Datenschutz-Generator.de von Dr. Thomas Schwenke
                        </a>
                    </p>
                </article>
            </div>
        </section>
    )
}