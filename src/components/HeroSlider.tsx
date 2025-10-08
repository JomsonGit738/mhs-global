import { useMemo, useState } from "react";
import type { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import heroImage1 from "../assets/images/hero-slider-images/1.png";
import heroImage2 from "../assets/images/hero-slider-images/2.png";
import heroImage3 from "../assets/images/hero-slider-images/3.png";
import heroImage4 from "../assets/images/hero-slider-images/4.png";

type HeroSlide = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: "undergraduate",
    title: "Undergraduate Courses",
    subtitle: "Are you ready for study?",
    description: "Thousands of Courses to choose.",
    image: heroImage1,
    imageAlt: "Undergraduate student studying in a library",
  },
  {
    id: "postgraduate",
    title: "Post Graduate Courses",
    subtitle: "Wanted to achive higher Degree?",
    description: "Thousands of Courses to choose.",
    image: heroImage2,
    imageAlt: "Postgraduate students celebrating together",
  },
  {
    id: "apply",
    title: "Apply",
    subtitle: "Application Process is easy",
    description: "Contact our customer service for more details.",
    image: heroImage3,
    imageAlt: "Applicant reviewing documents on a desk",
  },
  {
    id: "about",
    title: "About Us",
    subtitle: "MHS Global Associates is a modern organization",
    description:
      "MHS Global Associates standards are high and educational excellence is a thoroughly understood norm for everyone at MHS Global Associates",
    image: heroImage4,
    imageAlt: "MHS Global Associates team collaborating",
  },
];

const SLIDE_INTERVAL = 6000;

const HeroSlider = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const autoSlide = useMemo(
    () => (slider: KeenSliderInstance) => {
      let timeout: ReturnType<typeof setTimeout> | undefined;

      const clearNextTimeout = () => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = undefined;
        }
      };

      const nextTimeout = () => {
        clearNextTimeout();
        timeout = setTimeout(() => {
          slider.next();
        }, SLIDE_INTERVAL);
      };

      slider.on("created", nextTimeout);
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
      slider.on("destroyed", clearNextTimeout);
    },
    []
  );

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      drag: true,
      slides: { perView: 1, spacing: 0 },
      created: (instance) => {
        setCurrentSlide(instance.track.details.rel);
      },
      slideChanged: (instance) => {
        setCurrentSlide(instance.track.details.rel);
      },
    },
    [autoSlide]
  );

  return (
    <section className="hero-section overflow-hidden">
      <div className="hero-slider-container position-relative">
        <div ref={sliderRef} className="keen-slider" aria-live="polite">
          {heroSlides.map((slide) => (
            <div className="keen-slider__slide" key={slide.id}>
              <div className="hero-slide row g-0 align-items-stretch">
                <div className="col-lg-6 d-flex align-items-center">
                  <div className="hero-copy w-100">
                    <h2 className="h1 fw-bold text-primary mb-3">
                      {slide.title}
                    </h2>
                    <h1 className="h1 text-dark fw-bold mb-3">
                      {slide.subtitle}
                    </h1>
                    <p className="h3 text-secondary mb-0">
                      {slide.description}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 hero-media-col">
                  <div className="hero-visual">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-controls">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => slider.current?.moveToIdx(index)}
              className={`hero-control-dot ${
                currentSlide === index ? "is-active" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? "true" : undefined}
            >
              <span className="visually-hidden">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
