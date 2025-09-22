import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Student Services', to: '/student-services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const tickerItems = [
  'January 2026 intake - Admissions open!',
  'Apply early to secure your place!',
  'Study in the UK at top universities',
];

function Header({ showTicker = false }) {
  const tickerLoop = [...tickerItems, ...tickerItems];

  return (
    <header className="shadow-sm bg-white sticky-top">
      <div className="navbar navbar-expand-lg container py-3">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <div className="brand-mark d-inline-flex align-items-center justify-content-center rounded-circle me-2">
            <span className="fw-bold text-primary">MHS</span>
          </div>
          <span className="fw-semibold text-uppercase tracking-tight">Global Associates</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul className="navbar-nav align-items-lg-center gap-lg-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.label}>
                {link.to ? (
                  <Link className="nav-link text-secondary" to={link.to}>
                    {link.label}
                  </Link>
                ) : (
                  <a className="nav-link text-secondary" href={link.href}>
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a className="btn btn-primary ms-lg-4 mt-3 mt-lg-0" href="/#contact">
            Apply Now
          </a>
        </div>
      </div>
      {showTicker && (
        <div className="ticker" role="region" aria-label="Admissions updates">
          <div className="ticker-track">
            {tickerLoop.map((text, index) => (
              <span className="ticker-item" key={`${text}-${index}`}>
                {text}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
