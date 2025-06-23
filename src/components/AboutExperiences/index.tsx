
import { Routes, Route } from 'react-router-dom';
import Experiences from '../Experiences';
import CinemaExperience from '../CinemaExperience';
import CodeExperience from '../CodeExperience';

function AboutExperiences () {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Experiences/>} />
                <Route path="/cinemaexperience" element={<CinemaExperience/>} />
                <Route path="/codeexperience" element={<CodeExperience/>} />
            </Routes>
        </main>
    )  
}

export default AboutExperiences