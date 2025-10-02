import HeroSlider from "../components/HeroSlider";
import GlobalNetworkSection from "../components/GlobalNetworkSection";
import PartnerUniversitiesSlider from "../components/PartnerUniversitiesSlider";
import ContactContent, { ContactInfoItem } from "../components/ContactContent";

import foundationImg from "../assets/images/courses/1.png";
import undergraduateImg from "../assets/images/courses/2.png";
import preMastersImg from "../assets/images/courses/3.png";
import mastersResearchImg from "../assets/images/courses/4.png";
import phdImg from "../assets/images/courses/5.png";
import executiveImg from "../assets/images/courses/6.png";

type PromoHighlight = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
};

const promoHighlights: PromoHighlight[] = [
  {
    id: "uk-intake",
    eyebrow: "Study in the UK at top universities",
    title: "January 2026 intake - Admissions Open!",
    description:
      "Apply early to secure your place! Our counsellors support you every step of the way.",
  },
];

type Course = {
  title: string;
  summary: string;
  image: string;
};

const courses: Course[] = [
  {
    title: "Foundation Courses",
    summary:
      "Bridge programs designed to prepare you for undergraduate studies with confident English and academic skills.",
    image: foundationImg,
  },
  {
    title: "Undergraduate Degrees",
    summary:
      "Bachelor's degree programs across diverse fields with a global reputation and career-ready outcomes.",
    image: undergraduateImg,
  },
  {
    title: "Pre-Masters",
    summary:
      "Pre-Master's programs designed for career advancement with research-informed faculty guidance.",
    image: preMastersImg,
  },
  {
    title: "Masters in Research",
    summary:
      "Research-focused Master's pathways emphasising independent projects and mentorship.",
    image: mastersResearchImg,
  },
  {
    title: "PhD Degrees",
    summary:
      "Doctoral programs designed for career advancement with cross-disciplinary research exposure.",
    image: phdImg,
  },
  {
    title: "Executive Education",
    summary:
      "Short, intensive experiences tailored for working professionals accelerating leadership ambitions.",
    image: executiveImg,
  },
];

const contactInfo: ContactInfoItem[] = [
  {
    icon: "bi-telephone",
    label: "Phone",
    lines: [{ text: "+44 7521 772131", href: "tel:+447521772131" }],
  },
  {
    icon: "bi-envelope",
    label: "Email",
    lines: [
      {
        text: "info@mhsglobalassociates.com",
        href: "mailto:info@mhsglobalassociates.com",
      },
    ],
  },
  {
    icon: "bi-geo-alt",
    label: "Office",
    lines: [{ text: "1 Foundant Court, Payne Road, Bow, London, E3 2SP" }],
  },
  {
    icon: "bi-clock",
    label: "Office Hours",
    lines: [
      { text: "Monday - Friday: 9:00 AM - 6:00 PM" },
      { text: "Saturday: 10:00 AM - 4:00 PM" },
    ],
  },
];

type Testimonial = {
  name: string;
  program: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John Eseny",
    program: "MSc Data Science - University of Birmingham",
    quote:
      "The expertise and dedication of the MHS Global team exceeded my expectations. They not only helped me gain offers but also provided invaluable insights about living and working in Aberdeen.",
  },
  {
    name: "Clair Yeo",
    program: "PhD in Clinical Psychology - Aston University",
    quote:
      "Applying for a PhD is complex, but MHS Global Associates guided me through each step. Their mentoring, mock interviews, and detailed editorial support made the difference.",
  },
  {
    name: "Luis Romero",
    program: "Pre-Masters in Finance - Bangor University",
    quote:
      "From my first consultation to visa approval, I felt supported. They helped me shortlist the right universities and tailor my personal statement to showcase my strengths.",
  },
];

const HomePage = (): JSX.Element => {
  return (
    <>
      <HeroSlider />

      {promoHighlights.map((promo) => (
        <section
          key={promo.id}
          className="promo-section text-white"
          id="services"
        >
          <div className="overlay"></div>
          <div className="container position-relative">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <p className="text-uppercase small mb-2 opacity-75">
                  {promo.eyebrow}
                </p>
                <h2 className="fw-semibold mb-3">{promo.title}</h2>
                <p className="lead mb-0">{promo.description}</p>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0 text-lg-end">
                <a
                  href="/#contact"
                  className="btn btn-lg btn-outline-light btn-lg"
                >
                  Start Your Application
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-5 bg-light">
        <div className="container">
          <div className="section-heading text-start mb-5">
            <h1 className="fs-32-600-130 fw-bold text-dark mb-3">
              Our Global Network
            </h1>
            <p className="text-secondary mb-0">
              Explore global academic opportunities through our extensive
              network of partner universities and institutions across multiple
              countries.
            </p>
          </div>
        </div>
      </section>
      <GlobalNetworkSection />
      <PartnerUniversitiesSlider />

      <section className="courses-section py-5 py-lg-6" id="courses">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <span className="badge bg-primary-subtle text-primary-emphasis mb-2">
              Courses
            </span>
            <h2 className="fw-bold text-dark">
              Programs to accelerate your academic journey
            </h2>
            <p className="text-secondary mb-0">
              Choose from curated options designed to match your academic
              background, professional goals, and preferred study destinations.
            </p>
          </div>
          <div className="row g-4 align-items-stretch">
            {courses.map((course) => (
              <div className="col-md-6 col-xl-4" key={course.title}>
                <div className="card h-100 border-0 shadow-sm course-card">
                  <div className="ratio ratio-16x9 course-thumb">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="h5 fw-semibold mb-3">{course.title}</h3>
                    <p className="text-secondary mb-0">{course.summary}</p>
                  </div>
                  <div className="card-footer bg-transparent border-0 pt-0">
                    <a
                      href="/courses"
                      className="stretched-link text-decoration-none fw-semibold text-primary"
                    >
                      Discover more{" "}
                      <i className="bi bi-arrow-up-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactContent
        info={contactInfo}
        courses={courses}
        sectionId="contact"
        infoDescription="Connect with our advisors for personalised guidance on course selection, application strategy, scholarships, and visa preparation."
      />

      <section className="testimonials-section py-5 py-lg-6 bg-white">
        <div className="container">
          <div className="section-heading text-center mb-5">
            <span className="badge bg-primary-subtle text-primary-emphasis mb-2">
              Student Success Stories
            </span>
            <h2 className="fw-bold text-dark">
              Hear from students who turned aspirations into offers
            </h2>
          </div>
          <div
            id="testimonialCarousel"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="card border-0 shadow-sm mx-auto testimonial-card">
                    <div className="card-body p-4 p-lg-5">
                      <p className="fs-5 text-dark mb-4">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <div className="fw-semibold text-dark">
                          {testimonial.name}
                        </div>
                        <div className="text-secondary small">
                          {testimonial.program}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators position-static mt-4">
              {testimonials.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
