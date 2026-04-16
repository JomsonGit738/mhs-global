import { Navigate, Link, useParams } from "react-router-dom";

import { getStudyDestination } from "../data/studyDestinations";

const StudyDestinationPage = (): JSX.Element => {
  const { destinationId } = useParams<{ destinationId: string }>();
  const destination = destinationId
    ? getStudyDestination(destinationId)
    : undefined;

  if (!destination) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="destination-page">
      <div className="container destination-page__container">
        <div className="destination-page__crumbs">
          <Link to="/" className="destination-page__crumb-link">
            Home
          </Link>
          <span className="destination-page__crumb-separator">/</span>
          <Link
            to={{ pathname: "/", hash: "#study-destinations" }}
            className="destination-page__crumb-link"
          >
            Study Destinations
          </Link>
          <span className="destination-page__crumb-separator">/</span>
          <span className="destination-page__crumb-current">{destination.name}</span>
        </div>

        <header className="destination-page__hero">
          <div className="destination-page__hero-copy">
            <span className="destination-page__eyebrow">
              Global study destination guide
            </span>
            <h1 className="destination-page__title">{destination.name}</h1>
            <p className="destination-page__overview">{destination.overview}</p>
            <div className="destination-page__actions">
              <Link
                className="destination-page__primary-action"
                to={{ pathname: "/", hash: "#contact" }}
              >
                Speak with an adviser
              </Link>
              <Link
                className="destination-page__secondary-action"
                to={{ pathname: "/", hash: "#study-destinations" }}
              >
                Compare other destinations
              </Link>
            </div>
          </div>
          <div className="destination-page__hero-media">
            <img
              src={destination.image}
              alt={destination.imageAlt}
              className="destination-page__hero-image"
            />
          </div>
        </header>

        <section className="destination-page__panel">
          <div className="destination-page__panel-head">
            <span className="destination-page__panel-tag">Overview</span>
            <h2 className="destination-page__panel-title">Key Facts</h2>
          </div>
          <div className="destination-page__facts">
            {destination.keyFacts.map((fact) => (
              <article
                key={`${destination.id}-${fact.label}`}
                className="destination-page__fact-card"
              >
                <span className="destination-page__fact-label">{fact.label}</span>
                <p className="destination-page__fact-value">{fact.value}</p>
              </article>
            ))}
          </div>
        </section>

        <nav
          className="destination-page__section-nav"
          aria-label={`${destination.name} section headings`}
        >
          {destination.sections.map((section) => (
            <a
              key={`${destination.id}-${section.id}`}
              href={`#${section.id}`}
              className="destination-page__section-link"
            >
              {section.title}
            </a>
          ))}
        </nav>

        <div className="destination-page__sections">
          {destination.sections.map((section) => (
            <article
              key={`${destination.id}-${section.id}`}
              id={section.id}
              className="destination-page__section"
            >
              <div className="destination-page__section-head">
                <span className="destination-page__section-kicker">
                  {destination.name}
                </span>
                <h2 className="destination-page__section-title">
                  {section.title}
                </h2>
              </div>
              {section.intro ? (
                <p className="destination-page__section-intro">{section.intro}</p>
              ) : null}
              <ul className="destination-page__bullet-list">
                {section.bullets.map((bullet) => (
                  <li
                    key={`${destination.id}-${section.id}-${bullet}`}
                    className="destination-page__bullet-item"
                  >
                    <i
                      className="bi bi-check-circle-fill destination-page__bullet-icon"
                      aria-hidden="true"
                    ></i>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinationPage;
