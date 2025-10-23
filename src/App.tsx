import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import HomePage from './pages/HomePage';
import FoundationProgrammesPage from './pages/FoundationProgrammesPage';
import UndergraduateProgrammesPage from './pages/UndergraduateProgrammesPage';
import PostgraduateProgrammesPage from './pages/PostgraduateProgrammesPage';
import ShortProgrammesPage from './pages/ShortProgrammesPage';
import StudentServicesPage from './pages/StudentServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const Layout = (): JSX.Element => {
  const { pathname, hash } = useLocation();
  const showTicker = pathname === '/';

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname, hash]);

  return (
    <div className="app-root bg-body-tertiary" id="top">
      <Header showTicker={showTicker} />
      <main>
        <Outlet />
      </main>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* Programme category pages */}
          <Route path="foundation-programmes" element={<FoundationProgrammesPage />} />
          <Route path="undergraduate-programmes" element={<UndergraduateProgrammesPage />} />
          <Route path="postgraduate-programmes" element={<PostgraduateProgrammesPage />} />
          <Route path="short-programmes" element={<ShortProgrammesPage />} />
          <Route path="student-services" element={<StudentServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
