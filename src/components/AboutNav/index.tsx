import styles from './AboutNav.module.scss'
import { NavLink } from 'react-router';
import { useLang } from '../../components/LangContext';
import { useState, useEffect } from 'react';
import { getLangData } from '../../utils/getStoreDatas';
import type { PageDataType } from '../../types/PageDataType';
import type { NavButton, AboutDatasType } from '../../types/AboutTypes';

function AboutNav () {

    const [isActive, setIsActive]= useState<number>(1);
    
    const handleClick= (button: NavButton) => {
        setIsActive(button.id);  
    }
    const { lang } = useLang();
    const [aboutDatas, setAboutDatas] = useState<AboutDatasType>(); 
        
    useEffect(() => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
            setAboutDatas(datas.aboutNav);
        }
        fetchdata();
    }, [lang]);
        
    if(!aboutDatas) return null;

    return (
        <div className={styles.navAbout}>
            <h2 className={styles.title}>{aboutDatas.title}</h2>
            <nav>
            <ul className={styles.navList}>
                {aboutDatas.buttons.map((button) => (
                        <li key= {`${button.id}`}>
                                <NavLink to={button.page} 
                                    className={isActive=== button.id ? styles.active : styles.inactive}
                                    onClick= {() => handleClick(button)}
                                >
                                    {button.name}
                                </NavLink>
                            </li>
                    
                ))}          
            </ul>
        </nav>

        </div>
        
    )
}

export default AboutNav;