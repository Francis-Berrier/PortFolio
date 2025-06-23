import styles from './FilmCard.module.scss'
import { useLang } from '../../components/LangContext';
import { useState, useEffect } from 'react';
import { getLangData } from '../../utils/getStoreDatas';
import type { PageDataType } from '../../types/PageDataType';
import type { Film, FilmCardDataType} from '../../types/Film';

function FilmCard ({film}: {film: Film}) {
    const { lang } = useLang();
    const [filmCardsDatas, setFilmCardsDatas] = useState<FilmCardDataType>(); 
        
    useEffect(() => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
            setFilmCardsDatas(datas.filmCardData);
        }
        fetchdata();
    }, [lang]);
            
    if(!filmCardsDatas) return null;
    

    return (
        <article className= {styles.cardContainer}>
            <a className= {styles.imgFilm} href={film.imdbUrl} target="_blank ">
                <img src= {film.imgFilmUrl} />
                <span className={styles.overlay}>{filmCardsDatas.movieInfos}</span>
            </a>
            <div className= {styles.filmInfos}>
                <h3 className= {styles.title}>{film.title}&nbsp;({film.year})</h3>
                <div className= {styles.infos}>
                    <div>{filmCardsDatas.directedBy}{film.director}</div>
                    <div>{filmCardsDatas.starring}{film.actors.map((name, index) => {
                        return (
                            <span key={`${name}-${index}`} className= {styles.actorsName}>{name},&nbsp;</span>
                        )
                        })}
                    </div>
                    <div>{filmCardsDatas.occupation}{film.occupation}</div>
                </div>
            </div>
        </article>
    )

}

export default FilmCard;