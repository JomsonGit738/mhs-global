const footerColumns = [
  {
    title: 'Quick Links',
    items: [
      { label: 'About Us', href: '/#about' },
      { label: 'Our Services', href: '/student-services' },
      { label: 'Courses', href: '/courses' },
      { label: 'Events & Webinars', href: '/#events' },
      { label: 'Careers', href: '/#careers' },
    ],
  },
  {
    title: 'Study Destinations',
    items: [
      { label: 'Study in UK', href: '/#destinations' },
      { label: 'Study in USA', href: '/#destinations' },
      { label: 'Study in Canada', href: '/#destinations' },
      { label: 'Study in Australia', href: '/#destinations' },
      { label: 'Study in Europe', href: '/#destinations' },
    ],
  },
  {
    title: 'Programs',
    items: [
      { label: 'Foundation Programs', href: '/courses' },
      { label: 'Undergraduate Programs', href: '/courses' },
      { label: 'Postgraduate Programs', href: '/courses' },
      { label: 'PhD & Research', href: '/courses' },
      { label: 'Short Courses', href: '/courses' },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer-section pt-5 pb-4 text-white">
      <div className="container pb-4 border-bottom border-white border-opacity-25">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <div className="brand-mark brand-mark-inverse d-inline-flex align-items-center justify-content-center rounded-circle me-2">
                <span className="fw-bold">MHS</span>
              </div>
              <div>
                <h3 className="h5 mb-0">MHS Global Associates</h3>
                <small className="text-white-50">Your trusted partner in international education.</small>
              </div>
            </div>
            <p className="text-white-50 mb-3">
              We deliver flexible strategies for students seeking global study destinations with personalised advice and comprehensive support.
            </p>
            <div className="d-flex gap-3">
              {['facebook', 'instagram', 'linkedin', 'youtube', 'tiktok'].map((platform) => (
                <a key={platform} href="#social" className="social-link" aria-label={platform}>
                  <i className={`bi bi-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
          {footerColumns.map((column) => (
            <div className="col-6 col-lg-2" key={column.title}>
              <h4 className="h6 text-white mb-3">{column.title}</h4>
              <ul className="list-unstyled d-flex flex-column gap-2">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-white-50 text-decoration-none">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container pt-3">
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-2 text-white-50 small">
          <span>&copy; {new Date().getFullYear()} MHS Global Associates. All rights reserved.</span>
          <div className="d-flex gap-3">
            <a href="/#privacy" className="text-white-50 text-decoration-none">
              Privacy Policy
            </a>
            <a href="/#terms" className="text-white-50 text-decoration-none">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
