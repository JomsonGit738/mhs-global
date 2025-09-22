const contactInfo = [
  {
    icon: 'bi-telephone',
    label: 'Phone',
    lines: ['+1 (555) 123-4567', '+44 20 7946 0958'],
  },
  {
    icon: 'bi-envelope',
    label: 'Email',
    lines: ['info@mhsglobal.com', 'admissions@mhsglobal.com'],
  },
  {
    icon: 'bi-geo-alt',
    label: 'Office',
    lines: ['123 Education Street', 'London, UK EC1A 1BB'],
  },
  {
    icon: 'bi-clock',
    label: 'Office Hours',
    lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
  },
];

const contactOptions = [
  'Foundation Programs',
  'Undergraduate Degrees',
  'Postgraduate Degrees',
  'Student Services',
  'Visa Guidance',
  'Scholarship Support',
];

function ContactPage() {
  return (
    <>
      <section className="contact-hero position-relative text-white">
        <div className="contact-hero-overlay"></div>
        <div className="container position-relative py-5 py-lg-6">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="badge bg-white text-primary fw-semibold mb-3 text-uppercase small shadow-sm">
                Contact Us
              </span>
              <h1 className="display-5 fw-bold mb-2">We are happy to help</h1>
              <p className="lead text-white-75 mb-0">
                Reach out to our dedicated team for personalised support on admissions, visas, scholarships, and everything in between.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="contact-map card border-0 shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80"
                  alt="Map showing MHS Global Associates location"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-content py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm contact-info-card h-100">
                <div className="card-body p-4 p-lg-5">
                  <h2 className="h4 fw-bold text-dark mb-4">MHS Global Associates</h2>
                  <p className="text-secondary mb-4">
                    Contact our advisors for guidance on course selection, application strategy, scholarships, and visa preparation. We're here to help you navigate every step of your international education journey.
                  </p>
                  <div className="d-flex flex-column gap-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="d-flex gap-3 align-items-start">
                        <span className="contact-icon icon-pill text-primary">
                          <i className={'bi ' + item.icon}></i>
                        </span>
                        <div>
                          <div className="fw-semibold text-dark mb-1">{item.label}</div>
                          {item.lines.map((line) => (
                            <div key={line} className="text-secondary small">
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card border-0 shadow-sm contact-form-card h-100">
                <div className="card-body p-4 p-lg-5">
                  <h2 className="h4 fw-bold text-dark mb-3">Send us a message</h2>
                  <p className="text-secondary mb-4">
                    Share your study plans with us and we’ll respond shortly with tailored advice and next steps.
                  </p>
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input type="text" className="form-control" placeholder="Your name" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input type="email" className="form-control" placeholder="name@email.com" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" className="form-control" placeholder="Include country code" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Country *</label>
                      <input type="text" className="form-control" placeholder="Where do you reside?" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Study Interest *</label>
                      <select className="form-select" defaultValue="choose" required>
                        <option value="choose" disabled>
                          Select program type
                        </option>
                        {contactOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows="4" placeholder="Tell us about your academic goals"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
