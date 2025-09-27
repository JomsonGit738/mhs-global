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
  { icon: "instagram", label: "Instagram" },
  { icon: "facebook", label: "Facebook" },
  { icon: "linkedin", label: "LinkedIn" },
  { icon: "youtube", label: "YouTube" },
  { icon: "twitter", label: "Twitter" },
  { icon: "tiktok", label: "TikTok" },
] as const;

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section pt-5 pb-4 text-white">
      <div className="container">
        <div className="row g-4 pb-4">
          <div className="col-lg-3">
            <div className="d-flex align-items-center mb-3">
              <img width={70} src={logo} alt="navbar_brand_footer" />
            </div>
            <p className="text-white mb-0 pe-lg-4">
              We have been helping students achieve their international study
              dreams for over 15 years with personalised guidance and
              comprehensive support.
            </p>
          </div>
          {footerColumns.map((column) => (
            <div className="col-6 col-md-4 col-lg-3" key={column.title}>
              <h4 className="h6 text-white mb-3">{column.title}</h4>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white text-decoration-none"
                    >
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
              href="/#social"
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
