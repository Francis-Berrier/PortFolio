import styles from './LangSelect.module.scss'
import Gb from '../../assets/images/drapeaux/gb.webp'
import France from '../../assets/images/drapeaux/france.webp'
import { useLang } from '../LangContext'


function LangSelect() {
    const { lang, setLang } = useLang();

     const toggleLang = () => {
        setLang(lang=== "fr" ? "en": "fr");
     }

    return(
        <button className={styles.langButton} onClick={toggleLang}>
            <img src={lang=== "fr"? `${France}` : `${Gb}`}/>
        </button>
    )
}

export default LangSelect