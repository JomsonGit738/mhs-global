import { Link } from 'react-router-dom';
import logo from '../assets/images/mhs-logo.jpg';

type NavLink =
  | { label: string; to: string }
  | { label: string; href: string };

const navLinks: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Student Services', to: '/student-services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const tickerItems: string[] = [
  'January 2026 intake - Admissions open!',
  'Apply early to secure your place!',
  'Study in the UK at top universities',
];

type HeaderProps = {
  showTicker?: boolean;
};

const Header = ({ showTicker = false }: HeaderProps): JSX.Element => {
  const tickerLoop = [...tickerItems, ...tickerItems];

  return (
    <header className="shadow-sm bg-white sticky-top">
      <div className="navbar navbar-expand-lg container py-3">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img width={70} src={logo} alt="navbar_brand" />
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
        <div className="collapse navbar-collapse justify-content-center" id="mainNav">
          <ul className="navbar-nav align-items-lg-center gap-lg-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.label}>
                {'href' in link ? (
                  <a className="nav-link text-secondary" href={link.href}>
                    {link.label}
                  </a>
                ) : (
                  <Link className="nav-link text-secondary" to={link.to}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-primary ms-auto mt-3 mt-lg-0" href="/#contact">
          Apply Now
        </a>
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
};

export default Header;