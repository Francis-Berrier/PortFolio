import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LangProvider } from '../LangContext'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Header from "../Header"
import Footer from "../Footer"

function AppRouter() {
    return (
        <Router>
            <LangProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about/*" element= {<About/>}/>
                    <Route path="/contact/" element= {<Contact/>}/>
                </Routes>
                <Footer />
            </LangProvider>
        </Router>
    )
}

export default AppRouter