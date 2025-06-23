import styles from "./Header.module.scss"
import { NavLink } from "react-router";
import LangSelect from "../LangSelect";
import { useLang } from '../../components/LangContext';
import { useState, useEffect } from 'react';
import { getLangData } from '../../utils/getStoreDatas';
import type { PageDataType } from '../../types/PageDataType';
import type { HeaderDataType } from "../../types/HeaderDataType";

function Header() {
    const { lang } = useLang();
    const [headerDatas, setHeaderDatas] = useState<HeaderDataType>();
    
    useEffect(() => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
            setHeaderDatas(datas.header);
        }
        fetchdata();
    }, [lang]);
    
    if(!headerDatas) return null;
   
    return(
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
    )
}

export default Header;