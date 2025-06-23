import styles from './Experiences.module.scss'
import { useLang } from '../../components/LangContext';
import { useState, useEffect } from 'react';
import { getLangData } from '../../utils/getStoreDatas';
import type { PageDataType } from '../../types/PageDataType';
import type { Film } from '../../types/Film';
import type { Code } from '../../types/Code';
import type { ExperiencesDatasType } from '../../types/AboutTypes';
import CardExperience from '../CardExperience';


function Experiences() {

    const { lang } = useLang();
    const [filmPictures, setFilmPictures]= useState<string[]>([]);
    const [codePictures, setCodePictures]= useState<string[]>([]);
    const [experienceDatas, setExperienceDatas] = useState<ExperiencesDatasType>();


    useEffect( () => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
           setExperienceDatas(datas.aboutExperience);
        }
        async function fetchFilmPicture() {
            const key = 'films';
            const films: Film[] = await getLangData({key, lang});
            const pictures: string[]=films.map(film => film.imgFilmUrl);
            setFilmPictures(pictures);
        }
        async function fetchCodePicture() {
            const key = 'code';
            const codes: Code[] = await getLangData({key, lang});
            const pictures: string[]=codes.map(code => code.codeImgUrl);
            setCodePictures(pictures);
        }
        fetchFilmPicture();
        fetchCodePicture();
        fetchdata();
    }, [lang]);
    if(!experienceDatas) return null;
    
    return (
        <section className={styles.experiencesContainer}>
            <div className={styles.card}>
                <CardExperience 
                    pictures={filmPictures} 
                    title={experienceDatas.cinema.title} 
                    text={experienceDatas.cinema.text} 
                    link={experienceDatas.cinema.link} 
                    buttonName={experienceDatas.cinema.buttonName} />
            </div>
            
        </section>
    )   
}

export default Experiences