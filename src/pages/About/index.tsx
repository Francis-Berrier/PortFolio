import { Routes, Route } from 'react-router-dom';
import styles from './About.module.scss'
import AboutNav from '../../components/AboutNav';
import AboutExperiences from '../../components/AboutExperiences';
import AboutBio from '../../components/AboutBio';
import AboutFormation from '../../components/AboutFormation';
import AboutCompetences from '../../components/AboutCompetences';


function About() {
    return (
        <div className={styles.aboutContainer}>
            <aside className={styles.aboutNav}>
                <AboutNav/> 
            </aside>
            <main className={styles.aboutMain}>
                <Routes>
                    <Route path="/" element={<AboutBio/>} />
                    <Route path="/bio" element={<AboutBio/>} />
                    <Route path="/experiences/*" element={<AboutExperiences/>} />
                    <Route path="/formation" element={<AboutFormation/>} />
                    <Route path="/abilities" element={<AboutCompetences/>} />
                </Routes>
            </main>
        </div>
    )
}

export default About;