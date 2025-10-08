import { ChangeEvent, useMemo, useState } from "react";

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
import student1Img from "../assets/images/testimonial/student1.png";
import student2Img from "../assets/images/testimonial/student2.png";
import student3Img from "../assets/images/testimonial/student3.png";

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
    lines: [
      {
        text: "1st Floor, 101 Whitechapel High Road London E1 7RA, United Kingdom",
      },
    ],
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
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "John Eseny",
    program: "MSc Data Science - University of Birmingham",
    quote:
      "The expertise and dedication of the MHS Global team exceeded my expectations. They not only helped me gain offers but also provided invaluable insights about living and working in Aberdeen.",
    image: student1Img,
  },
  {
    name: "Clair Yeo",
    program: "PhD in Clinical Psychology - Aston University",
    quote:
      "Applying for a PhD is complex, but MHS Global Associates guided me through each step. Their mentoring, mock interviews, and detailed editorial support made the difference.",
    image: student2Img,
  },
  {
    name: "Luis Romero",
    program: "Pre-Masters in Finance - Bangor University",
    quote:
      "From my first consultation to visa approval, I felt supported. They helped me shortlist the right universities and tailor my personal statement to showcase my strengths.",
    image: student3Img,
  },
];

const getInitials = (name: string): string =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const HomePage = (): JSX.Element => {
  const spotlightTestimonials = testimonials.slice(0, 3);
  const [courseQuery, setCourseQuery] = useState("");

  const filteredCourses = useMemo(() => {
    const trimmed = courseQuery.trim();
    if (!trimmed) {
      return courses;
    }

    const query = trimmed.toLowerCase();
    return courses.filter((course) => {
      const haystack = `${course.title} ${course.summary}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [courseQuery]);

  const trimmedCourseQuery = courseQuery.trim();
  const shouldShowSuggestions = trimmedCourseQuery.length > 0;
  const suggestionCourses = filteredCourses.slice(0, 6);

  const handleCourseSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCourseQuery(event.target.value);
  };

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
          <div className="section-heading text-start mb-5">
            <h1 className="display-1 fw-bold text-dark mb-3">Courses</h1>
            <p className="lead text-secondary mb-0 fs-4">
              Choose from curated options designed to match your academic
              background, professional goals, and preferred study destinations.
            </p>
          </div>
          <div className="course-search-panel w-100 mb-5">
            <label
              htmlFor="course-search"
              className="course-search-label fw-semibold"
            >
              Search Courses
            </label>
            <div className="course-search-shell">
              <span className="course-search-icon" aria-hidden="true">
                <i className="bi bi-search"></i>
              </span>
              <input
                id="course-search"
                type="search"
                className="course-search-input"
                placeholder="Search by program name or summary"
                value={courseQuery}
                onChange={handleCourseSearchChange}
                aria-label="Search courses by program name or summary"
              />
              <button
                type="button"
                className={`course-search-clear ${
                  courseQuery ? "is-visible" : ""
                }`}
                onClick={() => setCourseQuery("")}
                aria-label="Clear course search"
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <span className="course-search-glow" aria-hidden="true"></span>
            </div>
            <p className="course-search-helper text-secondary">
              Refine programmes by typing keywords such as foundation, finance,
              or PhD.
            </p>
            {shouldShowSuggestions ? (
              <div
                className="course-search-menu"
                role="listbox"
                aria-label="Course suggestions"
              >
                {suggestionCourses.length ? (
                  suggestionCourses.map((course) => (
                    <a
                      key={`course-suggestion-${course.title}`}
                      href={`/courses?search=${encodeURIComponent(
                        course.title
                      )}`}
                      className="course-search-option"
                      role="option"
                      aria-selected="false"
                      onClick={() => setCourseQuery("")}
                    >
                      <div className="course-search-option-title">
                        {course.title}
                      </div>
                      <div className="course-search-option-copy">
                        {course.summary}
                      </div>
                      <span
                        className="course-search-option-chevron"
                        aria-hidden="true"
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </span>
                    </a>
                  ))
                ) : (
                  <div className="course-search-empty" role="status">
                    No matching programmes yet. Try different keywords.
                  </div>
                )}
              </div>
            ) : null}
          </div>
          <div className="row g-4 align-items-stretch">
            {courses.map((course) => (
              <div className="col-md-6 col-xl-4" key={course.title}>
                <article
                  className="course-card-premium"
                  style={{ backgroundImage: `url(${course.image})` }}
                  aria-label={course.title}
                >
                  <div className="course-card-content">
                    <span className="course-card-icon">
                      <i className="bi bi-search"></i>
                    </span>
                    <h3 className="course-card-title">{course.title}</h3>
                    <p className="course-card-summary">{course.summary}</p>
                    <a
                      href="/courses"
                      className="course-card-link"
                    >
                      Discover more
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </a>
                  </div>
                </article>
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

      <section className="testimonials-section mt-5 py-5 py-lg-6 position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-50 translate-middle-x rounded-circle"
          style={{
            width: "60rem",
            height: "60rem",
            background:
              "radial-gradient(circle at center, rgba(13, 110, 253, 0.25), transparent 60%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        ></div>
        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <h1 className="display-3 fw-bold text-dark mb-3">
                Student Success Stories
              </h1>
              <p className="display-6 text-secondary mb-4">
                Hear from students who turned aspirations into offers
              </p>
              <p className="text-secondary mb-4">
                Our counsellors champion each application with tailored
                guidance, interview preparation, and visa support so students
                stay confident from first consultation to campus arrival.
              </p>
              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="d-flex align-items-center text-warning gap-1 fs-5">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
                <p className="mb-0 text-secondary small">
                  Rated 4.9/5 by 120+ successful admissions in the past year
                </p>
              </div>
              <ul className="list-unstyled text-secondary small mb-0">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                  <span>
                    Personal statements polished to reflect your unique story
                  </span>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                  <span>
                    Scholarship strategies that position you for funding success
                  </span>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-check-circle-fill text-primary me-2 mt-1"></i>
                  <span>
                    Dedicated post-offer support for visas, housing, and travel
                  </span>
                </li>
              </ul>
              <div className="d-flex flex-wrap gap-2 mt-4">
                {spotlightTestimonials.map((testimonial) => {
                  const initials = getInitials(testimonial.name);
                  const hasImage = Boolean(testimonial.image);

                  return (
                    <div
                      key={`spotlight-${testimonial.name}`}
                      className="d-flex align-items-center bg-white shadow-sm rounded-pill px-3 py-2"
                    >
                      {hasImage ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle me-2"
                          style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <span className="badge rounded-circle bg-primary text-white me-2">
                          {initials}
                        </span>
                      )}
                      <span className="small text-dark">
                        {testimonial.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-7">
              <div
                id="testimonialCarousel"
                className="carousel carousel-dark slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {testimonials.map((testimonial, index) => {
                    const initials = getInitials(testimonial.name);
                    const hasImage = Boolean(testimonial.image);

                    return (
                      <div
                        key={testimonial.name}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <div
                          className="card border-0 shadow-lg h-100 mx-auto testimonial-card position-relative overflow-hidden"
                          style={{
                            maxWidth: "540px",
                            background:
                              "linear-gradient(135deg, rgba(13, 110, 253, 0.08), rgba(255, 255, 255, 0.95))",
                          }}
                        >
                          <div
                            className="position-absolute top-0 end-0 opacity-10 text-primary"
                            style={{ fontSize: "6rem", lineHeight: 1 }}
                            aria-hidden="true"
                          >
                            <i className="bi bi-quote"></i>
                          </div>
                          <div className="card-body p-4 p-lg-5">
                            <div className="d-flex align-items-center gap-3 mb-4">
                              <div className="flex-shrink-0">
                                {hasImage ? (
                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="rounded-circle border border-2 border-white shadow-sm"
                                    style={{
                                      width: "3.25rem",
                                      height: "3.25rem",
                                      objectFit: "cover",
                                    }}
                                  />
                                ) : (
                                  <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-semibold"
                                    style={{
                                      width: "3.25rem",
                                      height: "3.25rem",
                                    }}
                                  >
                                    {initials}
                                  </div>
                                )}
                              </div>
                              <div>
                                <div className="fw-semibold text-dark">
                                  {testimonial.name}
                                </div>
                                <div className="text-secondary small">
                                  {testimonial.program}
                                </div>
                              </div>
                            </div>
                            <blockquote className="mb-0">
                              <p className="fs-5 text-dark mb-0">
                                "{testimonial.quote}"
                              </p>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mt-4">
                  <div className="carousel-indicators position-relative m-0">
                    {testimonials.map((_, index) => (
                      <button
                        type="button"
                        key={index}
                        data-bs-target="#testimonialCarousel"
                        data-bs-slide-to={index}
                        className={`rounded-pill ${
                          index === 0 ? "active" : ""
                        }`}
                        aria-current={index === 0 ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-primary btn-md rounded-pill"
                      type="button"
                      data-bs-target="#testimonialCarousel"
                      data-bs-slide="prev"
                    >
                      <i className="bi bi-arrow-left"></i>
                    </button>
                    <button
                      className="btn btn-primary btn-md rounded-pill"
                      type="button"
                      data-bs-target="#testimonialCarousel"
                      data-bs-slide="next"
                    >
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
