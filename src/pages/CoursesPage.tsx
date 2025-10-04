import { useMemo, useState } from "react";
import foundationImg from "../assets/images/courses/1.png";
import undergraduateImg from "../assets/images/courses/2.png";
import postgraduateImg from "../assets/images/courses/3.png";
import shortCoursesImg from "../assets/images/courses/4.png";
import mainImage from "../assets/images/coursesPage/1.png";

type CourseMeta = {
  label: string;
  value: string;
};

type CourseHighlight = {
  icon: string;
  title: string;
  description: string;
};

type CourseCategory = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  meta: CourseMeta[];
  highlights: CourseHighlight[];
  programs: string[];
};

const courseCategories: CourseCategory[] = [
  {
    id: "foundation",
    name: "Foundation Programs",
    tagline: "Hons Courses Pathway",
    description:
      "Our foundation year equips you with the academic confidence, critical thinking and study skills needed to step smoothly into a full honours degree. Subject specific modules blend with intensive support in writing, maths and digital literacy.",
    image: foundationImg,
    meta: [
      { label: "Duration", value: "4 Years inc. foundation year" },
      { label: "Entry Points", value: "September / January / May" },
      { label: "Progression", value: "Direct degree progression" },
    ],
    highlights: [
      {
        icon: "bi-mortarboard",
        title: "Dedicated Faculty",
        description:
          "Learn from tutors who specialise in helping international and returning learners transition to university study.",
      },
      {
        icon: "bi-lightbulb",
        title: "Academic Skills",
        description:
          "Intensive coaching in research, academic writing, presentations and independent learning habits.",
      },
      {
        icon: "bi-people",
        title: "Personal Support",
        description:
          "Small group seminars, mentoring, and regular progress reviews keep you on track from day one.",
      },
      {
        icon: "bi-bar-chart",
        title: "Subject Pathways",
        description:
          "Pathway modules align with business, finance, healthcare and service industries to ease degree entry.",
      },
    ],
    programs: [
      "BSc (Hons) Business and Human Resource Management",
      "BSc (Hons) Business and Law",
      "BSc (Hons) Business and Marketing",
      "BSc (Hons) Business and Tourism",
      "BSc (Hons) Finance and Accounting",
      "BSc (Hons) International Business Management",
      "BSc (Hons) Business and Hospitality Management",
      "BSc (Hons) Business and Healthcare Management",
      "BSc (Hons) Health and Social Care",
    ],
  },
  {
    id: "undergraduate",
    name: "Undergraduate Programs",
    tagline: "BSc (Hons) and LLB Routes",
    description:
      "Progress into internationally recognised bachelor's degrees that pair academic depth with real world learning. Placements, live projects and guest industry speakers are embedded across each award.",
    image: undergraduateImg,
    meta: [
      { label: "Qualification", value: "BSc (Hons) / LLB (Hons)" },
      { label: "Study Mode", value: "Full time with placement options" },
      { label: "Entry Points", value: "September / January / May" },
    ],
    highlights: [
      {
        icon: "bi-briefcase",
        title: "Career Focused Teaching",
        description:
          "Curricula mapped to current industry practice with applied assignments and employer briefs.",
      },
      {
        icon: "bi-diagram-3",
        title: "Networking and Events",
        description:
          "Meet sector specialists through masterclasses, field visits and student societies.",
      },
      {
        icon: "bi-compass",
        title: "Advisory Support",
        description:
          "Dedicated success coaches guide CV building, interview preparation and placement searches.",
      },
      {
        icon: "bi-globe2",
        title: "Global Perspective",
        description:
          "International cohorts enrich debate and develop intercultural leadership skills.",
      },
    ],
    programs: [
      "BSc (Hons) Business and Events Management",
      "BSc (Hons) Business and Hospitality Management",
      "BSc (Hons) Business and Tourism Management",
      "BSc (Hons) Finance and Accounting",
      "BSc (Hons) International Business Management",
      "BSc (Hons) Business and Human Resource Management",
      "BSc (Hons) Business and Law",
      "BSc (Hons) Business and Marketing",
      "LLB (Hons) Law",
      "BSc (Hons) Business and Healthcare Management",
      "BSc (Hons) Health and Social Care",
    ],
  },
  {
    id: "postgraduate",
    name: "Postgraduate Programs",
    tagline: "MBA / MSc / LLM",
    description:
      "Advance your expertise with focused master's programmes that combine strategic insight and practical application. Each pathway is designed for ambitious professionals ready to accelerate their career or shift into leadership roles.",
    image: postgraduateImg,
    meta: [
      { label: "Duration", value: "12 Months intensive" },
      { label: "Format", value: "Full time and executive pathways" },
      { label: "Entry Points", value: "September / January / May" },
    ],
    highlights: [
      {
        icon: "bi-award",
        title: "Industry Led Projects",
        description:
          "Tackle consultancy briefs and capstone assignments that mirror contemporary business challenges.",
      },
      {
        icon: "bi-graph-up-arrow",
        title: "Leadership Growth",
        description:
          "Sharpen decision making, analytics and change management capabilities across every module.",
      },
      {
        icon: "bi-people-fill",
        title: "Peer Learning",
        description:
          "Collaborate with experienced classmates drawn from diverse sectors and global markets.",
      },
      {
        icon: "bi-journal-text",
        title: "Research Support",
        description:
          "Access expert supervision for dissertations, professional reports and applied investigations.",
      },
    ],
    programs: [
      "MBA International",
      "MBA Health and Social Care",
      "LLM Law",
      "MSc Accounting and Financial Management",
      "MSc International Hospitality and Tourism Management",
      "MSc International Marketing",
      "MSc International Project Management",
    ],
  },
  {
    id: "shortCourses",
    name: "Short Courses",
    tagline: "Professional and CPD Credits",
    description:
      "Targeted short courses help you upskill quickly, refresh specialist knowledge or explore a new discipline. Flexible scheduling keeps learning accessible for working professionals and organisations.",
    image: shortCoursesImg,
    meta: [
      { label: "Format", value: "Evening / Weekend / Online" },
      { label: "Start Dates", value: "Rolling enrolment" },
      { label: "Outcomes", value: "Certificates and CPD credits" },
    ],
    highlights: [
      {
        icon: "bi-clock-history",
        title: "Flexible Timetables",
        description:
          "Blend self paced study with live workshops and focused intensives to suit your schedule.",
      },
      {
        icon: "bi-tools",
        title: "Practical Content",
        description:
          "Hands on sessions emphasise immediate workplace application and measurable impact.",
      },
      {
        icon: "bi-person-check",
        title: "Focused Cohorts",
        description:
          "Small groups encourage discussion, peer learning and tailored tutor feedback.",
      },
      {
        icon: "bi-lightning",
        title: "Rapid Outcomes",
        description:
          "Gain new skills in weeks, with pathways that ladder into longer awards if desired.",
      },
    ],
    programs: [
      "Health, Public Services and Care: Health and Social Care",
      "Health, Public Services and Care: Public Services",
      "Health, Public Services and Care: Child Development and Well Being",
      "Engineering and Manufacturing Technologies: Engineering",
      "Engineering and Manufacturing Technologies: Manufacturing Technologies",
      "Engineering and Manufacturing Technologies: Transportation Operations and Maintenance",
      "Information and Communication Technology: ICT for Users",
      "Retail and Commercial Enterprise: Retailing and Wholesaling",
      "Retail and Commercial Enterprise: Warehousing and Distribution",
      "Retail and Commercial Enterprise: Service Enterprises",
      "Retail and Commercial Enterprise: Hospitality and Catering",
      "Leisure, Travel and Tourism: Travel and Tourism",
      "Education and Training: Teaching and Lecturing",
      "Preparation for Life and Work: Foundations for Learning and Life",
      "Preparation for Life and Work: Preparation for Work",
      "Business, Administration and Law: Accounting and Finance",
      "Business, Administration and Law: Administration",
      "Business, Administration and Law: Business Management",
      "Business, Administration and Law: Marketing and Sales",
    ],
  },
];

type CategorySelectorProps = {
  categories: CourseCategory[];
  activeId: string;
  onSelect: (id: string) => void;
};

const CategorySelector = ({
  categories,
  activeId,
  onSelect,
}: CategorySelectorProps) => (
  <section className="mt-5">
    <h2 className="visually-hidden">Select a course category</h2>
    <div className="row g-3 row-cols-1 row-cols-md-2 row-cols-xl-4">
      {categories.map((category) => {
        const isActive = category.id === activeId;
        const preview =
          category.description.length > 120
            ? `${category.description.substring(0, 120)}...`
            : category.description;

        return (
          <div className="col" key={category.id}>
            <button
              type="button"
              className={`w-100 h-100 text-start btn ${
                isActive ? "btn-primary" : "btn-outline-light"
              } rounded-3 p-4`}
              onClick={() => onSelect(category.id)}
              aria-pressed={isActive}
            >
              <span
                className={
                  isActive
                    ? "text-uppercase d-block text-white-50"
                    : "text-uppercase d-block text-dark"
                }
                style={{ fontSize: "13px", letterSpacing: "0.06em" }}
              >
                {category.tagline}
              </span>
              <span
                className={
                  isActive
                    ? "fw-semibold d-block text-white"
                    : "fw-semibold d-block text-dark"
                }
                style={{ fontSize: "1.4rem" }}
              >
                {category.name}
              </span>
              <span
                className={
                  isActive
                    ? "d-block mt-2 text-white"
                    : "d-block mt-2 text-dark"
                }
                style={{ fontSize: "13px" }}
              >
                {preview}
              </span>
            </button>
          </div>
        );
      })}
    </div>
  </section>
);

type CategoryDetailProps = {
  category: CourseCategory;
};

const CategoryDetail = ({ category }: CategoryDetailProps) => (
  <section className="category-detail card border-0 shadow-sm rounded-4 mt-5">
    <div className="card-body p-4 p-lg-5">
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4 mb-4">
        <div>
          <span className="badge bg-secondary-subtle text-secondary-emphasis mb-2">
            {category.tagline}
          </span>
          <h2 className="fw-semibold text-dark mb-3">{category.name}</h2>
          <p className="text-secondary mb-0">{category.description}</p>
        </div>
        <div className="d-flex flex-wrap gap-3">
          {category.meta.map((item) => (
            <article
              key={item.label}
              className="d-flex align-items-center gap-2 border rounded-3 px-3 py-2 bg-light flex-nowrap"
            >
              <span className="fw-semibold text-dark">{item.label}:</span>
              <span
                className="text-secondary small text-truncate"
                style={{ maxWidth: "220px" }}
              >
                {item.value}
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12">
          <div className="row g-3 row-cols-1 row-cols-sm-2">
            {category.highlights.map((highlight) => (
              <div key={highlight.title} className="col">
                <article className="highlight-card border rounded-3 bg-light h-100">
                  <span className="highlight-icon text-primary">
                    <i className={`bi ${highlight.icon}`}></i>
                  </span>
                  <div className="highlight-content">
                    <span className="fw-semibold text-dark d-block">
                      {highlight.title}
                    </span>
                    <p className="text-secondary small mb-0">
                      {highlight.description}
                    </p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12">
          <div className="row g-3 row-cols-1 row-cols-md-2">
            {category.programs.map((program, index) => (
              <div key={program} className="col">
                <article className="h-100 border rounded-3 p-3 position-relative program-card">
                  <span className="program-index badge bg-primary-subtle text-primary-emphasis">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="d-flex align-items-center gap-3">
                    <span className="program-icon text-primary flex-shrink-0">
                      <i className="bi bi-check2-circle"></i>
                    </span>
                    <h3 className="fw-semibold text-dark mb-0 flex-grow-1">
                      {program}
                    </h3>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CoursesPage = (): JSX.Element => {
  const [activeCategoryId, setActiveCategoryId] = useState(
    courseCategories[0].id
  );

  const activeCategory = useMemo(
    () =>
      courseCategories.find((category) => category.id === activeCategoryId) ??
      courseCategories[0],
    [activeCategoryId]
  );

  return (
    <section
      className="courses-overview-section py-5 py-lg-6 bg-white"
      id="courses"
    >
      <div className="container">
        <header className="row g-5 align-items-center">
          <div className="col-lg-5 order-lg-2">
            <div
              className="rounded-4 overflow-hidden shadow-lg mx-auto"
              style={{ maxWidth: "420px" }}
            >
              <img
                src={mainImage}
                alt={`${activeCategory.name} illustration`}
                className="img-fluid w-100"
                style={{ objectFit: "cover", width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-7 order-lg-1">
            <span className="badge bg-primary-subtle text-primary-emphasis mb-3">
              Our Courses
            </span>
            <h1 className="fw-bold text-dark mb-3">
              Choose Your Perfect Study Path
            </h1>
            <p className="text-secondary mb-0">
              At MHS Global Associates we match each learner with a route that
              fits their goals, from stepping stone foundation pathways to
              focused postgraduate masters and agile short courses. Explore the
              options below and find the programme that supports your ambitions.
            </p>
          </div>
        </header>

        <CategorySelector
          categories={courseCategories}
          activeId={activeCategoryId}
          onSelect={setActiveCategoryId}
        />

        <CategoryDetail category={activeCategory} />
      </div>
    </section>
  );
};

export default CoursesPage;
