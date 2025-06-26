import styles from './CodeCards.module.scss'
import { getLangData } from '../../utils/getStoreDatas';
import { useLang } from '../LangContext';
import { useEffect, useState } from 'react';
import type { Code } from '../../types/Code';
import CodeCard from '../CodeCard';

function CodeCards() {
    const [codes, setCodes] = useState<Code[]>([]);
    const { lang } = useLang();

    useEffect( () => {
    const key = 'code';
    async function fetchCodes () {
        const codes: Code[] = await getLangData({key, lang});
        setCodes(codes);
    }
    fetchCodes();
    
    }, [lang]);
    

    return (
        <div className={styles.codeCards}>
            {codes.map(code => (
                <CodeCard key={code.id} code={code} />
            ))}
        </div>
    )
}

export default CodeCards;