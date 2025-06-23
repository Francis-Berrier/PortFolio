import styles from './Landing.module.scss'
import { NavLink } from 'react-router';
import { useState, useEffect } from 'react';
import type { HomeDataType } from '../../types/HomeDataType';
import type { PageDataType } from '../../types/PageDataType';
import { useLang } from '../LangContext';
import { getLangData } from '../../utils/getStoreDatas';
import Button from '../Button'; 

function Landing () {
    const { lang } = useLang();
    const [homeDatas, setHomeDatas] = useState<HomeDataType>();
    
    useEffect(() => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
            setHomeDatas(datas.home);
        }
        fetchdata();
    }, [lang]);
    
    if(!homeDatas) return null;
    
    return (
        <div>
            <section className={styles.landingContainer}>
                <div className={styles.textAccueilContainer}>
                    <h1 className={styles.title}>
                        <span>{homeDatas.title}</span>
                        <span>{homeDatas.subtitle}</span>
                    </h1>
                    <div className={styles.introText}>
                        {homeDatas.introText}
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.pageLink}><NavLink to="/contact">
                    <Button name={homeDatas.buttonContact} />
                    </NavLink></div>
                    <a href='https://github.com/Francis-Berrier?tab=repositories' target='_blank'>
                    <Button name={homeDatas.buttonGit} />
                    </a>            
                </div>
            </section>
        </div>   
    )
};

export default Landing;