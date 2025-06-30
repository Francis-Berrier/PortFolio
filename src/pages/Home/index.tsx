import styles from './Home.module.scss'
import Landing from '../../components/Landing'
import SkillsPresentation from '../../components/SkillsPresentation'

function Home() {

    return (
        <div className={styles.homeContainer}>
            <Landing/>
            <SkillsPresentation/>
        </div>

    )
}
export default Home