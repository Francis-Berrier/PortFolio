import styles from './AboutFormation.module.scss'
import FormationCards from "../FormationCards";

function AboutFormation () {
    return (
        
        <section className={styles.container}>
            <h1 className={styles.title}>Formations</h1>
            <FormationCards />
        </section>
    )
}

export default AboutFormation;