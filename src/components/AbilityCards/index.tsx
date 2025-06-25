import styles from './AbilityCards.module.scss'
import type { AbilityType } from '../../types/AbilitiesType';
import { useLang } from '../../components/LangContext';
import { useState, useEffect } from 'react';
import AbilityCard from '../AbilityCard';
import { getLangData } from '../../utils/getStoreDatas';

function AbilityCards() {
    const [abilities, setAbilities] = useState<AbilityType[]>([]);
    const { lang } = useLang();
    
      useEffect( () => {
        const key = 'abilities';
        async function fetchAbilities() {
          const abilities: AbilityType[] = await getLangData({key, lang});
          setAbilities(abilities);
        }
        fetchAbilities();
        
      }, [lang]);
    return (
        <section className={styles.container}>
            {abilities.map(ability => (
        <AbilityCard key={ability.id} ability={ability} />
      ))}

        </section>
    )
}

export default AbilityCards;