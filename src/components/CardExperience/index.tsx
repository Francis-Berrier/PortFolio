import styles from './CardExperience.module.scss'
import { NavLink } from 'react-router'
import Carousel from '../Carousel'
import Button from '../Button'

function CardExperience({pictures, title, text, link, buttonName}: {pictures: string[], title: string, text: string, link: string, buttonName: string}) {

    return (
        <article className={styles.cardContainer}>
            <div className={styles.carouselContainer}>
                <Carousel pictures= {pictures}/>
            </div>
            <div className={styles.infosContainer}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.text}>{text}</div>
                <div className={styles.button}><NavLink to={link}><Button name={buttonName}/></NavLink></div>
            </div>
        </article>
    )
}

export default CardExperience