import styles from './CinemaExperience.module.scss';
import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';
import { useLang } from '../LangContext';
import { getLangData } from '../../utils/getStoreDatas';
import type { PageDataType } from '../../types/PageDataType';
import type { ExperiencesCinemaDatasType } from '../../types/AboutTypes';
import Button from '../Button';
import FilmCards from '../FilmCards';

function CinemaExperience () {
    const { lang } = useLang();
    const [cineExpDatas, setCineExpDatas] = useState<ExperiencesCinemaDatasType>(); 
        
    useEffect(() => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
            setCineExpDatas(datas.aboutExperienceCinema);
        }
        fetchdata();
    }, [lang]);
            
        if(!cineExpDatas) return null;

    return (
        <div>
            <div className={styles.backButton}><NavLink to={cineExpDatas.link} ><Button name={cineExpDatas.buttonName}/></NavLink></div>
            <section className={styles.experiencesContainer}>

                <div className={styles.introduction}>
                    <h1 className={styles.title}>{cineExpDatas.title}</h1>
                    <div className={styles.introText}>{cineExpDatas.introText}</div>
                </div>
                
                <div className={styles.filmo}>
                    <FilmCards/>
                </div>
                <div className={styles.linkFilmoContainer}>
                    <a href={cineExpDatas.urlFilmo} target='_blank'>
                    <Button name={cineExpDatas.textFilmo} />
                    </a>   
                </div> 
                
            </section>
        </div>
        
    )
}

export default CinemaExperience;