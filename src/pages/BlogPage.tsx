const blogPreviewCards = [
  {
    title: "Application planning and intake advice",
    copy:
      "Practical guidance on deadlines, document preparation, and choosing the right entry point for your course.",
  },
  {
    title: "Scholarship and funding guidance",
    copy:
      "Insights on tuition planning, scholarship applications, and building a stronger financial preparation strategy.",
  },
  {
    title: "Student life and destination updates",
    copy:
      "Useful updates on study destinations, post-study pathways, and what students should expect before departure.",
  },
];

const BlogPage = (): JSX.Element => {
  return (
    <section className="info-page-shell">
      <div className="container info-page-shell__container">
        <header className="info-page-shell__hero">
          <span className="info-page-shell__eyebrow">Blog</span>
          <h1 className="info-page-shell__title">Blog and Insights</h1>
          <p className="info-page-shell__lead">
            We are preparing a dedicated blog area for admissions advice,
            destination updates, scholarship guidance, and practical student
            planning content.
          </p>
        </header>
        <div className="row g-4">
          {blogPreviewCards.map((card) => (
            <div key={card.title} className="col-md-4">
              <article className="info-page-shell__card h-100">
                <h2 className="info-page-shell__card-title">{card.title}</h2>
                <p className="info-page-shell__card-copy">{card.copy}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
