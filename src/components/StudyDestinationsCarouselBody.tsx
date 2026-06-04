import { useState } from "react";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { studyDestinations } from "../data/studyDestinations";

const StudyDestinationsCarouselBody = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    rubberband: false,
    slides: { perView: 1.08, spacing: 20 },
    breakpoints: {
      "(min-width: 576px)": {
        slides: { perView: 1.35, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2.1, spacing: 24 },
      },
      "(min-width: 992px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 4, spacing: 24 },
      },
    },
    created: () => setLoaded(true),
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <>
      <div
        className="study-destinations-carousel__controls"
        aria-label="Destination carousel controls"
      >
        <button
          type="button"
          className="study-destinations-carousel__control"
          onClick={() => instanceRef.current?.prev()}
          aria-label="Previous destination"
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          type="button"
          className="study-destinations-carousel__control"
          onClick={() => instanceRef.current?.next()}
          aria-label="Next destination"
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      <div ref={sliderRef} className="keen-slider study-destinations-slider">
        {studyDestinations.map((destination) => (
          <div className="keen-slider__slide" key={destination.id}>
            <article className="destination-card h-100">
              {(() => {
                const intakeFact = destination.cardFacts.find(
                  (fact) => fact.label === "Intakes"
                );

                return (
                  <Link to={destination.href} className="destination-card__link">
                    <div className="destination-card__media">
                      <img
                        src={destination.image}
                        alt={destination.imageAlt}
                        className="destination-card__image"
                        loading="eager"
                        decoding="async"
                        width={1600}
                        height={900}
                        sizes="(max-width: 575px) 92vw, (max-width: 767px) 70vw, (max-width: 991px) 50vw, (max-width: 1199px) 34vw, 25vw"
                      />
                    </div>
                    <div className="destination-card__body">
                      <span className="destination-card__eyebrow">
                        {destination.cardEyebrow}
                      </span>
                      <h3 className="destination-card__title">
                        {destination.name}
                      </h3>
                      <p className="destination-card__summary">
                        {destination.cardSummary}
                      </p>
                      {intakeFact ? (
                        <div className="destination-card__intake">
                          <span className="destination-card__fact-label">
                            {intakeFact.label}
                          </span>
                          <span className="destination-card__fact-value">
                            {intakeFact.value}
                          </span>
                        </div>
                      ) : null}
                      <span className="destination-card__cta">
                        View full details
                        <i className="bi bi-arrow-up-right ms-2"></i>
                      </span>
                    </div>
                  </Link>
                );
              })()}
            </article>
          </div>
        ))}
      </div>

      {loaded ? (
        <div className="study-destinations-carousel__dots" role="tablist">
          {studyDestinations.map((destination, index) => (
            <button
              key={`${destination.id}-dot`}
              type="button"
              className={`study-destinations-carousel__dot ${
                currentSlide === index ? "is-active" : ""
              }`}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              aria-label={`Go to ${destination.name}`}
              aria-selected={currentSlide === index}
              role="tab"
            ></button>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default StudyDestinationsCarouselBody;
