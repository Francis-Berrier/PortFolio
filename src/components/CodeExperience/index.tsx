import styles from './CodeExperience.module.scss'
import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';
import { useLang } from '../LangContext';
import { getLangData } from '../../utils/getStoreDatas';
import type { PageDataType } from '../../types/PageDataType';
import type { ExperiencesCodeDatasType } from '../../types/AboutTypes';
import CodeCards from '../CodeCards'
import Button from '../Button'

function CodeExperience () {
    const { lang } = useLang();
    const [codeExpDatas, setCodeExpDatas] = useState<ExperiencesCodeDatasType>(); 
        
    useEffect(() => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
            setCodeExpDatas(datas.aboutExperienceCode);
        }
        fetchdata();
    }, [lang]);
            
    if(!codeExpDatas) return null;


    return (
        <div className={styles.container}>
            <div className={styles.backButton}><NavLink to={codeExpDatas.link} ><Button name={codeExpDatas.buttonName}/></NavLink></div>
            <section className={styles.experiencesContainer}>

                <div className={styles.introduction}>
                    <h1 className={styles.title}>{codeExpDatas.title}</h1>
                    <div className={styles.introText}>{codeExpDatas.introText}</div>
                </div>
                <div className={styles.codeCards}>
                    <CodeCards/>
                </div>

                
            </section>
            
        </div>
    )
   
}

export default CodeExperience