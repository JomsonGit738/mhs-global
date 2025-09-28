type AboutSection = {
  title: string;
  body: string;
};

const aboutSections: AboutSection[] = [
  {
    title: "Who We Are",
    body: "MHS Global Associates is dedicated to empowering students with the right guidance and support to transform their dreams of global education into reality.",
  },
  {
    title: "Our Vision",
    body: "Founded in 2020, MHS Global Associates was built on a mission to empower students to reach their highest academic and career potential. With a clear vision of creating global opportunities, the consultancy has quickly established itself as a trusted bridge between ambitious learners and world-class educational institutions.",
  },
  {
    title: "Student-Centered Approach",
    body: "At MHS Global Associates, every student is at the heart of what we do. Our team provides personalized guidance, from selecting the right course and university to ensuring smooth application and visa processes. By tailoring strategies to individual needs, we make each journey stress-free, transparent, and inspiring.",
  },
  {
    title: "Proven Success Stories",
    body: "The results speak for themselves—hundreds of students have applied through MHS Global Associates and achieved success in securing admissions to prestigious universities worldwide. Each success story adds to our growing legacy of transforming dreams into reality, building trust and confidence among students and families alike.",
  },
  {
    title: "Our Commitment",
    body: "As we continue to grow, our commitment remains strong—to guide, support, and inspire the next generation of global achievers. With professionalism, integrity, and passion for education, MHS Global Associates stands as a reliable partner in shaping brighter futures and turning aspirations into accomplishments.",
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
            We are MHS Global Associates.
          </h1>
          <p className="lead text-white-75 mb-0 col-lg-6">
            Since our inception, we have helped aspiring students unlock
            pathways to world-class education with end-to-end guidance and
            personalised support.
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

              <div className="card border-0 shadow-sm about-contact-card mt-5">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="h4 fw-bold text-dark mb-3 text-center">
                    Get In Touch
                  </h3>
                  <p className="text-secondary text-center mb-4">
                    We'd love to hear from you. Send us a message and we'll
                    respond as soon as possible.
                  </p>
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">E-mail</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="E-mail"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control form-control-lg"
                        rows={4}
                        placeholder="Tell us how we can help you"
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                      >
                        Send Message
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
