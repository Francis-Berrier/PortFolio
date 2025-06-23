import styles from './Contact.module.scss';
import FormContact from '../../components/FormContact';
import type { PageDataType } from '../../types/PageDataType';
import type { ContactDatasType } from '../../types/ContactType';
import { useLang } from '../../components/LangContext';
import { useState, useEffect } from 'react';
import { getLangData } from '../../utils/getStoreDatas';

function Contact() {
    const { lang } = useLang();
    const [contactDatas, setContactDatas] = useState<ContactDatasType>();
    
    useEffect(() => {
        async function fetchdata() {
            const datas: PageDataType = await getLangData({key: 'datas', lang});
            setContactDatas(datas.contact);
        }
        fetchdata();
    }, [lang]);
    
    if(!contactDatas) return null;

    return (
        <main className={styles.contactContainer}>
            <section className={styles.contactIntro}>
                <h1 className={styles.title}>{contactDatas.title}</h1>
                <div className={styles.introText}>{contactDatas.introText}</div>
            </section>
            <section className={styles.formContact}>
                <FormContact/>
            </section>
        </main>
    )
}

export default Contact;
