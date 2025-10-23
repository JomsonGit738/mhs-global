import { useMemo } from "react";
import { CategoryDetail, courseCategories } from "./coursesShared";
import foundationSvg from "../assets/svg/1.svg";

const FoundationProgrammesPage = (): JSX.Element => {
  const category = useMemo(
    () => courseCategories.find((c) => c.id === "foundation") ?? courseCategories[0],
    []
  );

  return (
    <section className="courses-luxe" id="courses">
      <div className="container courses-luxe__container">
        <header className="row g-5 align-items-center courses-luxe__hero">
          <div className="col-lg-5 order-lg-2 d-flex justify-content-center">
            <div className="courses-luxe__hero-visual" data-animate="fade-up">
              <img src={foundationSvg} alt={`${category.name} illustration`} className="courses-luxe__hero-image" />
            </div>
          </div>
          <div className="col-lg-7 order-lg-1">
            <div className="courses-luxe__hero-copy" data-animate="fade-up">
              <span className="courses-luxe__hero-eyebrow">Our courses</span>
              <h1 className="courses-luxe__hero-title">{category.name}</h1>
              <p className="courses-luxe__hero-lead">{category.description}</p>
            </div>
          </div>
        </header>

        <div className="courses-luxe__intro" data-animate="fade-up">
          <span className="courses-luxe__intro-pill">Programme highlights</span>
          <p className="courses-luxe__intro-copy">
            Explore key information and programme lists for {category.name.toLowerCase()}.
          </p>
        </div>

        <CategoryDetail category={category} />
      </div>
    </section>
  );
};

export default FoundationProgrammesPage;
