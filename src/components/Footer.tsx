// import { FormEvent } from "react";
import logo from "../assets/images/mhs-logo-brand.png";

const footerColumns = [
  {
    title: "Quick Links",
    items: [
      { label: "About Us", href: "/#about" },
      { label: "Our Services", href: "/student-services" },
      { label: "Universities", href: "/#universities" },
      { label: "Courses", href: "/courses" },
      { label: "Student Support", href: "/#support" },
      { label: "Success Stories", href: "/#testimonials" },
      { label: "Blog", href: "/#blog" },
      { label: "Contact Us", href: "/#contact" },
      { label: "Career Opportunities", href: "/#careers" },
    ],
  },
  {
    title: "Study Destinations",
    items: [
      { label: "Study in UK", href: "/#destinations" },
      { label: "Study in USA", href: "/#destinations" },
      { label: "Study in Canada", href: "/#destinations" },
      { label: "Study in Australia", href: "/#destinations" },
      { label: "Study in Germany", href: "/#destinations" },
      { label: "Study in France", href: "/#destinations" },
      { label: "Study in Ireland", href: "/#destinations" },
      { label: "Study in Spain", href: "/#destinations" },
      { label: "Study in UAE", href: "/#destinations" },
      { label: "Study in Malta", href: "/#destinations" },
    ],
  },
  {
    title: "Programs",
    items: [
      { label: "Foundation Programs", href: "/courses" },
      { label: "Undergraduate Programs", href: "/courses" },
      { label: "Postgraduate Programs", href: "/courses" },
      { label: "Short Programs", href: "/courses" },
    ],
  },
] as const;

const socialPlatforms = [
  {
    icon: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mhs-global-associates-648218387/",
  },
  {
    icon: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@MHSGlobalAssociates-1",
  },
  {
    icon: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/mhsglobalassociates/",
  },
  {
    icon: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@mhs.globalassociates",
  },
  {
    icon: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/mhsglobalassociiates/",
  },
  {
    icon: "twitter",
    label: "X (Twitter)",
    href: "https://x.com/mhsglobala1",
  },
] as const;

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  // const handleExplore = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };

  return (
    <footer className="footer-luxe">
      <div className="footer-luxe__halo" aria-hidden="true"></div>
      <div>
        <div className="footer-luxe__surface">
          <div className="footer-luxe__intro">
            <div className="footer-luxe__brand">
              <div className="footer-luxe__logo">
                <img
                  src={logo}
                  alt="MHS Global Associates logo"
                  className="footer-luxe__logo-img"
                />
              </div>
              <div>
                <h2 className="footer-luxe__title">MHS Global Associates</h2>
                <p className="footer-luxe__subtitle">
                  Global Education Consultants
                </p>
              </div>
            </div>
            <p className="footer-luxe__description">
              Bespoke admissions expertise and student services that connect
              purposeful learners with distinguished universities worldwide.
            </p>
            <div className="footer-luxe__contact">
              <span>
                1st Floor, 101 Whitechapel High Road, London E1 7RA, United
                Kingdom
              </span>
              <a
                className="footer-luxe__contact-link"
                href="mailto:info@mhsglobalassociates.com"
              >
                info@mhsglobalassociates.com
              </a>
              <a className="footer-luxe__contact-link" href="tel:+447521772131">
                07521772131
              </a>
            </div>
          </div>

          {/* <div className="footer-luxe__subscribe">
            <h3 className="footer-luxe__subscribe-title">
              Discover Your Next Opportunity
            </h3>
            <p className="footer-luxe__subscribe-text">
              Search programmes, destinations, or services to receive curated
              admissions insights from our advisory team.
            </p>
            <form className="footer-luxe__form" onSubmit={handleExplore}>
              <div className="footer-luxe__input-group">
                <span className="footer-luxe__input-icon" aria-hidden="true">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="search"
                  className="footer-luxe__input"
                  placeholder="Search global pathways or tailored support"
                  aria-label="Search global pathways or tailored support"
                />
                <button type="submit" className="footer-luxe__submit">
                  Explore
                </button>
              </div>
            </form>
          </div> */}

          <div className="footer-luxe__grid">
            {footerColumns.map((column) => (
              <div className="footer-luxe__column" key={column.title}>
                <h4 className="footer-luxe__links-title">{column.title}</h4>
                <ul className="footer-luxe__links-list">
                  {column.items.map((item) => (
                    <li key={item.label} className="footer-luxe__links-item">
                      <a href={item.href} className="footer-luxe__link">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-luxe__social">
            {socialPlatforms.map((platform) => (
              <a
                key={platform.icon}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-luxe__social-link"
                aria-label={platform.label}
              >
                <i className={`bi bi-${platform.icon}`}></i>
              </a>
            ))}
          </div>

          <div className="footer-luxe__bottom">
            <span>
              &copy; {currentYear} MHS Global Associates. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
