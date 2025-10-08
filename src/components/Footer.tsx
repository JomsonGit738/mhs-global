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

  return (
    <footer className="footer-section pt-5 pb-4 text-white">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mt-5 pb-4">
          <div className="col footer-about d-flex flex-column gap-3 align-items-center align-items-sm-start text-center text-sm-start">
            <div className="d-flex gap-3 align-items-center justify-content-start">
              <div className="footer-img-contain">
                <img width={70} src={logo} alt="MHS Global Associates logo" />
              </div>
              {/* <div>
                <h2 className="footer-brand mb-0">MHS Global Associates</h2>
                <p className="footer-subtitle mb-0">
                  Global Education Consultants
                </p>
              </div> */}
            </div>
            <h2 className="footer-brand mb-0">MHS Global Associates</h2>
            <p className="mb-0">
              1st Floor, 101 Whitechapel High Road London E1 7RA, United Kingdom
            </p>
            <p className="mb-0">info@mhsglobalassociates.com</p>
            <p className="mt-0 mb-0">07521772131</p>
          </div>

          {footerColumns.map((column) => (
            <div
              className="col d-flex flex-column align-items-center align-items-sm-start text-center text-sm-start"
              key={column.title}
            >
              <h3 className="footer-heading mb-3">{column.title}</h3>
              <ul className="footer-links mb-0 align-items-center align-items-sm-start text-center text-sm-start">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-socials d-flex flex-wrap justify-content-center gap-3 py-4">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.icon}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={platform.label}
            >
              <i className={`bi bi-${platform.icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="container pt-3 border-top border-white border-opacity-10">
        <div className="text-center text-white small">
          &copy; {currentYear} MHS Global Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
