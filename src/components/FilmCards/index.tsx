import styles from './FilmCards.module.scss';
import FilmMini from '../FilmMini';
import { getLangData } from '../../utils/getStoreDatas';
import { useLang } from '../LangContext';
import { useEffect, useState } from 'react';
import type { Film } from '../../types/Film';

function FilmCards() {
  const [films, setFilms] = useState<Film[]>([]);
  const { lang } = useLang();

  useEffect( () => {
    const key = 'films';
    async function fetchFilms () {
      const films: Film[] = await getLangData({key, lang});
      setFilms(films);
    }
    fetchFilms ();
    
  }, [lang]);

  return (
    <div className={styles.filmCards}>
      {films.sort((a,b) => b.id - a.id).map(film => (
        <FilmMini key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmCards;
