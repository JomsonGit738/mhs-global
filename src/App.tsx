import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import './styles/studyDestinations.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import HomePage from './pages/HomePage';

const FoundationProgrammesPage = lazy(() => import('./pages/FoundationProgrammesPage'));
const UndergraduateProgrammesPage = lazy(() => import('./pages/UndergraduateProgrammesPage'));
const PostgraduateProgrammesPage = lazy(() => import('./pages/PostgraduateProgrammesPage'));
const ShortProgrammesPage = lazy(() => import('./pages/ShortProgrammesPage'));
const StudentServicesPage = lazy(() => import('./pages/StudentServicesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const StudyDestinationPage = lazy(() => import('./pages/StudyDestinationPage'));

const routeFallback = <div aria-hidden="true" />;

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
          <Route
            path="foundation-programmes"
            element={
              <Suspense fallback={routeFallback}>
                <FoundationProgrammesPage />
              </Suspense>
            }
          />
          <Route
            path="undergraduate-programmes"
            element={
              <Suspense fallback={routeFallback}>
                <UndergraduateProgrammesPage />
              </Suspense>
            }
          />
          <Route
            path="postgraduate-programmes"
            element={
              <Suspense fallback={routeFallback}>
                <PostgraduateProgrammesPage />
              </Suspense>
            }
          />
          <Route
            path="short-programmes"
            element={
              <Suspense fallback={routeFallback}>
                <ShortProgrammesPage />
              </Suspense>
            }
          />
          <Route
            path="student-services"
            element={
              <Suspense fallback={routeFallback}>
                <StudentServicesPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={routeFallback}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={routeFallback}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="study-destinations/:destinationId"
            element={
              <Suspense fallback={routeFallback}>
                <StudyDestinationPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
