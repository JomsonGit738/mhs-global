import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Collapse from "bootstrap/js/dist/collapse";
import logo from "../assets/images/mhs-logo-brand.png";

type NavItem = { label: string; to: string } | { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Student Services", to: "/student-services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const tickerItems: string[] = [
  "January 2026 intake - Admissions open!",
  "Apply early to secure your place!",
  "Study in the UK at top universities",
];

type HeaderProps = {
  showTicker?: boolean;
};

const Header = ({ showTicker = false }: HeaderProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const collapseRef = useRef<HTMLDivElement | null>(null);
  const collapseInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!collapseRef.current) {
      return;
    }

    const element = collapseRef.current;
    const instance = new Collapse(element, { toggle: false });
    collapseInstanceRef.current = instance;

    const handleShown = () => setIsNavOpen(true);
    const handleHidden = () => setIsNavOpen(false);

    element.addEventListener("shown.bs.collapse", handleShown);
    element.addEventListener("hidden.bs.collapse", handleHidden);
    setIsNavOpen(element.classList.contains("show"));

    return () => {
      element.removeEventListener("shown.bs.collapse", handleShown);
      element.removeEventListener("hidden.bs.collapse", handleHidden);
      instance.dispose();
      collapseInstanceRef.current = null;
    };
  }, []);

  const toggleNav = () => {
    collapseInstanceRef.current?.toggle();
  };

  const closeNav = () => {
    collapseInstanceRef.current?.hide();
  };

  const tickerLoop = [...tickerItems, ...tickerItems];

  return (
    <header className="shadow-sm bg-white sticky-top">
      <div className="navbar navbar-expand-lg container py-3">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img width={70} src={logo} alt="navbar_brand" />
        </Link>
        <button
          className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
          type="button"
          aria-controls="mainNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="mainNav"
          ref={collapseRef}
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-3">
            {navItems.map((link) => (
              <li className="nav-item" key={link.label}>
                {"href" in link ? (
                  <a
                    className="nav-link text-secondary"
                    href={link.href}
                    onClick={closeNav}
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active fw-semibold" : ""}`
                    }
                    to={link.to}
                    end={link.to === "/"}
                    onClick={closeNav}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <a
          className="btn btn-primary btn-lg ms-auto mt-3 mt-lg-0 d-none d-lg-inline-flex"
          href="/#contact"
          onClick={closeNav}
        >
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
