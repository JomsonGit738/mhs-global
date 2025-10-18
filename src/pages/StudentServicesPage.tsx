import { ChangeEvent, FormEvent, useMemo, useState } from "react";

const serviceTags: string[] = [
  "Admissions coordination",
  "Advisory support",
  "Scholarship guidance",
  "Student care",
];

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  points: string[];
};

const serviceCards: ServiceCard[] = [
  {
    title: "Admissions Guidance & Coordination",
    description:
      "Receive step-by-step guidance throughout your application process to ensure your submission is accurate, timely, and aligned with university requirements.",
    icon: "bi-clipboard-check",
    points: [
      "Dedicated advisers for UCAS and direct university applications",
      "Clear information on entry requirements, documentation, and certified translations",
      "Structured application timelines for September, January, and May intakes",
      "Support with offer responses, deferrals, and enrolment preparation",
    ],
  },
  {
    title: "Student Success & Support Services",
    description:
      "Access personalised academic and career support designed to help you make confident choices, strengthen your applications, and succeed in your studies.",
    icon: "bi-stars",
    points: [
      "One-to-one academic and career guidance sessions",
      "Interactive workshops on personal statements and interview preparation",
      "Early updates on scholarships, bursaries, and financial aid opportunities",
      "Invitations to open days, webinars, and campus visit programmes",
    ],
  },
  {
    title: "Finance, Housing & Wellbeing Assistance",
    description:
      "Get comprehensive guidance on financial planning, accommodation options, and practical arrangements for a smooth and supported university experience.",
    icon: "bi-house-heart",
    points: [
      "Advice on tuition fees, instalment plans, and sponsorship routes",
      "Assistance with student finance and loan applications where eligible",
      "Guidance on university and private accommodation options",
      "Pre-departure support including travel, banking, and healthcare registration",
    ],
  },
];

type ServiceCategory = {
  name: string;
  count: number;
};

const serviceCategories: ServiceCategory[] = [
  { name: "Admissions & UCAS", count: 24 },
  { name: "Accommodation", count: 12 },
  { name: "Finance & Scholarships", count: 18 },
  { name: "Student Welfare", count: 16 },
  { name: "Visa Support", count: 20 },
];

const complimentaryServices: string[] = [
  "Assessment of documents and qualification mapping",
  "Course and university selection guidance",
  "Scholarship opportunity briefings",
  "Personal statement and CV workshops",
  "Admission and credibility interview preparation",
  "Guidance on visa application documentation",
  "Visa submission assistance and follow-up",
  "Pre-departure briefings and enrolment support",
  "UCAS application assistance",
  "Student finance application support",
  "Career consultation and progression planning",
];

const StudentServicesPage = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const trimmedQuery = searchQuery.trim();
  const normalizedQuery = trimmedQuery.toLowerCase();

  const filteredServices = useMemo(() => {
    if (!normalizedQuery) {
      return serviceCards;
    }

    return serviceCards.filter((card) => {
      const haystack = [card.title, card.description, ...card.points]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery]);

  const hasResults = filteredServices.length > 0;

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <section className="services-hero position-relative text-white">
        <div className="services-hero-overlay" aria-hidden="true"></div>
        <div className="container position-relative py-5 py-lg-6">
          <span className="badge bg-white text-primary fw-semibold mb-3 text-uppercase small shadow-sm">
            Student Services
          </span>
          <h1 className="display-5 fw-bold mb-3">
            Student Services and Support
          </h1>
          <p className="lead text-white-75 mb-4 col-lg-7">
            MHS Global Associates supports every stage of your journey with{" "}
            <strong>personalised admissions expertise</strong>,{" "}
            <strong>attentive student care</strong>, and practical guidance that
            carries you from enquiry to enrolment with confidence.
          </p>
          {/* <div className="d-flex flex-wrap gap-3">
            <a className="btn btn-primary btn-lg" href="/#contact">
              Explore Services
            </a>
            <a className="btn btn-outline-light btn-lg" href="mailto:info@mhsglobalassociates.com">
              Speak to an Advisor
            </a>
          </div> */}
        </div>
      </section>

      <section className="services-content py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="d-flex flex-wrap gap-2 mb-4">
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className="service-tag badge bg-primary-subtle text-primary-emphasis"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="row g-5">
            <div className="col-lg-8">
              <h2 className="fw-bold text-dark mb-3">
                Comprehensive Support for Every Milestone
              </h2>
              <p className="text-secondary mb-4">
                Explore a suite of student services that helps you shortlist the
                right course, secure competitive offers, and arrange the
                practical details of study. We combine regional insight with
                trusted university partnerships so each step is well informed.
              </p>

              <div className="card border-0 shadow-sm service-intro-card mb-5">
                <div className="card-body p-4 p-lg-5">
                  <p className="lead mb-4">
                    We coordinate university communications, documentation, and
                    deadlines with <strong>careful attention</strong>,
                    presenting your profile clearly to decision makers. Our{" "}
                    <strong>complimentary support</strong> allows you to focus on
                    choosing the path that inspires you.
                  </p>
                  <div className="row g-4">
                    <div className="col-sm-6 col-lg-4">
                      <div className="service-stat">
                        <span className="service-stat-value">4+</span>
                        <span className="service-stat-label">
                          Qualification
                          <br />
                          pathways supported
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="service-stat">
                        <span className="service-stat-value">3</span>
                        <span className="service-stat-label">
                          Annual
                          <br />
                          intakes covered
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="service-stat">
                        <span className="service-stat-value">100%</span>
                        <span className="service-stat-label">
                          Complimentary
                          <br />
                          advisory support
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {normalizedQuery && (
                <p className="services-search-summary mb-4">
                  <strong>{filteredServices.length}</strong>{" "}
                  {filteredServices.length === 1 ? "service" : "services"} match
                  "{trimmedQuery}".
                </p>
              )}

              {hasResults ? (
                <div className="row g-4">
                  {filteredServices.map((card) => (
                    <div key={card.title} className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm service-card">
                        <div className="card-body d-flex flex-column">
                          <div className="service-card-icon icon-pill text-primary mb-3">
                            <i className={"bi " + card.icon}></i>
                          </div>
                          <h3 className="h5 fw-semibold text-dark mb-2">
                            {card.title}
                          </h3>
                          <p className="text-secondary mb-3">
                            {card.description}
                          </p>
                          <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                            {card.points.map((point) => (
                              <li
                                key={point}
                                className="d-flex align-items-start gap-2 text-secondary"
                              >
                                <i className="bi bi-check-circle-fill text-primary"></i>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="alert alert-light border shadow-sm"
                  role="status"
                >
                  <h3 className="h6 text-dark mb-2">No services found</h3>
                  <p className="text-secondary mb-0 small">
                    Try searching for keywords such as "application",
                    "scholarship" or "finance", or clear the search to view all
                    services.
                  </p>
                </div>
              )}

              <div className="card border-0 shadow-sm service-extra-card mt-5">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="h5 fw-semibold text-dark mb-3">
                    Additional Support Included
                  </h3>
                  <p className="text-secondary mb-4">
                    Benefit from a portfolio of{" "}
                    <strong>no-cost services</strong> that provide clarity,
                    structure, and motivation from first enquiry through
                    arrival.
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
                <div className="card border-0 services-search-luxe">
                  <div className="card-body services-search-luxe__body">
                    <h3 className="services-search-luxe__title">
                      Find a Service
                    </h3>
                    <p className="services-search-luxe__subtitle">
                      Locate admissions expertise, finance guidance, and
                      wellbeing support in a single search.
                    </p>
                    <form
                      className="services-search-luxe__form"
                      onSubmit={handleSearchSubmit}
                    >
                      <div className="services-search-luxe__field">
                        <span
                          className="services-search-luxe__icon"
                          aria-hidden="true"
                        >
                          <i className="bi bi-search"></i>
                        </span>
                        <input
                          type="search"
                          className="services-search-luxe__input"
                          placeholder="Search by service or keyword"
                          aria-label="Search services"
                          value={searchQuery}
                          onChange={handleSearchChange}
                        />
                      </div>
                      <button
                        type="submit"
                        className="services-search-luxe__submit"
                        aria-label="Submit services search"
                      >
                        Search
                      </button>
                    </form>
                    {searchQuery && (
                      <div className="services-search-luxe__clear">
                        <button
                          type="button"
                          className="services-search-luxe__clear-btn"
                          onClick={handleClearSearch}
                        >
                          Clear search
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card border-0 shadow-sm service-category-card">
                  <div className="card-body">
                    <h3 className="h6 text-dark fw-semibold mb-3">
                      Our services
                    </h3>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                      {serviceCategories.map((category) => (
                        <li
                          key={category.name}
                          className="d-flex justify-content-between align-items-center text-secondary"
                        >
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
                  <div className="card-body p-5">
                    <h3 className="h5 fw-semibold mb-2">
                      Ready for Personalised Guidance?
                    </h3>
                    <p className="text-white-75 mb-3">
                      Arrange a complimentary session with our senior advisers
                      to design a <strong>tailored academic roadmap</strong>.
                    </p>
                    <a
                      className="btn btn-lg btn-light w-100"
                      href="mailto:admissions@mhsglobalassociates.com"
                    >
                      Schedule Consultation
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
