import StudyDestinationsCarouselBody from "./StudyDestinationsCarouselBody";

const StudyDestinationsCarousel = (): JSX.Element => {
  return (
    <section
      className="study-destinations-carousel bg-light pb-5"
      id="study-destinations"
      aria-label="Study destinations"
    >
      <div className="study-destinations-carousel__shell">
        <div className="study-destinations-carousel__header">
          <div>
            <span className="study-destinations-carousel__eyebrow">
              Study destinations
            </span>
            <h2 className="study-destinations-carousel__title">
              Compare popular destinations before you apply
            </h2>
          </div>
        </div>
        <StudyDestinationsCarouselBody />
      </div>
    </section>
  );
};

export default StudyDestinationsCarousel;
