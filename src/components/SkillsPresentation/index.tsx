import styles from './SkillsPresentation.module.scss'
import { useLang } from '../../components/LangContext';
import { useState, useEffect } from 'react';
import Button from '../Button';
import { NavLink } from 'react-router';
import { getLangData } from '../../utils/getStoreDatas';
import type { PageDataType } from '../../types/PageDataType';
import SkillsPresentationCard from '../SkillsPresentationCard';
import type { SkillsPresentationDatas } from '../../types/AbilitiesType';


function SkillsPresentation() {

     const { lang } = useLang();
    const [skillsPresDatas, setSkillsPresDatas] = useState<SkillsPresentationDatas>(); 
        
    useEffect(() => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
            setSkillsPresDatas(datas.homeSkills);
        }
        fetchdata();
    }, [lang]);
        
    if(!skillsPresDatas) return null;
    
    return(
        <div className={styles.container}>
           <div className={styles.tag}>{skillsPresDatas.entete}</div>
           <h2 className={styles.title}>{skillsPresDatas.title}</h2>
           <div className={styles.cards}>
            {skillsPresDatas.cards.map(card =>(
                <SkillsPresentationCard skills={card}/>
            ))}
           </div>
           <div className={styles.button}><NavLink to='/about/abilities' ><Button name={skillsPresDatas.linkButton}/></NavLink></div>
        </div>
    )
}

export default SkillsPresentation;