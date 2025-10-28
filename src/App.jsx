import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home.jsx';
import ContactPage from './screens/ContactPage.jsx';
import AboutPage from './screens/AboutPage.jsx';
import Login from './screens/Login.jsx';
import SignUp from './screens/Signup.jsx';
import TermsAndConditions from './screens/TermsAndConditions.jsx';
import Privacy from './screens/Privacy.jsx';

function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;