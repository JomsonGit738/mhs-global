import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import type { CSSProperties } from "react";
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

const normalizeCategoryKey = (value: string): string =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

const categorySlugMap = courseCategories.reduce<Record<string, string>>(
  (acc, category) => {
    acc[normalizeCategoryKey(category.id)] = category.id;
    acc[normalizeCategoryKey(category.name)] = category.id;
    return acc;
  },
  {}
);

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
  <section className="courses-luxe__selector" data-animate="fade-up">
    <h2 className="visually-hidden">Select a course category</h2>
    <div className="row g-3 g-xl-4 row-cols-1 row-cols-md-2 row-cols-xl-4 courses-luxe__selector-grid">
      {categories.map((category, index) => {
        const isActive = category.id === activeId;
        const preview =
          category.description.length > 120
            ? `${category.description.substring(0, 120)}...`
            : category.description;
        const animationStyle: CSSProperties = {
          animationDelay: `${index * 0.08}s`,
        };

        return (
          <div className="col" key={category.id}>
            <button
              type="button"
              className={`courses-luxe__option ${isActive ? "is-active" : ""}`}
              onClick={() => onSelect(category.id)}
              aria-pressed={isActive}
              data-animate="fade-up"
              style={animationStyle}
            >
              <span className="courses-luxe__option-eyebrow">
                {category.tagline}
              </span>
              <span className="courses-luxe__option-title">
                {category.name}
              </span>
              <span className="courses-luxe__option-copy">{preview}</span>
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

const slugifyProgram = (value: string): string =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const CategoryDetail = ({ category }: CategoryDetailProps) => {
  const [programQuery, setProgramQuery] = useState("");
  const [highlightedProgram, setHighlightedProgram] = useState<string | null>(null);
  const searchId = `program-search-${category.id}`;
  const resultsId = `program-search-results-${category.id}`;

  const programEntries = useMemo(
    () =>
      category.programs.map((program, index) => ({
        title: program,
        index,
        slug: `${category.id}-${slugifyProgram(program)}`,
      })),
    [category.id, category.programs]
  );

  const hasQuery = programQuery.trim().length > 0;

  const searchResults = useMemo(() => {
    const normalized = programQuery.trim().toLowerCase();
    if (!normalized) return [];

    return programEntries.filter((entry) =>
      entry.title.toLowerCase().includes(normalized)
    );
  }, [programEntries, programQuery]);

  useEffect(() => {
    setProgramQuery("");
    setHighlightedProgram(null);
  }, [category.id]);

  useEffect(() => {
    if (!highlightedProgram) {
      return undefined;
    }

    const timeout = window.setTimeout(() => setHighlightedProgram(null), 1600);

    return () => window.clearTimeout(timeout);
  }, [highlightedProgram]);

  const handleResultSelect = (slug: string) => {
    const target = document.getElementById(`program-${slug}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setHighlightedProgram(slug);
  };

  return (
    <section
      id={`category-${category.id}`}
      className="courses-luxe__detail mt-5"
      data-animate="fade-up"
    >
      <div className="courses-luxe__detail-shell">
        <div className="courses-luxe__detail-header">
          <div className="courses-luxe__detail-summary">
            <span className="courses-luxe__detail-tag">{category.tagline}</span>
            <h2 className="courses-luxe__detail-title">{category.name}</h2>
            <p className="courses-luxe__detail-copy">{category.description}</p>
          </div>
          <div className="courses-luxe__meta">
            {category.meta.map((item, index) => (
              <article
                key={item.label}
                className="courses-luxe__meta-card"
                data-animate="fade-up"
                style={{ animationDelay: `${index * 0.07}s` }}
              >
                <span className="courses-luxe__meta-label">{item.label}</span>
                <span className="courses-luxe__meta-value">{item.value}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12">
            <div className="row g-3 g-lg-4 row-cols-1 row-cols-sm-2">
              {category.highlights.map((highlight, index) => (
                <div key={highlight.title} className="col">
                  <article
                    className="courses-luxe__highlight"
                    data-animate="fade-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <span className="courses-luxe__highlight-icon">
                      <i className={`bi ${highlight.icon}`} aria-hidden="true"></i>
                    </span>
                    <div className="courses-luxe__highlight-content">
                      <span className="courses-luxe__highlight-title">
                        {highlight.title}
                      </span>
                      <p className="courses-luxe__highlight-copy">
                        {highlight.description}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12">
            <div className="courses-luxe__programs">
              <div className="courses-luxe__programs-head">
                <h3 className="courses-luxe__programs-title">
                  Programmes in this pathway
                </h3>
                <div className="courses-luxe__search-shell">
                  <label className="courses-luxe__search" htmlFor={searchId}>
                    <span className="courses-luxe__search-icon" aria-hidden="true">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      id={searchId}
                      type="search"
                      className="courses-luxe__search-input"
                      placeholder="Search for a programme"
                      value={programQuery}
                      onChange={(event) => setProgramQuery(event.target.value)}
                      aria-controls={resultsId}
                    />
                  </label>
                  <div
                    className={`courses-luxe__search-results ${
                      hasQuery ? "is-visible" : ""
                    }`}
                    role="listbox"
                    aria-label="Search results"
                    id={resultsId}
                  >
                    {hasQuery ? (
                      searchResults.length > 0 ? (
                        searchResults.map((entry) => (
                          <button
                            type="button"
                            key={entry.slug}
                            className="courses-luxe__search-option"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => handleResultSelect(entry.slug)}
                          >
                            <span className="courses-luxe__search-option-index">
                              {String(entry.index + 1).padStart(2, "0")}
                            </span>
                            <span className="courses-luxe__search-option-title">
                              {entry.title}
                            </span>
                          </button>
                        ))
                      ) : (
                        <p className="courses-luxe__search-empty">
                          No programmes match your search just yet.
                        </p>
                      )
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="row g-3 g-lg-4 row-cols-1 row-cols-md-2">
                {programEntries.map((entry) => (
                  <div key={entry.slug} className="col">
                    <article
                      id={`program-${entry.slug}`}
                      className={`courses-luxe__program ${
                        highlightedProgram === entry.slug ? "is-highlighted" : ""
                      }`}
                      data-animate="fade-up"
                      style={{ animationDelay: `${entry.index * 0.06}s` }}
                    >
                      <span className="courses-luxe__program-index">
                        {String(entry.index + 1).padStart(2, "0")}
                      </span>
                      <div className="courses-luxe__program-content">
                        <span className="courses-luxe__program-icon" aria-hidden="true">
                          <i className="bi bi-check2-circle"></i>
                        </span>
                        <h3 className="courses-luxe__program-title">{entry.title}</h3>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoursesPage = (): JSX.Element => {
  const location = useLocation();

  const getCategoryIdFromHash = useCallback((hash: string): string | undefined => {
    if (!hash) return undefined;
    const normalized = normalizeCategoryKey(hash.replace(/^#/, ""));
    return categorySlugMap[normalized];
  }, []);

  const [activeCategoryId, setActiveCategoryId] = useState(() => {
    return getCategoryIdFromHash(location.hash) ?? courseCategories[0].id;
  });

  useEffect(() => {
    const targetId = getCategoryIdFromHash(location.hash);
    if (!targetId) {
      return;
    }

    setActiveCategoryId((current) =>
      current === targetId ? current : targetId
    );

    requestAnimationFrame(() => {
      const targetElement =
        document.getElementById(`category-${targetId}`) ??
        document.getElementById("courses");
      targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [getCategoryIdFromHash, location.hash]);

  const activeCategory = useMemo(
    () =>
      courseCategories.find((category) => category.id === activeCategoryId) ??
      courseCategories[0],
    [activeCategoryId]
  );

  return (
    <section className="courses-luxe" id="courses">
      <div className="container courses-luxe__container">
        <header className="row g-5 align-items-center courses-luxe__hero">
          <div className="col-lg-5 order-lg-2 d-flex justify-content-center">
            <div className="courses-luxe__hero-visual" data-animate="fade-up">
              <img
                src={mainImage}
                alt={`${activeCategory.name} illustration`}
                className="courses-luxe__hero-image"
              />
            </div>
          </div>
          <div className="col-lg-7 order-lg-1">
            <div className="courses-luxe__hero-copy" data-animate="fade-up">
              <span className="courses-luxe__hero-eyebrow">Our courses</span>
              <h1 className="courses-luxe__hero-title">
                Choose your perfect study path
              </h1>
              <p className="courses-luxe__hero-lead">
                At MHS Global Associates we match each learner with a route that
                fits their goals, from stepping stone foundation pathways to
                focused postgraduate masters and agile short courses. Explore the
                options below and find the programme that supports your ambitions.
              </p>
            </div>
          </div>
        </header>

        <div className="courses-luxe__intro" data-animate="fade-up">
          <span className="courses-luxe__intro-pill">Explore pathways</span>
          <p className="courses-luxe__intro-copy">
            Discover curated programmes tailored to your academic journey. Select a
            pathway to reveal key highlights, support, and a full list of degrees.
          </p>
        </div>

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
