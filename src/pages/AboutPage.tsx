type AboutSection = {
  title: string;
  body: string;
};

const aboutSections: AboutSection[] = [
  {
    title: "Who We Are",
    body:
      "MHS Global Associates stands beside ambitious learners with tailored guidance that turns global study goals into confident achievements.",
  },
  {
    title: "Our Vision",
    body:
      "Established in 2020, our mission is to open world-class campuses to students everywhere. We align aspirations with the right destinations, programmes, and timelines for lasting success.",
  },
  {
    title: "Student-Centred Approach",
    body:
      "Every conversation begins with attentive listening. We curate bespoke pathways that balance academic strengths, financial planning, and wellbeing so each milestone feels clear and supported.",
  },
  {
    title: "Proven Success Stories",
    body:
      "Hundreds of students have secured offers from renowned universities worldwide through our meticulous preparation, deadline management, and post-offer mentorship.",
  },
  {
    title: "Our Commitment",
    body:
      "We keep elevating our service with integrity, responsiveness, and a passion for education, empowering the next generation of global achievers to thrive abroad.",
  },
];

const serviceLinks: string[] = [
  "Accommodation",
  "Finance",
  "Services",
  "Student Services",
  "Education",
  "UK Institutions",
];

const courseLinks: string[] = [
  "Foundation",
  "Undergraduate",
  "Postgraduate",
  "Short Courses",
];

const AboutPage = (): JSX.Element => {
  return (
    <>
      <section className="about-hero position-relative text-white">
        <div className="about-hero-overlay"></div>
        <div className="container h-fit my-5 position-relative py-5 py-lg-6">
          <span className="badge bg-white text-primary fw-semibold mb-3 text-uppercase small shadow-sm">
            About Us
          </span>
          <h1 className="display-5 fw-bold mb-2">
            Champions of Global Student Success
          </h1>
          <p className="lead text-white-75 mb-0 col-lg-6">
            We partner with driven students through{" "}
            <strong>bespoke admissions strategy</strong>,{" "}
            <strong>financial insight</strong>, and steadfast mentorship that
            unlocks world-class campuses.
          </p>
        </div>
      </section>

      <section className="about-content py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-4">
                {aboutSections.map((section) => (
                  <article key={section.title} className="about-section">
                    <h2 className="h4 fw-bold text-dark mb-2">
                      {section.title}
                    </h2>
                    <p className="text-secondary mb-0">{section.body}</p>
                  </article>
                ))}
              </div>

              <div className="card border-0 about-contact-card mt-5">
                <div className="card-body about-contact-card__body">
                  <div className="about-contact-card__eyebrow">
                    <span
                      aria-hidden="true"
                      className="about-contact-card__spark"
                    ></span>
                    Personal Consultancy
                  </div>
                  <h2 className="about-contact-card__title text-center">
                    Start the Conversation
                  </h2>
                  <p className="about-contact-card__subtitle">
                    Share your ambitions with our advisory team and receive a{" "}
                    <strong>tailored response</strong> within one business day.
                  </p>
                  <form className="about-contact-card__form row g-3">
                    <div className="col-md-6">
                      <label className="form-label about-contact-card__label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control py-3 form-control-lg about-contact-card__input"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label about-contact-card__label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="form-control py-3 form-control-lg about-contact-card__input"
                        placeholder="E-mail"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label about-contact-card__label">
                        Message
                      </label>
                      <textarea
                        className="form-control form-control-lg about-contact-card__textarea"
                        rows={4}
                        placeholder="Tell us how we can help you"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn py-3 btn-lg btn-primary btn-lg w-100 about-contact-card__submit"
                      >
                        Request Guidance
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="d-flex flex-column gap-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold text-dark mb-3">
                      Our Services
                    </h3>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      {serviceLinks.map((item) => (
                        <li key={item} className="about-list-item">
                          <i className="bi bi-chevron-right text-primary"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h6 fw-semibold text-dark mb-3">
                      Course Links
                    </h3>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      {courseLinks.map((item) => (
                        <li key={item} className="about-list-item">
                          <i className="bi bi-chevron-right text-primary"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
