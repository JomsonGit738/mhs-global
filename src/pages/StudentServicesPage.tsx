import studentServicesHeroImage from "../assets/images/studen-service-page/1.png";

const serviceTags: string[] = [
  "End-to-end support",
  "Personalised guidance",
  "Global education journey",
  "Post-study planning",
];

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  points: string[];
};

const serviceCards: ServiceCard[] = [
  {
    title: "Career Counselling & Profile Assessment",
    description:
      "Choosing the right academic path is critical. Our expert advisors provide:",
    icon: "bi-compass",
    points: [
      "One-on-one career counselling sessions",
      "Detailed profile evaluation (academic background, interests, and career goals)",
      "Guidance on selecting the right country, course, and institution",
      "Personalised recommendations based on future career prospects",
    ],
  },
  {
    title: "Course & University Selection",
    description:
      "With access to a wide network of global institutions, we assist in:",
    icon: "bi-buildings",
    points: [
      "Identifying suitable universities and programs",
      "Comparing course structures, rankings, and career outcomes",
      "Selecting options that align with budget and academic profile",
    ],
  },
  {
    title: "Application & Admission Support",
    description:
      "Our team simplifies the application process through:",
    icon: "bi-file-earmark-check",
    points: [
      "Preparation and review of key documents (SOP, CV, LORs)",
      "Accurate and timely application submissions",
      "Direct coordination with institutions",
      "Interview preparation where required",
    ],
  },
  {
    title: "Visa Guidance & Immigration Support",
    description:
      "We provide structured support for visa applications, including:",
    icon: "bi-passport",
    points: [
      "Step-by-step guidance on visa procedures",
      "Documentation checks and compliance review",
      "Mock interview preparation",
      "Updates on immigration policies",
    ],
  },
  {
    title: "Test Preparation Support",
    description:
      "We assist in meeting admission requirements by offering guidance for:",
    icon: "bi-journal-text",
    points: [
      "English proficiency tests such as IELTS, TOEFL, and PTE",
      "GRE and GMAT preparation for postgraduate programs",
      "Study resources and exam strategies",
    ],
  },
  {
    title: "Scholarship & Financial Guidance",
    description:
      "We help make education more accessible through:",
    icon: "bi-cash-coin",
    points: [
      "Identification of relevant scholarships and grants",
      "Assistance with scholarship applications",
      "Guidance on education loans and financial planning",
    ],
  },
  {
    title: "Pre-Departure Support",
    description:
      "Preparing for a new environment is essential. Our services include:",
    icon: "bi-briefcase",
    points: [
      "Pre-departure orientation sessions",
      "Guidance on travel, packing, and documentation",
      "Information on local culture and academic expectations",
      "Support with insurance and foreign exchange",
    ],
  },
  {
    title: "Accommodation & Travel Assistance",
    description:
      "We help secure safe and convenient arrangements by offering:",
    icon: "bi-house-check",
    points: [
      "Assistance with student housing (on-campus and off-campus)",
      "Temporary accommodation support",
      "Travel planning guidance",
      "Airport pickup coordination",
    ],
  },
  {
    title: "Arrival & Settlement Support",
    description: "Support continues after arrival with:",
    icon: "bi-geo-alt",
    points: [
      "Initial guidance upon reaching the destination",
      "Help with essential setup (banking, communication, local services)",
      "Orientation to the local area",
      "Ongoing assistance when needed",
    ],
  },
  {
    title: "Academic & Language Support",
    description: "We support academic success through:",
    icon: "bi-mortarboard",
    points: [
      "Study skills guidance",
      "Adaptation to new education systems",
      "Language support where required",
    ],
  },
  {
    title: "Career & Part-Time Work Guidance",
    description:
      "We assist in building practical experience and career readiness:",
    icon: "bi-briefcase-fill",
    points: [
      "Guidance on part-time work opportunities",
      "CV development and interview preparation",
      "Internship and placement advice",
      "Career planning support",
    ],
  },
  {
    title: "Post-Study Support",
    description: "Our support extends beyond education:",
    icon: "bi-arrow-up-right-circle",
    points: [
      "Guidance on post-study work opportunities",
      "Career planning and job search strategies",
      "Advice on further studies or long-term pathways",
    ],
  },
];

const serviceJourney: string[] = [
  "Career Counselling & Profile Assessment",
  "Course & University Selection",
  "Application & Admission Support",
  "Visa Guidance & Immigration Support",
  "Pre-Departure Support",
  "Arrival & Settlement Support",
  "Post-Study Support",
];

const whyChoosePoints: string[] = [
  "Personalised and student-focused approach",
  "End-to-end guidance from start to finish",
  "Strong network of global institutions",
  "Experienced and knowledgeable advisors",
  "Transparent and ethical services",
];

const StudentServicesPage = (): JSX.Element => {
  return (
    <>
      <section className="services-hero position-relative text-white">
        <div className="services-hero-media" aria-hidden="true">
          <img
            src={studentServicesHeroImage}
            alt=""
            className="services-hero-image"
            decoding="async"
            width={1521}
            height={471}
            sizes="100vw"
          />
        </div>
        <div className="services-hero-overlay" aria-hidden="true"></div>
        <div className="container position-relative py-5 py-lg-6">
          <span className="badge bg-white text-primary fw-semibold mb-3 text-uppercase small shadow-sm">
            Student Services
          </span>
          <h1 className="display-5 fw-bold mb-3">
            Student Services and Support
          </h1>
          <p className="lead text-white-75 mb-4 col-lg-8">
            At MHS Global Associates, we provide comprehensive, end-to-end
            support designed to guide students through every stage of their
            study abroad journey, from initial consultation to post-graduation
            success. Our approach focuses on delivering personalised, reliable,
            and efficient services to ensure a smooth and successful transition
            into global education.
          </p>
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
                Comprehensive Support for Every Stage
              </h2>
              <p className="text-secondary mb-4">
                We help students make informed decisions aligned with long-term
                success, ensure the right fit academically, financially, and
                professionally, and support a smooth transition into life and
                study abroad.
              </p>

              <div className="card border-0 shadow-sm service-intro-card mb-5">
                <div className="card-body p-4 p-lg-5">
                  <p className="lead mb-3">
                    Our goal is to guide each student with structured support at
                    every milestone, from choosing a course and preparing
                    applications to settling in and planning beyond graduation.
                  </p>
                  <p className="text-secondary mb-0">
                    We aim to support long-term success beyond graduation.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {serviceCards.map((card) => (
                  <div key={card.title} className="col-md-6">
                    <article
                      id={
                        card.title === "Scholarship & Financial Guidance"
                          ? "scholarship-guidance"
                          : undefined
                      }
                      className="card h-100 border-0 shadow-sm service-card"
                    >
                      <div className="card-body d-flex flex-column">
                        <div className="service-card-icon icon-pill text-primary mb-3">
                          <i className={"bi " + card.icon} aria-hidden="true"></i>
                        </div>
                        <h3 className="h5 fw-semibold text-dark mb-2">
                          {card.title}
                        </h3>
                        <p className="text-secondary mb-3">{card.description}</p>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                          {card.points.map((point) => (
                            <li
                              key={point}
                              className="d-flex align-items-start gap-2 text-secondary"
                            >
                              <i
                                className="bi bi-check-circle-fill text-primary"
                                aria-hidden="true"
                              ></i>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              <div className="card border-0 shadow-sm service-extra-card mt-5">
                <div className="card-body p-4 p-lg-5">
                  <h3 className="h5 fw-semibold text-dark mb-3">
                    Why Choose MHS Global Associates?
                  </h3>
                  <p className="text-secondary mb-4">
                    We are committed to helping every student achieve their
                    academic and career goals with confidence.
                  </p>
                  <div className="row row-cols-1 row-cols-md-2 g-3">
                    {whyChoosePoints.map((item) => (
                      <div key={item} className="col">
                        <div className="d-flex align-items-start gap-2 text-secondary">
                          <i
                            className="bi bi-check2 text-primary mt-1"
                            aria-hidden="true"
                          ></i>
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
                <div className="card border-0 shadow-sm service-category-card">
                  <div className="card-body">
                    <h3 className="h6 text-dark fw-semibold mb-3">
                      Student support journey
                    </h3>
                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                      {serviceJourney.map((step, index) => (
                        <li
                          key={step}
                          className="d-flex justify-content-between align-items-start gap-3 text-secondary"
                        >
                          <span>{step}</span>
                          <span className="badge rounded-pill bg-primary-subtle text-primary-emphasis fw-semibold">
                            {index + 1}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card border-0 shadow-sm service-category-card">
                  <div className="card-body">
                    <h3 className="h6 text-dark fw-semibold mb-3">
                      Funding and preparation
                    </h3>
                    <ul className="list-unstyled d-flex flex-column gap-2 mb-0 text-secondary">
                      <li>Scholarship and grant identification</li>
                      <li>Guidance on education loans and financial planning</li>
                      <li>Test preparation guidance for IELTS, TOEFL, PTE, GRE, and GMAT</li>
                      <li>Travel, documentation, insurance, and foreign exchange support</li>
                    </ul>
                  </div>
                </div>

                <div className="card border-0 shadow-sm service-callout text-white">
                  <div className="card-body p-5">
                    <h3 className="h5 fw-semibold mb-2">
                      Ready for Personalised Guidance?
                    </h3>
                    <p className="text-white-75 mb-3">
                      Speak with our advisers for one-on-one career counselling,
                      course selection support, and a clear plan for your study
                      abroad journey.
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
