import styles from './FormationCards.module.scss'
import { useState, useEffect } from 'react';
import { useLang } from '../LangContext';
import { getLangData } from '../../utils/getStoreDatas'; 
import type { FormationType } from '../../types/FormationType';
import Formation from '../Formation';

function FormationCards() {
     const [formations, setFormations] = useState<FormationType[]>([]);
     const { lang } = useLang();
    
      useEffect( () => {
        const key = 'formation';
        async function fetchFormations () {
          const formations: FormationType[] = await getLangData({key, lang});
          setFormations(formations);
        }
        fetchFormations ();
        
      }, [lang]);
      if(!formations) {
        return( <div>Pas de formations</div>)
      }
    return (
         <div className={styles.formationCards}>
             {formations.sort((a,b) => b.id - a.id).map(formation => (
        <Formation key={formation.id} formationDatas={formation} />
      ))}
        </div>
    )
   
}

export default FormationCards;