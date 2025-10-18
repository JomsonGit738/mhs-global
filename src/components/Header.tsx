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
  "January 2026 intake: applications now open",
  "Apply early to secure your place",
  "Study in the UK with leading universities",
];

type HeaderProps = {
  showTicker?: boolean;
};

const Header = ({ showTicker = false }: HeaderProps): JSX.Element => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const collapseRef = useRef<HTMLDivElement | null>(null);
  const collapseInstanceRef = useRef<any>(null);
  const lastScrollYRef = useRef(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);

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

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDelta = currentScroll - lastScrollYRef.current;
      const deltaThreshold = 6;
      const showThreshold = 120;

      lastScrollYRef.current = currentScroll;

      if (isNavOpen) {
        setIsHeaderHidden(false);
        return;
      }

      if (currentScroll <= showThreshold) {
        setIsHeaderHidden(false);
        return;
      }

      if (scrollDelta > deltaThreshold) {
        setIsHeaderHidden(true);
      } else if (scrollDelta < -deltaThreshold) {
        setIsHeaderHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavOpen]);

  useEffect(() => {
    if (isNavOpen) {
      setIsHeaderHidden(false);
      lastScrollYRef.current = window.scrollY;
    }
  }, [isNavOpen]);

  return (
    <header
      className={`header-luxe sticky-top ${isHeaderHidden ? "is-hidden" : "is-visible"}`}
    >
      <div className="header-luxe__backdrop" aria-hidden="true" />
      <div className="navbar navbar-expand-lg container header-luxe__inner">
        <div className="header-luxe__brand-wrap">
          <Link className="navbar-brand d-flex align-items-center header-luxe__brand" to="/">
            <img width={70} src={logo} alt="navbar_brand" />
          </Link>
          <button
            className={`navbar-toggler header-luxe__toggler ${isNavOpen ? "" : "collapsed"}`}
            type="button"
            aria-controls="mainNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon header-luxe__toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse header-luxe__nav" id="mainNav" ref={collapseRef}>
          <ul className="navbar-nav header-luxe__menu">
            {navItems.map((link) => (
              <li className="nav-item" key={link.label}>
                {"href" in link ? (
                  <a className="nav-link header-luxe__link" href={link.href} onClick={closeNav}>
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link header-luxe__link ${isActive ? "is-active" : ""}`
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
          <a
            className="btn header-luxe__cta header-luxe__cta--mobile d-lg-none"
            href="/#contact"
            onClick={closeNav}
          >
            Begin your application
          </a>
        </div>
        <a
          className="btn header-luxe__cta header-luxe__cta--primary d-none d-lg-inline-flex"
          href="/#contact"
          onClick={closeNav}
        >
          Apply now
        </a>
      </div>
      {showTicker && (
        <div
          className="header-luxe__ticker"
          role="region"
          aria-label="Admissions updates"
        >
          <div className="header-luxe__ticker-track" role="list">
            {tickerLoop.map((text, index) => (
              <span
                className="header-luxe__ticker-item"
                key={`${text}-${index}`}
                role="listitem"
              >
                <span className="header-luxe__ticker-separator" aria-hidden="true">
                  <i className="bi bi-circle-fill"></i>
                </span>
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;



