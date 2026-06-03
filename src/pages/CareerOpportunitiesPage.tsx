const careerTracks = [
  "Part-time work guidance while studying",
  "Post-study work pathway planning",
  "CV and interview preparation support",
  "Career-oriented course and destination advice",
];

const CareerOpportunitiesPage = (): JSX.Element => {
  return (
    <section className="info-page-shell">
      <div className="container info-page-shell__container">
        <header className="info-page-shell__hero">
          <span className="info-page-shell__eyebrow">Career Opportunities</span>
          <h1 className="info-page-shell__title">Career Opportunities</h1>
          <p className="info-page-shell__lead">
            We guide students toward programmes and destinations that support
            real employability outcomes, practical experience, and stronger
            long-term career planning.
          </p>
        </header>
        <div className="info-page-shell__card">
          <h2 className="info-page-shell__card-title">
            What this section will cover
          </h2>
          <ul className="info-page-shell__list">
            {careerTracks.map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunitiesPage;
