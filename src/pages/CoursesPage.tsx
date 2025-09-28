import img1 from "../assets/images/coursesPage/1.png";
type FoundationHighlight = {
  icon: string;
  title: string;
  description: string;
};

const foundationHighlights: FoundationHighlight[] = [
  {
    icon: "bi-mortarboard",
    title: "Expert Faculty",
    description: "Qualified instructors",
  },
  {
    icon: "bi-clock-history",
    title: "Flexible Schedule",
    description: "Full & part-time options",
  },
  {
    icon: "bi-people",
    title: "Small Classes",
    description: "Personalized attention",
  },
  {
    icon: "bi-journal-bookmark",
    title: "Modern Curriculum",
    description: "Industry-relevant content",
  },
];

type FoundationProgram = {
  title: string;
  duration: string;
  description: string;
  href: string;
};

const foundationPrograms: FoundationProgram[] = [
  {
    title: "Business Foundation",
    duration: "1 Year",
    description:
      "Comprehensive introduction to business principles, economics, and management fundamentals.",
    href: "/#contact",
  },
  {
    title: "Engineering Foundation",
    duration: "1 Year",
    description:
      "Mathematics, physics, and engineering principles to prepare for advanced engineering studies.",
    href: "/#contact",
  },
  {
    title: "Health Sciences Foundation",
    duration: "1 Year",
    description:
      "Biology, chemistry, and health science fundamentals for medical and healthcare programs.",
    href: "/#contact",
  },
  {
    title: "Computing Foundation",
    duration: "1 Year",
    description:
      "Programming, mathematics, and computer science basics for technology-focused degrees.",
    href: "/#contact",
  },
  {
    title: "Arts & Humanities Foundation",
    duration: "1 Year",
    description:
      "Critical thinking, writing, and analytical skills for liberal arts and humanities programs.",
    href: "/#contact",
  },
  {
    title: "Science Foundation",
    duration: "1 Year",
    description:
      "Advanced mathematics, physics, chemistry, and biology for scientific disciplines.",
    href: "/#contact",
  },
];

const CoursesPage = (): JSX.Element => {
  return (
    <section className="foundation-section py-5 py-lg-6 bg-white" id="courses">
      <div className="container">
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-5">
            <div className="foundation-hero-media shadow-lg">
              <img
                src={img1}
                alt="Student studying in a library"
                className="img-fluid rounded-4 w-100"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <span className="badge bg-primary-subtle text-primary-emphasis mb-3">
              Hons Courses
            </span>
            <h1 className="fw-bold text-dark mb-3">Foundation Programs</h1>
            <p className="text-secondary mb-4">
              Our Foundation Courses provide students with the essential skills
              and knowledge needed to excel in their chosen field of study.
              These comprehensive programs are designed to bridge the gap
              between secondary education and university-level learning.
            </p>
            <div className="row g-3 mb-4">
              {foundationHighlights.map((item) => (
                <div className="col-sm-6" key={item.title}>
                  <div className="foundation-highlight d-flex align-items-start gap-3 h-100">
                    <span className="icon-pill text-primary">
                      <i className={"bi " + item.icon}></i>
                    </span>
                    <div>
                      <div className="fw-semibold text-dark">{item.title}</div>
                      <p className="mb-0 text-secondary small">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/#contact">
                Learn More
              </a>
              <a className="btn btn-outline-primary" href="/#contact">
                Download Brochure
              </a>
            </div> */}
          </div>
        </div>
        <div className="foundation-programs">
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between mb-4">
            <div>
              <h2 className="fw-bold text-dark mb-1">
                Available Foundation Programs
              </h2>
              <p className="text-secondary mb-0">
                Choose the pathway that matches your academic and career goals.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {foundationPrograms.map((program) => (
              <div className="col-md-6 col-xl-4" key={program.title}>
                <div className="foundation-program-card card h-100">
                  <div className="card-body p-5 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h2 className="text-dark mb-0">{program.title}</h2>
                      <span className="badge bg-primary-subtle text-primary-emphasis">
                        {program.duration}
                      </span>
                    </div>
                    <p className="text-secondary flex-grow-1">
                      {program.description}
                    </p>
                    {/* <a
                      className="btn btn-lg btn-primary mt-3 w-100"
                      href={program.href}
                    >
                      View Details
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
