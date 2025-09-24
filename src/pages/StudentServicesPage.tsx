const serviceTags: string[] = [
  'Student Assistance',
  'Scholarships',
  'Book your free consultation',
];

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  points: string[];
};

const serviceCards: ServiceCard[] = [
  {
    title: 'Student Assistance & Scholarships',
    description:
      'Comprehensive guidance and support for your educational journey, from enrolment to graduation.',
    icon: 'bi-mortarboard',
    points: [
      'Proper guidance before enrolment and future planning',
      'Latest information on universities and programs for all queries',
      'Assistance in selecting appropriate courses aligned with career goals',
      'Personalised counselling sessions and scholarship guidance',
    ],
  },
  {
    title: 'Course & University Selection',
    description:
      'Expert assistance in choosing the right educational path that matches your aspirations and career goals.',
    icon: 'bi-building',
    points: [
      'Comprehensive course catalog and curriculum review',
      'University ranking and reputation analysis',
      'Career outcome and employment statistics',
      'Application requirements and deadlines',
    ],
  },
  {
    title: 'Application Support Services',
    description:
      'End-to-end support for your university and visa applications to ensure a smooth admission process.',
    icon: 'bi-journal-check',
    points: [
      'Document assessment and qualification mapping',
      'Personal statement and essay writing assistance',
      'Admisson interview preparation and pre-departure briefing',
      'Visa documentation, submission, and follow-up support',
    ],
  },
];

type ServiceCategory = {
  name: string;
  count: number;
};

const serviceCategories: ServiceCategory[] = [
  { name: 'Foundation', count: 15 },
  { name: 'Undergraduate', count: 48 },
  { name: 'Postgraduate', count: 32 },
  { name: 'Short Courses', count: 28 },
];

const complimentaryServices: string[] = [
  'Assessment of documents & qualifications mapping for prospective study',
  'Course & university selection guidance',
  'Scholarship opportunities and eligibility assessment',
  'Personal statement writing support',
  'Admission and credibility interview preparation',
  'General guidance on visa application documents',
  'Visa application submission assistance',
  'Pre-departure briefing and enrolment support',
  'UCAS application assistance',
  'Student finance application support',
  'Career consultation and planning',
];

const StudentServicesPage = (): JSX.Element => {
  return (
    <>
      <section className="services-hero position-relative text-white">
        <div className="services-hero-overlay"></div>
        <div className="container position-relative py-5 py-lg-6">
          <span className="badge bg-white text-primary fw-semibold mb-3 text-uppercase small shadow-sm">
            Professional Education Services
          </span>
          <h1 className="display-5 fw-bold mb-3">
            Your Gateway to <span className="text-primary">Global Education</span>
          </h1>
          <p className="lead text-white-75 mb-4 col-lg-6">
            At MHS Global Associates, we open doors to world-class education. We provide comprehensive guidance and support at every stage of your academic journey, connecting you with leading universities across the globe to help you achieve your dreams.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a className="btn btn-primary btn-lg" href="/#contact">
              Explore Services
            </a>
            <a className="btn btn-outline-light btn-lg" href="mailto:info@mhsglobalassociates.com">
              Speak to an Advisor
            </a>
          </div>
        </div>
      </section>

      <section className="services-content py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="d-flex flex-wrap gap-2 mb-4">
            {serviceTags.map((tag) => (
              <span key={tag} className="service-tag badge bg-primary-subtle text-primary-emphasis">
                {tag}
              </span>
            ))}
          </div>
          <div className="row g-5">
            <div className="col-lg-8">
              <h2 className="fw-bold text-dark mb-3">Student Services</h2>
              <p className="text-secondary mb-4">
                Our comprehensive student services are designed to support your educational journey from initial enquiry to successful graduation. MHS coordinates applications for first-time degree, foundation degree, Higher National Diploma (HND), Higher National Certificate (HNC), Diploma of Higher Education, and Certificate of Higher Education courses offered by partner universities and colleges.
              </p>
              <div className="row row-cols-1 row-cols-lg-3 g-4 mb-5">
                {serviceCards.map((card) => (
                  <div key={card.title} className="col">
                    <div className="card h-100 border-0 shadow-sm service-card">
                      <div className="card-body d-flex flex-column">
                        <div className="service-card-icon icon-pill text-primary mb-3">
                          <i className={'bi ' + card.icon}></i>
                        </div>
                        <h3 className="h5 fw-semibold text-dark mb-2">{card.title}</h3>
                        <p className="text-secondary mb-3">{card.description}</p>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                          {card.points.map((point) => (
                            <li key={point} className="d-flex align-items-start gap-2 text-secondary">
                              <i className="bi bi-check-circle-fill text-primary"></i>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <a className="btn btn-outline-primary mt-auto" href="/#contact">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card border-0 shadow-sm service-extra-card">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="h5 fw-semibold text-dark mb-3">Complimentary Services</h3>
                  <p className="text-secondary mb-4">
                    Access our comprehensive range of free services designed to support your educational journey without any additional cost.
                  </p>
                  <div className="row row-cols-1 row-cols-md-2 g-3">
                    {complimentaryServices.map((item) => (
                      <div key={item} className="col">
                        <div className="d-flex align-items-start gap-2 text-secondary">
                          <i className="bi bi-check2 text-primary mt-1"></i>
                          <span>{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="d-flex flex-column gap-4">
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h3 className="h6 text-dark fw-semibold mb-3">Search Services</h3>
                    <form className="d-flex gap-2">
                      <input type="search" className="form-control" placeholder="Keyword" aria-label="Search services" />
                      <button type="submit" className="btn btn-primary">
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="card border-0 shadow-sm service-category-card">
                  <div className="card-body">
                    <h3 className="h6 text-dark fw-semibold mb-3">Course Categories</h3>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      {serviceCategories.map((category) => (
                        <li key={category.name} className="d-flex justify-content-between align-items-center text-secondary">
                          <span>{category.name}</span>
                          <span className="badge rounded-pill bg-primary-subtle text-primary-emphasis fw-semibold">
                            {category.count}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card border-0 shadow-sm service-callout text-white">
                  <div className="card-body">
                    <h3 className="h5 fw-semibold mb-2">Need personalised guidance?</h3>
                    <p className="text-white-75 mb-3">
                      Schedule a free consultation with our advisors to plan your academic pathway.
                    </p>
                    <a className="btn btn-light w-100" href="mailto:admissions@mhsglobalassociates.com">
                      Book Consultation
                    </a>
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

export default StudentServicesPage;
