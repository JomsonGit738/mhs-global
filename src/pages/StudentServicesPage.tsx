import { ChangeEvent, FormEvent, useMemo, useState } from "react";

const serviceTags: string[] = [
  "Application coordination",
  "Free student services",
  "Value-added support",
  "Book your free consultation",
];

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  points: string[];
};

const serviceCards: ServiceCard[] = [
  {
    title: "Application Coordination & Admissions",
    description:
      "We co-ordinate applications to first degree, foundation, HND and diploma programmes so your submission meets every university requirement on time.",
    icon: "bi-clipboard-check",
    points: [
      "Dedicated advisors for UCAS and direct university applications",
      "Guidance on entry requirements, supporting documents and translations",
      "Deadline management for September, January and May intakes",
      "Offer acceptance, deferral and enrolment support",
    ],
  },
  {
    title: "Student Assistance & Value-Added Offers",
    description:
      "Benefit from complimentary counselling, institutional briefings and tailored preparation that helps you secure the right place of study.",
    icon: "bi-people-heart",
    points: [
      "One-to-one academic and career counselling sessions",
      "Workshops covering personal statements and interview techniques",
      "Regular updates on scholarships, bursaries and promotional offers",
      "Priority booking for open days, webinars and campus visits",
    ],
  },
  {
    title: "Finance, Welfare & Settlement Support",
    description:
      "From finance applications to accommodation advice, we make sure every practical detail is ready before you travel.",
    icon: "bi-house-heart",
    points: [
      "Guidance on tuition fees, instalments and sponsorship options",
      "Student finance and loan application assistance (where eligible)",
      "Accommodation search across university-managed and private providers",
      "Pre-departure briefings covering arrival, banking and NHS registration",
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
            Professional Education Services
          </span>
          <h1 className="display-5 fw-bold mb-3">
            Student Services &amp; Value-Added Support
          </h1>
          <p className="lead text-white-75 mb-4 col-lg-7">
            The service provided by MHS Global Associates co-ordinates
            applications to full-time first degree, foundation degree, HND and
            HNC courses so you progress from enquiry to enrolment with
            confidence.
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
              <h2 className="fw-bold text-dark mb-3">Student Services</h2>
              <p className="text-secondary mb-4">
                Our comprehensive services help you identify the right course,
                secure offers and prepare every logistical detail before your
                departure. We combine local expertise with strong university
                partnerships to make the process seamless.
              </p>

              <div className="card border-0 shadow-sm service-intro-card mb-5">
                <div className="card-body p-4 p-lg-5">
                  <p className="lead mb-4">
                    We manage all communications with universities and awarding
                    bodies, ensuring your application is presented
                    professionally and within the required deadlines. Our free
                    guidance means you stay focused on choosing the pathway that
                    fits.
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
                    Complimentary Services
                  </h3>
                  <p className="text-secondary mb-4">
                    Access our suite of free value-added services that keep you
                    supported through every milestone of your academic journey.
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
                    <h3 className="text-dark fw-semibold mb-3">
                      Search Services
                    </h3>
                    <form
                      className="d-flex gap-2"
                      onSubmit={handleSearchSubmit}
                    >
                      <input
                        type="search"
                        className="form-control form-control-lg"
                        placeholder="Keyword"
                        aria-label="Search services"
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        aria-label="Search"
                      >
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                    {searchQuery && (
                      <div className="d-flex justify-content-end mt-2">
                        <button
                          type="button"
                          className="btn btn-link btn-sm p-0 text-decoration-none"
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
                      Course Categories
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
                      Need personalised guidance?
                    </h3>
                    <p className="text-white-75 mb-3">
                      Schedule a free consultation with our advisors to plan
                      your academic pathway.
                    </p>
                    <a
                      className="btn btn-lg btn-light w-100"
                      href="mailto:admissions@mhsglobalassociates.com"
                    >
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
