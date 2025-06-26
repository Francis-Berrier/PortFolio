import styles from "./Header.module.scss"
import { NavLink } from "react-router";
import LangSelect from "../LangSelect";
import { useLang } from '../../components/LangContext';
import { useState, useEffect } from 'react';
import { config } from "../../assets/config";
import { getLangData } from '../../utils/getStoreDatas';
import type { PageDataType } from '../../types/PageDataType';
import type { HeaderDataType } from "../../types/HeaderDataType";

function Header() {
    const { lang } = useLang();
    const [headerDatas, setHeaderDatas] = useState<HeaderDataType>();
    const [isMobile, setIsMobile] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const breakPoint = config.MOBILE_BREAKPOINT;
    const mediaQuery: MediaQueryList= window.matchMedia(`(max-width: ${breakPoint}px)`);

    useEffect(() =>{
        
        const handleMediaChange = (event: MediaQueryListEvent ) =>{
            setIsMobile(event.matches)
        };
        setIsMobile(mediaQuery.matches)

        mediaQuery.addEventListener('change', handleMediaChange);

        
        return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
        };
    }, []);

    const toggleOpen= () => {
        setNavOpen(!navOpen)
    };
    
    useEffect(() => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
            setHeaderDatas(datas.header);
        }
        fetchdata();
    }, [lang]);
    
    if(!headerDatas) return null;
   
    return(
        <>
            {!isMobile ?
            <header>
                <div className={styles.pageLink}><NavLink to="/">{headerDatas.home}</NavLink></div>
                <nav>
                    <ul>
                        <li className={styles.pageLink}><NavLink to="/about">{headerDatas.about}</NavLink></li>
                        <li className={styles.pageLink}><NavLink to="/contact">{headerDatas.contact}</NavLink></li>
                        <li><LangSelect/></li>
                    </ul>
                </nav>
            </header>
            :
            <div className={styles.mobileVisible}>
                <header>   
                    <div className={styles.pageLink}><NavLink to="/">{headerDatas.home}</NavLink></div>
                    <button className={`${styles.burger} ${navOpen ? styles.isOpen : ''}`} onClick={toggleOpen}>
                        <span />
                        <span />
                        <span />
                    </button>
                </header>
                <nav className={`${styles.navHidden} ${navOpen ? styles.navDisplay : ''}`}>
                    <ul>
                        <li className={styles.pageLink}><NavLink to="/about">{headerDatas.about}</NavLink></li>
                        <li className={styles.pageLink}><NavLink to="/contact">{headerDatas.contact}</NavLink></li>
                        <li><LangSelect/></li>
                    </ul>
                </nav>
            </div>
            }
        </>       
    )
}

export default Header;