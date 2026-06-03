import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import './styles/studyDestinations.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactButtons from './components/FloatingContactButtons';
import HomePage from './pages/HomePage';
import { lazyWithRetry } from './utils/lazyWithRetry';

const FoundationProgrammesPage = lazy(() =>
  lazyWithRetry(() => import('./pages/FoundationProgrammesPage'))
);
const UndergraduateProgrammesPage = lazy(() =>
  lazyWithRetry(() => import('./pages/UndergraduateProgrammesPage'))
);
const PostgraduateProgrammesPage = lazy(() =>
  lazyWithRetry(() => import('./pages/PostgraduateProgrammesPage'))
);
const ShortProgrammesPage = lazy(() =>
  lazyWithRetry(() => import('./pages/ShortProgrammesPage'))
);
const StudentServicesPage = lazy(() =>
  lazyWithRetry(() => import('./pages/StudentServicesPage'))
);
const AboutPage = lazy(() => lazyWithRetry(() => import('./pages/AboutPage')));
const ContactPage = lazy(() => lazyWithRetry(() => import('./pages/ContactPage')));
const BlogPage = lazy(() => lazyWithRetry(() => import('./pages/BlogPage')));
const CareerOpportunitiesPage = lazy(() =>
  lazyWithRetry(() => import('./pages/CareerOpportunitiesPage'))
);
const StudyDestinationPage = lazy(() =>
  lazyWithRetry(() => import('./pages/StudyDestinationPage'))
);

const routeFallback = <div aria-hidden="true" />;

const Layout = (): JSX.Element => {
  const { pathname, hash } = useLocation();
  const showIntakeBar = pathname === '/';

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
      <Header showIntakeBar={showIntakeBar} />
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
            path="blog"
            element={
              <Suspense fallback={routeFallback}>
                <BlogPage />
              </Suspense>
            }
          />
          <Route
            path="career-opportunities"
            element={
              <Suspense fallback={routeFallback}>
                <CareerOpportunitiesPage />
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
