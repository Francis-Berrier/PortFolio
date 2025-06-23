import styles from './Home.module.scss'
import Landing from '../../components/Landing'

function Home() {

    return (
        <div className={styles.homeContainer}>
            <Landing/>
        </div>

    )
}
export default Home